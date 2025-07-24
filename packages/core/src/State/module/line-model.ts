import { Velmodel } from "velmodel";
import { BlockModel } from "./block-model";
import { genUUID } from "vellum-utils";
import { LeafModel } from "./leaf-model";
import { isInsert } from "velmodel";

export class LineModel {
  public index: number;
  public lineModel: Velmodel;
  public parentBlock: BlockModel;
  public key: string;
  public leaves: LeafModel[] = [];

  constructor(lineModel: Velmodel, parentBlock: BlockModel, index: number) {
    this.lineModel = lineModel;
    this.index = index;
    this.parentBlock = parentBlock;
    this.key = genUUID();

    this.genLeaves();
  }

  get size() {
    return this.leaves.length;
  }

  private genLeaves() {
    let offset = 0;
    this.lineModel.ops.forEach((op) => {
      if (!isInsert(op)) {
        console.log("不是插入，暂时不处理");
        return;
      }
      const leafModel = new LeafModel(this, op, offset);
      offset += leafModel.length;
      this.leaves.push(leafModel);
    });
  }
}
