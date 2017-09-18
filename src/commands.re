
let turnLayerOn name :Serializer.command => {
  name: "LAYER",
  options: [{name: "ON", value: name}, {name: "THAW", value: name}],
  nonDialog: true,
  newLineAtEnd: true
};

let turnLayerOff (name: string) :Serializer.command => {
  name: "LAYER",
  options: [{name: "OFF", value: name}, {name: "FREEZE", value: name}],
  nonDialog: true,
  newLineAtEnd: true
};

let toggleLayerVisibility ::name ::visible => visible ? turnLayerOn name : turnLayerOff name;