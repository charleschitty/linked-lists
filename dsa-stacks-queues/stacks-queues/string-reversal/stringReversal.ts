import { StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {
  const stackStr = new StackStr(str.split(""));

  let reversedString = ""

  while (!stackStr.isEmpty()){
    reversedString += (stackStr.pop())
  }

  return reversedString;
}

export { stringReversal };