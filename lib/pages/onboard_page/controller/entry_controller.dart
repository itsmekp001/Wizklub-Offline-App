import 'dart:async';
import 'package:blockly/pages/home_page/home.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import '../../../utils/widgets/Messages/Error.dart';

class EntryController {
  // ignore: non_constant_identifier_names
  Timer? SyncTimer;
  TextEditingController nameController = TextEditingController();

  ///This function will dismiss the keyboard
  dismissKeyboard(BuildContext context) {
    FocusScope.of(context).requestFocus(FocusNode());
  }

  ///Store Username
  ///
  ///This function is used to store the username to local storage
  ///Once the name store to local storage it ll navigate to home page
  void storeUsername(context) async {
    String studentName = nameController.text;
    if (studentName == '') {
      ErrorMessage.msg("Please Enter your name");
    } else if (studentName.length < 2) {
      ErrorMessage.msg("Please Enter valid name");
    } else {
      SharedPreferences localStorage = await SharedPreferences.getInstance();
      localStorage.setString('name', studentName);
      SyncTimer!.cancel();
      Navigator.push(
        context,
        MaterialPageRoute(
          builder: (_) => const HomeScreenWidget(),
        ),
      );
    }
  }
}
