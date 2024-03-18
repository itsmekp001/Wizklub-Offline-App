#include <WiFi.h>
#include <WebServer.h>
#include <ArduinoJson.h>
#include <ESP32Servo.h>
#include <DFPlayerMini_Fast.h>
#include <SoftwareSerial.h>
#include "DHT.h"
#include <ESP32Servo.h>
#include <Wire.h>
#include <U8g2lib.h>

#define MOTORA_ENABLE 23  // Motor Drive 1 Enable Pin
#define MOTORA_INPUT_1 19 // Motor Driver 1 Pin
#define MOTORA_INPUT_2 18 // Motor Driver 1 Pin
#define MOTORA_CHANNEL 5  // Motor Driver 1 Channel
#define MOTORB_ENABLE 5   // Motor Drive 2 Enable Pin
#define MOTORB_INPUT_1 2  // Motor Driver 2 Pin
#define MOTORB_INPUT_2 4  // Motor Driver 2 Pin
#define MOTORB_CHANNEL 6
#define DHTPIN 32
#define DHTTYPE DHT11
#define LDRA_PIN 39
#define LDRB_PIN 36
#define LDR_LED_PIN 2
#define GAS_SENSOR_PIN 39
#define SOIL_MOUISTUR_SENSOR 36
#define REED_SWITCH_LED 25 // Reed Switch LED
#define REED_SWITCH_PIN 26
#define RELAY_SWITCH 15
#define ACCELEROMETER_SDA_PIN 33 // Accelerometer V2 pin
#define ACCELEROMETER_SCL_PIN 32 // Accelerometer V2 pin

TwoWire Accelerometer_I2C = TwoWire(0);

// Servo PINS
const int TILT_SERVO_PIN = 25;
const int PAN_SERVO_PIN = 26;
const int WHEEL_ENCODER_PIN = 15;

int TILT_SERVO_ANGLE = 30;
int PAN_SERVO_ANGLE = 90;

int wheel_encoder_counter = 0; // To handle rotations of wheel encoder

int servo_usage = 0;
Servo TILT_SERVO_MOTOR;
Servo PAN_SERVO_MOTOR;
// ------------------------



DHT dht(DHTPIN, DHTTYPE);
const int frequency = 5000;
const int resolution = 8;
const int buzzerPin = 26;
// Motor 2 connections

const int SERVO1_PIN = 25;
const int SERVO2_PIN = 26;

// Joy stick pin numbers

const int JOYSTICK_PIN_X = 32;
const int JOYSTICK_PIN_Y = 33; // 3V3 PC connect
const int JOYSTICK_SWITCH = 3;

int sensorValue1 = 0; // Bottom/Left photoresistor
int sensorValue2 = 0; // Right photoresistor

const int TRICOLOR_PIN_RED = 12;
const int TRICOLOR_PIN_GREEN = 14;
const int TRICOLOR_PIN_BLUE = 27;

int DIP_SWITCH_1 = 33;
int DIP_SWITCH_2 = 32;
int DIP_SWITCH_3 = 25;
int DIP_SWITCH_4 = 26;

/* Put your SSID & Password */
const char *ssid = "wizbot10";         // Enter SSID here
const char *password = "12345678"; // Enter Password here
/* Put IP Address details */


const int channel = 4;
const int resolution1 = 8;

int j; // to be used in loop
/*   Hap  py  Birth Day  to  you,  Hap py   birth day  to
     C4   C4   D4   C4   F4   E4   C4   C4   D4   C4   G4 */
unsigned int HBD_notes[] = {3720, 3720, 4140, 3720, 4590, 4400, 3720, 3720, 4140, 3720, 5120,

                            /*                       you, Hap py  Birth Day  dear  xxxx      Hap  py   birth
                                                     F4   C4   C4   C5   A4   F4   E4   D4   B4b  B4b  A4 */
                            4590, 3720, 3720, 5330, 5500, 4590, 4400, 4140, 5760, 5760, 5500,

                            /*                       day  to  you
                                                     F4   G4   F4   */
                            4590, 5120, 4590};

unsigned short HBD_interval[] = {400, 400, 800, 800, 800, 1000, 400, 400, 800, 800, 800, 1000, 400, 400, 800, 800, 800,
                                 800, 800, 400, 400, 800, 800, 800, 1200};

/*        Sa   Re   Ga  Ma    Pa  Dha  Ni   Sa*/
unsigned short SaReGa_notes[] = {2620, 2940, 3300, 3490, 3920, 4400, 4940, 5240, 5240, 4940, 4400, 3920, 3490, 3300, 2940, 2620};
unsigned short SaReGa_duration = 500; // Asuming all the notes are played for same duration

int a = 2;
int b = 4;
int c = 18;
int d = 19;
int e = 5;
int f = 23;
int g = 16;
int h = 17;

WebServer server(80);

#include <Adafruit_NeoPixel.h>
#define NUM_LEDS 7        // define total number of the led on the strip
#define STRIP_LEDS_PIN 22 // Define the pin number

Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUM_LEDS, STRIP_LEDS_PIN, NEO_GRB + NEO_KHZ800);

#define ULTRASONIC_TRIGGER_PIN 15 // Ultrasonic Trigger pin
#define ULTRASONIC_ECHO_PIN 13    // Ultrasonic Echo pin

