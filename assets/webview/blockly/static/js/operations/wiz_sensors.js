Blockly.defineBlocksWithJsonArray([
    {
        "type": "wizgear_sensor_read",
        "message0": "Select Sensor %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "SENSOR",
                "options": [
                    ["Ultrasonic", "ultrasonic"],
                    ["Weather", "weather"],
                    ["Joystick", "joystick"],
                    ["LDR", "ldr"],
                    ["Gas", "gas-sensor"],
                    ["Soil-Moisture", "soil-moisture"],
                    ["Dip", "dip"],
                    ["Reed Switch", "reedswitch"],
                    ["Accelerometer", "accelerometer"],
                    ["IR Remote", "irremote"],
                    ["Wheel Encoder", "wheelencoder"],
                ],
            },
        ],
        "output": "Number",
        "colour": 100,
        "tooltip": "",
        "helpUrl": "",
    },
]);
Blockly.JavaScript["wizgear_sensor_read"] = function (block) {
    let sensor = format_dropdown_block_selection(block.getFieldValue("SENSOR"));
    let code = "wizgear_sensor_read(" + sensor + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];

};


Blockly.defineBlocksWithJsonArray([
    {
        "type": "ldr_bridhtness",
        "message0": "LDR: Brightness %1",
        "args0": [
            {
                "type": "input_value",
                "name": "BRIGHTNESS",
                "check": "Number",
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 100,
        "tooltip": "",
        "helpUrl": "",
    },
]);

Blockly.JavaScript["ldr_bridhtness"] = function (block) {
    let brightness = Blockly.JavaScript.valueToCode(block, "BRIGHTNESS", Blockly.JavaScript.ORDER_ATOMIC);
    return "requestLdrBridhtness(" + brightness + ");\n";

};

function format_dropdown_block_selection(text) {
    return "'" + text + "'";
}


