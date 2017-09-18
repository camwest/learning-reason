let calculate2 numbers scaleFactor =>
  List.fold_left (fun acc x => acc + x) 0 numbers * scaleFactor;

Js.log (calculate2 [1, 2, 3] 10); /* -> 60 */

let command = Commands.toggleLayerVisibility name::"Other" visible::true;

Js.log (Serializer.buildCommand command);