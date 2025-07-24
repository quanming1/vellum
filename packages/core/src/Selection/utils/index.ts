export function getSelection(ele: HTMLElement) {
  if (ele) {
    return ele.ownerDocument.getSelection();
  }
  return window.getSelection();
}
