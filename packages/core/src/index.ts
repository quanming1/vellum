/**
 * 基础数学运算类
 */
export class BasicMath {
  /**
   * 加法运算（支持多个数字）
   */
  static add = (...numbers: number[]): number => {
    return numbers.reduce((sum, num) => sum + num, 0);
  };

  /**
   * 减法运算
   */
  static subtract = (a: number, b: number): number => {
    return a - b;
  };

  /**
   * 乘法运算
   */
  static multiply = (a: number, b: number): number => {
    return a * b;
  };

  /**
   * 除法运算（带除零检查）
   */
  static divide = (a: number, b: number): number => {
    if (b === 0) {
      throw new Error("除数不能为零");
    }
    return a / b;
  };
}

/**
 * 高级数学运算类
 */
export class AdvancedMath {
  /**
   * 计算阶乘
   */
  static factorial = (n: number): number => {
    if (n < 0) throw new Error("阶乘不能计算负数");
    if (n === 0 || n === 1) return 1;
    return n * AdvancedMath.factorial(n - 1);
  };

  /**
   * 计算斐波那契数列第n项
   */
  static fibonacci = (n: number): number => {
    if (n < 0) throw new Error("斐波那契数列不能计算负数");
    if (n <= 1) return n;
    return AdvancedMath.fibonacci(n - 1) + AdvancedMath.fibonacci(n - 2);
  };
}

export { BasicMath as default };
