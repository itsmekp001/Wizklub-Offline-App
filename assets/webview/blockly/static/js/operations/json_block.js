Blockly.defineBlocksWithJsonArray([
{
    "type": "wiz_json_reader",
    "message0": "Reader:  Object %1 Parser %2",
    "args0": [
        {
            "type": "input_value",
            "name": "JSON_OBJ",
        },
        {
            "type": "input_value",
            "name": "PARSER",
            "check": "json_key_parser",
        },
    ],
    "inputsInline": true,
    "output": null,
    "colour": 345,
    "tooltip": "Parse an JSON (Dictionary Mapping)",
    "helpUrl": "",
}]);
Blockly.defineBlocksWithJsonArray([
{
    "type": "json_key_parser",
    "message0": "JSON: Key %1 %2",
    "args0": [
        {
            "type": "field_input",
            "name": "JSON_KEY",
            "text": "",
        },
        {
            "type": "input_value",
            "name": "MORE_KEYS",
            "check": "json_key_parser",
        },
    ],
    "output": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": "",
}]);

Blockly.JavaScript["wiz_json_reader"] = function (block) {
    let json_obj = Blockly.JavaScript.valueToCode(block, "JSON_OBJ", Blockly.JavaScript.ORDER_ATOMIC);
    let parsers = Blockly.JavaScript.valueToCode(block, "PARSER", Blockly.JavaScript.ORDER_ATOMIC);
    let code = "parse_json_object(" + json_obj + "," + parsers + ")";
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["json_key_parser"] = function (block) {
    let json_key = block.getFieldValue("JSON_KEY");
    let parsers = [];
    let more_keys = remove_brackets_from_text(Blockly.JavaScript.valueToCode(block, "MORE_KEYS", Blockly.JavaScript.ORDER_ATOMIC));
    if (!more_keys) {
        // No More Connected Blocks - Means last key.
        parsers = [{"key": json_key}];
    } else {
        more_keys = JSON.parse(more_keys);
        if (Array.isArray(more_keys)) {
            parsers = [...[{"key": json_key}], ...more_keys];
        }
    }
    let code = JSON.stringify(parsers);
    return [code, Blockly.JavaScript.ORDER_NONE];
};

function remove_brackets_from_text(text) {
    console.log("remove_brackets_from_text");
    return text.replace("(", "").replace(")", "");
}
