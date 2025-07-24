import { Editor } from "../editor";
import { EditorStatus } from "./types";

export class State {
  private editor: Editor;
  public editorStatus: EditorStatus = {
    stage: "init", // 编辑器状态
  };

  constructor(editor: Editor) {
    this.editor = editor;
  }
}
