import 'dart:async';
import 'package:blockly/pages/feedback_page/offline_feedback.dart';
import 'package:blockly/pages/home_page/home.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:nice_buttons/nice_buttons.dart';
import 'package:get/get.dart';
import '../../../../utils/widgets/flutter_flow/flutter_flow_export.dart';
import '../controller/colorpicker_controller.dart';

class Colorpicker extends StatefulWidget {
  const Colorpicker({super.key});
  @override
  State<StatefulWidget> createState() => _ColorpickerState();
}

class _ColorpickerState extends State<Colorpicker> {
  ColorController colorcontroller = ColorController();

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          // constraints provide us with maxWidth,maxHeight etc, using
          // which we can show different widgets accordingly
          if (context.isLandscape) {
            return _buildWideScreenContainers(context);
          } else {
            return _buildPortraitContainer(context);
          }
        },
      ),
    );
  }

  Widget _buildPortraitContainer(context) {
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
                  'Color Picker',
                  // ignore: deprecated_member_use_from_same_package
                  style: FlutterFlowTheme.of(context).title1.override(
                        fontFamily: 'Poppins',
                        color: FlutterFlowTheme.of(context).primaryBtnText,
                        fontSize: Get.height / 35,
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
                          fontSize: Get.height / 55),
                    )),
                Padding(
                  padding: const EdgeInsetsDirectional.fromSTEB(0, 8, 0, 0),
                  child: FlutterFlowIconButton(
                    icon: const FaIcon(
                      FontAwesomeIcons.solidMessage,
                      color: Colors.white,
                      size: 30,
                    ),
                    onPressed: () async {
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
      body: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(0),
          color: const Color.fromARGB(255, 61, 60, 60),
        ),
        height: Get.height,
        width: Get.width,
        child: Column(
          children: [
            const SizedBox(height: 30),
            ColorPicker(
                colorPickerWidth: Get.width / 1.3,
                pickerAreaHeightPercent: Get.height / 1000,
                pickerColor: colorcontroller.currentColor,
                onColorChanged: colorcontroller.getColor),
            const SizedBox(height: 30),
            NiceButtons(
              stretch: false,
              progress: true,
              width: 300,
              gradientOrientation: GradientOrientation.Horizontal,
              onTap: (finish) {
                colorcontroller.portraitColorPicker(colorcontroller.r!,
                    colorcontroller.g!, colorcontroller.b!, context);
                Timer(const Duration(seconds: 1), () {
                  finish();
                });
              },
              child: Text(
                'Show the color on smartlight',
                // ignore: deprecated_member_use_from_same_package
                style: FlutterFlowTheme.of(context).title1.override(
                      fontFamily: 'Poppins',
                      color: FlutterFlowTheme.of(context).gray200,
                      fontSize: 18,
                    ),
              ),
            ),
            const SizedBox(height: 10),
          ],
        ),
      ),
    );
  }

  Widget _buildWideScreenContainers(context) {
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
                  'Color Picker',
                  // ignore: deprecated_member_use_from_same_package
                  style: FlutterFlowTheme.of(context).subtitle1.override(
                        fontFamily: 'Outfit',
                        color: FlutterFlowTheme.of(context).primaryBtnText,
                        fontSize: 26,
                        fontWeight: FontWeight.bold,
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
                const Padding(
                    padding: EdgeInsetsDirectional.fromSTEB(0, 8, 0, 0),
                    child: Text(
                      "Feedback",
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 17,
                          color: Colors.white),
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
                    onPressed: () {
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
      body: Container(
        width: Get.width,
        height: Get.height,
        padding: const EdgeInsetsDirectional.fromSTEB(0, 60, 0, 0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(0),
          color: const Color.fromARGB(255, 61, 60, 60),
        ),
        child: Column(
          children: [
            BlockPicker(
                pickerColor: colorcontroller.currentColor,
                onColorChanged: colorcontroller.landscapeColorPicker),
          ],
        ),
      ),
    );
  }
}
