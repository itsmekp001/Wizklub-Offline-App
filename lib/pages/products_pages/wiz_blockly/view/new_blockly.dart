import 'dart:convert';
import 'package:blockly/pages/products_pages/wiz_blockly/controller/blockly_controller.dart';
import 'package:blockly/pages/products_pages/wiz_blockly/widget/load_workspace.dart';
import 'package:blockly/pages/products_pages/wiz_blockly/widget/save_workspace.dart';
import 'package:blockly/services/api/api.dart';
import 'package:blockly/services/database/blockly_db.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import '../../../home_page/home.dart' as homepage;
import '../../../../utils/widgets/flutter_flow/flutter_flow_export.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class BlocklyPlayground extends StatefulWidget {
  const BlocklyPlayground({super.key});
  @override
  _BlocklyPlaygroundState createState() => _BlocklyPlaygroundState();
}

class _BlocklyPlaygroundState extends State<BlocklyPlayground> {
  BlocklyController blocklycontroller = Get.put(BlocklyController());

  @override
  void initState() {
    super.initState();
  }

  final scaffoldKey = GlobalKey<ScaffoldState>();

  InAppWebViewGroupOptions options = InAppWebViewGroupOptions(
      crossPlatform: InAppWebViewOptions(useShouldOverrideUrlLoading: true));
  ApiProvider api = ApiProvider();
  final DBOperations _dbOperations = Get.find();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: scaffoldKey,
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(65),
        child: AppBar(
          backgroundColor: const Color(0xFF444444),
          leading: Row(
            mainAxisSize: MainAxisSize.min,
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
                onPressed: () async {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (_) => const homepage.HomeScreenWidget(),
                    ),
                  );
                },
              ),
            ],
          ),
          actions: [
            Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                IconButton(
                  onPressed: () {
                    SaveWorkspaceWidget.msg(context);
                  },
                  icon: const Icon(
                    Icons.save,
                    color: Colors.white,
                    size: 35,
                  ),
                ),
                const SizedBox(
                  width: 10,
                ),
                IconButton(
                  onPressed: () async {
                    var data = await _dbOperations.getData();
                    List<String> workspaceList = [];
                    List<String> blockList = [];
                    for (int i = 0; i < data.length; i++) {
                      workspaceList.add(data[i].workspace_name.toString());
                      blockList.add(data[i].blocks.toString());
                    }

                    showModalBottomSheet(
                      isScrollControlled: true,
                      context: context,
                      backgroundColor: Colors.transparent,
                      builder: (BuildContext context) => LoadWorkspaceWidget(
                        workspaceList: workspaceList,
                        blockList: blockList,
                      ),
                    );
                  },
                  icon: const Icon(
                    Icons.folder_open,
                    color: Colors.white,
                    size: 35,
                  ),
                ),
              ],
            ),
          ],
          elevation: 2,
        ),
      ),
      body: InAppWebView(
        initialFile: "assets/webview/blockly/templates/wizbot.html",
        initialOptions: options,
        onWebViewCreated: (controller) {
          blocklycontroller.webviewController = controller;
          controller.addJavaScriptHandler(
            handlerName: 'handler_trigger_api',
            callback: (args) async {
              var result = await api.getapiresponse(
                  "sensors", json.encode({"sensor": args[0].toString()}));

              return result;
            },
          );
          controller.addJavaScriptHandler(
            handlerName: 'load_last_workspace',
            callback: (args) {
              return {
                'blocks': args,
              };
            },
          );

          controller.addJavaScriptHandler(
            handlerName: 'handler_save_local_workspace',
            callback: (args) {
              print("The data ${args[0]}");
            },
          );
        },
      ),
    );
  }
}
