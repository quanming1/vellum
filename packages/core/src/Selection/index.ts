import { Editor } from "../Editor";
import { EventType } from "../Event/contant";
import { ValRange } from "./module/ValRange";
import { getDirection, getSelection, toValRange } from "./utils";

export class Selection {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    editor.event.on(EventType.SELECTION_CHANGE_NATIVE, this.selectionChangeNative);
  }

  private selectionChangeNative = () => {
    const container = this.editor.container;
    const sel = getSelection(container!)!;
    if (!container || !sel.focusNode || !container.contains(sel.focusNode) || !sel.anchorNode || !container.contains(sel.anchorNode)) return;
    const range = sel.getRangeAt(0);
    const direction = getDirection(sel, range);
    const valRange = toValRange(this.editor, range, direction);
    console.log("valRange", valRange);
  };
}
