import { genUUID } from "vellum-utils";
import { LineModel } from "./line-model";
import { OP } from "velmodel";

export class LeafModel {
  public key: string;
  public parentLine: LineModel;
  public offset: number;
  public op: OP;

  constructor(parentLine: LineModel, op: OP, offset: number) {
    this.parentLine = parentLine;
    this.key = genUUID();
    this.offset = offset;
    this.op = op;
  }

  get length() {
    return this.op.insert?.length || 0;
  }

  get text() {
    return this.op.insert || "";
  }
}
