// Generated by BUCKLESCRIPT VERSION 1.9.2, PLEASE EDIT WITH CARE
'use strict';

var List                  = require("bs-platform/lib/js/list.js");
var Caml_int32            = require("bs-platform/lib/js/caml_int32.js");
var Commands$MyFirstApp   = require("./commands.js");
var Serializer$MyFirstApp = require("./serializer.js");

function calculate2(numbers, scaleFactor) {
  return Caml_int32.imul(List.fold_left((function (acc, x) {
                    return acc + x | 0;
                  }), 0, numbers), scaleFactor);
}

console.log(calculate2(/* :: */[
          1,
          /* :: */[
            2,
            /* :: */[
              3,
              /* [] */0
            ]
          ]
        ], 10));

var command = Commands$MyFirstApp.toggleLayerVisibility("Other", /* true */1);

console.log(Serializer$MyFirstApp.buildCommand(command));

exports.calculate2 = calculate2;
exports.command    = command;
/*  Not a pure module */
