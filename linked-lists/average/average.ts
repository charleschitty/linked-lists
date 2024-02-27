import { LLStr } from "../common/ll";

/** return average (mean) of list values.
 *
 * Returns 0 for empty list.
 **/

function average(lst: LLStr): number {
  let count = 0

  if (lst.head === null){
    return count
  }

  let current = lst.head
  for (let i = 0; i < lst.length; i++){
    count += Number(current.val)
    if (current.next !== null){
      current = current.next
    }
  }
  return (count/lst.length);
}

export { average };