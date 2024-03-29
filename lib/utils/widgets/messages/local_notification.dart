import 'package:flutter_local_notifications/flutter_local_notifications.dart';
// import 'package:rxdart/subjects.dart';
import 'package:timezone/data/latest.dart' as tz;

class LocalNotificationService {
  LocalNotificationService();

  final _localNotificationService = FlutterLocalNotificationsPlugin();

  // final BehaviorSubject<String> onNotificationClick = BehaviorSubject();

  Future<void> intialize() async {
    tz.initializeTimeZones();

    // const AndroidInitializationSettings androidInitializationSettings =
    //     AndroidInitializationSettings('appicon');

    // IOSInitializationSettings iosInitializationSettings =
    //     IOSInitializationSettings(
    //   requestAlertPermission: true,
    //   requestBadgePermission: true,
    //   requestSoundPermission: true,
    //   onDidReceiveLocalNotification: onDidReceiveLocalNotification,
    // );

    // final InitializationSettings settings = InitializationSettings(
    //   android: androidInitializationSettings,
    //   iOS: iosInitializationSettings,
    // );

    // await _localNotificationService.initialize(
    //   settings,
    //   onSelectNotification: onSelectNotification,
    // );
  }

  Future<NotificationDetails> _notificationDetails() async {
    const AndroidNotificationDetails androidNotificationDetails =
        AndroidNotificationDetails('channel_id', 'channel_name',
            channelDescription: 'description',
            importance: Importance.max,
            priority: Priority.max,
            playSound: true);

    const IOSNotificationDetails iosNotificationDetails =
        IOSNotificationDetails();

    return const NotificationDetails(
      android: androidNotificationDetails,
      iOS: iosNotificationDetails,
    );
  }

  Future<void> showNotification({
    int? id,
    String? title,
    String? body,
  }) async {
    final details = await _notificationDetails();
    await _localNotificationService.show(id!, title, body, details);
  }

  void onDidReceiveLocalNotification(
      int id, String? title, String? body, String? payload) {}

  // void onSelectNotification(String? payload) {
  //   if (payload != null && payload.isNotEmpty) {
  //     onNotificationClick.add(payload);
  //   }
  // }
}
