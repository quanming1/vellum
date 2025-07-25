import { nanoid } from "nanoid";

export function isObject(obj: any) {
  return obj !== null && typeof obj === "object";
}

export function isEmptyObject(obj: any) {
  return isObject(obj) && Object.keys(obj).length === 0;
}

export const genUUID = nanoid;

export * from "./BiWeakMap";
