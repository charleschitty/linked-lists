import { IndexError, LLStr } from "../common/ll";

/** QueueStr: can remove from start or add to end */

class QueueStr {

  _ll: LLStr;

  constructor(initial: string[] = []) {
    this._ll = new LLStr(initial);
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    this._ll.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if (this.isEmpty()) {
      throw new IndexError;
    }
    return this._ll.shift();
  }

  /** peek(): return the value of top. */
  peek(): string {
    if (this.isEmpty()) {
      throw new IndexError;
    }
    return this._ll.head!.val;
  }

  /** peek(): return the value of top. */
  isEmpty(): boolean {
    return this._ll.length === 0;
  }
}


export { QueueStr };