#define DF_PLAYER_RX_PIN 16 // DF-player RX pin
#define DF_PLAYER_TX_PIN 17 // DF-player TX pin

SoftwareSerial DF_Player_Serial(DF_PLAYER_RX_PIN, DF_PLAYER_TX_PIN); // For MP3 audio RX, TX
DFPlayerMini_Fast df_player;

// OLED DIsplay 
U8G2_SH1106_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* reset=*/ U8X8_PIN_NONE); 


void setup_servo_motors() {
  TILT_SERVO_MOTOR.attach(TILT_SERVO_PIN);
  PAN_SERVO_MOTOR.attach(PAN_SERVO_PIN);
}
void reset_servo_motors() {
  TILT_SERVO_MOTOR.write(TILT_SERVO_ANGLE);
  PAN_SERVO_MOTOR.write(PAN_SERVO_ANGLE);
}

void reset_oled() {
  u8g2.clearBuffer();
  u8g2.sendBuffer();
}
void setup_oled() {
  u8g2.begin();
  u8g2.setFont( u8g2_font_wqy14_t_gb2312b);
  u8g2.setFontMode(0);
  u8g2.setDrawColor(1);
  u8g2.setFontDirection(0);
}

// Wheel encoder setup
void setup_wheel_encoder() {
  pinMode(WHEEL_ENCODER_PIN, INPUT);
  attachInterrupt(digitalPinToInterrupt(WHEEL_ENCODER_PIN), wiz_wheel_encoder, RISING);
}

// Relay setup
void setup_relay_switch() {
  pinMode(RELAY_SWITCH, OUTPUT);
}
/// volatile long wheel_encoder_counter = 0;

void wiz_wheel_encoder() {
  wheel_encoder_counter++;
}
void wiz_wheel_encoder_reset() {
  wheel_encoder_counter = 0;
}

void setup_dip_switch()
{
    pinMode(DIP_SWITCH_1, INPUT);
    pinMode(DIP_SWITCH_2, INPUT);
    pinMode(DIP_SWITCH_3, INPUT);
    pinMode(DIP_SWITCH_4, INPUT);
}

void setup_joystick()
{
    pinMode(JOYSTICK_PIN_X, INPUT);
    pinMode(JOYSTICK_PIN_Y, INPUT);
    pinMode(JOYSTICK_SWITCH, INPUT_PULLUP);
}

void setup_read_switch()
{
    pinMode(REED_SWITCH_PIN, INPUT);
    pinMode(REED_SWITCH_LED, OUTPUT);
}

void setup_soil_moisture_sensor()
{
    pinMode(SOIL_MOUISTUR_SENSOR, INPUT);
}

void setup_gas_sensor()
{
    pinMode(GAS_SENSOR_PIN, INPUT);
}

void setup_tricolor_led()
{
    pinMode(TRICOLOR_PIN_RED, OUTPUT);
    pinMode(TRICOLOR_PIN_GREEN, OUTPUT);
    pinMode(TRICOLOR_PIN_BLUE, OUTPUT);
}

void setup_df_player()
{
    DF_Player_Serial.begin(9600); // for the DF player
    df_player.begin(DF_Player_Serial, true);
}

void setup_ultrasonic()
{
    pinMode(ULTRASONIC_TRIGGER_PIN, OUTPUT);
    pinMode(ULTRASONIC_ECHO_PIN, INPUT);
}

void reset_motor_drivers()
{
    // Turn off the motors
    digitalWrite(MOTORA_INPUT_1, LOW);
    digitalWrite(MOTORA_INPUT_2, LOW);
    digitalWrite(MOTORB_INPUT_1, LOW);
    digitalWrite(MOTORB_INPUT_2, LOW);
}

void setup_seven_segment()
{
    pinMode(a, OUTPUT);
    pinMode(b, OUTPUT);
    pinMode(c, OUTPUT);
    pinMode(d, OUTPUT);
    pinMode(e, OUTPUT);
    pinMode(f, OUTPUT);
    pinMode(g, OUTPUT);
    pinMode(h, OUTPUT);
}

void setup_motor_drivers()
{
    pinMode(MOTORA_ENABLE, OUTPUT);
    pinMode(MOTORA_INPUT_1, OUTPUT);
    pinMode(MOTORA_INPUT_2, OUTPUT);
    pinMode(MOTORB_ENABLE, OUTPUT);
    pinMode(MOTORB_INPUT_1, OUTPUT);
    pinMode(MOTORB_INPUT_2, OUTPUT);
    // Motor A channel setup
    ledcSetup(MOTORA_CHANNEL, 30000, 8);
    ledcAttachPin(MOTORA_ENABLE, MOTORA_CHANNEL);
    // Motor B channel setup
    ledcSetup(MOTORB_CHANNEL, 30000, 8);
    ledcAttachPin(MOTORB_ENABLE, MOTORB_CHANNEL);
    reset_motor_drivers();
}

void ss_pin_config(int valA, int valB, int valC, int valD, int valE, int valF, int valG, int valH = 1)
{
    digitalWrite(a, valA);
    digitalWrite(b, valB);
    digitalWrite(c, valC);
    digitalWrite(d, valD);
    digitalWrite(e, valE);
    digitalWrite(f, valF);
    digitalWrite(g, valG);
    digitalWrite(h, valH);
}
