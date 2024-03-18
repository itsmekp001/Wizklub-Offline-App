
Blockly.defineBlocksWithJsonArray([
    {
        "type": "BuzzerMusic",
        "message0": "Buzzer: Play Music %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "VALUE",
                "options": [
                    ["Happy B'Day", "hbd"],
                    ["SaReGaMa", "saregama"],
                ]
            }

        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 100,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['BuzzerMusic'] = function (block) {
    var value = '\'' + block.getFieldValue('VALUE') + '\'';
    //return 'MusicMaker.Wizcolour(' + value + ');\n';
    return 'requestBuzzerMusic(' + value + ');\n';
};



Blockly.defineBlocksWithJsonArray([
    {
        "type": "BuzzerFrequency",
        "message0": "Buzzer: Set Frequency %1 for %2 seconds",
        "args0": [
            {
                "type": "field_input",
                "name": "VALUE",
                "text": ""
            },
            {
                "type": "field_dropdown",
                "name": "VALUE1",
                "options": [
                    ["0.1", "100"],
                    ["0.2", "200"],
                    ["0.3", "300"],
                    ["0.4", "400"],
                    ["0.5", "500"],
                    ["0.6", "600"],
                    ["0.7", "700"],
                    ["0.8", "800"],
                    ["0.9", "900"],
                    ["1.0", "1000"],
                    ["1.1", "1100"],
                    ["1.2", "1200"],
                    ["1.3", "1300"],
                    ["1.4", "1400"],
                    ["1.5", "1500"],
                    ["1.6", "1600"],
                    ["1.7", "1700"],
                    ["1.8", "1800"],
                    ["1.9", "1900"],
                    ["2.0", "2000"],

                ]
            }

        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 100,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['BuzzerFrequency'] = function (block) {
    var value = '\'' + block.getFieldValue('VALUE') + '\'';
    var value1 = '\'' + block.getFieldValue('VALUE1') + '\'';
    //return 'MusicMaker.Wizcolour(' + value + ');\n';
    return 'requestBuzzerfrequency(' + value + ',' + value1 + ');\n';
};




Blockly.defineBlocksWithJsonArray([
    {
        "type": "BuzzerPower",
        "message0": "Buzzer: Set Frequency %1 Switch %2 ",
        "args0": [
            {
                'type': 'input_value',
                'name': 'VALUE',
                'check': 'Number',
                'align': 'RIGHT',
            },
            {
                "type": "field_dropdown",
                "name": "VALUE1",
                "options": [
                    ["ON", "1"],
                    ["OFF", "0"],


                ]
            }

        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 100,
        "tooltip": "",
        "helpUrl": ""
    }
]);

Blockly.JavaScript['BuzzerPower'] = function (block) {
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value1 = '\'' + block.getFieldValue('VALUE1') + '\'';
    //return 'MusicMaker.Wizcolour(' + value + ');\n';
    return 'requestBuzzerPower(' + value + ',' + value1 + ');\n';
};

Blockly.defineBlocksWithJsonArray([
    {
        "type": "buzzer_frequency_duration",
        "message0": "Buzzer: Set Frequency %1 Seconds %2 ",
        "args0": [
            {
                'type': 'input_value',
                'name': 'VALUE1',
                'check': 'Number',
            },
            {
                'type': 'input_value',
                'name': 'VALUE2',
                'check': 'Number',
            },
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 100,
        "tooltip": "",
        "helpUrl": ""
    }
]);


Blockly.JavaScript['buzzer_frequency_duration'] = function (block) {
    let frequency = Blockly.JavaScript.valueToCode(block, "VALUE1", Blockly.JavaScript.ORDER_ATOMIC);
    let duration = Blockly.JavaScript.valueToCode(block, "VALUE2", Blockly.JavaScript.ORDER_ATOMIC);

    //return 'MusicMaker.Wizcolour(' + value + ');\n';
    return 'requestBuzzerfrequency(' + frequency + ',' + duration + ');\n';
};


