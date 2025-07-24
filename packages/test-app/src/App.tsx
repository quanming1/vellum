import { useEffect } from "react";
import { Velmodel } from "velmodel";

export default function App() {
  useEffect(() => {
    const model = new Velmodel();
    model.insert("Hello\n");
    model.insert("Wor\nld", { bold: true });
    model.eachLine((line, index) => {
      console.log(line);
      return true;
    });
  }, []);

  return <h1>App</h1>;
}
