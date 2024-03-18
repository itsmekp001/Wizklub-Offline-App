#include "setup.h"

void wizgear_strip_light(int r, int g, int b)
{
  strip.begin();
  strip.show();
  strip.setBrightness(255);
  for (int i = 0; i < NUM_LEDS; i++)
  {
    strip.setPixelColor(i, strip.Color(r, g, b));
    strip.show();
  }
}

void wizgear_strip_single_led_light(int led, uint8_t r, uint8_t g, uint8_t b)
{
  strip.begin();
  strip.show();
  strip.setBrightness(255);
  strip.setPixelColor(led, strip.Color(r, g, b));
  strip.show();
}

void wizgear_update_rgb_color(int red, int green, int blue)
{
  setup_tricolor_led();
  analogWrite(TRICOLOR_PIN_RED, 255 - red);
  analogWrite(TRICOLOR_PIN_GREEN, 255 - green);
  analogWrite(TRICOLOR_PIN_BLUE, 255 - blue);
  delay(10);
}

void update_dfplayer_track()
{
  setup_df_player();

  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  int track_number = jObject["track_number"];
  int folder_number = jObject["folder_number"];
  Serial.println("Folder name : ");
  Serial.println(folder_number);
  Serial.println("Track name : ");
  Serial.println(track_number);

  df_player.playFolder((int)folder_number, (int)track_number);
  server.send(200, "application/json", "{\"message\":\"The Execution is Successful\"}");
}

void update_dfplayer_control()
{
  setup_df_player();

  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String mode = jObject["mode"];

  if (mode == "first")
  {
    df_player.playFolder(1, 1);
    server.send(200, "application/json", "{\"message\":\"The Execution is Successful\"}");
  }
  if (mode == "next")
  {
    df_player.playNext();
    server.send(200, "application/json", "{\"message\":\"The Execution is Successful\"}");
  }
  if (mode == "previous")
  {
    df_player.playPrevious();
    server.send(200, "application/json", "{\"message\":\"The Execution is Successful\"}");
  }
  if (mode == "pause")
  {
    df_player.pause();
    server.send(200, "application/json", "{\"message\":\"The Execution is Successful\"}");
  }
  if (mode == "resume")
  {
    df_player.resume();
    server.send(200, "application/json", "{\"message\":\"The Execution is Successful\"}");
  }
}

void setup()
{
  Serial.begin(115200);
  WiFi.softAP(ssid, password);
  setup_tricolor_led();
  dht.begin();
  setup_ultrasonic();
  pinMode(buzzerPin, OUTPUT);
  pinMode(LDR_LED_PIN, OUTPUT);
  pinMode(LDRA_PIN, INPUT);
  pinMode(LDRB_PIN, INPUT);
  setup_wheel_encoder();

  NoTone();
  wizgear_update_rgb_color(-10, -10, -10);
  server.on("/", []()
  {
    server.send(200, "application/json", "Hello World!");
  });
  server.on("/smartlight", smartlight);
  server.on("/rainbow", rainbows);
  server.on("/off", offcolor);
  server.on("/colorwipe", colorwipes);
  server.on("/vibgyor", vibgyorcolors);
  server.on("/multicolor", multicolor);
  server.on("/heartbeat", heartbeatcolors);
  server.on("/smartlightTime", smartlightTime);
  server.on("/smartlightledtime", smartlightledTime);
  server.on("/smartlightledPower", smartlightledPower);
  server.on("/tricolorled", triColorLed);
  server.on("/motor", wizMotors);
  server.on("/buzzer", wizBuzzer);
  server.on("/buzzerfrequency", wizBuzzerFrequency);
  server.on("/buzzerPower", wizBuzzerPower);
  server.on("/ss_input", wizSsInput);
  server.on("/ss_custom", wizSsCustom);
  server.on("/sensors", wizSensor);
  server.on("/relay", relay_mode);
  server.on("/update_dfplayer_track", update_dfplayer_track);
  server.on("/update_dfplayer_control", update_dfplayer_control);
  server.on("/servo/pan_tilt", servo_pan_tilt);
  server.on("/servo/action", servo_action);
  server.on("/oled", oled_operation);
  server.on("/ldr_bridhtness", handleBrightness);


  server.begin();
  Serial.println("HTTP server started");
  delay(10);
}

