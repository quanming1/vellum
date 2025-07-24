import { useEffect, useRef, useState } from "react";
import { Editor } from "vellum-core";
import { Velmodel } from "velmodel";
import { VallumEditor } from "vellum-react";

const model = new Velmodel([{ insert: "hello" }, { insert: "world" }, { insert: "换行\n测试" }, { insert: "bold", attributes: { bold: true } }]);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const editor = new Editor({
      container: containerRef.current,
      model: model,
    });

    console.log("editor.state.blockModel", editor.state.blockModel);

    setEditor(editor);
  }, [containerRef.current]);

  return (
    <div contentEditable suppressContentEditableWarning ref={containerRef}>
      {editor && <VallumEditor editor={editor} />}
    </div>
  );
}
