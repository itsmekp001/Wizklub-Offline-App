import 'package:blockly/services/database/blockly_db.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../../../services/database/local_db.dart';
import '../../../../services/wizgear_network/check_wifi.dart';
import '../../../../utils/widgets/Messages/Error.dart';

WizgearNetwork wizgearnetwork = WizgearNetwork();
LocalDatabase localdatabase = LocalDatabase();

///Blockly related function added inside this class
class BlocklyController extends GetxController {
  final DBOperations _dbOperations = Get.find();

  String? blocklyAnalatics;
  // ignore: prefer_typing_uninitialized_variables
  var webviewController;

  ///Blockly Activity
  ///
  ///
  /// This function is used for store the blockly related activity to local database

  void blocklyActivity() async {
    wizgearnetwork.checkWifiStaus();
    SharedPreferences localStorage = await SharedPreferences.getInstance();
    var wifistatus = localStorage.getString("wifistate");
    if (wifistatus == 'false') {
      ErrorMessage.msg("Please connect Wizgear network");
    } else {
      localdatabase.store_activity(blocklyAnalatics!);
    }
  }

  saveWorkspace(workspaceName, blocks) async {
    await _dbOperations.insertData(
      Workspace(
        workspace_name: workspaceName,
        blocks: blocks,
      ),
    );
  }
}
