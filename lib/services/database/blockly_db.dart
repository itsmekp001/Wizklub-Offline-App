import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';

class DBOperations extends GetxController {
  late Database _database;
  Future<void> initDatabase() async {
    print("####### initDatabase ########");
    _database = await openDatabase(
      join(await getDatabasesPath(), 'wizklub_blockly.db'),
      onCreate: (db, version) {
        return db.execute('''
          CREATE TABLE IF NOT EXISTS blockly_workspace(
            id INTEGER PRIMARY KEY,
            workspace_name TEXT NOT NULL,
            blocks TEXT NOT NULL
          )
        ''');
      },
      version: 1,
    );
  }

  Future<void> insertData(Workspace task) async {
    try {
      // Attempt to insert the data
      int result = await _database.insert(
        'blockly_workspace',
        task.toMap(),
        conflictAlgorithm: ConflictAlgorithm.replace,
      );

      if (result != -1) {
        // The insertion was successful
        Get.snackbar("Success", "Workspace saved successfully",
            icon: const Icon(Icons.done_rounded, color: Colors.white),
            colorText: Colors.white,
            backgroundColor: Colors.green,
            margin: const EdgeInsets.only(bottom: 0.0),
            snackPosition: SnackPosition.BOTTOM,
            duration: const Duration(seconds: 5));
      } else {
        Get.snackbar("Error", "Workspace saving Failed",
            icon: const Icon(Icons.error, color: Colors.white),
            colorText: Colors.white,
            backgroundColor: const Color.fromARGB(255, 236, 18, 18),
            margin: const EdgeInsets.only(bottom: 0.0),
            snackPosition: SnackPosition.BOTTOM,
            duration: const Duration(seconds: 5));
      }
    } catch (e) {
      print("The error $e");
      // Handle any exceptions that might occur during the insertion
      Get.snackbar("Error", "Workspace saving Failed $e",
          icon: const Icon(Icons.error, color: Colors.white),
          colorText: Colors.white,
          backgroundColor: const Color.fromARGB(255, 236, 18, 18),
          margin: const EdgeInsets.only(bottom: 0.0),
          snackPosition: SnackPosition.BOTTOM,
          duration: const Duration(seconds: 5));
    }
  }

  Future<List<Workspace>> getData() async {
    final List<Map<String, dynamic>> maps =
        await _database.query('blockly_workspace');

    return List.generate(maps.length, (i) {
      return Workspace(
        id: maps[i]['id'],
        workspace_name: maps[i]['workspace_name'],
        blocks: maps[i]['blocks'],
      );
    });
  }

  Future<void> deleteData(int id) async {
    try {
      await _database.delete(
        'blockly_workspace',
        where: 'id = ?',
        whereArgs: [id],
      );
      Get.snackbar("Success", "Task removed from list",
          icon: const Icon(Icons.done_rounded, color: Colors.white),
          colorText: Colors.white,
          backgroundColor: Colors.green,
          margin: const EdgeInsets.only(bottom: 0.0),
          snackPosition: SnackPosition.BOTTOM,
          duration: const Duration(seconds: 5));
    } catch (e) {
      Get.snackbar("Error", "Failed to remove task. $e",
          icon: const Icon(Icons.error, color: Colors.white),
          colorText: Colors.white,
          backgroundColor: const Color.fromARGB(255, 236, 18, 18),
          margin: const EdgeInsets.only(bottom: 0.0),
          snackPosition: SnackPosition.BOTTOM,
          duration: const Duration(seconds: 5));
    }
  }
}

class Workspace {
  final int? id;
  final String workspace_name;
  final String blocks;

  Workspace({
    this.id,
    required this.workspace_name,
    required this.blocks,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'workspace_name': workspace_name,
      'blocks': blocks,
    };
  }
}
