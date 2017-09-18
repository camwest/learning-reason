
type option = {
  name: string,
  value: string
};
let buildOption option => "_" ^ option.name ^ " " ^ option.value ^ "\n";

type command = {
  name: string,
  options: list option,
  nonDialog: bool,
  newLineAtEnd: bool
};

let buildCommand command => {
  let str = "";
  /* Set the command prefix */
  let str =
    if command.nonDialog {
      str ^ "_.-"
    } else {
      str ^ "_."
    };
  let str = str ^ command.name ^ " ";
  let str = List.fold_left (fun acc option => acc ^ buildOption option) str command.options;
  if command.newLineAtEnd {
    str ^ "\n\n"
  } else {
    str
  }
};