void loop()
{
  server.handleClient();
  delay(10);
}

int Tone(int freq)
{
  pinMode(buzzerPin, OUTPUT);
  ledcSetup(channel, 3000, resolution1);
  ledcAttachPin(buzzerPin, channel);
  ledcWriteTone(channel, (int)freq);
  return freq;
}

void NoTone()
{
  dacWrite(buzzerPin, 255);
}

void wizSsInput()
{
  cors_disable();
  setup_seven_segment();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);

  String input = jObject["input"];
  String power = jObject["power"];

  if (power == "on")
  {
    if (input == "a")
    {
      ss_pin_config(0, 0, 0, 1, 0, 0, 0);
    }
    else if (input == "b")
    {
      ss_pin_config(0, 0, 0, 0, 0, 0, 0);
    }

    else if (input == "c")
    {
      ss_pin_config(0, 1, 1, 0, 0, 0, 1);
    }
    else if (input == "d")
    {
      ss_pin_config(0, 0, 0, 0, 0, 0, 1);
    }
    else if (input == "e")
    {
      ss_pin_config(0, 1, 1, 0, 0, 0, 0);
    }
    else if (input == "f")
    {
      ss_pin_config(0, 1, 1, 1, 0, 0, 0);
    }

    else if (input == "0")
    {
      ss_pin_config(0, 0, 0, 0, 0, 0, 1);
    }

    else if (input == "1")
    {
      ss_pin_config(1, 0, 0, 1, 1, 1, 1);
    }
    else if (input == "2")
    {
      ss_pin_config(0, 0, 1, 0, 0, 1, 0);
    }
    else if (input == "3")
    {
      ss_pin_config(0, 0, 0, 0, 1, 1, 0);
    }
    else if (input == "4")
    {
      ss_pin_config(1, 0, 0, 1, 1, 0, 0);
    }
    else if (input == "5")
    {
      ss_pin_config(0, 1, 0, 0, 1, 0, 0);
    }
    else if (input == "6")
    {
      ss_pin_config(0, 1, 0, 0, 0, 0, 0);
    }
    else if (input == "7")
    {
      ss_pin_config(0, 0, 0, 1, 1, 1, 1);
    }
    else if (input == "8")
    {
      ss_pin_config(0, 0, 0, 0, 0, 0, 0);
    }
    else if (input == "9")
    {
      ss_pin_config(0, 0, 0, 0, 1, 0, 0);
    }
  }
  else
  {
    ss_pin_config(1, 1, 1, 1, 1, 1, 1);
  }
  String responseMessage = "seven segment settings updated successfully.  input =" + input + ", power =" + power + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
}

void wizSsCustom()
{
  cors_disable();
  setup_seven_segment();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);

  int led = jObject["led0"];
  int led1 = jObject["led1"];
  int led2 = jObject["led2"];
  int led3 = jObject["led3"];
  int led4 = jObject["led4"];
  int led5 = jObject["led5"];
  int led6 = jObject["led6"];
  int led7 = jObject["led7"];

  digitalWrite(a, led);
  digitalWrite(b, led1);
  digitalWrite(c, led2);
  digitalWrite(d, led3);
  digitalWrite(e, led4);
  digitalWrite(f, led5);
  digitalWrite(g, led6);
  digitalWrite(h, led7);
  String responseMessage = "seven_segment settings updated successfully. led =" + String(led) + ", led1 =" + String(led1) + ", led2 =" + String(led2) + ", led3 =" + String(led3) + ", led4 =" + String(led4) + ", led5 =" + String(led5) + ", led6 =" + String(led6) + ", led7 =" + String(led7) + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
}

