
// Tilt with degrees
Blockly.defineBlocksWithJsonArray([
    {
        "type": "wizgear_servo_tilt",
        "message0": "Servo: Tilt %1 Degrees",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "DEGREE",
                "options": number_option_generator(5, 180, 5),
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": "",
    }
]);

Blockly.JavaScript['wizgear_servo_tilt'] = function (block) {
    var degree = '\'' + block.getFieldValue('DEGREE') + '\'';
    return 'requestServoDegreeMode(' + degree + ',"tilt");\n';
};

// Pan with Degrees
Blockly.defineBlocksWithJsonArray([
    {
        "type": "wizgear_servo_pan",
        "message0": "Servo: Pan %1 Degrees",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "DEGREE",
                "options": number_option_generator(5, 180, 5),
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": "",
    },
]);

Blockly.JavaScript['wizgear_servo_pan'] = function (block) {
    var degree = '\'' + block.getFieldValue('DEGREE') + '\'';
    return 'requestServoDegreeMode(' + degree + ',"pan");\n';
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "wizgear_servo_pan_tilt_variable",
        "message0": "Servo: Mode %1 Degrees %2",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "MODE",
                "options": [
                    ["Tilt", "tilt"],
                    ["Pan", "pan"],
                ],
            },
            {
                "type": "input_value",
                "name": "DEGREE",
                "check": "Number",
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": "",
    },
]);

Blockly.JavaScript['wizgear_servo_pan_tilt_variable'] = function (block) {
    var degree = Blockly.JavaScript.valueToCode(block, 'DEGREE', Blockly.JavaScript.ORDER_ATOMIC);
    var mode = '\'' + block.getFieldValue('MODE') + '\'';
    return 'requestServoDegreeMode(' + degree + ',' + mode + ');\n';
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "wizgear_servo_action",
        "message0": "Servo: %1 ",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "CATEGORY",
                "options": [
                    ["Look Up", "lookup"],
                    ["Look Down", "lookdown"],
                    ["Look Straight", "lookstraight"],
                    ["Turn Left", "turnleft"],
                    ["Turn Right", "turnright"],
                    ["Straight", "straight"],
                    ["Say Yes", "yes"],
                    ["Say No", "no"],
                    ["Look Slightly Left", "littleleft"],
                    ["Look Slightly right", "littleright"],
                    ["Turn Left and Right", "leftandright"],
                    ["Look Up and Down", "upanddown"],
                ],
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": "",
    },
]);

Blockly.JavaScript['wizgear_servo_action'] = function (block) {
    var category = '\'' + block.getFieldValue('CATEGORY') + '\'';
    return 'requestServoAction(' + category + ');\n';
};

function number_option_generator(start, end, incrementor = 1) {
    let numbers = [];
    for (let i = start; i <= end; i += incrementor) {
        numbers.push([i.toString(), i.toString()]);
    }
    return numbers;
}