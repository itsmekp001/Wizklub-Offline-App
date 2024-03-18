var WIZURL = "http://192.168.4.1";

var rgbColorMap = {
  "light steel blue": [176, 196, 222],
  "olive drab": [107, 142, 35],
  "navajo white": [255, 222, 173],
  "floral white": [255, 250, 240],
  green: [0, 255, 0],
  magenta: [255, 0, 255],
  "medium sea green": [60, 179, 113],
  orange: [255, 165, 0],
  "ghost white": [248, 248, 255],
  "light sea green": [32, 178, 170],
  orchid: [218, 112, 214],
  "light golden rod yellow": [250, 250, 210],
  "light slate gray": [119, 136, 153],
  "peach puff": [255, 218, 185],
  gray: [128, 128, 128],
  "dark salmon": [233, 150, 122],
  "dark olive green": [85, 107, 47],
  "sea shell": [255, 245, 238],
  "old lace": [253, 245, 230],
  gainsboro: [220, 220, 220],
  "papaya whip": [255, 239, 213],
  "aqua marine": [127, 255, 212],
  "light blue": [173, 216, 230],
  "dark golden rod": [184, 134, 11],
  "medium blue": [0, 0, 205],
  tan: [210, 180, 140],
  "lavender blush": [255, 240, 245],
  tomato: [255, 99, 71],
  "light pink": [255, 182, 193],
  salmon: [250, 128, 114],
  beige: [245, 245, 220],
  "corn silk": [255, 248, 220],
  yellow: [255, 255, 0],
  "midnight blue": [25, 25, 112],
  lime: [0, 255, 0],
  "dark green": [0, 100, 0],
  sienna: [160, 82, 45],
  "medium violet red": [199, 21, 133],
  chocolate: [210, 105, 30],
  crimson: [220, 20, 60],
  pink: [255, 192, 203],
  "medium aqua marine": [102, 205, 170],
  "spring green": [0, 255, 127],
  "slate blue": [106, 90, 205],
  ivory: [255, 255, 240],
  "dark sea green": [143, 188, 143],
  "lime green": [50, 205, 50],
  purple: [128, 0, 128],
  "slate gray": [112, 128, 144],
  firebrick: [178, 34, 34],
  maroon: [128, 0, 0],
  "misty rose": [255, 228, 225],
  "medium orchid": [186, 85, 211],
  "dark violet": [148, 0, 211],
  honeydew: [240, 255, 240],
  "light sky blue": [135, 206, 250],
  gold: [255, 215, 0],
  "pale violet red": [219, 112, 147],
  "blanched almond": [255, 235, 205],
  "alice blue": [240, 248, 255],
  "pale turquoise": [175, 238, 238],
  white: [255, 255, 255],
  "dodger blue": [30, 144, 255],
  "yellow green": [154, 205, 50],
  "lawn green": [124, 252, 0],
  thistle: [216, 191, 216],
  "dark blue": [0, 0, 139],
  "dark magenta": [139, 0, 139],
  black: [0, 0, 0],
  "golden rod": [218, 165, 32],
  azure: [240, 255, 255],
  "medium turquoise": [72, 209, 204],
  "steel blue": [70, 130, 180],
  peru: [205, 133, 63],
  brown: [165, 42, 42],
  "blue violet": [138, 43, 226],
  "deep sky blue": [0, 191, 255],
  khaki: [240, 230, 140],
  bisque: [255, 228, 196],
  "saddle brown": [139, 69, 19],
  red: [100, 0, 0],
  "medium spring green": [0, 250, 154],
  "dark cyan": [0, 139, 139],
  "green yellow": [173, 255, 47],
  wheat: [245, 222, 179],
  "pale golden rod": [238, 232, 170],
  "dark slate blue": [72, 61, 139],
  cyan: [0, 255, 255],
  "hot pink": [255, 105, 180],
  "orange red": [255, 69, 0],
  plum: [221, 160, 221],
  "sandy brown": [244, 164, 96],
  "medium purple": [147, 112, 219],
  "light green": [144, 238, 144],
  "medium slate blue": [123, 104, 238],
  "royal blue": [65, 105, 225],
  violet: [238, 130, 238],
  "forest green": [34, 139, 34],
  "light salmon": [255, 160, 122],
  "light yellow": [255, 255, 224],
  "dark turquoise": [0, 206, 209],
  "indian red": [205, 92, 92],
  blue: [0, 0, 100],
  lavender: [230, 230, 250],
  "deep pink": [255, 20, 147],
  "burly wood": [222, 184, 135],
  "pale green": [152, 251, 152],
  teal: [0, 128, 128],
  "dark orchid": [153, 50, 204],
  silver: [192, 192, 192],
  "lemon chiffon": [255, 250, 205],
  "antique white": [250, 235, 215],
  coral: [255, 127, 80],
  "light coral": [240, 128, 128],
  olive: [128, 128, 0],
  "dark orange": [255, 140, 0],
  "rosy brown": [188, 143, 143],
  "cadet blue": [95, 158, 160],
  navy: [0, 0, 128],
  indigo: [75, 0, 130],
  "dark red": [139, 0, 0],
  "mint cream": [245, 255, 250],
  "corn flower blue": [100, 149, 237],
  snow: [255, 250, 250],
  "sea green": [46, 139, 87],
  "dark slate gray": [47, 79, 79],
  turquoise: [64, 224, 208],
  "light cyan": [224, 255, 255],
  "dark khaki": [189, 183, 107],
  linen: [250, 240, 230],
  moccasin: [255, 228, 181],
  laal: [100, 0, 0],
  hara: [0, 100, 0],
  neela: [0, 0, 100],
  gulaabee: [255, 192, 203],
  saphed: [255, 255, 255],
  peela: [255, 255, 0],
  santara: [255, 165, 0],
  bainganee: [128, 0, 128],
  neel: [75, 0, 130],
  kaala: [0, 0, 0],
  lala: [100, 0, 0],
  sabuja: [0, 100, 0],
  parakastha: [0, 0, 100],
  sada: [255, 192, 203],
  haluda: [255, 255, 255],
  kamala: [255, 255, 0],
  raktabarna: [255, 165, 0],
  begani: [128, 0, 128],
  nilabarna: [75, 0, 130],
  kalo: [0, 0, 0],
  kempu: [100, 0, 0],
  hasiru: [0, 100, 0],
  nili: [0, 0, 100],
  gulabi: [255, 192, 203],
  bili: [255, 255, 255],
  haladi: [255, 255, 0],
  kittale: [255, 165, 0],
  nerale: [128, 0, 128],
  indigo: [75, 0, 130],
  kappu: [0, 0, 0],
};