void wizBuzzerPower()
{
  cors_disable();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);

  int frequency = jObject["freqency"];
  String power = jObject["power"];

  if (power == "on")
  {
    Tone(int(frequency));
  }
  else
  {
    NoTone();
  }
  String responseMessage = "wiz Buzzer Powersettings updated successfully.  frequency =" + String(frequency) + ", power =" + power + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);

}

void wizBuzzerFrequency()
{
  cors_disable();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);

  int frequency = jObject["freqency"];
  int duration = jObject["duration"];
  Tone(int(frequency));
  delay(int(duration));
  NoTone();
  String responseMessage = "wizBuzzerFrequency settings updated successfully.  frequency =" + String(frequency) + ", duration =" + String(duration) + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);

}

void wizBuzzer()
{
  cors_disable();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String buzzermusic = jObject["buz_music"];
  int frequency = jObject["freqency"];
  int duration = jObject["duration"];
  if (buzzermusic == "hbd")
  {
    for (int i = 0; i < 25; i++)
    {
      Tone(HBD_notes[i]);
      delay(HBD_interval[i]);
    }
    NoTone();
  }
  else if (buzzermusic == "saregama")
  {
    for (int i = 0; i < 16; i++)
    {
      Tone(SaReGa_notes[i]);
      delay(500);
    }
    NoTone();
  }
  String responseMessage = "buzzermusic settings updated successfully.  buzzermusic =" + buzzermusic + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
}

void wizSensor()
{
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String sensor = jObject["sensor"];
  Serial.println(sensor);

  if (sensor == "ultrasonic")
  {
    setup_ultrasonic();
    int ultrasonic_value = wizgear_ultrasonic_value();
    String ul_value = String(ultrasonic_value);
    server.send(200, "application/json", ul_value);
  }
  if (sensor == "weather")
  {
    String response = weather_station();
    server.send(200, "application/json", response);
  }
  if (sensor == "ldr")
  {
    String response = ldr_sensor();
    server.send(200, "application/json", response);
  }

  if (sensor == "gas-sensor")
  {
    int sensor_value = gas_sensor();
    String sensor_output = String(sensor_value);
    server.send(200, "application/json", sensor_output);
  }
  if (sensor == "soil-moisture")
  {
    String sensor_value = soil_sensor();
    server.send(200, "application/json", sensor_value);
  }
  if (sensor == "reedswitch")
  {
    String sensor_value = read_switch();
    server.send(200, "application/json", sensor_value);
  }
  if (sensor == "joystick")
  {
    String sensor_value = read_joystick();
    server.send(200, "application/json", sensor_value);
  }
  if (sensor == "dip")
  {
    String sensor_value = read_dip_switch();
    server.send(200, "application/json", sensor_value);
  }
  if (sensor == "accelerometer")
  {
    String sensor_value = wizgear_accelerometer_value();
    server.send(200, "application/json", sensor_value);
  }
}

String read_dip_switch()
{
  setup_dip_switch();
  int d1 = digitalRead(DIP_SWITCH_1);
  int d2 = digitalRead(DIP_SWITCH_2);
  int d3 = digitalRead(DIP_SWITCH_3);
  int d4 = digitalRead(DIP_SWITCH_4);
  String json = "{\"d1\":" + String(d1) + ",\"d2\":" + String(d2) + ",\"d3\":" + String(d3) + ",\"d4\":" + String(d4) + "}";
  NoTone();
  return json;
}
String read_joystick()
{
  int x_pos, y_pos, s_value;
  x_pos = analogRead(JOYSTICK_PIN_X);
  y_pos = analogRead(JOYSTICK_PIN_Y);
  s_value = digitalRead(JOYSTICK_SWITCH);

  String json = "{\"x\":" + String(x_pos) + ",\"y\":" + String(y_pos) + ",\"s\":" + String(s_value) + "}";
  return json;
}
String read_switch()
{
  setup_read_switch();

  int value = digitalRead(REED_SWITCH_PIN);
  Serial.println(value);
  String sensor_output = String(value);
  return sensor_output;
}
String soil_sensor()
{
  setup_soil_moisture_sensor();
  int value = analogRead(SOIL_MOUISTUR_SENSOR);
  float sensor_val = (100 - ((value / 4095.00) * 100));
  String sensor_output = String(sensor_val);
  return sensor_output;
}

