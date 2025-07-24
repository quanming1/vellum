import { LineModel } from "vellum-core";
import { Leaf } from "./Leaf";

export function Line({ lineModel }: { lineModel: LineModel }) {
  return (
    <div data-node="line">
      {lineModel.leaves.map((leaf) => (
        <Leaf key={leaf.key} leafModel={leaf} />
      ))}
    </div>
  );
}