function makeRequest(_parameter, _data) {
  return $.ajax({
    url: window.location.origin + "/_api/" + _parameter,
    data: _data,
    async: false,
    type: "POST",
  });
}

// ------------------- color apis START -------------------- //

function requestColorpower(color, power) {
  var message = "Executed smartlight color power block : (color : " + color + ", power : " + power + ")";

  red = rgbColorMap[color][0];
  green = rgbColorMap[color][1];
  blue = rgbColorMap[color][2];

  if (power == "on") {
    var settings = {
      url: "http://192.168.4.1/smartlight",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "text/plain",
      },

      data: "{r:" + red + ",g:" + green + ",b:" + blue + "}",
      error: function (data) { },
    };

    $.ajax(settings).done(function (response) { });
  } else {
    var settings = {
      url: "http://192.168.4.1/off",
      method: "POST",
      timeout: 0,
      headers: {},
      error: function (data) { },
    };

    $.ajax(settings).done(function (response) { });
  }
}
function requestPrebuild(prebuildData) {
  console.log("Prebuild block type :" + prebuildData);
  if (prebuildData == "colorwipe") {
    var message = "Executed smartlight prebuild  colorwipe block";
    var settings = {
      url: "http://192.168.4.1/colorwipe",
      method: "POST",
      timeout: 0,
      headers: {},
      error: function (data) { },
    };

    $.ajax(settings).done(function (response) { });
  } else if (prebuildData == "rainbow") {
    var message = "Executed smartlight prebuild  raibow colors";
    var settings = {
      url: "http://192.168.4.1/rainbow",
      method: "POST",
      timeout: 0,
      headers: {},
      error: function (data) { },
    };
    console.log("rainbow......");
    $.ajax(settings).done(function (response) { });
  } else if (prebuildData == "vibgyor") {
    var message = "Executed smartlight prebuild vibyor color";

    var settings = {
      url: "http://192.168.4.1/vibgyor",
      method: "POST",
      timeout: 0,
      headers: {},
      error: function (data) { },
    };

    $.ajax(settings).done(function (response) { });
  } else if (prebuildData == "heartbeat") {
    var message = "Executed smartlight prebuild heartbeat";

    var settings = {
      url: "http://192.168.4.1/heartbeat",
      method: "POST",
      timeout: 0,
      headers: {},
      error: function (data) { },
    };

    $.ajax(settings).done(function (response) { });
  }
  else if (prebuildData == "multicolor") {
    var message = "Executed smartlight prebuild multicolor";

    var settings = {
      url: "http://192.168.4.1/multicolor",
      method: "POST",
      timeout: 0,
      headers: {},
      error: function (data) { },
    };

    $.ajax(settings).done(function (response) { });
  }
}

