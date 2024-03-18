import 'package:shared_preferences/shared_preferences.dart';
// ignore: library_prefixes
import 'api.dart' as myApi;

myApi.wizApi wizklubApi = myApi.wizApi();

// ignore: camel_case_types
class wizToken {
  String? userToken;
  getUserToken() async {
    SharedPreferences localStorage = await SharedPreferences.getInstance();
    // localStorage.setString('userToken', "qwertyuytrewertrewerh");
    String? usertoken = localStorage.getString('userToken');
    if (usertoken == null) {
      wizklubApi.fetchUsertoken('flutter_admin');
    } else {
      wizklubApi.TokenValididy();
    }

    String? getuserToken = localStorage.getString('userToken');
    userToken = getuserToken;
    if (userToken == null) {}

    return userToken;
  }
}
