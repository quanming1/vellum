import { Editor } from "../../Editor";
import { LeafModel, LineModel } from "../../State";
import { ValRange } from "../module/ValRange";
import { Point } from "../module/Point";
import { SelectionDirection } from "../types/module";
import { findParentLeaf, findParentLine } from "../../Model/utils";

export function getSelection(ele: HTMLElement) {
  if (ele) {
    return ele.ownerDocument.getSelection();
  }
  return window.getSelection();
}

// 是不是反向选择
export function getDirection(sel: Selection, range: Range): SelectionDirection {
  if (sel.direction) return sel.direction as "forward" | "backward" | "none";

  return sel.anchorNode !== range.startContainer ||
    sel.anchorOffset !== range.startOffset ||
    sel.focusNode !== range.endContainer ||
    sel.focusOffset !== range.endOffset
    ? "backward"
    : "forward";
}

export function toPoint(editor: Editor, node: HTMLElement, offset: number): Point | null {
  const line = findParentLine(node);
  const leaf = findParentLeaf(node);
  const lineModel = editor.model.getLineModel(line!) as LineModel;
  const leafModel = editor.model.getLeafModel(leaf!) as LeafModel;
  if (!lineModel || !leafModel) return null;
  return new Point(lineModel.index, offset + leafModel.offset);
}

export function toValRange(editor: Editor, range: Range, direction: SelectionDirection): ValRange {
  return new ValRange(
    toPoint(editor, range.startContainer as HTMLElement, range.startOffset)!,
    toPoint(editor, range.endContainer as HTMLElement, range.endOffset)!,
    direction === "backward",
    range.collapsed
  );
}
