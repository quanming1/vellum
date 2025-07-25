import { Editor, LineModel } from "vellum-core";
import { Leaf } from "./Leaf";
import { useLayoutEffect, useRef } from "react";

export function Line({ lineModel, editor }: { lineModel: LineModel; editor: Editor }) {
  const lineRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (lineRef.current) {
      editor.model.setLineModel(lineRef.current, lineModel);
    }
  }, [lineModel, editor, lineRef.current]);

  return (
    <div data-node="line" ref={lineRef}>
      {lineModel.leaves.map((leaf) => (
        <Leaf key={leaf.key} leafModel={leaf} editor={editor} />
      ))}
    </div>
  );
}
