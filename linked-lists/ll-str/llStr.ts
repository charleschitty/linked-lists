/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const newNode = new NodeStr(val);

    if (this.head === null) {
      this.head = newNode;
    };

    if (this.tail !== null) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);
    const oldHead = this.head;

    if (oldHead === null) {
      this.tail = newNode;
    }

    this.head = newNode;
    this.head.next = oldHead;
    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {

    if (this.head === null) {
      throw new IndexError("Empty List");
    }

    let current = this.head;

    while (current.next !== this.tail) {
      current = current.next!;
    };

    const oldTail = this.tail;

    const newTail = current;
    newTail.next = null;
    this.tail = newTail;
    this.length--;

    return oldTail!.val;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {

    if (this.head === null) {
      throw new IndexError("Empty List");
    }

    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    return oldHead.val;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {

    let current = this.head;

    let i = 0;
    while (current !== null) {
      if (i === idx) {
        break;
      }
      i++;
      current = current.next;
    }

    if (current === null) {
      throw new IndexError("Index not found");
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {

    let current = this.head;

    let i = 0;
    while (current !== null) {
      if (i === idx) {
        break;
      }
      i++;
      current = current.next;
    }

    if (current === null) {
      throw new IndexError("Index not found");
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    let current = this.head;

    let i = 0;
    while (current !== null) {
      if (i === (idx - 1)) {
        break;
      }
      i++;
      current = current.next;
    }

    if (current === null) {
      throw new IndexError("Index not found");
    }

    const newNode = new NodeStr(val);
    newNode.next = current.next;
    this.length++;

    current.next = newNode;
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    let current = this.head;

    let i = 0;
    while (current !== null) {
      if (i === (idx - 1)) {
        break;
      }
      i++;
      current = current.next;
    }
    //Find index before, change the index before's next to the index after

    if (current === null || current.next === null) {
      throw new IndexError("Index not found");
    }

    const nodeToRemove = current.next;
    const nodeAfter = nodeToRemove.next;
    this.length--;

    current.next = nodeAfter;
    return nodeToRemove.val;
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};