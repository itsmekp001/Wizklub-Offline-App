import 'dart:convert';

import 'package:http/http.dart' as http;

class ApiProvider {
  final String _baseurl = "http://192.168.4.1/";

  //Get Api response
  Future<dynamic> getapiresponse(String url, body) async {
    var headers = {
      'Content-Type': 'application/json',
    };
    var request = http.Request('POST', Uri.parse(_baseurl + url));
    request.body = body;
    request.headers.addAll(headers);

    http.StreamedResponse response = await request.send();

    var jsonString = await response.stream.bytesToString();
    var responsedata = json.decode(jsonString);
    return responsedata;
  }
}
