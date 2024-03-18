import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../../services/api/api.dart';
import '../../../../services/data_sync/database.dart';
import '../../../../services/wizgear_network/check_wifi.dart';
import '../../../../utils/widgets/Messages/error.dart';
import '../../wiz_colorpicker/controller/colorpicker_controller.dart';

class WizbotController {
  final dbHelper = DatabaseHelper.instance;
  ApiProvider api = ApiProvider();
  ColorController colorcontroller = ColorController();
  WizgearNetwork wizgearnetwork = WizgearNetwork();
  Future<void> roboMove(int s1, int s2, int d1, int d2, String action) async {
    wizgearnetwork.checkWifiStaus();
    SharedPreferences localStorage = await SharedPreferences.getInstance();
    var wifistatus = localStorage.getString("wifistate");
    if (wifistatus == "false") {
      ErrorMessage.msg("Please connect Wizgear network");
    } else {
      api.getapiresponse(
          "motor",
          json.encode({
            "speed1": s1,
            "speed2": s2,
            "direction1": d1,
            "direction2": d2,
            "action": action
          }));
      String datetime = DateTime.now().toString();
      Map<String, dynamic> row = {
        DatabaseHelper.columnName: localStorage.getString('name'),
        DatabaseHelper.columActivity: "wizbot moved",
        DatabaseHelper.columnDateTime: datetime,
        DatabaseHelper.columnlast_synced_time: datetime
      };
      await dbHelper.insert(row);
    }
  }
}
