var highlightPause = false;
var latestCode = "";
var executionPause = false;
var executionStop = false;
var currentGroupName = "";
var executionId = 0;



var demoWorkspace = Blockly.inject("blockly_div", {
  media: "../static/media/",
  //maxBlocks: 5,
  toolbox: document.getElementById("toolbox"),
  zoom: {
    controls: true,
    wheel: true,

  },
  // grid:
  // {spacing: 20,
  //  length: 4,
  //  colour: '#ccc',
  //  snap: true},
  trashcan: true,
});
Blockly.JavaScript.addReservedWords("exit");
var outputArea = document.getElementById("output");
var runButton = document.getElementById("runButton");
var myInterpreter = null;
var runner;

function initApi(interpreter, scope) {
  // Add an API function for the alert() block, generated for "text_print" blocks.
  var wrapper = function (text) {
    text = text ? text.toString() : "";
    // outputArea.value = outputArea.value + '\n' + text;
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = text;
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  };
  interpreter.setProperty(
    scope,
    "alert",
    interpreter.createNativeFunction(wrapper)
  );
  // wizbot notifications handler

  // Add an API function for the prompt() block.
  var wrapper = function (text) {
    text = text ? text.toString() : "";
    return interpreter.createPrimitive(prompt(text));
  };
  interpreter.setProperty(
    scope,
    "prompt",
    interpreter.createNativeFunction(wrapper)
  );

  // Add an API for the wait block.  See wait_block.js
  initInterpreterWaitForSeconds(interpreter, scope);

  // Add an API function for highlighting blocks.
  var wrapper = function (id) {
    id = id ? id.toString() : "";
    return interpreter.createPrimitive(highlightBlock(id));
  };
  interpreter.setProperty(
    scope,
    "highlightBlock",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";

    return interpreter.createPrimitive(requestColorpower(myValue, myValue1));
  };
  interpreter.setProperty(
    scope,
    "requestColorpower",
    interpreter.createNativeFunction(wrapper)
  );


  var wrapper = function (myValue) {
    myValue = myValue ? myValue.toString() : "";


    return interpreter.createPrimitive(requestBuzzerMusic(myValue));
  };
  interpreter.setProperty(
    scope,
    "requestBuzzerMusic",
    interpreter.createNativeFunction(wrapper)
  );


  var wrapper = function (myValue, myValue1) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";


    return interpreter.createPrimitive(requestBuzzerfrequency(myValue, myValue1));
  };
  interpreter.setProperty(
    scope,
    "requestBuzzerfrequency",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";


    return interpreter.createPrimitive(requestBuzzerPower(myValue, myValue1));
  };
  interpreter.setProperty(
    scope,
    "requestBuzzerPower",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";


    return interpreter.createPrimitive(requestSevenSegmentPrebuild(myValue, myValue1));
  };
  interpreter.setProperty(
    scope,
    "requestSsNum",
    interpreter.createNativeFunction(wrapper)
  );


  var wrapper = function (myValue, myValue1) {

    console.log("The Values " + myValue);
    console.log("The Values " + myValue1);

    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    return interpreter.createPrimitive(requestSevenSegmentPrebuild(myValue, myValue1));
  };
  interpreter.setProperty(
    scope,
    "requestSSINPUT",
    interpreter.createNativeFunction(wrapper)
  );


  var wrapper = function (myValue, myValue1) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";


    return interpreter.createPrimitive(requestSevenSegmentPrebuild(myValue, myValue1));
  };
  interpreter.setProperty(
    scope,
    "requestSsChar",
    interpreter.createNativeFunction(wrapper)
  );



  var wrapper = function (myValue, myValue1, myValue2, myValue3, myValue4, myValue5, myValue6, myValue7) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    myValue2 = myValue2 ? myValue2.toString() : "";
    myValue3 = myValue3 ? myValue3.toString() : "";
    myValue4 = myValue4 ? myValue4.toString() : "";
    myValue5 = myValue5 ? myValue5.toString() : "";
    myValue6 = myValue6 ? myValue6.toString() : "";
    myValue7 = myValue7 ? myValue7.toString() : "";



    return interpreter.createPrimitive(requestSsCustom(myValue, myValue1, myValue2, myValue3, myValue4, myValue5, myValue6, myValue7));
  };
  interpreter.setProperty(
    scope,
    "requestSsCustom",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (tracknumber, foldernumber) {
    tracknumber = tracknumber ? tracknumber.toString() : "";
    foldernumber = foldernumber ? foldernumber.toString() : "";
    return interpreter.createPrimitive(update_dfplayer_track(tracknumber, foldernumber));
  };
  interpreter.setProperty(
    scope,
    "update_dfplayer_track",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (mode) {
    mode = mode ? mode.toString() : "";
    return interpreter.createPrimitive(update_dfplayer_control(mode));
  };
  interpreter.setProperty(
    scope,
    "update_dfplayer_control",
    interpreter.createNativeFunction(wrapper)
  );


  var wrapper = function (type, msg_to_write, x, y) {
    type = type ? type.toString() : "";
    msg_to_write = msg_to_write ? msg_to_write.toString() : "";
    x = x ? x.toString() : "";
    y = y ? y.toString() : "";
    return interpreter.createPrimitive(update_oled_generic(type, msg_to_write, x, y));
  };

  interpreter.setProperty(
    scope,
    "update_oled_generic",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (type, value_x_pos, value_y_pos, value_radius, fill_type) {
    type = type ? type.toString() : "";
    value_x_pos = value_x_pos ? value_x_pos.toString() : "";
    value_y_pos = value_y_pos ? value_y_pos.toString() : "";
    value_radius = value_radius ? value_radius.toString() : "";
    fill_type = fill_type ? fill_type.toString() : "";
    return interpreter.createPrimitive(update_oled_circle_builder(type, value_x_pos, value_y_pos, value_radius, fill_type));
  };
  interpreter.setProperty(
    scope,
    "update_oled_circle_builder",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (type, value_x_pos, value_y_pos, value_length, value_breadth, value_radius, fill_type) {
    type = type ? type.toString() : "";
    value_x_pos = value_x_pos ? value_x_pos.toString() : "";
    value_y_pos = value_y_pos ? value_y_pos.toString() : "";
    value_length = value_length ? value_length.toString() : "";
    value_breadth = value_breadth ? value_breadth.toString() : "";
    value_radius = value_radius ? value_radius.toString() : "";
    fill_type = fill_type ? fill_type.toString() : "";
    return interpreter.createPrimitive(update_oled_rectangle_builder(type, value_x_pos, value_y_pos, value_length, value_breadth, value_radius, fill_type));
  };
  interpreter.setProperty(
    scope,
    "update_oled_rectangle_builder",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (type, value_x_pos, value_y_pos) {
    type = type ? type.toString() : "";
    value_x_pos = value_x_pos ? value_x_pos.toString() : "";
    value_y_pos = value_y_pos ? value_y_pos.toString() : "";

    return interpreter.createPrimitive(update_oled_pixel_builder(type, value_x_pos, value_y_pos));
  };
  interpreter.setProperty(
    scope,
    "update_oled_pixel_builder",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (type, x1, y1, x2, y2) {
    type = type ? type.toString() : "";
    x1 = x1 ? x1.toString() : "";
    y1 = y1 ? y1.toString() : "";
    x2 = x2 ? x2.toString() : "";
    y2 = y2 ? y2.toString() : "";
    return interpreter.createPrimitive(update_oled_line_builder(type, x1, y1, x2, y2));
  };
  interpreter.setProperty(
    scope,
    "update_oled_line_builder",
    interpreter.createNativeFunction(wrapper)
  )

  var wrapper = function (type) {
    type = type ? type.toString() : "";
    return interpreter.createPrimitive(requestOledPrebuild(type));
  };
  interpreter.setProperty(
    scope,
    "requestOledPrebuild",
    interpreter.createNativeFunction(wrapper)
  );
  var wrapper = function (myValue) {
    myValue = myValue ? myValue.toString() : "";
    return interpreter.createPrimitive(requestTriColorpicker(myValue));
  };
  interpreter.setProperty(
    scope,
    "requestTriColorpicker",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    return interpreter.createPrimitive(requestTriColorpower(myValue, myValue1));
  };
  interpreter.setProperty(
    scope,
    "requestTriColorpower",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    return interpreter.createPrimitive(requestColorChange(myValue, myValue1));
  };
  interpreter.setProperty(
    scope,
    "requestColorChange",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue) {
    myValue = myValue ? myValue.toString() : "";
    return interpreter.createPrimitive(requestPrebuild(myValue));
  };
  interpreter.setProperty(
    scope,
    "requestPrebuild",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1, myValue2) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    myValue2 = myValue2 ? myValue2.toString() : "";
    return interpreter.createPrimitive(
      requestledColortime(myValue, myValue1, myValue2)
    );
  };
  interpreter.setProperty(
    scope,
    "requestledColortime",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1, myValue2, myValue3, myValue4) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    myValue2 = myValue2 ? myValue2.toString() : "";
    myValue3 = myValue3 ? myValue3.toString() : "";
    myValue4 = myValue4 ? myValue4.toString() : "";
    return interpreter.createPrimitive(
      requestLedRGB(myValue, myValue1, myValue2, myValue3, myValue4)
    );
  };
  interpreter.setProperty(
    scope,
    "requestLedRGB",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1, myValue2) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    myValue2 = myValue2 ? myValue2.toString() : "";
    return interpreter.createPrimitive(
      requestledColorpower(myValue, myValue1, myValue2)
    );
  };
  interpreter.setProperty(
    scope,
    "requestledColorpower",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1, myValue2) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    myValue2 = myValue2 ? myValue2.toString() : "";
    return interpreter.createPrimitive(
      requestRGBChange(myValue, myValue1, myValue2)
    );
  };
  interpreter.setProperty(
    scope,
    "requestRGBChange",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1, myValue2) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    myValue2 = myValue2 ? myValue2.toString() : "";


    return interpreter.createPrimitive(
      requestTricolorRGB(myValue, myValue1, myValue2)
    );
  };

  interpreter.setProperty(
    scope,
    "requestTricolorRGB",
    interpreter.createNativeFunction(wrapper)
  );


  var wrapper = function (color) {

    color = color.toString().replace(/^#/, '');

    // Parse the hex value to get the RGB components
    var bigint = parseInt(color, 16);

    // Extract the red, green, and blue components
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    console.log("The color: " + color);
    console.log("R: " + r);
    console.log("G: " + g);
    console.log("B: " + b);

    // Assuming interpreter and requestTricolorRGB are defined elsewhere
    // Make sure they are correctly implemented and accessible
    return interpreter.createPrimitive(
      requestTricolorPicker(r, g, b)
    );
  };

  interpreter.setProperty(
    scope,
    "requestTricolorPicker",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1, myValue2, myValue3) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    myValue2 = myValue2 ? myValue2.toString() : "";
    myValue3 = myValue3 ? myValue3.toString() : "";
    return interpreter.createPrimitive(
      requesMotorcontrol(myValue, myValue1, myValue2, myValue3)
    );
  };
  interpreter.setProperty(
    scope,
    "requesMotorcontrol",
    interpreter.createNativeFunction(wrapper)
  );

  var wrapper = function (myValue, myValue1) {
    myValue = myValue ? myValue.toString() : "";
    myValue1 = myValue1 ? myValue1.toString() : "";
    return interpreter.createPrimitive(sessionProcess(myValue, myValue1));
  };
  interpreter.setProperty(
    scope,
    "sessionProcess",
    interpreter.createNativeFunction(wrapper)
  );


  //---------------- Servo function STARTS---------------//

  var wrapper = function (degree, mode) {
    degree = degree ? degree.toString() : "";
    mode = mode ? mode.toString() : "";

    return interpreter.createPrimitive(
      requestServoDegreeMode(degree, mode)
    );
  };
  interpreter.setProperty(
    scope,
    "requestServoDegreeMode",
    interpreter.createNativeFunction(wrapper)
  );


  var wrapper = function (action) {
    action = action ? action.toString() : "";


    return interpreter.createPrimitive(
      requestServoAction(action)
    );
  };
  interpreter.setProperty(
    scope,
    "requestServoAction",
    interpreter.createNativeFunction(wrapper)
  );

  //---------------- Servo function ENDS---------------//


  //---------------- Sensor function STARTS---------------//


  var wrapper = function (value) {
    value = value ? value.toString() : "";

    return interpreter.createPrimitive(
      ldr_bridhtness(value)
    );
  };
  interpreter.setProperty(
    scope,
    "requestLdrBridhtness",
    interpreter.createNativeFunction(wrapper)
  );


  interpreter.setProperty(
    scope,
    "wizgear_sensor_read",
    interpreter.createAsyncFunction((sensor, callback) => {
      return interpreter.createPrimitive(process(sensor).then(function (result) {
        callback(result);
      }));
    })
  );

  //---------------- Sensor function END---------------//

  //---------------- JSON function STARTS---------------//
  interpreter.setProperty(
    scope,
    "parse_json_object",
    interpreter.createNativeFunction((json_obj, parsers) => {
      // Reading Object as JSON
      let response = null;
      let dataValue = null;
      try {
        if (typeof json_obj != "object") response = JSON.parse(json_obj);
        else response = json_obj;
      } catch (err) {
        console.log(err);
        return -1;
      }
      parsers.circularReference = parsers; // Creating a circular reference

      // Convert the circularObject to a string representation with circular references handled
      const circularString = JSON.stringify(parsers, circularReplacer(), 2);
      try {
        const jsonObject = JSON.parse(circularString);

        // Access the "data" key value
        if (jsonObject.properties && jsonObject.properties[0] && jsonObject.properties[0].properties && jsonObject.properties[0].properties.key && jsonObject.properties[0].properties.key.data) {
          dataValue = jsonObject.properties[0].properties.key.data;
        } else {
          console.log('No "data" key found in the JSON structure.');
          return -1;
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return -1;
      }
      let final_val = response[dataValue];
      console.log("The final value is :" + final_val);
      if (final_val == undefined) return 'Json key error';
      else return final_val;

    })
  );


  //---------------- Relay function---------------//

  var wrapper = function (mode) {

    mode = mode ? mode.toString() : "";

    return interpreter.createPrimitive(
      requestRelayMode(mode)
    );
  };
  interpreter.setProperty(
    scope,
    "requestRelayMode",
    interpreter.createNativeFunction(wrapper)
  );
}

function process(sensor_type) {
  let sensor_item = sensor_type.toString();
  // Create a promise that resolves after 10 seconds
  const timeoutPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Please check the wifi.");
    }, 10000); // 10 seconds in milliseconds
  });

  // Create a promise for the API call
  const apiCallPromise = window.flutter_inappwebview
    .callHandler("handler_trigger_api", sensor_item)
    .then((response) => {
      if (response != null) {
        return JSON.stringify(response);
      } else return "Failed to read sensor";
    });

  // Race the two promises to see which one resolves first
  return Promise.race([timeoutPromise, apiCallPromise]);
}



