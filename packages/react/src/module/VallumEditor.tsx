import { Editor } from "vellum-core";
import { Line } from "./Line";

export function VallumEditor({ editor }: { editor: Editor }) {
  return (
    <div data-node="block" contentEditable suppressContentEditableWarning>
      {editor.state.blockModel.lines.map((line) => {
        return <Line key={line.key} lineModel={line} />;
      })}
    </div>
  );
}
