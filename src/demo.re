Js.log "this is reason";

Js.log "this is reason";

let x = [%bs.raw {| 'here is a string from javascript' |}];

Js.log (x ^ " back in reason land"); /* ^ is the operator for string concat */