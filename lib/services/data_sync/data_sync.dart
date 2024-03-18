import 'dart:convert';
import 'dart:io';
import 'package:blockly/services/data_sync/school_list.dart';
import 'package:blockly/utils/widgets/messages/local_notification.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'database.dart';
import 'package:sqflite/sqflite.dart';
import 'package:http/http.dart' as http;
import 'package:blockly/services/data_sync/Token/api.dart' as token;

token.wizApi wizklubApi = token.wizApi();

class FeedbackData {
  String feedbackTable = DatabaseHelper.table;
  String syncTable = DatabaseHelper.table1;
  String analyticalTable = DatabaseHelper.table2;
  String lastSyncTime = DatabaseHelper.columnlast_synced_time;
  String columnkidName = DatabaseHelper.columnkidName;
  String columnGrade = DatabaseHelper.columnGrade;
  String columnLocation = DatabaseHelper.columnLocation;
  String columnLike = DatabaseHelper.columnLike;
  String columnJoin = DatabaseHelper.columnJoin;
  String columnComment = DatabaseHelper.columnComment;
  String columnenteryTime = DatabaseHelper.columnentery_Time;
  String kidName = DatabaseHelper.columnName;
  String activity = DatabaseHelper.columActivity;
  String duration = DatabaseHelper.columnDateTime;
  String? result;

  LocalNotificationService? service;

  var localfeedback = 0,
      localacitivity = 0,
      uploadedfeedback = 0,
      uploadedactivity = 0;

  bool notificationStatus = false;

  // ignore: non_constant_identifier_names
  String API_URL = "https://dev.wizklub.com/api/services/";

  ///Update the last sync time
  insert() async {
    Database db = await DatabaseHelper.instance.database;
    DateTime date = DateTime.now();
    String data1 = date.toString();
    Map<String, dynamic> row = {
      DatabaseHelper.table_name: DatabaseHelper.feedbackTableName,
      DatabaseHelper.columnlast_synced_time: data1,
    };
    await db.insert(DatabaseHelper.table1, row);
  }

  ///Update the last sync time to both tables
  updateLastSyncTime() async {
    String feedbackTable = DatabaseHelper.table;
    String activityTable = DatabaseHelper.table2;
    String timeColumn = DatabaseHelper.columnLast_Update_Time;
    String lastSyncTime = DatabaseHelper.columnLastSyncTime;
    DateTime date = DateTime.now();
    String data1 = date.toString();
    Database db = await DatabaseHelper.instance.database;
    await db.rawUpdate('''
    UPDATE $feedbackTable
    SET $timeColumn = ?
    ''', [data1]);
    await db.rawUpdate('''
    UPDATE $activityTable
    SET $lastSyncTime = ?
    ''', [data1]);
  }

  ///Internet is connected it will check for token validation.
  netWorkCheck() async {
    checkInternetConnection().then((value) {
      isConnected = value;
      if (isConnected == true) {
        // fetchSchoolList();
        wizklubApi.TokenValididy();
      }
    });
  }

