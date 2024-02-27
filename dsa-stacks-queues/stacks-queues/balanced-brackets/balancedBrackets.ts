/** Does this string have balanced brackets? Returns true/false. */

import { QueueStr } from "../common/queue";
import { StackStr } from "../common/stack";

function balancedBrackets(str: string): boolean {

  const stackStr = new StackStr(str.split(""))
  const queueStr = new QueueStr(str.split(""))

  if (stackStr.pop() !== queueStr.dequeue()){
    return false
  }

  return true;
}

export { balancedBrackets };