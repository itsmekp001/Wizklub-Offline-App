Blockly.defineBlocksWithJsonArray([
    {
        "type": "SS_NUM",
        "message0": "Seven Segment Numbers %1 Switch %2 ",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "VALUE",
                "options": [
                    ["0", "0"],
                    ["1", "1"],
                    ["2", "2"],
                    ["3", "3"],
                    ["4", "4"],
                    ["5", "5"],
                    ["6", "6"],
                    ["7", "7"],
                    ["8", "8"],
                    ["9", "9"]


                ]
            },
            {
                "type": "field_dropdown",
                "name": "VALUE1",
                "options": [
                    ["ON", "on"],
                    ["OFF", "off"],


                ]
            }

        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['SS_NUM'] = function (block) {
    var value = '\'' + block.getFieldValue('VALUE') + '\'';
    var value1 = '\'' + block.getFieldValue('VALUE1') + '\'';
    //return 'MusicMaker.Wizcolour(' + value + ');\n';
    return 'requestSsNum(' + value + ',' + value1 + ');\n';
};







Blockly.defineBlocksWithJsonArray([
    {
        "type": "SS_CHAR",
        "message0": "Seven Segment Letters %1 Switch %2 ",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "VALUE",
                "options": [
                    ["A", "a"],
                    ["B", "b"],
                    ["C", "c"],
                    ["D", "d"],
                    ["E", "e"],
                    ["F", "f"],


                ]
            },
            {
                "type": "field_dropdown",
                "name": "VALUE1",
                "options": [
                    ["ON", "on"],
                    ["OFF", "off"],


                ]
            }

        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['SS_CHAR'] = function (block) {
    var value = '\'' + block.getFieldValue('VALUE') + '\'';
    var value1 = '\'' + block.getFieldValue('VALUE1') + '\'';
    //return 'MusicMaker.Wizcolour(' + value + ');\n';
    return 'requestSsChar(' + value + ',' + value1 + ');\n';
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "SS_CUSTOM",
        "message0": "Seven Segment LED 1 %1 LED 2 %2 LED 3 %3 LED 4 %4 LED 5 %5 LED 6 %6 LED 7 %7 LED 8 %8",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "VALUE",
                "options": [
                    ["ON", "0"],
                    ["OFF", "1"],


                ]
            },

            {
                "type": "field_dropdown",
                "name": "VALUE1",
                "options": [
                    ["ON", "0"],
                    ["OFF", "1"],


                ]
            },
            {
                "type": "field_dropdown",
                "name": "VALUE2",
                "options": [
                    ["ON", "0"],
                    ["OFF", "1"],


                ]
            },

            {
                "type": "field_dropdown",
                "name": "VALUE3",
                "options": [
                    ["ON", "0"],
                    ["OFF", "1"],


                ]
            },
            {
                "type": "field_dropdown",
                "name": "VALUE4",
                "options": [
                    ["ON", "0"],
                    ["OFF", "1"],


                ]
            },
            {
                "type": "field_dropdown",
                "name": "VALUE5",
                "options": [
                    ["ON", "0"],
                    ["OFF", "1"],


                ]
            },
            {
                "type": "field_dropdown",
                "name": "VALUE6",
                'align': 'RIGHT',
                "options": [
                    ["ON", "0"],
                    ["OFF", "1"],


                ]
            },
            {
                "type": "field_dropdown",
                "name": "VALUE7",
                "options": [
                    ["ON", "0"],
                    ["OFF", "1"],


                ]
            },
        ],

        "args1": [
            {
                "type": "field_dropdown",
                "name": "VALUE8",
                "options": [
                    ["ON", "0"],
                    ["OFF", "1"],


                ]
            },
        ],


        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['SS_CUSTOM'] = function (block) {
    var value = '\'' + block.getFieldValue('VALUE') + '\'';
    var value1 = '\'' + block.getFieldValue('VALUE1') + '\'';
    var value2 = '\'' + block.getFieldValue('VALUE2') + '\'';
    var value3 = '\'' + block.getFieldValue('VALUE3') + '\'';
    var value4 = '\'' + block.getFieldValue('VALUE4') + '\'';
    var value5 = '\'' + block.getFieldValue('VALUE5') + '\'';
    var value6 = '\'' + block.getFieldValue('VALUE6') + '\'';
    var value7 = '\'' + block.getFieldValue('VALUE7') + '\'';

    //return 'MusicMaker.Wizcolour(' + value + ');\n';
    return 'requestSsCustom(' + value + ',' + value1 + ',' + value2 + ',' + value3 + ',' + value4 + ',' + value5 + ',' + value6 + ',' + value7 + ');\n';
};


Blockly.defineBlocksWithJsonArray([
    {
        "type": "SS_INPUT",
        "message0": "Seven Segment Numbers %1 Switch %2 ",
        "args0": [
            {
                'type': 'input_value',
                'name': 'USER_INPUT',
                'check': 'Number',
                'align': 'RIGHT',
            },
            {
                "type": "field_dropdown",
                "name": "SWITCH",
                "options": [
                    ["ON", "1"],
                    ["OFF", "0"],


                ]
            }

        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 150,
        "tooltip": "",
        "helpUrl": ""
    },
]);

Blockly.JavaScript['SS_INPUT'] = function (block) {
    var value = Blockly.JavaScript.valueToCode(block, 'USER_INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    var value1 = '\'' + block.getFieldValue('SWITCH') + '\'';
    return 'requestSSINPUT(' + value + ',' + value1 + ');\n';
};