int gas_sensor()
{
  setup_gas_sensor();
  float gas_sensor_value = analogRead(GAS_SENSOR_PIN); // Reading the sensor value
  return gas_sensor_value;
}

String weather_station()
{
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  String json = "{\"humid\":" + String(h) + ",\"temp\":" + String(t) + "}";
  return json;
}

String ldr_sensor()
{
  sensorValue1 = analogRead(LDRA_PIN);
  sensorValue2 = analogRead(LDRB_PIN);
  String json = "{\"right\":" + String(sensorValue1) + ",\"left\":" + String(sensorValue2) + "}";
  return json;
}

int wizgear_ultrasonic_value()
{
  digitalWrite(ULTRASONIC_TRIGGER_PIN, LOW); // Clears the trigPin
  delayMicroseconds(2);
  digitalWrite(ULTRASONIC_TRIGGER_PIN, HIGH); // Sets the trigPin on HIGH state for 10 micro seconds
  delayMicroseconds(10);
  digitalWrite(ULTRASONIC_TRIGGER_PIN, LOW);
  int dur = pulseIn(ULTRASONIC_ECHO_PIN, HIGH); // Reads the echoPin, returns the sound wave travel time in microseconds
  int dist = (int)dur * 0.034 / 2;              // Calculating the distance
  Serial.println(dist);
  return dist;
}

void rainbows()
{
  cors_disable();
  colorflow(20);
  wizgear_strip_light(0, 0, 0);
  String responseMessage = "Rainbow effect completed successfully."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);

}

void smartlightledPower()
{
  cors_disable();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String l = jObject["l"];
  String r = jObject["r"];
  String g = jObject["g"];
  String b = jObject["b"];
  String s = jObject["s"];
  if (s == "on")
  {
    wizgear_strip_single_led_light(l.toInt(), r.toInt(), g.toInt(), b.toInt());
  }
  else
  {
    wizgear_strip_single_led_light(l.toInt(), 0, 0, 0);
  }
  String responseMessage = "Smart light settings updated successfully. l =" + l + ",R =" + r + ", G =" + g + ", B=" + b + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
  delay(10);
}

void smartlightledTime()
{
  cors_disable();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String l = jObject["l"];
  String t = jObject["t"];
  String r = jObject["r"];
  String g = jObject["g"];
  String b = jObject["b"];
  wizgear_strip_single_led_light(l.toInt(), r.toInt(), g.toInt(), b.toInt());
  delay(t.toInt() * 1000);
  wizgear_strip_single_led_light(l.toInt(), 0, 0, 0);
  String responseMessage = "smartlightledTime updated successfully.  t =" + t + " ,l =" + l + " ,R=" + r + ", G=" + g + ", B=" + b + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
  delay(10);
}

