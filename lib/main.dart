import 'package:blockly/pages/home_page/home.dart';
import 'package:blockly/pages/splash_page/splashscreen.dart';
import 'package:blockly/services/database/blockly_db.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:blockly/services/data_sync/school_list.dart';

bool _isSignedIn = false;
DBOperations _dbOperations = Get.put(DBOperations());
Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await _dbOperations.initDatabase();
  SharedPreferences localStorage = await SharedPreferences.getInstance();
  if (localStorage.getString('name') != null) {
    _isSignedIn = true;
  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    schools.clear();
    loadSchoolList();
    return GetMaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: _isSignedIn != false
            ? const HomeScreenWidget()
            : const SplashScreenWidget());
  }

  static of(BuildContext context) {}
}
