import { Editor, LineModel } from "vellum-core";
import { Leaf } from "./Leaf";
import { useEffect, useRef } from "react";

export function Line({ lineModel, editor }: { lineModel: LineModel; editor: Editor }) {
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (lineRef.current) {
      editor.model.setLineModel(lineRef.current, lineModel);
    }
  }, [lineModel, editor]);

  return (
    <div data-node="line" ref={lineRef}>
      {lineModel.leaves.map((leaf) => (
        <Leaf key={leaf.key} leafModel={leaf} editor={editor} />
      ))}
    </div>
  );
}
