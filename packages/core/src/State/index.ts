import { Editor } from "../editor";
import { EditorStatus } from "./types";
import { BlockModel } from "./module/block-model";
import { Velmodel } from "velmodel";

// 导出所有model类供其他包使用
export { BlockModel } from "./module/block-model";
export { LineModel } from "./module/line-model";
export { LeafModel } from "./module/leaf-model";
export * from "./types";

export class State {
  private editor: Editor;
  public blockModel: BlockModel;
  public editorStatus: EditorStatus = {
    stage: "init", // 编辑器状态
  };

  constructor(editor: Editor, model: Velmodel) {
    this.editor = editor;

    this.blockModel = new BlockModel(model);
  }
}
