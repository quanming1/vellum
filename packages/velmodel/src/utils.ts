import { OP, OPEnum } from "./module/OP";

export function isInsert(op: OP) {
  if (!op) return false;
  return Object.prototype.hasOwnProperty.call(op, "insert");
}

export function isDelete(op: OP) {
  if (!op) return false;
  return Object.prototype.hasOwnProperty.call(op, "delete");
}

export function isRetain(op: OP) {
  if (!op) return false;
  return Object.prototype.hasOwnProperty.call(op, "retain");
}

export function getOPLength(op: OP) {
  if (isInsert(op)) {
    return op.insert?.length || 0;
  } else if (isDelete(op)) {
    return op.delete || 0;
  } else if (isRetain(op)) {
    return op.retain || 0;
  }
  return 0;
}
