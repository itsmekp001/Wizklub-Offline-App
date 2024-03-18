import 'package:flutter/material.dart';
import 'package:get/get.dart';

enum ErrorMsg { message }

class ErrorMessage {
  static Future<ErrorMsg?> msg(String message) async {
    Get.snackbar(
      "Error",
      message,
      icon: const Icon(Icons.error, color: Colors.white),
      snackPosition: SnackPosition.BOTTOM,
      colorText: Colors.white,
      backgroundColor: const Color.fromARGB(255, 218, 66, 66),
    );

    return null;
  }
}
