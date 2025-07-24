import { LeafModel } from "vellum-core";

export function Leaf({ leafModel }: { leafModel: LeafModel }) {
  return (
    <span data-node="leaf" style={{ fontWeight: leafModel.op.attributes?.bold ? "bold" : "normal" }}>
      {leafModel.text}
    </span>
  );
}
