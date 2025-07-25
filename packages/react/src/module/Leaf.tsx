import { Editor, LeafModel } from "vellum-core";
import { useEffect, useRef } from "react";

export function Leaf({ leafModel, editor }: { leafModel: LeafModel; editor: Editor }) {
  const leafRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (leafRef.current) {
      editor.model.setLeafModel(leafRef.current, leafModel);
    }
  }, [leafModel, editor]);

  return (
    <span data-node="leaf" ref={leafRef} style={{ fontWeight: leafModel.op.attributes?.bold ? "bold" : "normal" }}>
      {leafModel.text}
    </span>
  );
}
