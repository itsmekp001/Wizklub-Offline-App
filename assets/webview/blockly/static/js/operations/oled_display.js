Blockly.defineBlocksWithJsonArray([
    {
        "type": "wizgear_oled_reset",
        "message0": "OLED: Reset",
        "previousStatement": null,
        "nextStatement": null,
        "colour": "100",
        "tooltip": "",
        "helpUrl": "",
    }]);
// OLED Text Block
Blockly.defineBlocksWithJsonArray([{
    "type": "wizgear_oled_text",
    "message0": "OLED:Text X Axis Pos: %1 Y Axis Pos: %2 Message: %3",
    "args0": [
        {
            "type": "input_value",
            "name": "x_pos",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "y_pos",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "msg",
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "100",
    "tooltip": "",
    "helpUrl": "",
}]);
// OLED Circle Block with Radius and Fill Params
Blockly.defineBlocksWithJsonArray([{
    "type": "wizgear_oled_circle",
    "message0": "OLED:Circle X Axis Pos: %1 Y Axis Pos: %2 Radius: %3 %4",
    "args0": [
        {
            "type": "input_value",
            "name": "x_pos",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "y_pos",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "radius",
            "check": "Number",
        },
        {
            "type": "field_dropdown",
            "name": "fill_type",
            "options": [
                ["Not Filled", "0"],
                ["Filled", "1"],
            ],
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "100",
    "tooltip": "",
    "helpUrl": "",
}]);
// OLED Rectange Block with Length, Breadth and Fill Params
Blockly.defineBlocksWithJsonArray([{
    "type": "wizgear_oled_rectangle",
    "message0": "OLED: Rectangle X Axis Pos: %1 Y Axis Pos: %2 Length: %3 Breadth: %4 Radius: %5 %6",
    "args0": [
        {
            "type": "input_value",
            "name": "x_pos",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "y_pos",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "length",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "breadth",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "radius",
            "check": "Number",
        },
        {
            "type": "field_dropdown",
            "name": "fill_type",
            "options": [
                ["Not Filled", "0"],
                ["Filled", "1"],
            ],
        },
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "100",
    "tooltip": "",
    "helpUrl": "",
}]);
// OLED Pixel Block
Blockly.defineBlocksWithJsonArray([{
    "type": "wizgear_oled_pixel",
    "message0": "OLED: Pixel %1 X Axis Pos: %2 Y Axis Pos: %3",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_value",
            "name": "x_pos",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "y_pos",
            "check": "Number",
        },
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "100",
    "tooltip": "",
    "helpUrl": "",
}]);
// OLED Line Block
Blockly.defineBlocksWithJsonArray([{
    "type": "wizgear_oled_line",
    "message0": "OLED: Line %1 X Axis Pos 1: %2 Y Axis Pos 1: %3 X Axis Pos 2: %4 Y Axis Pos 2: %5",
    "args0": [
        {
            "type": "input_dummy",
        },
        {
            "type": "input_value",
            "name": "x_pos",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "y_pos",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "x_pos2",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "y_pos2",
            "check": "Number",
        },
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "100",
    "tooltip": "",
    "helpUrl": "",
}]);
// OLED Prebuild

Blockly.JavaScript["wizgear_oled_reset"] = function () {
    let type = format_dropdown_block_selection("reset");
    let msg_to_write = null;
    let x = 0;
    let y = 0;
    return "update_oled_generic(" + type + "," + msg_to_write + "," + x + "," + y + ");\n";
};
Blockly.JavaScript["wizgear_oled_text"] = function (block) {
    let type = format_dropdown_block_selection("text");
    let value_x_pos = Blockly.JavaScript.valueToCode(block, "x_pos", Blockly.JavaScript.ORDER_ATOMIC);
    let value_y_pos = Blockly.JavaScript.valueToCode(block, "y_pos", Blockly.JavaScript.ORDER_ATOMIC);
    value_x_pos = parseInt(value_x_pos);
    value_y_pos = parseInt(value_y_pos);
    let msg_to_write = Blockly.JavaScript.valueToCode(block, "msg", Blockly.JavaScript.ORDER_ATOMIC);
    return "update_oled_generic(" + type + "," + msg_to_write + "," + value_x_pos + "," + value_y_pos + ");\n";
};
Blockly.JavaScript["wizgear_oled_circle"] = function (block) {
    let type = format_dropdown_block_selection("circle");
    let value_x_pos = Blockly.JavaScript.valueToCode(block, "x_pos", Blockly.JavaScript.ORDER_ATOMIC);
    let value_y_pos = Blockly.JavaScript.valueToCode(block, "y_pos", Blockly.JavaScript.ORDER_ATOMIC);
    let value_radius = Blockly.JavaScript.valueToCode(block, "radius", Blockly.JavaScript.ORDER_ATOMIC);
    let fill_type = block.getFieldValue("fill_type");
    value_x_pos = parseInt(value_x_pos);
    value_y_pos = parseInt(value_y_pos);
    value_radius = parseInt(value_radius);
    fill_type = parseInt(fill_type);
    return "update_oled_circle_builder(" + type + "," + value_x_pos + "," + value_y_pos + "," + value_radius + "," + fill_type + ");\n";
};
Blockly.JavaScript["wizgear_oled_rectangle"] = function (block) {
    let type = format_dropdown_block_selection("rectangle");
    let value_x_pos = parseInt(Blockly.JavaScript.valueToCode(block, "x_pos", Blockly.JavaScript.ORDER_ATOMIC));
    let value_y_pos = parseInt(Blockly.JavaScript.valueToCode(block, "y_pos", Blockly.JavaScript.ORDER_ATOMIC));
    let value_radius = parseInt(Blockly.JavaScript.valueToCode(block, "radius", Blockly.JavaScript.ORDER_ATOMIC));
    let value_length = parseInt(Blockly.JavaScript.valueToCode(block, "length", Blockly.JavaScript.ORDER_ATOMIC));
    let value_breadth = parseInt(Blockly.JavaScript.valueToCode(block, "breadth", Blockly.JavaScript.ORDER_ATOMIC));
    let fill_type = parseInt(block.getFieldValue("fill_type"));
    return "update_oled_rectangle_builder(" + type + "," + value_x_pos + "," + value_y_pos + "," + value_length + "," + value_breadth + "," + value_radius + "," + fill_type + ");\n";
};
Blockly.JavaScript["wizgear_oled_pixel"] = function (block) {
    let type = format_dropdown_block_selection("pixel");
    let value_x_pos = parseInt(Blockly.JavaScript.valueToCode(block, "x_pos", Blockly.JavaScript.ORDER_ATOMIC));
    let value_y_pos = parseInt(Blockly.JavaScript.valueToCode(block, "y_pos", Blockly.JavaScript.ORDER_ATOMIC));

    return "update_oled_pixel_builder(" + type + "," + value_x_pos + "," + value_y_pos + ");\n";
};

Blockly.JavaScript["wizgear_oled_line"] = function (block) {
    let type = format_dropdown_block_selection("line");
    let x1 = parseInt(Blockly.JavaScript.valueToCode(block, "x_pos", Blockly.JavaScript.ORDER_ATOMIC));
    let y1 = parseInt(Blockly.JavaScript.valueToCode(block, "y_pos", Blockly.JavaScript.ORDER_ATOMIC));
    let x2 = parseInt(Blockly.JavaScript.valueToCode(block, "x_pos2", Blockly.JavaScript.ORDER_ATOMIC));
    let y2 = parseInt(Blockly.JavaScript.valueToCode(block, "y_pos2", Blockly.JavaScript.ORDER_ATOMIC));
    console.log("OLED LINE ...........");
    return "update_oled_line_builder(" + type + "," + x1 + "," + y1 + "," + x2 + "," + y2 + ");\n";
};

function format_dropdown_block_selection(text) {
    return "'" + text + "'";
}

Blockly.defineBlocksWithJsonArray([
    {
        type: "oled_prebuild",
        message0: "Oled %1",
        args0: [
            {
                type: "field_dropdown",
                name: "VALUE",
                options: [
                    ["Wizklub logo", "wiz_logo"],
                    ["Blink Eye", "blink_eye"],
                ],
            },

        ],
        previousStatement: null,
        nextStatement: null,
        colour: 100,
        tooltip: "",
        helpUrl: "",
    },
]);

Blockly.JavaScript["oled_prebuild"] = function (block) {
    var value = "'" + block.getFieldValue("VALUE") + "'";

    //return 'MusicMaker.Wizcolour(' + value + ');\n';
    return "requestOledPrebuild(" + value + ");\n";
};