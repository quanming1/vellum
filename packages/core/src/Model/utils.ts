import { LEAF_NODE_VALUE, LINE_NODE_VALUE } from "./types";

function findParentByNodeType(node: Node | HTMLElement | null, nodeType: string): HTMLElement | null {
  if (!node) return null;

  let currentElement: HTMLElement | null;
  if (node.nodeType === Node.TEXT_NODE) {
    currentElement = (node as Text).parentElement;
  } else if (node instanceof HTMLElement) {
    currentElement = node;
  } else {
    currentElement = (node as Node).parentElement;
  }
  while (currentElement) {
    if (currentElement.dataset.node === nodeType) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }

  return null;
}

export function findParentLeaf(node: Node | HTMLElement | null): HTMLElement | null {
  return findParentByNodeType(node, LEAF_NODE_VALUE);
}

export function findParentLine(node: Node | HTMLElement | null): HTMLElement | null {
  return findParentByNodeType(node, LINE_NODE_VALUE);
}