  ///Upload the initial data from the device.
  checkNotUpdatedData() async {
    SharedPreferences localStorage = await SharedPreferences.getInstance();
    // ignore: non_constant_identifier_names
    String? Wiz_Access_Token = localStorage.getString('userToken');

    Database db = await DatabaseHelper.instance.database;
    List<Map<String, Object?>> lastSynctime =
        await db.rawQuery('SELECT * FROM $syncTable');
    List<Map<String, Object?>> notUpdatedData =
        await db.rawQuery('SELECT * FROM $feedbackTable');

    if (lastSynctime.isEmpty) {
      if (notUpdatedData.isNotEmpty) {
        Database db = await DatabaseHelper.instance.database;
// Sync Not Updated Feedback Data.
        List<Map<String, Object?>> initialActivityData =
            await db.rawQuery('SELECT * FROM $analyticalTable');
        localacitivity = initialActivityData.length;
        for (int i = 0; i <= initialActivityData.length - 1; i++) {
          // ignore: non_constant_identifier_names
          Object? UploadedKidName = initialActivityData[i]['name'];
          // ignore: non_constant_identifier_names
          Object? UploadedActivity = initialActivityData[i]['activity'];
          // ignore: non_constant_identifier_names
          Object? UploadedTime = initialActivityData[i]['time'];
          var headers = {
            'Wiz-Access-Token': "Bearer $Wiz_Access_Token",
            'Content-Type': 'application/json'
          };
          var request = http.Request(
              'POST', Uri.parse('$API_URL/create-offline-kid-activity/'));
          request.body = json.encode({
            "kid_name": UploadedKidName,
            "kid_activity": UploadedActivity,
            "entry_time": UploadedTime
          });
          request.headers.addAll(headers);
          http.StreamedResponse response = await request.send();

          jsonDecode(await response.stream.bytesToString());

          if (response.statusCode == 200) {
            var responseData =
                jsonDecode(await response.stream.bytesToString());
            var status = responseData["response"]["status"];

            if (status == true) {
              uploadedactivity++;
              insert();
              updateLastSyncTime();
            } else {}
          } else {}
        }
        List<Map<String, Object?>> initalData =
            await db.rawQuery('SELECT * FROM $feedbackTable');
        localfeedback = initalData.length;
        for (int i = 0; i <= initalData.length - 1; i++) {
          // ignore: non_constant_identifier_names
          Object? UploadedName = initalData[i]['name'];
          // ignore: non_constant_identifier_names
          Object? Uploadedgrade = initalData[i]['grade'];
          // ignore: non_constant_identifier_names
          Object? Uploadedlocation = initalData[i]['location'];
          // ignore: non_constant_identifier_names
          Object? Uploadedlike = initalData[i]['like'];
          // ignore: non_constant_identifier_names
          Object? Uploadedadmission = initalData[i]['admission'];
          // ignore: non_constant_identifier_names
          Object? Uploadedcomments = initalData[i]['comments'];
          // ignore: non_constant_identifier_names
          Object? UploadeddataentryTime = initalData[i]['last_entery_time'];
          var headers = {
            'Wiz-Access-Token': "Bearer $Wiz_Access_Token",
            'Content-Type': 'application/json'
          };
          var request = http.Request(
              'POST', Uri.parse('$API_URL/create-offline-app-feedback/'));
          request.body = json.encode({
            "kid_name": UploadedName,
            "grade": Uploadedgrade,
            "location": Uploadedlocation,
            "comments": Uploadedcomments,
            "entry_time": UploadeddataentryTime,
            "like_workshop": Uploadedlike,
            "like_to_join": Uploadedadmission
          });
          request.headers.addAll(headers);

          http.StreamedResponse response = await request.send();
          jsonDecode(await response.stream.bytesToString());

          if (response.statusCode == 200) {
            var responseData =
                jsonDecode(await response.stream.bytesToString());
            var status = responseData["response"]["status"];

            if (status == true) {
              uploadedfeedback++;
              insert();
              updateLastSyncTime();
            } else {}
          } else {}
        }
        if (localfeedback == uploadedfeedback && uploadedfeedback != 0) {
          service = LocalNotificationService();
          service!.intialize();
          notification();
        }
        uploadedactivity = 0;
        uploadedfeedback = 0;
      }
    } else if (lastSynctime.isNotEmpty || notUpdatedData.isNotEmpty) {
      uploadNotUpdatedData();
    }
  }

