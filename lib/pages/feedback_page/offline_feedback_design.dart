import 'package:blockly/pages/onboard_page/view/onboard_page.dart';
import 'package:blockly/services/data_sync/database.dart';
import 'package:blockly/utils/widgets/messages/error.dart';
import 'package:blockly/utils/widgets/messages/success.dart';
import 'package:flutter_typeahead/flutter_typeahead.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:sqflite/sqflite.dart';

import '../../../utils/widgets/flutter_flow/flutter_flow_drop_down.dart';
import '../../../utils/widgets/flutter_flow/flutter_flow_icon_button.dart';
import '../../../utils/widgets/flutter_flow/flutter_flow_radio_button.dart';
import '../../../utils/widgets/flutter_flow/flutter_flow_theme.dart';
import '../../../utils/widgets/flutter_flow/flutter_flow_widgets.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:blockly/services/data_sync/school_list.dart' as s3;

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
      body: SafeArea(
        child: GestureDetector(
          onTap: () => FocusScope.of(context).unfocus(),
          child: Padding(
            padding: const EdgeInsetsDirectional.fromSTEB(20, 20, 20, 20),
            child: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.max,
                children: [
                  Align(
                    alignment: const AlignmentDirectional(-1, 0),
                    child: Text(
                      'Feel free to drop us your feedback',
                      // ignore: deprecated_member_use_from_same_package
                      style: FlutterFlowTheme.of(context).bodyText1.override(
                            fontFamily: 'Chivo',
                            color: const Color(0xFF005298),
                            fontSize: 20,
                            fontWeight: FontWeight.w800,
                          ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 20, 0, 10),
                    child: Row(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Text(
                          'Name *',
                          style:
                              // ignore: deprecated_member_use_from_same_package
                              FlutterFlowTheme.of(context).bodyText1.override(
                                    fontFamily: 'Chivo',
                                    color: const Color(0xFF545456),
                                    fontSize: 18,
                                    fontWeight: FontWeight.w600,
                                  ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 0, 0, 10),
                    child: TextFormField(
                      controller: nameController,
                      obscureText: false,
                      decoration: InputDecoration(
                        labelText: 'Enter your name',
                        labelStyle:
                            // ignore: deprecated_member_use_from_same_package
                            FlutterFlowTheme.of(context).bodyText1.override(
                                  fontFamily: 'Chivo',
                                  color: const Color(0xFF888888),
                                  fontSize: 14,
                                  fontWeight: FontWeight.normal,
                                ),
                        hintStyle:
                            // ignore: deprecated_member_use_from_same_package
                            FlutterFlowTheme.of(context).bodyText1.override(
                                  fontFamily: 'Lexend Deca',
                                  color: const Color(0xFF57636C),
                                  fontSize: 14,
                                  fontWeight: FontWeight.normal,
                                ),
                        enabledBorder: OutlineInputBorder(
                          borderSide: const BorderSide(
                            color: Color(0xFFDBE2E7),
                            width: 2,
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: const BorderSide(
                            color: Color(0xFFDBE2E7),
                            width: 2,
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        errorBorder: OutlineInputBorder(
                          borderSide: const BorderSide(
                            color: Color(0x00000000),
                            width: 2,
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        focusedErrorBorder: OutlineInputBorder(
                          borderSide: const BorderSide(
                            color: Color(0x00000000),
                            width: 2,
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        filled: true,
                        fillColor: Colors.white,
                        contentPadding: const EdgeInsetsDirectional.fromSTEB(
                            12, 24, 20, 24),
                      ),
                      // ignore: deprecated_member_use_from_same_package
                      style: FlutterFlowTheme.of(context).bodyText1.override(
                            fontFamily: 'Chivo',
                            color: const Color(0xFF1D2429),
                            fontSize: 14,
                            fontWeight: FontWeight.normal,
                          ),
                      keyboardType: TextInputType.name,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 4, 0, 10),
                    child: Row(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Text(
                          'Location *',
                          style:
                              // ignore: deprecated_member_use_from_same_package
                              FlutterFlowTheme.of(context).bodyText1.override(
                                    fontFamily: 'Chivo',
                                    color: const Color(0xFF545456),
                                    fontSize: 18,
                                    fontWeight: FontWeight.w600,
                                  ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 0, 0, 10),
                    child: TypeAheadField(
                        textFieldConfiguration: TextFieldConfiguration(
                          decoration: InputDecoration(
                            labelText: 'Enter your name',
                            labelStyle:
                                // ignore: deprecated_member_use_from_same_package
                                FlutterFlowTheme.of(context).bodyText1.override(
                                      fontFamily: 'Chivo',
                                      color: const Color(0xFF888888),
                                      fontSize: 14,
                                      fontWeight: FontWeight.normal,
                                    ),
                            hintStyle:
                                // ignore: deprecated_member_use_from_same_package
                                FlutterFlowTheme.of(context).bodyText1.override(
                                      fontFamily: 'Lexend Deca',
                                      color: const Color(0xFF57636C),
                                      fontSize: 14,
                                      fontWeight: FontWeight.normal,
                                    ),
                            enabledBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                color: Color(0xFFDBE2E7),
                                width: 2,
                              ),
                              borderRadius: BorderRadius.circular(8),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                color: Color(0xFFDBE2E7),
                                width: 2,
                              ),
                              borderRadius: BorderRadius.circular(8),
                            ),
                            filled: true,
                            fillColor: Colors.white,
                            contentPadding:
                                const EdgeInsetsDirectional.fromSTEB(
                                    12, 24, 20, 24),
                          ),
                          controller: _typeAheadController,
                        ),
                        suggestionsCallback: (pattern) async {
                          return StateService.getSuggestions(pattern);
                        },
                        transitionBuilder:
                            (context, suggestionsBox, controller) {
                          return suggestionsBox;
                        },
                        itemBuilder: (context, suggestion) {
                          return ListTile(
                            title: Text(suggestion),
                          );
                        },
                        onSuggestionSelected: (suggestion) {
                          _typeAheadController.text = suggestion;
                        }),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 4, 0, 10),
                    child: Row(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Text(
                          'Grade *',
                          style:
                              // ignore: deprecated_member_use_from_same_package
                              FlutterFlowTheme.of(context).bodyText1.override(
                                    fontFamily: 'Chivo',
                                    color: const Color(0xFF545456),
                                    fontSize: 18,
                                    fontWeight: FontWeight.w600,
                                  ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 0, 0, 10),
                    child: FlutterFlowDropDown(
                      options: const [
                        'Grade 1',
                        'Grade 2',
                        'Grade 3',
                        'Grade 4',
                        'Grade 5',
                        'Grade 6',
                        'Grade 7',
                        'Grade 8'
                      ],
                      onChanged: (val) => setState(() => dropDownValue = val),
                      width: MediaQuery.of(context).size.width,
                      height: 56,
                      textStyle:
                          // ignore: deprecated_member_use_from_same_package
                          FlutterFlowTheme.of(context).bodyText1.override(
                                fontFamily: 'Chivo',
                                color: const Color(0xFF888888),
                                fontWeight: FontWeight.normal,
                              ),
                      hintText: 'Select Grade',
                      fillColor: Colors.white,
                      elevation: 2,
                      borderColor: const Color(0xFFDBE2E7),
                      borderWidth: 2,
                      borderRadius: 8,
                      margin:
                          const EdgeInsetsDirectional.fromSTEB(12, 4, 12, 4),
                      hidesUnderline: true,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 4, 0, 10),
                    child: Row(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Text(
                          'Did you like the robotics workshop? *',
                          style:
                              // ignore: deprecated_member_use_from_same_package
                              FlutterFlowTheme.of(context).bodyText1.override(
                                    fontFamily: 'Chivo',
                                    color: const Color(0xFF545456),
                                    fontSize: 18,
                                    fontWeight: FontWeight.w600,
                                  ),
                        ),
                      ],
                    ),
                  ),
                  Row(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      FlutterFlowIconButton(
                        borderColor: Colors.transparent,
                        borderRadius: 30,
                        borderWidth: 1,
                        buttonSize: 60,
                        icon: FaIcon(
                          // ignore: deprecated_member_use
                          FontAwesomeIcons.smile,
                          color: index == 0 ? enableColor : disableColor,
                          size: 30,
                        ),
                        onPressed: () {
                          setState(() {
                            index = 0;
                          });
                          workshopStatus = "YES";
                        },
                      ),
                      FlutterFlowIconButton(
                        borderColor: Colors.transparent,
                        borderRadius: 30,
                        borderWidth: 1,
                        buttonSize: 60,
                        icon: FaIcon(
                          // ignore: deprecated_member_use
                          FontAwesomeIcons.angry,
                          color: index == 1 ? enableColor : disableColor,
                          size: 30,
                        ),
                        onPressed: () {
                          setState(() {
                            index = 1;
                          });
                          workshopStatus = "NO";
                        },
                      ),
                    ],
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 4, 0, 10),
                    child: Row(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Text(
                          'Will you join the robotics program? *',
                          style:
                              // ignore: deprecated_member_use_from_same_package
                              FlutterFlowTheme.of(context).bodyText1.override(
                                    fontFamily: 'Chivo',
                                    color: const Color(0xFF545456),
                                    fontSize: 18,
                                    fontWeight: FontWeight.w600,
                                  ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 4, 0, 10),
                    child: Row(
                      mainAxisSize: MainAxisSize.max,
                      mainAxisAlignment: MainAxisAlignment.start,
                      children: [
                        FlutterFlowRadioButton(
                          options: ['YES', 'NO'].toList(),
                          onChanged: (val) =>
                              setState(() => radioButtonValue = val),
                          optionHeight: 25,
                          textStyle:
                              // ignore: deprecated_member_use_from_same_package
                              FlutterFlowTheme.of(context).bodyText1.override(
                                    fontFamily: 'Chivo',
                                    color: Colors.black,
                                    fontSize: 16,
                                    fontWeight: FontWeight.normal,
                                  ),
                          textPadding:
                              const EdgeInsetsDirectional.fromSTEB(0, 0, 50, 0),
                          buttonPosition: RadioButtonPosition.left,
                          direction: Axis.horizontal,
                          radioButtonColor: const Color(0xFF0089FF),
                          inactiveRadioButtonColor: const Color(0xFF888888),
                          toggleable: false,
                          horizontalAlignment: WrapAlignment.start,
                          verticalAlignment: WrapCrossAlignment.start,
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 4, 0, 10),
                    child: Row(
                      mainAxisSize: MainAxisSize.max,
                      children: [
                        Text(
                          'Comments',
                          style:
                              // ignore: deprecated_member_use_from_same_package
                              FlutterFlowTheme.of(context).bodyText1.override(
                                    fontFamily: 'Chivo',
                                    color: const Color(0xFF545456),
                                    fontSize: 18,
                                    fontWeight: FontWeight.w600,
                                  ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 0, 0, 10),
                    child: TextFormField(
                      controller: commentsController,
                      obscureText: false,
                      decoration: InputDecoration(
                        labelText: 'Write here',
                        labelStyle:
                            // ignore: deprecated_member_use_from_same_package
                            FlutterFlowTheme.of(context).bodyText1.override(
                                  fontFamily: 'Chivo',
                                  color: const Color(0xFF888888),
                                  fontSize: 14,
                                  fontWeight: FontWeight.normal,
                                ),
                        hintStyle:
                            // ignore: deprecated_member_use_from_same_package
                            FlutterFlowTheme.of(context).bodyText1.override(
                                  fontFamily: 'Lexend Deca',
                                  color: const Color(0xFF57636C),
                                  fontSize: 14,
                                  fontWeight: FontWeight.normal,
                                ),
                        enabledBorder: OutlineInputBorder(
                          borderSide: const BorderSide(
                            color: Color(0xFFDBE2E7),
                            width: 2,
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderSide: const BorderSide(
                            color: Color(0xFFDBE2E7),
                            width: 2,
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        errorBorder: OutlineInputBorder(
                          borderSide: const BorderSide(
                            color: Color(0x00000000),
                            width: 2,
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        focusedErrorBorder: OutlineInputBorder(
                          borderSide: const BorderSide(
                            color: Color(0x00000000),
                            width: 2,
                          ),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        filled: true,
                        fillColor: Colors.white,
                      ),
                      // ignore: deprecated_member_use_from_same_package
                      style: FlutterFlowTheme.of(context).bodyText1.override(
                            fontFamily: 'Chivo',
                            color: const Color(0xFF1D2429),
                            fontSize: 14,
                            fontWeight: FontWeight.normal,
                          ),
                      textAlign: TextAlign.start,
                      maxLines: 3,
                      keyboardType: TextInputType.name,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 10, 0, 0),
                    child: FFButtonWidget(
                      onPressed: () {
                        var number = nameController!.text
                            .replaceAll(RegExp(r'[^0-9]'), '');
                        if (nameController!.text == '' ||
                            _typeAheadController.text == '' ||
                            commentsController!.text == '' ||
                            dropDownValue == null ||
                            radioButtonValue == null ||
                            workshopStatus == null) {
                          ErrorMessage.msg("Fill all required fields");
                        } else if (nameController!.text.length < 2 ||
                            _isNumeric(number) == true) {
                          ErrorMessage.msg("Please enter valid name");
                        } else {
                          _insert();
                          clearUserData();

                          // nameController.clear();
                          // locationController.clear();
                          // commentsController.clear();
                        }
                      },
                      text: 'Submit Feedback',
                      icon: const FaIcon(
                        FontAwesomeIcons.locationArrow,
                      ),
                      options: FFButtonOptions(
                        width: double.infinity,
                        height: 48,
                        color: const Color(0xFF0089FF),
                        textStyle:
                            // ignore: deprecated_member_use_from_same_package
                            FlutterFlowTheme.of(context).subtitle2.override(
                                  fontFamily: 'Chivo',
                                  color: Colors.white,
                                ),
                        borderSide: const BorderSide(
                          color: Colors.transparent,
                          width: 1,
                        ),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      showLoadingIndicator: false,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

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
