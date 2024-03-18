import 'package:shared_preferences/shared_preferences.dart';
import 'package:blockly/services/data_sync/database.dart';

class LocalDatabase {
  final dbHelper = DatabaseHelper.instance;
  // ignore: non_constant_identifier_names
  Future<void> store_activity(String activity) async {
    SharedPreferences localStorage = await SharedPreferences.getInstance();
    String datetime = DateTime.now().toString();
    String? name = localStorage.getString('name');
    Map<String, dynamic> row = {
      DatabaseHelper.columnName: name,
      DatabaseHelper.columActivity: activity,
      DatabaseHelper.columnDateTime: datetime,
      DatabaseHelper.columnlast_synced_time: datetime
    };
    await dbHelper.insert(row);
  }
}
