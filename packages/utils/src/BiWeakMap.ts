export class BiWeakMap<K extends WeakKey, V extends WeakKey> {
  private keyToValue = new WeakMap<K, V>();
  private valueToKey = new WeakMap<V, K>();

  set = (key: K, value: V): this => {
    if (this.keyToValue.has(key)) {
      const oldValue = this.keyToValue.get(key)!;
      this.valueToKey.delete(oldValue);
    }
    if (this.valueToKey.has(value)) {
      const oldKey = this.valueToKey.get(value)!;
      this.keyToValue.delete(oldKey);
    }

    // 设置新的双向映射
    this.keyToValue.set(key, value);
    this.valueToKey.set(value, key);
    return this;
  };

  get = (keyOrValue: K | V): V | K | undefined => {
    // 先尝试作为 key 查找
    if (this.keyToValue.has(keyOrValue as K)) {
      return this.keyToValue.get(keyOrValue as K);
    }
    // 再尝试作为 value 查找
    if (this.valueToKey.has(keyOrValue as V)) {
      return this.valueToKey.get(keyOrValue as V);
    }
    return undefined;
  };

  has = (keyOrValue: K | V): boolean => {
    return this.keyToValue.has(keyOrValue as K) || this.valueToKey.has(keyOrValue as V);
  };

  delete = (keyOrValue: K | V): boolean => {
    // 尝试作为 key 删除
    if (this.keyToValue.has(keyOrValue as K)) {
      const value = this.keyToValue.get(keyOrValue as K)!;
      this.keyToValue.delete(keyOrValue as K);
      this.valueToKey.delete(value);
      return true;
    }
    // 尝试作为 value 删除
    if (this.valueToKey.has(keyOrValue as V)) {
      const key = this.valueToKey.get(keyOrValue as V)!;
      this.valueToKey.delete(keyOrValue as V);
      this.keyToValue.delete(key);
      return true;
    }
    return false;
  };

  clear = (): void => {
    this.keyToValue = new WeakMap<K, V>();
    this.valueToKey = new WeakMap<V, K>();
  };
}
