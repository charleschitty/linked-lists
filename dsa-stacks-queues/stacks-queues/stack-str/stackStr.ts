import { IndexError } from "../common/ll";

/** StackStr: can remove from the top or add to the top. */

class StackStr {

  _array: string[] = [];

  constructor(initial: string[] = []) {
    this._array = initial;
  }

  /** push(val): add val to top. Returns undefined. */
  push(val: string): void {
    this._array.push(val);
  }

  /** pop(): remove and return item from top.
   * Throws error if empty.
   */
  pop(): string {
    if (this.isEmpty()) {
      throw new IndexError;
    }

    return this._array.pop()!;
  }

  /** peek(): return the value of first item.
   * Throws error if empty.
  */
  peek(): string {
    if (this.isEmpty()) {
      throw new IndexError;
    }

    return this._array[this._array.length - 1];
  }

  /** peek(): return the value of top. */
  isEmpty(): boolean {
    return this._array.length === 0;
  }
}


export { StackStr };
