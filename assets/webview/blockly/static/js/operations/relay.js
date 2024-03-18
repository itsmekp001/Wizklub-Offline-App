// Tilt with degrees
Blockly.defineBlocksWithJsonArray([
    {
        "type": "wizgear_relay",
        "message0": "Relay: Mode %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "SWITCH",
                "options": [

                    ["ON", "on"],
                    ["OFF", "off"],

                ]
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 250,
        "tooltip": "",
        "helpUrl": "",
    },
]);

Blockly.JavaScript["wizgear_relay"] = function (block) {
    let power = '\'' + block.getFieldValue('SWITCH') + '\'';

    return "requestRelayMode(" + power + ");\n";
};