function circularReplacer() {
  const seen = new WeakSet();

  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return "[Circular Reference]";
      }
      seen.add(value);
    }
    return value;
  };
}

function highlightBlock(id) {
  demoWorkspace.highlightBlock(id);
  highlightPause = true;
}
function resetStepUi(clearOutput) {
  demoWorkspace.highlightBlock(null);
  highlightPause = false;
  runButton.disabled = "";

  if (clearOutput) {
    // outputArea.value = 'Program output:\n=================';
  }
}
function generateCodeAndLoadIntoInterpreter() {
  // Generate JavaScript code and parse it.
  // Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
  // Blockly.JavaScript.addReservedWords('highlightBlock');
  latestCode = Blockly.JavaScript.workspaceToCode(demoWorkspace);

  resetStepUi(true);
}
function resetInterpreter() {
  myInterpreter = null;
  if (executionId) {
    window.clearTimeout(executionId);
    executionId = 0;
  }
  $(".run-program-btn").html("Run");
  $(".run-program-btn").attr("disabled", false);
}

function runCode() {
  $(".run-program-btn").html(
    '<i class="fa fa-spinner fa-spin wizbot-icons"></i> Processing'
  );
  $(".run-program-btn").attr("disabled", true);

  if (!myInterpreter) {
    // First statement of this code.
    // Clear the program output.
    resetStepUi(true);
    runButton.disabled = "disabled";

    // And then show generated code in an alert.
    // In a timeout to allow the outputArea.value to reset first.
    setTimeout(function () {
      //can uncomment if want to see latest code
      console.log("Ready to execute the following code\n" + latestCode);

      // Begin execution
      highlightPause = false;
      myInterpreter = new Interpreter(latestCode, initApi);
      var i = 0;
      function nextStep() {
        if (executionStop) {
          console.log("execution stopped");
          executionStop = false;
          resetInterpreter();
        } else if (executionPause) {
          console.log("execution paused: ", executionPause);
          setTimeout(function () {
            fetchOtherUserStatus(currentGroupName);
            nextStep();
          }, 3000);
        } else {
          if (myInterpreter.step()) {
            // console.log("step "+i);
            i = i + 1;
            executionId = window.setTimeout(nextStep, 10);
          } else {
            // Program is complete.
            // outputArea.value += '\n\n<< Program complete >>';
            resetInterpreter();
            resetStepUi(false);
          }
        }
      }
      nextStep();
    }, 1);
    return;
  }
}

function stopCode() {
  // requesting stop execution
  executionStop = true;
  requestStopExecute();
}
generateCodeAndLoadIntoInterpreter();
demoWorkspace.addChangeListener(function (event) {
  if (!(event instanceof Blockly.Events.Ui)) {
    // Something changed. Parser needs to be reloaded.
    resetInterpreter();
    generateCodeAndLoadIntoInterpreter();
  }
});

function clearWorkspace() {
  selectedWorkspace = "";
  demoWorkspace.clear();
}