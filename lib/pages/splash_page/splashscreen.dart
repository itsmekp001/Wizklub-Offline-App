import 'package:blockly/pages/onboard_page/view/onboard_page.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';

class SplashScreenWidget extends StatefulWidget {
  const SplashScreenWidget({super.key});
  @override
  _SplashScreenWidgetState createState() => _SplashScreenWidgetState();
}

class _SplashScreenWidgetState extends State<SplashScreenWidget> {
  final scaffoldKey = GlobalKey<ScaffoldState>();
  @override
  void initState() {
    SystemChannels.textInput.invokeMethod('TextInput.hide');

    ///After 8 second the screen will navigate to onboard screen
    Future.delayed(
        const Duration(seconds: 8),
        () => Navigator.pushReplacement(
              context,
              MaterialPageRoute(
                  builder: (context) => const OnboardScreenWidget()),
            ));
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: scaffoldKey,
      backgroundColor: const Color(0xFF0089FF),
      body: SafeArea(
        child: GestureDetector(
          onTap: () => FocusScope.of(context).unfocus(),
          child: Align(
            alignment: const AlignmentDirectional(0, -0.15),
            child: Row(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Image.asset("assets/images/LogoAnim.gif",
                    gaplessPlayback: false, width: Get.width, fit: BoxFit.cover)
              ],
            ),
          ),
        ),
      ),
    );
  }
}
