import 'package:blockly/pages/onboard_page/view/onboard_page.dart';
import 'package:blockly/services/data_sync/database.dart';
import 'package:blockly/utils/widgets/messages/success.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:sqflite/sqflite.dart';
import '../../../utils/widgets/flutter_flow/flutter_flow_theme.dart';
import 'package:flutter/material.dart';
import 'package:blockly/services/data_sync/school_list.dart' as s3;
import 'package:webview_flutter_plus/webview_flutter_plus.dart';

class FeedbackWidget extends StatefulWidget {
  const FeedbackWidget({super.key});

  @override
  _FeedbackWidgetState createState() => _FeedbackWidgetState();
}

class _FeedbackWidgetState extends State<FeedbackWidget> {
  String? dropDownValue;
  TextEditingController? locationController;
  TextEditingController? nameController;
  String? radioButtonValue;
  TextEditingController? commentsController;
  final scaffoldKey = GlobalKey<ScaffoldState>();
  final TextEditingController _typeAheadController = TextEditingController();
  int index = -1;
  Color enableColor = Colors.blue;
  Color disableColor = Colors.grey;
  String? workshopStatus;
  @override
  void initState() {
    super.initState();
    commentsController = TextEditingController();
    locationController = TextEditingController();
    nameController = TextEditingController();
  }

  @override
  void dispose() {
    commentsController?.dispose();
    locationController?.dispose();
    nameController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: scaffoldKey,
      backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
      appBar: AppBar(
        backgroundColor: const Color(0xFF444444),
        automaticallyImplyLeading: true,
        title: Row(
          mainAxisSize: MainAxisSize.max,
          children: [
            Text(
              'Leave Feedback',
              // ignore: deprecated_member_use_from_same_package
              style: FlutterFlowTheme.of(context).title3.override(
                    fontFamily: 'Chivo',
                    color: FlutterFlowTheme.of(context).primaryBtnText,
                    fontSize: 26,
                  ),
            ),
          ],
        ),
        actions: const [],
        centerTitle: true,
        elevation: 4,
      ),
      body: WebViewPlus(
        gestureNavigationEnabled: true,
        javascriptMode: JavascriptMode.unrestricted,
        onWebViewCreated: (controller) {
          controller.loadUrl(
              'https://docs.google.com/forms/d/e/1FAIpQLSfFi4wLylR4PF4L4ypoQM9GKTEIKnT0lVhfynE3pPZ1AMnQTw/viewform');
        },
      ),
    );
  }

  // ignore: unused_element
  _insert() async {
    // print(nameController.text);
    // print(locationController.text);
    // print(commentsController.text);
    // print(radioButtonValue1);
    // print(radioButtonValue2);
    // print(dropDownValue);

    Database db = await DatabaseHelper.instance.database;
    DateTime date = DateTime.now();
    String date1 = date.toString();
    Map<String, dynamic> row = {
      DatabaseHelper.columnkidName: nameController!.text,
      DatabaseHelper.columnGrade: dropDownValue,
      DatabaseHelper.columnLocation: _typeAheadController.text,
      DatabaseHelper.columnLike: workshopStatus,
      DatabaseHelper.columnJoin: radioButtonValue,
      DatabaseHelper.columnComment: commentsController!.text,
      DatabaseHelper.columnentery_Time: date1,
      DatabaseHelper.columnLast_Update_Time: date1
    };
    await db.insert(DatabaseHelper.table, row);
  }

  void clearUserData() async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    await preferences.remove("name");
    SuccessMessage.msg(context, "Feedback successfuly saved");

    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const OnboardScreenWidget()),
    );
  }

  // ignore: unused_element
  bool _isNumeric(String result) {
    // ignore: unnecessary_null_comparison
    if (result == null) {
      return false;
    }
    return double.tryParse(result) != null;
  }
}

class StateService {
  static List<String> getSuggestions(String query) {
    List<String> matches = [];

    matches.addAll(s3.schools);
    matches.retainWhere((s) => s.toLowerCase().contains(query.toLowerCase()));
    return matches;
  }
}
