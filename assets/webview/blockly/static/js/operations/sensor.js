Blockly.defineBlocksWithJsonArray([
    {
        "type": "ultrasonic",
        "message0": " Select Sensor %1",
        "args0": [
            {
              
                "type": "field_dropdown",
                
                
                "text": "Ultrasonic",
                "name": "logic",
                "check": "Number",
                "options": [
                    ["Ultrasonic", "0"],
                    ["Weather", "1"],
                    ["Joystick", "2"],
                    ["LDR", "3"],
                    ["Gas", "4"],
                    ["Soil-Moisture", "5"],
                    ["Dip", "6"],
                    ["Read Switch", "6"],
                    ["Accelerometer", "6"],
                    ["IR Remote", "6"],
                    ["Wheel Encoder", "6"],
                ],
            }
        ],

        "output": "Boolean",
        "colour": "300",
        "tooltip": "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
        "helpUrl": "%{BKY_LOGIC_BOOLEAN_HELPURL}"
    }
]);

Blockly.JavaScript['ultrasonic_sensor'] = function (block) {
    var dropdown_logic = block.getFieldValue('logic');
    var code = "";
    var distance = "";
    var msg = "";
    requestSensorValue('distance', function (err, data) {
        if (err != null) {
            console.error(err);
        } else {
            distance = data['response']['value'];
            console.log("[info] fetched value for distance" + distance);

        }
    });
    return [code, Blockly.JavaScript.ORDER_NONE];

};