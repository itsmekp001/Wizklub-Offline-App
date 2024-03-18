import 'dart:convert';
import 'package:blockly/services/data_sync/data_sync.dart' as data;
import 'package:http/http.dart' as http;
// ignore: library_prefixes
import 'apidata.dart' as WizApiUrl;
import 'package:shared_preferences/shared_preferences.dart';

data.FeedbackData feedbackData = data.FeedbackData();
// ignore: prefer_typing_uninitialized_variables
var userToken;
// ignore: prefer_typing_uninitialized_variables
var status;

var url = WizApiUrl.BASE_URL;
// ignore: prefer_typing_uninitialized_variables
var platformToken;

class wizApi {
  // ignore: non_constant_identifier_names
  TokenValididy() async {
    SharedPreferences localStorage = await SharedPreferences.getInstance();

    String? usertoken = localStorage.getString('userToken');
    usertoken ??= await fetchUsertoken('flutter_admin');

    if (usertoken != null) {
      var headers = {'Wiz-Access-Token': usertoken};
      var request = http.Request(
          'POST', Uri.parse('$url/cognito/authorize/validate-token/'));
      request.body = '''''';
      request.headers.addAll(headers);
      http.StreamedResponse response = await request.send();

      var responseData = jsonDecode(await response.stream.bytesToString());

      var status = responseData["response"]["status"];
      if (status == false) {
        usertoken = await fetchUsertoken("flutter_admin");
      } else {
        userToken = localStorage.getString('userToken');

        feedbackData.checkNotUpdatedData();
      }
    }
  }

  fetchUsertoken(String userName) async {
    SharedPreferences localStorage = await SharedPreferences.getInstance();
    var headers = {
      'Wiz-Client-Token':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfa2V5IjoiR2dhUk53X0NUTXRnMkZuc0VSXzJJRm1hbk44UDZVbi1qMzVfRWE1VVkxaDl3NzZsdENGSUtRIiwiYXBwX25hbWUiOiJJbm1vYmlvdXMifQ.SIGB_u_Qf63iw4QFEkbTr1Jwp-CBjSCzjmkh_oDorlE',
      'Content-Type': 'application/json'
    };
    var request = http.Request(
        'POST', Uri.parse('$url/cognito/authorize/security-token/'));
    request.body = json.encode({"username": userName});
    request.headers.addAll(headers);
    http.StreamedResponse response = await request.send();

    var responseData = jsonDecode(await response.stream.bytesToString());
    String userTokens = responseData["response"]["token"];
    userToken = userTokens;
    localStorage.setString('userToken', userTokens);
    feedbackData.checkNotUpdatedData();
    return userTokens;
  }
}
