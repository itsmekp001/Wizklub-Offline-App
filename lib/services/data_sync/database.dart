import 'dart:io' show Directory;
import 'package:path/path.dart' show join;
import 'package:sqflite/sqflite.dart';
import 'package:path_provider/path_provider.dart'
    show getApplicationDocumentsDirectory;

class DatabaseHelper {
  late Database db;
  static const _databaseName = "wizklub.db";
  static const _databaseVersion = 1;
  static const table = 'feedbackdata';
  static const table1 = 'lastupdate';
  static const table2 = 'analytics';
  static const table3 = 'location_data';
  static const feedbackTableName = table;

// Feedback Table Fields

  static const columnId = 'id';
  static const columnkidName = 'name';
  static const columnGrade = 'grade';
  static const columnLocation = 'location';
  static const columnLike = 'like'; // bool
  static const columnJoin = 'admission'; // bool
  static const columnComment = 'comments';
  // ignore: constant_identifier_names
  static const columnentery_Time = 'last_entery_time';
  // ignore: constant_identifier_names
  static const columnLast_Update_Time = 'last_update_time';

  // Last Sync Table Fiedls
  // ignore: constant_identifier_names
  static const table_name = 'table_name';
  // ignore: constant_identifier_names
  static const columnlast_synced_time = 'last_synced_time';

// Analytics Table Fields
  static const columnName = 'name';
  static const columActivity = 'activity';
  static const columnDateTime = 'time';
  static const columnLastSyncTime = "last_synced_time ";

// DropDown List table
  static const locationData = "location";

  // make this a singleton class
  DatabaseHelper._privateConstructor();
  static final DatabaseHelper instance = DatabaseHelper._privateConstructor();

  // only have a single app-wide reference to the database
  static Database? _database;
  Future<Database> get database async {
    if (_database != null) return _database!;
    // lazily instantiate the db the first time it is accessed
    _database = await _initDatabase();
    return _database!;
  }

  // this opens the database (and creates it if it doesn't exist)
  _initDatabase() async {
    Directory documentsDirectory = await getApplicationDocumentsDirectory();
    String path = join(documentsDirectory.path, _databaseName);
    return await openDatabase(path,
        version: _databaseVersion, onCreate: _onCreate);
  }

  // SQL code to create the database table
  Future _onCreate(Database db, int version) async {
    await db.execute('''
          CREATE TABLE $table (
            $columnId INTEGER PRIMARY KEY,
            $columnkidName  TEXT NOT NULL,
            $columnGrade  TEXT NOT NULL,
            $columnLocation  TEXT NOT NULL,
            $columnLike  TEXT NOT NULL,
            $columnJoin TEXT NOT NULL,
            $columnComment TEXT NOT NULL,
            $columnentery_Time TEXT NOT NULL,
            $columnLast_Update_Time TEXT NOT NULL
          )
          ''');

    await db.execute('''
          CREATE TABLE $table1 (
            $columnId INTEGER PRIMARY KEY,
            $table_name TEXT NOT NULL,
            $columnlast_synced_time  TEXT NOT NULL
          )
          ''');

    await db.execute('''
          CREATE TABLE $table2 (
            $columnId INTEGER PRIMARY KEY,
            $columnName TEXT NOT NULL,
            $columActivity TEXT NOT NULL,
            $columnDateTime TEXT NOT NULL,
            $columnLastSyncTime  TEXT NOT NULL
          )
          ''');
    await db.execute('''
          CREATE TABLE $table3 (
            $columnId INTEGER PRIMARY KEY,
            $locationData TEXT NOT NULL
          )
          ''');
  }

  Future<int> insert(Map<String, dynamic> row) async {
    Database db = await instance.database;
    return await db.insert(table2, row);
  }

  Future<List<Map<String, dynamic>>> queryAllRows() async {
    Database db = await instance.database;
    return await db.query(table);
  }
}
