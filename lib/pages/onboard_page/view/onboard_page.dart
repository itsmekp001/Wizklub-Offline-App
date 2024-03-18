import 'dart:async';
import 'package:blockly/services/data_sync/data_sync.dart' as data;
import 'package:get/get.dart';
import 'package:blockly/services/data_sync/database.dart';
import 'package:flutter/material.dart';
import '../../../utils/widgets/flutter_flow/flutter_flow_export.dart';
import '../controller/entry_controller.dart';

data.FeedbackData feedbackData = data.FeedbackData();

class OnboardScreenWidget extends StatefulWidget {
  const OnboardScreenWidget({super.key});

  @override
  _OnboardScreenWidgetState createState() => _OnboardScreenWidgetState();
}

class _OnboardScreenWidgetState extends State<OnboardScreenWidget> {
  EntryController controller = EntryController();
  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    controller.SyncTimer?.cancel();
    controller.SyncTimer = Timer.periodic(const Duration(seconds: 20), (timer) {
      feedbackData.netWorkCheck();
    });
    super.initState();
  }

  final dbHelper = DatabaseHelper.instance;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        controller.dismissKeyboard(context);
      },
      child: Scaffold(
        backgroundColor: const Color(0xFFDADADA),
        body: SingleChildScrollView(
          child: Container(
            width: Get.width,

            // constraints provide us with maxWidth,maxHeight etc, using
            // which we can show different widgets accordingly

            height: Get.height,
            decoration: BoxDecoration(
              color: const Color(0xFFE8F5FF),
              image: DecorationImage(
                fit: BoxFit.cover,
                image: Image.asset(
                  'assets/images/Background_Image.png',
                ).image,
              ),
            ),
            child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Padding(
                  padding: const EdgeInsetsDirectional.fromSTEB(0, 0, 0, 80),
                  child: Image.asset(
                    'assets/images/Logo_H_BY.png',
                    width: 290,
                    height: 125,
                    fit: BoxFit.fill,
                  ),
                ),
                Material(
                  color: Colors.transparent,
                  elevation: 30,
                  shape: const RoundedRectangleBorder(
                    borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(50),
                      bottomRight: Radius.circular(0),
                      topLeft: Radius.circular(0),
                      topRight: Radius.circular(50),
                    ),
                  ),
                  child: Container(
                    width: 700,
                    height: 350,
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(
                        colors: [Color(0xFF388CD5), Color(0xFF00CDFF)],
                        stops: [0, 1],
                        begin: AlignmentDirectional(-1, 0.64),
                        end: AlignmentDirectional(1, -0.64),
                      ),
                      borderRadius: const BorderRadius.only(
                        bottomLeft: Radius.circular(50),
                        bottomRight: Radius.circular(0),
                        topLeft: Radius.circular(0),
                        topRight: Radius.circular(50),
                      ),
                      border: Border.all(
                        color: const Color(0xFFE5E5E5),
                        width: 3,
                      ),
                    ),
                    child: Padding(
                      padding:
                          const EdgeInsetsDirectional.fromSTEB(40, 50, 40, 30),
                      child: Column(
                        mainAxisSize: MainAxisSize.max,
                        children: [
                          Padding(
                            padding: const EdgeInsetsDirectional.fromSTEB(
                                0, 0, 0, 40),
                            child: Text(
                              'Hey, Let\'s get to know you!',
                              style: FlutterFlowTheme.of(context)
                                  // ignore: deprecated_member_use_from_same_package
                                  .bodyText1
                                  .override(
                                    fontFamily: 'Poppins',
                                    color: Colors.white,
                                    fontSize: 24,
                                    fontWeight: FontWeight.bold,
                                  ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsetsDirectional.fromSTEB(
                                0, 0, 0, 20),
                            child: TextFormField(
                              controller: controller.nameController,
                              autofocus: false,
                              obscureText: false,
                              decoration: InputDecoration(
                                labelStyle:
                                    // ignore: deprecated_member_use_from_same_package
                                    FlutterFlowTheme.of(context).bodyText1,
                                hintText: 'Please enter your name',
                                hintStyle: FlutterFlowTheme.of(context)
                                    // ignore: deprecated_member_use_from_same_package
                                    .bodyText2
                                    .override(
                                      fontFamily: 'Poppins',
                                      color: FlutterFlowTheme.of(context)
                                          .primaryBackground,
                                      fontWeight: FontWeight.normal,
                                    ),
                                enabledBorder: UnderlineInputBorder(
                                  borderSide: BorderSide(
                                    color: FlutterFlowTheme.of(context)
                                        .secondaryText,
                                    width: 1,
                                  ),
                                  borderRadius: const BorderRadius.only(
                                    topLeft: Radius.circular(4.0),
                                    topRight: Radius.circular(4.0),
                                  ),
                                ),
                                focusedBorder: UnderlineInputBorder(
                                  borderSide: BorderSide(
                                    color: FlutterFlowTheme.of(context)
                                        .secondaryText,
                                    width: 1,
                                  ),
                                  borderRadius: const BorderRadius.only(
                                    topLeft: Radius.circular(4.0),
                                    topRight: Radius.circular(4.0),
                                  ),
                                ),
                                filled: true,
                                fillColor: const Color(0x32F1F4F8),
                              ),
                              // ignore: deprecated_member_use_from_same_package
                              style: FlutterFlowTheme.of(context).bodyText1,
                            ),
                          ),
                          Expanded(
                            child: Align(
                              alignment: const AlignmentDirectional(1, 0),
                              child: FFButtonWidget(
                                onPressed: () {
                                  controller.storeUsername(context);
                                },
                                text: 'Submit',
                                options: FFButtonOptions(
                                  width: 130,
                                  height: 40,
                                  color: const Color(0xFFFFB300),
                                  textStyle: FlutterFlowTheme.of(context)
                                      // ignore: deprecated_member_use_from_same_package
                                      .subtitle2
                                      .override(
                                        fontFamily: 'Poppins',
                                        color: Colors.white,
                                        fontWeight: FontWeight.normal,
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
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
