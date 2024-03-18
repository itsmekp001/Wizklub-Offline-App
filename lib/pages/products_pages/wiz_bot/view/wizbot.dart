import 'package:blockly/pages/feedback_page/offline_feedback.dart';
import 'package:blockly/pages/products_pages/wiz_bot/controller/wizbot_controller.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/material.dart';
import '../../../home_page/home.dart';
import '../../../../utils/widgets/flutter_flow/flutter_flow_export.dart';

int? r, g, b;

class WizbotControl extends StatefulWidget {
  const WizbotControl({super.key});
  @override
  _WizbotControlState createState() => _WizbotControlState();
}

class _WizbotControlState extends State<WizbotControl> {
  WizbotController wizbotcontroller = WizbotController();
  final scaffoldKey = GlobalKey<ScaffoldState>();
  Color currentColor = Colors.green;

  @override
  Widget build(BuildContext context) {
    final scaffoldKey = GlobalKey<ScaffoldState>();
    return Scaffold(
      key: scaffoldKey,
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(65),
        child: AppBar(
          backgroundColor: const Color(0xFF444444),
          automaticallyImplyLeading: false,
          leading: Row(
            children: [
              FlutterFlowIconButton(
                borderColor: Colors.transparent,
                buttonSize: 50,
                icon: const FaIcon(
                  // ignore: deprecated_member_use
                  FontAwesomeIcons.home,
                  color: Colors.white,
                  size: 30,
                ),
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => const HomeScreenWidget(),
                    ),
                  );
                },
              ),
            ],
          ),
          flexibleSpace: Padding(
            padding: const EdgeInsetsDirectional.fromSTEB(0, 30, 0, 0),
            child: Column(
              children: [
                Text(
                  'WizBot Controller',
                  // ignore: deprecated_member_use_from_same_package
                  style: FlutterFlowTheme.of(context).title1.override(
                        fontFamily: 'Poppins',
                        color: FlutterFlowTheme.of(context).gray200,
                        fontSize: Get.height / 38,
                      ),
                ),
              ],
            ),
          ),
          actions: [
            Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.end,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 8, 0, 0),
                    child: Text(
                      "Feedback",
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                        fontSize: Get.height / 55,
                      ),
                    )),
                Padding(
                  padding: const EdgeInsetsDirectional.fromSTEB(0, 8, 0, 0),
                  child: FlutterFlowIconButton(
                    borderColor: Colors.transparent,
                    borderRadius: 30,
                    borderWidth: 1,
                    buttonSize: 60,
                    icon: const FaIcon(
                      FontAwesomeIcons.solidMessage,
                      color: Colors.white,
                      size: 30,
                    ),
                    onPressed: () async {
                      SharedPreferences localStorage =
                          await SharedPreferences.getInstance();
                      localStorage.setString("wifistate", 'false');
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => const FeedbackWidget(),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ],
          elevation: 2,
        ),
      ),
      body: SingleChildScrollView(
        child: GestureDetector(
          onTap: () => FocusScope.of(context).unfocus(),
          child: Column(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Padding(
                padding: const EdgeInsetsDirectional.fromSTEB(40, 0, 40, 20),
                child: Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    FFButtonWidget(
                      onPressed: () {
                        showDialog(
                            context: context,
                            builder: (BuildContext context) {
                              return AlertDialog(
                                title: const Text('Pick a color!'),
                                content: SingleChildScrollView(
                                  child: BlockPicker(
                                      pickerColor: currentColor, //default color
                                      onColorChanged: wizbotcontroller
                                          .colorcontroller
                                          .landscapeColorPicker),
                                ),
                                actions: <Widget>[
                                  ElevatedButton(
                                    child: const Text('DONE'),
                                    onPressed: () {
                                      Navigator.of(context)
                                          .pop(); //dismiss the color picker
                                    },
                                  ),
                                ],
                              );
                            });
                      },
                      text: 'Pick your color',
                      options: FFButtonOptions(
                        width: 300,
                        height: 80,
                        color: const Color(0xFFEDB942),
                        textStyle:
                            // ignore: deprecated_member_use_from_same_package
                            FlutterFlowTheme.of(context).subtitle2.override(
                                  fontFamily: 'Poppins',
                                  color: Colors.white,
                                  fontSize: 24,
                                ),
                        elevation: 3,
                        borderSide: const BorderSide(
                          color: Colors.transparent,
                          width: 1,
                        ),
                        borderRadius: BorderRadius.circular(50),
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsetsDirectional.fromSTEB(0, 10, 0, 0),
                child: Text(
                  'Direction Controller',
                  // ignore: deprecated_member_use_from_same_package
                  style: FlutterFlowTheme.of(context).title2.override(
                        fontFamily: 'Poppins',
                        color: const Color(0xFF545456),
                        fontSize: 32,
                      ),
                ),
              ),
              Padding(
                padding: const EdgeInsetsDirectional.fromSTEB(0, 20, 0, 24),
                child: Row(
                  mainAxisSize: MainAxisSize.max,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Material(
                      color: Colors.transparent,
                      elevation: 4,
                      shape: const CircleBorder(),
                      child: Container(
                        width: 400,
                        height: 400,
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFDD8F),
                          boxShadow: const [
                            BoxShadow(
                              blurRadius: 2,
                              color: Color(0x65F1F4F8),
                              offset: Offset(0, 2),
                            )
                          ],
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: const Color(0xFFEDB942),
                            width: 5,
                          ),
                        ),
                        child: Padding(
                          padding: const EdgeInsetsDirectional.fromSTEB(
                              10, 10, 10, 10),
                          child: Column(
                            mainAxisSize: MainAxisSize.max,
                            children: [
                              Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  FlutterFlowIconButton(
                                    borderColor: Colors.transparent,
                                    borderRadius: 60,
                                    borderWidth: 1,
                                    buttonSize: 120,
                                    icon: const Icon(
                                      Icons.arrow_drop_up,
                                      color: Color(0xFFEDB942),
                                      size: 100,
                                    ),
                                    onPressed: () {
                                      wizbotcontroller.roboMove(
                                          255, 255, 2, 2, "start");
                                    },
                                  ),
                                ],
                              ),
                              Row(
                                mainAxisSize: MainAxisSize.max,
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  FlutterFlowIconButton(
                                    borderColor: Colors.transparent,
                                    borderRadius: 60,
                                    borderWidth: 1,
                                    buttonSize: 120,
                                    icon: const Icon(
                                      Icons.arrow_left,
                                      color: Color(0xFFEDB942),
                                      size: 100,
                                    ),
                                    onPressed: () {
                                      wizbotcontroller.roboMove(
                                          255, 255, 2, 1, "start");
                                    },
                                  ),
                                  FlutterFlowIconButton(
                                    borderColor: Colors.transparent,
                                    borderRadius: 60,
                                    borderWidth: 1,
                                    buttonSize: 120,
                                    icon: const Icon(
                                      Icons.stop_circle_rounded,
                                      color: Color(0xFFEDB942),
                                      size: 100,
                                    ),
                                    onPressed: () {
                                      wizbotcontroller.roboMove(
                                          0, 0, 1, 1, "stop");
                                    },
                                  ),
                                  FlutterFlowIconButton(
                                    borderColor: Colors.transparent,
                                    borderRadius: 60,
                                    borderWidth: 1,
                                    buttonSize: 120,
                                    icon: const Icon(
                                      Icons.arrow_right,
                                      color: Color(0xFFEDB942),
                                      size: 100,
                                    ),
                                    onPressed: () {
                                      wizbotcontroller.roboMove(
                                          255, 255, 1, 2, "start");
                                    },
                                  ),
                                ],
                              ),
                              Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  FlutterFlowIconButton(
                                    borderColor: Colors.transparent,
                                    borderRadius: 60,
                                    borderWidth: 1,
                                    buttonSize: 120,
                                    icon: const Icon(
                                      Icons.arrow_drop_down,
                                      color: Color(0xFFEDB942),
                                      size: 100,
                                    ),
                                    onPressed: () {
                                      wizbotcontroller.roboMove(
                                          255, 255, 1, 1, "start");
                                    },
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
