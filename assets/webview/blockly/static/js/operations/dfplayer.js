
Blockly.defineBlocksWithJsonArray([
    {
        "type": "wizgear_dfplayer_controls",
                "message0": "DF Player: Controls %1 Track",
                "args0": [
                    {
                        "type": "field_dropdown",
                        "name": "MODE",
                        "options": [
                            ["First", "first"],
                            ["Next", "next"],
                            ["Previous", "previous"],
                            ["Pause", "pause"],
                            ["Resume", "resume"],
                        ],
                    },
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": "100",
                "tooltip": "",
                "helpUrl": "",
    }
]);

Blockly.defineBlocksWithJsonArray([
    {
        "type": "wizgear_dfplayer_specific_track",
        "message0": "DF Player: Folder %1 file %2",
        "args0": [
            {
                "type": "input_value",
                "name": "FOLDER",
                "check": "Number",
            },
            {
                "type": "input_value",
                "name": "FILE",
                "check": "Number",
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "100",
        "tooltip": "",
        "helpUrl": "",
    },
])

Blockly.JavaScript["wizgear_dfplayer_controls"] = function (block) {
    let mode = '\'' + block.getFieldValue('MODE') + '\'';
    console.log("The mode selected ",mode);
    return "update_dfplayer_control(" + mode + ");\n";
};

Blockly.JavaScript["wizgear_dfplayer_specific_track"] = function (block) {
    let foldernumber = Blockly.JavaScript.valueToCode(block, "FOLDER", Blockly.JavaScript.ORDER_ATOMIC);
            let tracknumber = Blockly.JavaScript.valueToCode(block, "FILE", Blockly.JavaScript.ORDER_ATOMIC);
    console.log("the track number ",tracknumber);
    console.log("The folder number ", foldernumber);

    return "update_dfplayer_track(" + tracknumber + ", "+foldernumber+");\n";
};

