/**
 * 字符串工具类
 */
export class StringUtils {
  /**
   * 首字母大写
   */
  static capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  /**
   * 驼峰转下划线
   */
  static camelToSnake = (str: string): string => {
    return str.replace(/([A-Z])/g, "_$1").toLowerCase();
  };
}

/**
 * 数组工具类
 */
export class ArrayUtils {
  /**
   * 数组去重
   */
  static unique = <T>(arr: T[]): T[] => {
    return [...new Set(arr)];
  };

  /**
   * 数组分块
   */
  static chunk = <T>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };
}

export { StringUtils as default };
