import memoryStorage from './memoryStorage';

export class Storage {
  static provider = localStorage;

  constructor() {
    try {
      this.set('check', true);
      if (this.get('check') !== true) {
        this.constructor.provider = memoryStorage;
        this.remove('check');
      }
    } catch (e) {
      this.constructor.provider = memoryStorage;
    }
  }

  clear() {
    this.constructor.provider.clear();
  }

  get(key) {
    try {
      const item = this.constructor.provider.getItem(key);
      if (item === undefined) return item;
      return JSON.parse(item);
    } catch (e) {
      return undefined;
    }
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.constructor.provider.length; i += 1) {
      keys.push(this.constructor.provider.key(i));
    }

    return keys;
  }

  remove(key) {
    this.constructor.provider.removeItem(key);
  }

  set(key, value) {
    this.constructor.provider.setItem(key, JSON.stringify(value));
  }
}

export default new Storage();