void triColorLed()
{
  cors_disable();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String r = jObject["r"];
  String g = jObject["g"];
  String b = jObject["b"];
  String power = jObject["power"];
  if (power == "on")
  {
    wizgear_update_rgb_color(r.toInt(), g.toInt(), b.toInt());
  }
  else
  {
    wizgear_update_rgb_color(-10, -10, -10);
  }

  String responseMessage = "triColorLed settings updated successfully. power =" + power + ",R =" + r + ", G =" + g + ", B =" + b + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
}
void handleBrightness() {
  cors_disable();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject& jObject = jBuffer.parseObject(data);

  if (!jObject.success()) {
    Serial.println("Failed to parse JSON data");
    return;
  }

  String brightnessStr = jObject["value"];
  int brightness = brightnessStr.toInt();

  analogWrite(LDR_LED_PIN, brightness);
  String responseMessage = "ldr brightness settings updated successfully.  brightnessStr =" + brightnessStr + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
}
void smartlight()
{
  cors_disable();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String r = jObject["r"];
  String g = jObject["g"];
  String b = jObject["b"];

  wizgear_strip_light(r.toInt(), g.toInt(), b.toInt());
  String responseMessage = "Smart light settings updated successfully.  R= " + r + ", G= " + g + ", B= " + b + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
  delay(10);
}
void wizgear_motor_driver(int motor_num, int direction)
{
  if (motor_num == 1)
  {
    if (direction == 0)
    {
      // Stopping motor A
      digitalWrite(MOTORA_INPUT_1, LOW);
      digitalWrite(MOTORA_INPUT_2, LOW);
    }
    else if (direction == 2)
    {
      // Anti Clockwise motor A
      digitalWrite(MOTORA_INPUT_1, HIGH);
      digitalWrite(MOTORA_INPUT_2, LOW);
    }
    else
    {
      // Clockwise motor A
      digitalWrite(MOTORA_INPUT_1, LOW);
      digitalWrite(MOTORA_INPUT_2, HIGH);
    }
  }
  else if (motor_num == 2)
  {
    if (direction == 0)
    {
      // Stopping motor B
      digitalWrite(MOTORB_INPUT_1, LOW);
      digitalWrite(MOTORB_INPUT_2, LOW);
    }
    else if (direction == 1)
    {
      // Clockwise motor B
      digitalWrite(MOTORB_INPUT_1, HIGH);
      digitalWrite(MOTORB_INPUT_2, LOW);
    }
    else
    {
      // Anti Clockwise motor B
      digitalWrite(MOTORB_INPUT_1, LOW);
      digitalWrite(MOTORB_INPUT_2, HIGH);
    }
  }
}

void wizMotors()
{
  cors_disable();
  setup_motor_drivers();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String speed1 = jObject["speed1"];
  String direction1 = jObject["direction1"];
  String speed2 = jObject["speed2"];
  String direction2 = jObject["direction2"];

  reset_motor_drivers();
  ledcWrite(MOTORA_CHANNEL, speed1.toInt());
  wizgear_motor_driver(1, direction1.toInt());
  ledcWrite(MOTORB_CHANNEL, speed2.toInt());
  wizgear_motor_driver(2, direction2.toInt());

  String responseMessage = "wizMotors settings updated successfully. speed1 =" + speed1 + ", direction1 =" + direction1 + ",speed2 =" + speed2 + "direction2 =" + direction2 + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
  delay(10);
}

void smartlightTime()
{
  cors_disable();
  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String r = jObject["r"];
  String g = jObject["g"];
  String b = jObject["b"];
  String t = jObject["t"];
  wizgear_strip_light(r.toInt(), g.toInt(), b.toInt());
  delay(t.toInt() * 1000);
  wizgear_strip_light(0, 0, 0);
  String responseMessage = "smartlightTime effect completed successfully.R= " + r + ", G = " + g + ", B = " + b + ",T = " + t + "."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
  delay(10);
}

void colorWipe(uint32_t color, int wait)
{
  for (int i = 0; i < strip.numPixels(); i++)
  {
    strip.setPixelColor(i, color);
    strip.show();
    delay(wait);
  }
  delay(10);
}

void vibgyorcolors()
{
  cors_disable();
  strip.clear();
  colorWipe(strip.Color(148, 0, 211), 90);
  colorWipe(strip.Color(75, 0, 130), 90);
  colorWipe(strip.Color(0, 0, 255), 90);
  colorWipe(strip.Color(0, 0, 255), 90);
  colorWipe(strip.Color(0, 255, 0), 90);
  colorWipe(strip.Color(255, 255, 0), 90);
  colorWipe(strip.Color(255, 127, 0), 90);
  colorWipe(strip.Color(255, 0, 0), 90);
  strip.clear();
  wizgear_strip_light(0, 0, 0);
  String responseMessage = "vibgyorcolors effect completed successfully."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
  delay(100);
}

void offcolor()
{
  cors_disable();
  wizgear_strip_light(0, 0, 0);

  String responseMessage = "Smart light is turned off."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
  delay(10);
}

