import 'package:network_info_plus/network_info_plus.dart';
import 'package:shared_preferences/shared_preferences.dart';

// ignore: non_constant_identifier_names
final network_info = NetworkInfo();

/// This class is used to build the wizgear network related function
class WizgearNetwork {
  /// This function will check the device connected to wizgear network or not.
  ///
  /// ->if device connected to wizgear network wifistate will be true,else wifisate will be false
  void checkWifiStaus() async {
    SharedPreferences localStorage = await SharedPreferences.getInstance();
    // ignore: non_constant_identifier_names
    final get_ip = await network_info.getWifiGatewayIP();
    if (get_ip != '192.168.4.1') {
      localStorage.setString("wifistate", 'false');
    } else {
      localStorage.setString("wifistate", 'true');
    }
  }
}
