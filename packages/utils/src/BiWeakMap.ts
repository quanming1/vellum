export class BiWeakMap<K extends WeakKey, V extends WeakKey> {
  private keyToValue = new WeakMap<K, V>();
  private valueToKey = new WeakMap<V, K>();

  set = (key: K, value: V): this => {
    this.keyToValue.set(key, value);
    this.valueToKey.set(value, key);

    return this;
  };

  get = (keyOrValue: K | V): V | K | undefined => {
    const asValue = this.keyToValue.get(keyOrValue as K);
    if (asValue) return asValue;

    return this.valueToKey.get(keyOrValue as V);
  };

  has = (keyOrValue: K | V): boolean => {
    return this.keyToValue.has(keyOrValue as K) || this.valueToKey.has(keyOrValue as V);
  };

  delete = (keyOrValue: K | V): boolean => {
    const value = this.keyToValue.get(keyOrValue as K);
    if (value) {
      this.keyToValue.delete(keyOrValue as K);
      this.valueToKey.delete(value);
      return true;
    }

    const key = this.valueToKey.get(keyOrValue as V);
    if (key) {
      this.valueToKey.delete(keyOrValue as V);
      this.keyToValue.delete(key);
      return true;
    }

    return false;
  };
}
