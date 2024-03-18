import 'package:blockly/pages/products_pages/wiz_blockly/controller/blockly_controller.dart';
import 'package:blockly/utils/widgets/flutter_flow/flutter_flow_export.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

// ignore: must_be_immutable
class LoadWorkspaceWidget extends StatefulWidget {
  var workspaceList;
  var blockList;

  // Constructor with parameter
  LoadWorkspaceWidget({required this.workspaceList, required this.blockList});

  @override
  _LoadWorkspaceWidgetState createState() => _LoadWorkspaceWidgetState();
}

class _LoadWorkspaceWidgetState extends State<LoadWorkspaceWidget> {
  String? dropDownValue;
  int selectedIndex = 0;
  BlocklyController _blocklyController = Get.find();

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Container(
        width: double.infinity,
        height: 360,
        decoration: const BoxDecoration(
          color: Color(0xFFF1F4F8),
          borderRadius: BorderRadius.only(
            bottomLeft: Radius.circular(0),
            bottomRight: Radius.circular(0),
            topLeft: Radius.circular(40),
            topRight: Radius.circular(40),
          ),
        ),
        child: Padding(
          padding: const EdgeInsetsDirectional.fromSTEB(20, 30, 20, 20),
          child: Column(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Column(
                mainAxisSize: MainAxisSize.max,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 0, 0, 16),
                    child: Column(
                      mainAxisSize: MainAxisSize.max,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Select Your Workspace',
                          style:
                              FlutterFlowTheme.of(context).bodyMedium.override(
                                    fontFamily: 'Chivo',
                                    color: FlutterFlowTheme.of(context).primary,
                                    fontSize: 24,
                                    fontWeight: FontWeight.w600,
                                  ),
                        ),
                        Padding(
                          padding:
                              const EdgeInsetsDirectional.fromSTEB(0, 8, 0, 0),
                          child: Text(
                            'Select  your workspace which you want to load on playground',
                            style: FlutterFlowTheme.of(context).bodyMedium,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const Divider(
                    thickness: 1,
                  ),
                  Padding(
                    padding: const EdgeInsetsDirectional.fromSTEB(0, 16, 0, 16),
                    child: SingleChildScrollView(
                      child: Column(
                        mainAxisSize: MainAxisSize.max,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: const EdgeInsetsDirectional.fromSTEB(
                                0, 0, 0, 10),
                            child: Row(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                Text(
                                  'Select Workspace ',
                                  style: FlutterFlowTheme.of(context)
                                      .bodyMedium
                                      .override(
                                        fontFamily: 'Chivo',
                                        color: const Color(0xFF545456),
                                        fontSize: 18,
                                        fontWeight: FontWeight.w600,
                                      ),
                                ),
                              ],
                            ),
                          ),
                          FlutterFlowDropDown(
                            options: widget.workspaceList,
                            onChanged: (val) {
                              setState(() {
                                dropDownValue = val;
                                selectedIndex =
                                    widget.workspaceList.indexOf(val);
                              });
                            },
                            width: double.infinity,
                            height: 50,
                            textStyle: FlutterFlowTheme.of(context).bodyMedium,
                            hintText: 'Please select...',
                            icon: Icon(
                              Icons.keyboard_arrow_down_rounded,
                              color: FlutterFlowTheme.of(context).secondaryText,
                              size: 24,
                            ),
                            fillColor: FlutterFlowTheme.of(context)
                                .secondaryBackground,
                            elevation: 2,
                            borderColor: FlutterFlowTheme.of(context).grayIcon,
                            borderWidth: 0,
                            borderRadius: 8,
                            margin: const EdgeInsetsDirectional.fromSTEB(
                                16, 4, 16, 4),
                            hidesUnderline: true,
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
              Padding(
                padding: const EdgeInsetsDirectional.fromSTEB(0, 0, 0, 20),
                child: Column(
                  mainAxisSize: MainAxisSize.max,
                  children: [
                    Row(
                      mainAxisSize: MainAxisSize.max,
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        FFButtonWidget(
                          onPressed: () {
                            Navigator.pop(context);
                          },
                          text: 'Cancel',
                          options: FFButtonOptions(
                            width: 100,
                            height: 40,
                            padding: const EdgeInsetsDirectional.fromSTEB(
                                0, 0, 0, 0),
                            iconPadding: const EdgeInsetsDirectional.fromSTEB(
                                0, 0, 0, 0),
                            color: FlutterFlowTheme.of(context)
                                .secondaryBackground,
                            textStyle: FlutterFlowTheme.of(context)
                                .titleSmall
                                .override(
                                  fontFamily: 'Chivo',
                                  color: const Color(0xFF818181),
                                  fontSize: 15,
                                  fontWeight: FontWeight.w500,
                                ),
                            elevation: 2,
                            borderSide: const BorderSide(
                              color: Color(0xFF888888),
                              width: 1,
                            ),
                            borderRadius: BorderRadius.circular(100),
                          ),
                        ),
                        Padding(
                          padding:
                              const EdgeInsetsDirectional.fromSTEB(20, 0, 0, 0),
                          child: FFButtonWidget(
                            onPressed: dropDownValue != null
                                ? () async {
                                    var result =
                                        widget.blockList[selectedIndex];
                                    var temp_string =
                                        result.replaceAll('\n', '');
                                    print("The workspace $temp_string");
                                    String jsCode =
                                        "load_saved_workspace('${temp_string}');";
                                    _blocklyController.webviewController
                                        .evaluateJavascript(source: jsCode);
                                    Navigator.pop(context);
                                  }
                                : null,
                            text: 'Load Workspace',
                            options: FFButtonOptions(
                              width: 170,
                              height: 40,
                              padding: const EdgeInsetsDirectional.fromSTEB(
                                  0, 0, 0, 0),
                              iconPadding: const EdgeInsetsDirectional.fromSTEB(
                                  0, 0, 0, 0),
                              color: dropDownValue != null &&
                                      dropDownValue!.isNotEmpty
                                  ? FlutterFlowTheme.of(context).primary
                                  : Colors.grey,
                              textStyle: FlutterFlowTheme.of(context)
                                  .titleSmall
                                  .override(
                                    fontFamily: 'Chivo',
                                    color: Colors.white,
                                    fontSize: 15,
                                    fontWeight: FontWeight.bold,
                                  ),
                              elevation: 3,
                              borderSide: const BorderSide(
                                color: Colors.transparent,
                                width: 1,
                              ),
                              borderRadius: BorderRadius.circular(100),
                            ),
                          ),
                        ),
                      ],
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

/// Print Long String
void printLongString(String text) {
  final RegExp pattern = RegExp('.{1,800}'); // 800 is the size of each chunk
  pattern
      .allMatches(text)
      .forEach((RegExpMatch match) => print(match.group(0)));
}

// void convert_data(xmlString) {
//   final document = xml.XmlDocument.parse(xmlString);

//   final blockElements = document.findAllElements('block').toList();
//   final uniqueBlockIds = <String>{};
//   final duplicateBlocks = <xml.XmlElement>[];

//   for (var blockElement in blockElements) {
//     final id = blockElement.getAttribute('id');
//     if (id != null && uniqueBlockIds.contains(id)) {
//       duplicateBlocks.add(blockElement);
//     } else {
//       uniqueBlockIds.add(id!);
//     }
//   }

//   for (var duplicateBlock in duplicateBlocks) {
//     duplicateBlock.remove();
//   }

//   // Print the updated XML
//   printLongString(document.toXmlString(pretty: true));
// }
