import { BiWeakMap } from "vellum-utils";
import { LeafModel, LineModel } from "../State";
import { Editor } from "../Editor";

export class Model {
  private editor: Editor;
  private lineModelCache = new BiWeakMap<HTMLElement, LineModel>();
  private leafModelCache = new BiWeakMap<HTMLElement, LeafModel>();

  constructor(editor: Editor) {
    this.editor = editor;
  }

  getLineModel(key: HTMLElement | LineModel) {
    return this.lineModelCache.get(key);
  }

  setLineModel(key: HTMLElement, model: LineModel) {
    this.lineModelCache.set(key, model);
  }

  getLeafModel(key: HTMLElement | LeafModel) {
    return this.leafModelCache.get(key);
  }

  setLeafModel(key: HTMLElement, model: LeafModel) {
    this.leafModelCache.set(key, model);
  }
}
