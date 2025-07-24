import React, { useState } from "react";
import { StringUtils, ArrayUtils } from "utils-package";
import { BasicMath, AdvancedMath } from "math-package";

const App = () => {
  const [result, setResult] = useState<string>("");

  // 测试字符串工具
  const testStringUtils = () => {
    const test1 = StringUtils.capitalize("hello world");
    const test2 = StringUtils.camelToSnake("camelCaseString");
    setResult(`字符串工具测试：
首字母大写: ${test1}
驼峰转下划线: ${test2}`);
  };

  // 测试数组工具
  const testArrayUtils = () => {
    const test1 = ArrayUtils.unique([1, 2, 2, 3, 3, 4]);
    const test2 = ArrayUtils.chunk([1, 2, 3, 4, 5, 6], 2);
    setResult(`数组工具测试：
数组去重: [${test1.join(", ")}]
数组分块: ${JSON.stringify(test2)}`);
  };

  // 测试数学工具
  const testMathUtils = () => {
    const test1 = BasicMath.add(1, 2, 3, 4, 5);
    const test2 = BasicMath.multiply(6, 7);
    const test3 = AdvancedMath.factorial(5);
    const test4 = AdvancedMath.fibonacci(8);
    setResult(`数学工具测试：
加法运算: ${test1}
乘法运算: ${test2}
阶乘计算: ${test3}
斐波那契: ${test4}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Monorepo 包测试应用</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={testStringUtils} style={{ margin: "5px" }}>
          测试字符串工具包
        </button>
        <button onClick={testArrayUtils} style={{ margin: "5px" }}>
          测试数组工具包
        </button>
        <button onClick={testMathUtils} style={{ margin: "5px" }}>
          测试数学工具包
        </button>
      </div>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          borderRadius: "5px",
          minHeight: "100px",
          whiteSpace: "pre-line",
        }}
      >
        <h3>测试结果：</h3>
        {result || "点击上面的按钮开始测试..."}
      </div>
    </div>
  );
};

export default App;
