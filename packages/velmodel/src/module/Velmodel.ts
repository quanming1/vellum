import { getOPLength, isInsert, isDelete, isRetain } from "../utils";
import { EOL, OP, OPAttrs, OPEnum } from "./OP";
import { isObject, isEmptyObject } from "vellum-utils";

export class Velmodel {
  public ops: OP[] = [];

  constructor(ops?: OP | OP[]) {
    this.ops = Array.isArray(ops) ? ops : ops ? [ops] : [];
  }

  get length() {
    return this.ops.reduce((preL, op) => preL + getOPLength(op), 0);
  }

  public insert = (content: string, attributes?: OPAttrs) => {
    if (!content || content.length === 0) return this;
    attributes = isObject(attributes) ? attributes : {};

    this.ops.push({
      insert: content,
      attributes,
    });

    return this;
  };

  public delete = (len: number) => {
    this.ops.push({
      delete: len,
      attributes: {},
    });

    return this;
  };

  public retain = (len: number) => {
    this.ops.push({
      retain: len,
      attributes: {},
    });

    return this;
  };

  public push = (op: OP) => {
    this.ops.push(op);

    return this;
  };

  public foreach = (cb: (op: OP, index: number, array: OP[]) => void) => {
    this.ops.forEach(cb);
  };

  public filter = (cb: (op: OP, index: number, array: OP[]) => boolean) => {
    return this.ops.filter(cb);
  };

  public chop = () => {
    if (!this.ops.length) return;
    const lastOp = this.ops[this.ops.length - 1];
    if (isRetain(lastOp) && isEmptyObject(lastOp.attributes)) {
      this.ops.pop();
    }
  };

  public eachLine = (cb: (line: Velmodel, index: number) => boolean) => {
    if (this.ops.length === 0) return;
    const lines: OP[][] = [];
    let currentLine: OP[] = [];

    for (const op of this.ops) {
      if (isInsert(op) && op.insert?.includes(EOL)) {
        const parts = op.insert.split(EOL);
        if (parts[0]) {
          currentLine.push({
            insert: parts[0],
            attributes: op.attributes || {},
          });
        }
        lines.push([...currentLine]);
        for (let i = 1; i < parts.length - 1; i++) {
          if (parts[i]) {
            lines.push([
              {
                insert: parts[i],
                attributes: op.attributes || {},
              },
            ]);
          } else {
            lines.push([]);
          }
        }
        currentLine = [];
        if (parts[parts.length - 1]) {
          currentLine.push({
            insert: parts[parts.length - 1],
            attributes: op.attributes || {},
          });
        }
      } else if (isInsert(op)) {
        currentLine.push(op);
      }
    }
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }
    for (let i = 0; i < lines.length; i++) {
      const lineModel = new Velmodel(lines[i]);
      if (!cb(lineModel, i)) {
        break;
      }
    }
  };
}
