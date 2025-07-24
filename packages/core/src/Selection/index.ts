import { Editor } from "../editor";
import { EventType } from "../Event/contant";
import { getSelection } from "./utils";

export class Selection {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    editor.event.on(EventType.SELECTION_CHANGE_NATIVE, this.selectionChangeNative);
  }

  private selectionChangeNative = () => {
    const container = this.editor.container;
    if (!container) return;
    const sel = getSelection(container);
    console.log("sel", sel);
  };
}
