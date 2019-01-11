export class MemoryStorage {
  data = {};

  get length() {
    return Object.keys(this.data).length;
  }

  clear() {
    this.data = {};
  }

  getItem(key) {
    if (!key) {
      return undefined;
    }

    return this.data[key];
  }

  key(number) {
    return Object.keys(this.data)[number];
  }

  removeItem(key) {
    delete this.data[key];
  }

  setItem(key, value) {
    this.data[key] = value;
  }
}

/* I left this assignation to make easy to debug */
export default (window.memoryStorage = new MemoryStorage());
