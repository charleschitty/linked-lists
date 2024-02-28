import { LLStr, LLNodeStr } from "../common/ll";


/** reverseInPlace() reverse list in place.*/

function reverseInPlace(lst: LLStr): void {
  if (lst.head === null) return // adjusts for empty lists

  let current = lst.head
  while (current != lst.tail){
    lst.insertAt(lst.length, current.val)
    current = current?.next
  }

  // Look at head
  // Insert at end, the head
  // Remove with shift, and ensure that loop ends after returned item is old tail
  // current = current.next
}


export { reverseInPlace };