  ///Upload the not updated data from the device.
  uploadNotUpdatedData() async {
    SharedPreferences localStorage = await SharedPreferences.getInstance();
    String? wizAccessToken = localStorage.getString('userToken');
    Database db = await DatabaseHelper.instance.database;
    List<Map<String, Object?>> lastSynctime =
        await db.rawQuery('SELECT * FROM $syncTable');
    Object? lastSynctime1 =
        lastSynctime[lastSynctime.length - 1]['last_synced_time'];
    List<Map<String, Object?>> notUpdatedAnalytics = await db.rawQuery(
        'SELECT * FROM $analyticalTable WHERE $lastSyncTime > "$lastSynctime1"');
    localacitivity = notUpdatedAnalytics.length;
    if (notUpdatedAnalytics.isNotEmpty) {
      for (int i = 0; i <= notUpdatedAnalytics.length - 1; i++) {
        // ignore: non_constant_identifier_names
        Object? UploadedKidName = notUpdatedAnalytics[i]['name'];
        // ignore: non_constant_identifier_names
        Object? UploadedActivity = notUpdatedAnalytics[i]['activity'];
        // ignore: non_constant_identifier_names
        Object? UploadedTime = notUpdatedAnalytics[i]['time'];
        var headers = {
          'Wiz-Access-Token': "Bearer $wizAccessToken",
          'Content-Type': 'application/json'
        };
        var request = http.Request(
            'POST', Uri.parse('$API_URL/create-offline-kid-activity/'));
        request.body = json.encode({
          "kid_name": UploadedKidName,
          "kid_activity": UploadedActivity,
          "entry_time": UploadedTime,
        });
        request.headers.addAll(headers);
        http.StreamedResponse response = await request.send();
        jsonDecode(await response.stream.bytesToString());

        if (response.statusCode == 200) {
          var responseData = jsonDecode(await response.stream.bytesToString());
          var status = responseData["response"]["status"];

          if (status == true) {
            uploadedactivity++;
            insert();
            updateLastSyncTime();
          } else {}
        } else {}
      }
    }
    List<Map<String, Object?>> notUpdatedData = await db.rawQuery(
        'SELECT * FROM $feedbackTable WHERE $columnenteryTime > "$lastSynctime1"');
// -----------------------------------------------------------------
    if (notUpdatedData.isNotEmpty) {
      localfeedback = notUpdatedData.length;
      for (int i = 0; i <= notUpdatedData.length - 1; i++) {
        // ignore: non_constant_identifier_names
        Object? UploadedName = notUpdatedData[i]['name'];
        // ignore: non_constant_identifier_names
        Object? Uploadedgrade = notUpdatedData[i]['grade'];
        // ignore: non_constant_identifier_names
        Object? Uploadedlocation = notUpdatedData[i]['location'];
        // ignore: non_constant_identifier_names
        Object? Uploadedlike = notUpdatedData[i]['like'];
        // ignore: non_constant_identifier_names
        Object? Uploadedadmission = notUpdatedData[i]['admission'];
        // ignore: non_constant_identifier_names
        Object? Uploadedcomments = notUpdatedData[i]['comments'];
        // ignore: non_constant_identifier_names
        Object? UploadeddataentryTime = notUpdatedData[i]['last_entery_time'];
        var headers = {
          'Wiz-Access-Token': "Bearer $wizAccessToken",
          'Content-Type': 'application/json'
        };
        var request = http.Request(
            'POST', Uri.parse('$API_URL/create-offline-app-feedback/'));
        request.body = json.encode({
          "kid_name": UploadedName,
          "grade": Uploadedgrade,
          "location": Uploadedlocation,
          "comments": Uploadedcomments,
          "entry_time": UploadeddataentryTime,
          "like_workshop": Uploadedlike,
          "like_to_join": Uploadedadmission
        });
        request.headers.addAll(headers);
        http.StreamedResponse response = await request.send();
        jsonDecode(await response.stream.bytesToString());

        if (response.statusCode == 200) {
          var responseData = jsonDecode(await response.stream.bytesToString());
          var status = responseData["response"]["status"];

          if (status == true) {
            uploadedfeedback++;
            insert();
            updateLastSyncTime();
          } else {}
        } else {}
      }

      if (localfeedback == uploadedfeedback && uploadedfeedback != 0) {
        service = LocalNotificationService();
        service!.intialize();
        notification();
      }
      uploadedactivity = 0;
      uploadedfeedback = 0;
    }
  }

  bool isConnected = false;

  ///Check for the Internet connection.
  Future<bool> checkInternetConnection() async {
    try {
      final result = await InternetAddress.lookup('example.com');
      if (result.isNotEmpty && result[0].rawAddress.isNotEmpty) {
        return true;
      }
    } on SocketException catch (_) {
      return false;
    }
    return false;
  }

  ///To show the notification.
  notification() async {
    await service?.showNotification(
        id: 0,
        title: 'Sync Notification',
        body: '$uploadedfeedback records Uploaded to wizklub server !');
  }
}
