import 'dart:convert';
import 'package:flutter_aws_s3_client/flutter_aws_s3_client.dart';
import 'package:blockly/services/data_sync/database.dart';
import 'package:sqflite/sqlite_api.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:flutter/material.dart';

String dropdownTable = DatabaseHelper.table3;
String? listOfLocation;

///Fetch the School list from the s3.

final List<String> schools = [];
bool status = true;

///Load the School list from the local database.
loadSchoolList() async {
  Database db = await DatabaseHelper.instance.database;
  List<Map<String, Object?>> initialActivityData =
      await db.rawQuery('SELECT * FROM $dropdownTable');

  for (int j = 0; j <= initialActivityData.length - 1; j++) {
    // List data = initialActivityData[j]['location'];
    listOfLocation = initialActivityData[j]['location'] as String?;

    schools.insert(j, listOfLocation!);
  }

  status = false;
}

///To show the message.
Future<bool?> toastFunction() {
  return Fluttertoast.showToast(
      msg: "Locations added.",
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      timeInSecForIosWeb: 3,
      backgroundColor: Colors.blue,
      textColor: Colors.white,
      fontSize: 13.0);
}
