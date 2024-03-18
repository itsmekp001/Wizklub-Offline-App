import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../../services/api/api.dart';
import '../../../../services/data_sync/database.dart';
import '../../../../services/database/local_db.dart';
import '../../../../utils/widgets/Messages/Error.dart';
import '../../wiz_blockly/controller/blockly_controller.dart';

///Color picker controller class.
///
///This class contain all color picker related api function
///and color picker related function
class ColorController {
  int? r, g, b;
  Color currentColor = Colors.cyan;

  final dbHelper = DatabaseHelper.instance;
  LocalDatabase localdatabase = LocalDatabase();
  ApiProvider api = ApiProvider();

  /// This function is used for landscape mode color controller
  ///
  /// -> while selecting the color Api  will post to wizgear and
  ///    selected color values will store in local database
  ///

  void landscapeColorPicker(Color color) async {
    wizgearnetwork.checkWifiStaus();
    currentColor = color;
    r = currentColor.red;
    g = currentColor.green;
    b = currentColor.blue;
    currentColor.alpha;
    SharedPreferences localStorage = await SharedPreferences.getInstance();

    localdatabase.store_activity(
        "Color picker: Selected color(red:$r, green:$g, blue:$b)");
    var wifistatus = localStorage.getString("wifistate");
    if (wifistatus == 'false') {
      ErrorMessage.msg("Please connect Wizgear network");
    } else {
      api.getapiresponse("smartlight", json.encode({"r": r, "g": g, "b": b}));
    }
  }

  /// Get current colors in portrait mode
  ///
  ///->using this function updating r,g,b values
  void getColor(Color color) {
    currentColor = color;
    r = currentColor.red;
    g = currentColor.green;
    b = currentColor.blue;
  }

  /// This function is used for portrait mode color controller
  ///
  /// -> Selected color will post to wizgear through api,
  ///    selected color values will store in local database

  void portraitColorPicker(int red, int green, int blue, context) async {
    SharedPreferences localStorage = await SharedPreferences.getInstance();
    wizgearnetwork.checkWifiStaus();
    localdatabase.store_activity(
        "Color picker: Selected color(red:$red, green:$green, blue:$blue)");
    var wifistatus = localStorage.getString("wifistate");
    if (wifistatus == "false") {
      ErrorMessage.msg("Please connect Wizgear network");
    } else {
      api.getapiresponse(
          "smartlight", json.encode({"r": red, "g": green, "b": blue}));
    }
  }
}
