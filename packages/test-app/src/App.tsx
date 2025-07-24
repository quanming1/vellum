import { useEffect, useRef, useState } from "react";
import { Editor } from "vellum-core";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const editor = new Editor({
      container: containerRef.current,
    });

    setEditor(editor);
  }, [containerRef.current]);

  return (
    <div contentEditable suppressContentEditableWarning ref={containerRef}>
      <h1>132123</h1>
    </div>
  );
}
