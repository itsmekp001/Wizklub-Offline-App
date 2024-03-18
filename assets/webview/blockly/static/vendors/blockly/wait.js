Blockly.defineBlocksWithJsonArray([
  {
  "type": "move_in_direction",
  "message0": "Wait %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "DELAY",
      "options": [
        [
          "half a second",
          "500"
        ],
        [
          "a second",
          "1000"
        ],
        [
          "two seconds",
          "2000"
        ],
        [
          "five seconds",
          "5000"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 5,
  "tooltip": "",
  "helpUrl": ""
  }
]);
  
   /* Blockly.JavaScript['move_in_direction'] = function(block) {
  var dropdown_delay = block.getFieldValue('DELAY');
  // TODO: Assemble JavaScript into code variable.
  delays = Number(dropdown_delay);
  function myFunction(){

    }
  var waiting = setTimeout(myFunction,delays);
  var code = waiting;
  //var code = 'move_in_direction(' + dropdown_delay + ');\n';
  return code;
  };*/


   Blockly.JavaScript['move_in_direction'] = function(block) {
  var dropdown_delay = block.getFieldValue('DELAY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'move_in_direction(' + dropdown_delay + ');\n';
  return code;
  };
  
 
  /* Blockly.JavaScript['move_in_direction'] = function(block) {
    var number_wait = block.getFieldValue('DELAY');
    // TODO: Assemble JavaScript into code variable.
    delays = Number(number_wait);
    function myFunction(){

    }
    var waiting = setTimeout(myFunction,delays);
    var code = document.getElementById('avatar').innerHTML = waiting;
    console.log(code);
    return code;
  };

Blockly.JavaScript['wait_block'] = function(block) {
    var number_wait = block.getFieldValue('wait');
    // TODO: Assemble JavaScript into code variable.
    delays = Number(number_wait);
    function myFunction(){

    }
    var waiting = setTimeout(myFunction,delays);
    var code = document.getElementById('avatar').innerHTML = waiting;
    console.log(code);
    return code;
  };*/