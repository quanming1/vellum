import { Velmodel } from "velmodel";
import { LineModel } from "./line-model";
import { genUUID } from "vellum-utils";

export class BlockModel {
  public lines: LineModel[] = [];
  public key: string;

  constructor(velmodel: Velmodel) {
    velmodel.eachLine((line, index) => {
      this.lines.push(new LineModel(line, this, index));
      return true;
    });

    this.key = genUUID();
  }

  get size() {
    return this.lines.length;
  }
}
