import { Editor } from "../../Editor";
import { ValRange } from "../module/ValRange";
import { Point } from "../module/Point";

export function getSelection(ele: HTMLElement) {
  if (ele) {
    return ele.ownerDocument.getSelection();
  }
  return window.getSelection();
}

// 是不是反向选择
export function isBackward(sel: Selection, range: Range): "forward" | "backward" | "none" {
  if (sel.direction) return sel.direction as "forward" | "backward" | "none";

  return sel.anchorNode !== range.startContainer ||
    sel.anchorOffset !== range.startOffset ||
    sel.focusNode !== range.endContainer ||
    sel.focusOffset !== range.endOffset
    ? "backward"
    : "forward";
}

export function toPoint(editor: Editor, node: HTMLElement, offset: number): Point {
  // TODO: line
  // return new Point(node.offsetTop, offset);
  return new Point(0, 0);
}

export function toValRange(editor: Editor, range: Range, isBackward: boolean): ValRange {
  return new ValRange(
    toPoint(editor, range.startContainer as HTMLElement, range.startOffset),
    toPoint(editor, range.endContainer as HTMLElement, range.endOffset),
    isBackward,
    range.collapsed
  );
}