function requestRGBChange(red, green, blue) {
  var message = "Executed Smartlight RGB block : RGB(red : " + red + ",green : " + green + ", blue : " + blue + ")";

  var settings = {
    url: "http://192.168.4.1/smartlight",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },

    data: "{r:" + red + ",g:" + green + ",b:" + blue + "}",
    error: function (data) { },
  };

  $.ajax(settings).done(function (response) { });
}

function requestColorChange(color, totalTime) {
  var message = "Executed smartlight color duration block : (color : " + color + ",duration : " + totalTime + ")";


  console.log(color);
  red = rgbColorMap[color][0];
  green = rgbColorMap[color][1];
  blue = rgbColorMap[color][2];
  var settings = {
    url: "http://192.168.4.1/smartlightTime",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },
    data: "{r:" + red + ",g:" + green + ",b:" + blue + ",t:" + totalTime + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}


function requestLedRGB(led, red, green, blue, power) {

  var message = "Executed smartlight-led RGB color power block : (led:" + led + ",red:" + red + ",green:" + green + ",blue:" + blue + ",power:" + power + ")";



  var settings = {
    url: "http://192.168.4.1/smartlightledPower",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },
    data:
      "{r:" + red + ",g:" + green + ",b:" + blue + ",l:" + led + ",s:" + power + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function requestledColortime(led, color, time) {
  var message = "Executed smartlight led color duration block : (led:" + led + ",color:" + color + ",duration:" + time + ")";


  red = rgbColorMap[color][0];
  green = rgbColorMap[color][1];
  blue = rgbColorMap[color][2];
  var settings = {
    url: "http://192.168.4.1/smartlightledtime",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },
    data:
      "{r:" +
      red +
      ",g:" +
      green +
      ",b:" +
      blue +
      ",l:" +
      led +
      ",t:" +
      time +
      "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
function requestledColorpower(led, color, power) {
  var message = "Executed smartlight-led color power block: (led:" + led + ",color:" + color + ",duration:" + power + ")";



  red = rgbColorMap[color][0];
  green = rgbColorMap[color][1];
  blue = rgbColorMap[color][2];

  var settings = {
    url: "http://192.168.4.1/smartlightledPower",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },
    data:
      "{r:" +
      red +
      ",g:" +
      green +
      ",b:" +
      blue +
      ",l:" +
      led +
      ",s:" +
      power +
      "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function requestTriColorpower(color, power) {
  var message = "Executed Tri-color color power block : (color:" + color + ",power:" + power + ")";



  red = rgbColorMap[color][0];
  green = rgbColorMap[color][1];
  blue = rgbColorMap[color][2];

  var redval = Math.round(red / 1.7);

  var settings = {
    url: "http://192.168.4.1/tricolorled",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },
    data:
      "{r:" + redval + ",g:" + green + ",b:" + blue + ",power:" + power + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function requesMotorcontrol(motor1, speed1, motor2, speed2) {

  console.log(motor1, motor2);
  var message = "Executed motor driver blocks : (motor1:" + motor1 + ",speed1:" + speed1 + ",motor2:" + speed2 + ")";


  var settings = {
    url: "http://192.168.4.1/motor",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },
    data:
      '{"speed1":' +
      speed1 +
      ',\r\n"speed2":' +
      speed2 +
      ',\r\n"direction1":' +
      motor1 +
      ',\r\n"direction2":' +
      motor2 +
      "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });



}

function requestBuzzerMusic(music) {
  var message = "Executed Buzzer music block : Buzzer(Muzic : " + music + ")";



  var settings = {
    url: "http://192.168.4.1/buzzer",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },

    data: "{buz_music:" + music + "}",
    error: function (data) { },
  };

  $.ajax(settings).done(function (response) { });
}

function requestBuzzerfrequency(frequency, duration) {

  var message = "Executed Buzzer Frequency block : Buzzer(Frequency : " + frequency + ", duration :" + duration + ")";


  var settings = {
    "url": "http://192.168.4.1/buzzerfrequency",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"frequency\":" + frequency + ",\"duration\":" + duration + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function requestBuzzerPower(frequency, power) {

  var settings = {
    "url": "http://192.168.4.1/buzzerPower",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"frequency\":" + frequency + ",\"power\":" + power + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function requestSevenSegmentPrebuild(input, power) {


  var settings = {
    "url": "http://192.168.4.1/ss_input",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"input\":" + input + ",\"power\":" + power + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function requestSsCustom(led0, led1, led2, led3, led4, led5, led6, led7) {

  var settings = {
    "url": "http://192.168.4.1/ss_custom",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"led0\":" + led0 + ",\"led1\":" + led1 + ",\"led2\":" + led2 + ",\"led3\":" + led3 + ",\"led4\":" + led4 + ",\"led5\":" + led5 + ",\"led6\":" + led6 + ",\"led7\":" + led7 + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function update_dfplayer_control(mode) {

  // console.log("The mdoe is ",mode);
  var settings = {
    "url": "http://192.168.4.1/update_dfplayer_control",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"mode\":" + mode + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function update_dfplayer_track(tracknumber, foldernumber) {
  // console.log('The track number ',tracknumber + "The track folder ", foldernumber )
  var settings = {
    "url": "http://192.168.4.1/update_dfplayer_track",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"track_number\":" + tracknumber + ",\"folder_number\":" + foldernumber + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

// ------------------- OLED apis STARTS -------------------- //

function update_oled_generic(type, msg_to_write, x, y) {

  console.log("OLED  block is running type generic ........" + type);
  console.log(msg_to_write);
  console.log(x);
  console.log(y);

  console.log("Oled Type is : " + type);
  var settings = {
    "url": "http://192.168.4.1/oled",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"type\":" + type + ",\"msg_to_write\":" + msg_to_write + ",\"x\":" + x + ",\"y\":" + y + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
function update_oled_circle_builder(type, value_x_pos, value_y_pos, value_radius, fill_type) {

  console.log("OLED  block is running type ........" + type);
  var settings = {
    "url": "http://192.168.4.1/oled",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"type\":" + type + ",\"value_x_pos\":" + value_x_pos + ",\"value_y_pos\":" + value_y_pos + ",\"value_radius\":" + value_radius + ",\"fill_type\":" + fill_type + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
function update_oled_rectangle_builder(type, value_x_pos, value_y_pos, value_length, value_breadth, value_radius, fill_type) {

  console.log("The api mode :" + type);

  var settings = {
    "url": "http://192.168.4.1/oled",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"type\":" + type + ",\"value_x_pos\":" + value_x_pos + ",\"value_y_pos\":" + value_y_pos + ",\"value_length\":" + value_length + ",\"value_breadth\":" + value_breadth + ",\"value_radius\":" + value_radius + ",\"fill_type\":" + fill_type + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
function update_oled_pixel_builder(type, value_x_pos, value_y_pos) {

  console.log("OLED  block is running type ........" + type);
  var settings = {
    "url": "http://192.168.4.1/oled",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"type\":" + type + ",\"value_x_pos\":" + value_x_pos + ",\"value_y_pos\":" + value_y_pos + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function update_oled_line_builder(type, x1, y1, x2, y2) {

  console.log("OLED  block is running type ........" + type);
  var settings = {
    "url": "http://192.168.4.1/oled",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"type\":" + type + ",\"x1\":" + x1 + ",\"x2\":" + x2 + ",\"y1\":" + y1 + ",\"y2\":" + y2 + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function requestOledPrebuild(type) {

  console.log("OLED  block is running type ........" + type);
  var settings = {
    "url": "http://192.168.4.1/oled",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"type\":" + type + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

// ------------------- OLED apis END -------------------- //


// ------------------- Servo API STARTS -------------------- //

function requestServoDegreeMode(degree, mode) {

  var settings = {
    "url": "http://192.168.4.1/servo/pan_tilt",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"degree\":" + degree + ",\"mode\":" + mode + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function requestServoAction(action) {

  var settings = {
    "url": "http://192.168.4.1/servo/action",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"action\":" + action + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

// ------------------- Servo API ENDS -------------------- //


// ------------------- Relay API START -------------------- //

function requestRelayMode(mode) {

  var settings = {
    "url": "http://192.168.4.1/relay",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "text/plain"
    },
    "data": "{\"mode\":" + mode + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

// ------------------- Relay API ENDS -------------------- //

function requestTricolorRGB(red, green, blue) {
  console.log("Parameters:", { red, green, blue });
  var message = "Executed Tri-color  RGB block:  RGB(" + red + "," + green + ", " + blue + ")";

  var redval = Math.round(red / 1.7);

  var settings = {
    url: "http://192.168.4.1/tricolorled",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },
    data: "{r:" + redval + ",g:" + green + ",b:" + blue + ",power:on}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function requestTricolorPicker(red, green, blue) {
  console.log("Parameters:", { red, green, blue });
  var message = "Executed Tri-color  RGB block:  RGB(" + red + "," + green + ", " + blue + ")";

  var redval = Math.round(red / 1.7);

  var settings = {
    url: "http://192.168.4.1/tricolorled",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },
    data: "{r:" + redval + ",g:" + green + ",b:" + blue + ",power:on}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function ldr_bridhtness(value) {
  var settings = {
    url: "http://192.168.4.1/ldr_bridhtness",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "text/plain",
    },
    data: "{value:" + value + "}",
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function save_current_workspace() {
  console.log("Save function is running....");
  var workspace = Blockly.getMainWorkspace("wiz_blockly");
  console.log("The xml format : ", workspace);
  var xml_dom_element = Blockly.Xml.workspaceToDom(workspace);
  var workspace_xml = Blockly.Xml.domToPrettyText(xml_dom_element);


  window.flutter_inappwebview.callHandler('save_workspace', workspace_xml).then(function (result) {
    console.log("data send to flutter side :" + workspace_xml);

  });
}

function load_saved_workspace(xml_data) {
  var workspace = Blockly.getMainWorkspace("wiz_blockly");
  console.log("load_saved_workspace.........................");
  console.log(xml_data);

  try {
    console.log("Inside the try.........................");
    var xmlDom = Blockly.Xml.textToDom(xml_data);
    console.log(workspace);
    workspace.clear();
    Blockly.Xml.domToWorkspace(xmlDom, workspace);
    console.log("The load function ENDS...");
  } catch (error) {
    console.error("Error loading workspace:", error);
  }
}