void rainbow(uint8_t wait)
{
  uint16_t i, j;

  for (j = 0; j < 256; j++)
  {
    for (i = 0; i < strip.numPixels(); i++)
    {
      strip.setPixelColor(i, Wheel((i + j) & 255));
    }
    strip.show();
    delay(wait);
  }
}
void colorwipes()
{
  cors_disable();
  rainbow(30);
  wizgear_strip_light(0, 0, 0);
  String responseMessage = "colorwipes effect completed successfully."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);

  delay(10);
}

uint8_t loopCount = 6; // Global variable to determine the number of color change loops

void multicolor() {
  cors_disable();
  for (uint8_t i = 0; i < loopCount; i++) {
    wizgear_strip_light(random(0, 255), random(0, 255), random(0, 255));
    String responseMessage = "multicolor effect completed successfully."; // Update the response message
    String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
    server.send(200, "application/json", jsonResponse);

    delay(1000);
  }
}

void heartbeatcolors()
{
  cors_disable();

  for (int j = 0; j < 7; j++)
  {
    for (int k = 0; k < 256; k++)
    {
      for (int i = 0; i < NUM_LEDS; i++)
      {
        switch (j)
        {
          case 0:
            strip.setPixelColor(i, k, 0, 0);
            break;
          case 1:
            strip.setPixelColor(i, 0, k, 0);
            break;
          case 2:
            strip.setPixelColor(i, 0, 0, k);
            break;
          case 3:
            strip.setPixelColor(i, k, k, 0);
            break;
          case 4:
            strip.setPixelColor(i, 0, k, k);
            break;
          case 5:
            strip.setPixelColor(i, k, k, k);
            break;
          case 6:
            strip.setPixelColor(i, k, 0, k);
            break;
        }
      }
      strip.show();
      delay(5);
    }
    for (int k = 255; k >= 0; k--)
    {
      for (int i = 0; i < NUM_LEDS; i++)
      {
        switch (j)
        {
          case 0:
            strip.setPixelColor(i, k, 0, 0);
            break;
          case 1:
            strip.setPixelColor(i, 0, k, 0);
            break;
          case 2:
            strip.setPixelColor(i, 0, 0, k);
            break;
          case 3:
            strip.setPixelColor(i, k, k, 0);
            break;
          case 4:
            strip.setPixelColor(i, 0, k, k);
            break;
          case 5:
            strip.setPixelColor(i, k, k, k);
            break;
          case 6:
            strip.setPixelColor(i, k, 0, k);
            break;
        }
      }
      strip.show();
      delay(5);
    }
  }
  wizgear_strip_light(0, 0, 0);
  String responseMessage = "heartbeatcolors effect completed successfully."; // Update the response message
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
}

// Fill the dots one after the other with a color
void colorWipe(uint32_t c, uint8_t wait)
{

  for (uint16_t i = 0; i < strip.numPixels(); i++)
  {
    strip.setBrightness(255);
    strip.setPixelColor(i, c);

    strip.show();
    delay(wait);
  }
}

// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos)
{
  if (WheelPos < 85)
  {
    return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
  }
  else if (WheelPos < 170)
  {
    WheelPos -= 85;
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  else
  {
    WheelPos -= 170;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
}

void colorflow(uint8_t wait)
{
  uint16_t i, j;

  for (j = 0; j < 256 * 5; j++)
  { // 5 cycles of all colors on wheel
    for (i = 0; i < strip.numPixels(); i++)
    {
      strip.setPixelColor(i, Wheel(((i * 256 / strip.numPixels()) + j) & 255));
    }
    strip.show();
    delay(10);
  }
}
// Input a value 0 to 255 to get a color value.

void servo_pan_tilt() {

  cors_disable();

  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  int degree = jObject["degree"];
  String mode = jObject["mode"];
  Serial.println("The Action : ");
  Serial.print(mode);
  setup_servo_motors();

  if (mode == "tilt") {
    TILT_SERVO_MOTOR.write(degree) ;
  }
  if (mode == "pan") {
    PAN_SERVO_MOTOR.write(degree) ;
  }

  String responseMessage = "Degree '" + String(degree) + "' completed successfully.";
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
}

void servo_action() {
  setup_servo_motors();
  delay(200);
  cors_disable();

  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String action = jObject["action"];
  Serial.println("The Action : ");
  Serial.print(action);
  int panAngle = PAN_SERVO_ANGLE;
  int tiltAngle = TILT_SERVO_ANGLE;

  if (action == "lookup") {
    TILT_SERVO_MOTOR.write(130);
  } else if (action == "lookdown") {
    TILT_SERVO_MOTOR.write(0);
  } else if (action == "lookstraight") {
    TILT_SERVO_MOTOR.write(tiltAngle);
  } else if (action == "yes") {
    TILT_SERVO_MOTOR.write(5);
    delay(500);
    TILT_SERVO_MOTOR.write(120);
    delay(500);
    TILT_SERVO_MOTOR.write(tiltAngle);
  } else if (action == "no") {
    PAN_SERVO_MOTOR.write(20);
    delay(500);
    PAN_SERVO_MOTOR.write(160);
    delay(500);
    PAN_SERVO_MOTOR.write(panAngle);
  } else if (action == "turnleft") {
    PAN_SERVO_MOTOR.write(panAngle);
    delay(500);
    PAN_SERVO_MOTOR.write(180);
  } else if (action == "turnright") {
    PAN_SERVO_MOTOR.write(panAngle);
    delay(500);
    PAN_SERVO_MOTOR.write(10);
  } else if (action == "straight") {
    reset_servo_motors();
  } else if (action == "littleleft") {
    PAN_SERVO_MOTOR.write(panAngle);
    delay(500);
    PAN_SERVO_MOTOR.write(130);
  } else if (action == "littleright") {
    PAN_SERVO_MOTOR.write(panAngle);
    delay(500);
    PAN_SERVO_MOTOR.write(60);
  } else if (action == "leftandright") {
    PAN_SERVO_MOTOR.write(160);
    delay(500);
    PAN_SERVO_MOTOR.write(20);
    delay(500);
    PAN_SERVO_MOTOR.write(panAngle);
  } else if (action == "upanddown") {
    TILT_SERVO_MOTOR.write(120);
    delay(500);
    TILT_SERVO_MOTOR.write(5);
    delay(500);
    TILT_SERVO_MOTOR.write(tiltAngle);
  }
  String responseMessage = "Action '" + action + "' completed successfully.";
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);
}


void Accelerometer_I2C_Address(byte I2C_address)
{
  Accelerometer_I2C.beginTransmission(0x53);
  Accelerometer_I2C.write(I2C_address);
  Accelerometer_I2C.endTransmission();
  Accelerometer_I2C.requestFrom(0x53, 1);

}
void setup_accelerometer() {
  Accelerometer_I2C.begin(ACCELEROMETER_SDA_PIN, ACCELEROMETER_SCL_PIN, 4000000);
  Accelerometer_I2C.beginTransmission(0x53);
  Accelerometer_I2C.write(0x2D);
  Accelerometer_I2C.write(0x08);
  Accelerometer_I2C.endTransmission();
}

String wizgear_accelerometer_value() {
  int x_value;
  int y_value;
  int z_value;
  setup_accelerometer();
  //Accelerometer X-Axis
  Accelerometer_I2C_Address(0x32);
  byte x0 = Accelerometer_I2C.read();

  Accelerometer_I2C_Address(0x33);
  byte x1 = Accelerometer_I2C.read();
  x1 = x1 & 0x03;

  uint16_t x = (x1 << 8) + x0;
  int16_t xf = x;
  if (xf > 511)
  {
    xf = xf - 1024;
  }
  x_value = map(xf, 0, 262, 0, 100);
  // ----------------------------------
  //Accelerometer meter Y-Axis

  Accelerometer_I2C_Address(0x34);
  byte y0 = Accelerometer_I2C.read();

  Accelerometer_I2C_Address(0x35);
  byte y1 = Accelerometer_I2C.read();
  y1 = y1 & 0x03;

  uint16_t y = (y1 << 8) + y0;
  int16_t yf = y;
  if (yf > 511)
  {
    yf = yf - 1024;
  }
  y_value = map(yf, 0, 262, 0, 100); //map the y_value 0 to 100

  //-------------------------------------------------

  //Accelerometer meter Z-Axis
  Accelerometer_I2C_Address(0x36);
  byte z0 = Accelerometer_I2C.read();

  Accelerometer_I2C_Address(0x37);
  byte z1 = Accelerometer_I2C.read();
  z1 = z1 & 0x03;

  uint16_t z = (z1 << 8) + z0;
  int16_t zf = z;
  if (zf > 511)
  {
    zf = zf - 1024;
  }
  z_value = map(zf, 0, 511, 0, 100);  //map the zvalue 0 to 100


  String json = "{\"x\":" + String(x_value) + ",\"y\":" + String(y_value) + ",\"z\":" + String(z_value) + "}";
  return json;
}

void oled_operation() {
  cors_disable();

  String data = server.arg("plain");
  StaticJsonBuffer<400> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String type = jObject["type"];


  Serial.print(type);

  setup_oled();
  if (type == "pixel") {
    int x_pos = jObject["value_x_pos"];
    int y_pos = jObject["value_x_pos"];
    u8g2.drawPixel(x_pos, y_pos);
    u8g2.sendBuffer();
  }
  if (type == "circle") {
    int x_pos = jObject["value_x_pos"];
    int y_pos = jObject["value_y_pos"];
    int radius = jObject["value_radius"];
    int fill_type = jObject["fill_type"];
    if (fill_type == 0) {
      u8g2.drawCircle(x_pos, y_pos, radius);
    }
    else {
      u8g2.drawDisc(x_pos, y_pos, radius);
    }
    u8g2.sendBuffer();
  }
  if (type == "rectangle") {
    int x_pos = jObject["value_x_pos"];
    int y_pos = jObject["value_y_pos"];
    int l = jObject["value_length"];
    int b = jObject["value_breadth"];
    int fill_type = jObject["fill_type"];
    int radius = jObject["value_radius"];

    if (fill_type == 0) {
      u8g2.drawRFrame(x_pos, y_pos, l, b, radius);
    }
    else {
      u8g2.drawRBox(x_pos, y_pos, l, b, radius);
    }
    u8g2.sendBuffer();
  }
  if (type == "text") {
    int x_pos = jObject["x"];
    int y_pos = jObject["y"];
    const char* msg = jObject["msg_to_write"];
    char msgBuffer[256];
    strncpy(msgBuffer, msg, sizeof(msgBuffer));
    msgBuffer[sizeof(msgBuffer) - 1] = '\0'; // Ensure null-termination
    u8g2.setFontPosTop();
    u8g2.drawStr(x_pos, y_pos, msgBuffer);
    u8g2.sendBuffer();
  }
  if (type == "line") {
    int x1_pos = jObject["x1"];
    int y1_pos = jObject["y1"];
    int x2_pos = jObject["x2"];
    int y2_pos = jObject["y2"];
    u8g2.drawLine(x1_pos, y1_pos, x2_pos, y2_pos);
    u8g2.sendBuffer();
  }
  if (type == "reset") {
    reset_oled();
  }
  String responseMessage = "Mode '" + type + "' completed successfully.";
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);

}


void relay_mode() {

  setup_relay_switch();
  cors_disable();

  String data = server.arg("plain");
  StaticJsonBuffer<200> jBuffer;
  JsonObject &jObject = jBuffer.parseObject(data);
  String mode = jObject["mode"];

  if (mode == "1") {
    digitalWrite(RELAY_SWITCH, HIGH);
  }
  if (mode == "0") {
    digitalWrite(RELAY_SWITCH, LOW);
  }

  String responseMessage = "Relay Mode '" + mode + "' completed successfully.";
  String jsonResponse = "{\"status\": \"True\", \"msg\": \"" + responseMessage + "\"}";
  server.send(200, "application/json", jsonResponse);

}

void cors_disable(){
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}