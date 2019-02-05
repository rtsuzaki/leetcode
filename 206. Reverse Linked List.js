var reverseList = function(head) {
    if (head === null || head.next === null)   return head;
    let prev = null;  // this will be new tail
    let curr = head;
    while(curr !== null) {
        let nextTemp = curr.next;   // temp variable
        curr.next = prev;   // redirect curr next
        prev = curr;   // move prev down list (to right)
        curr = nextTemp;   // move curr down list (to right)
    }
    return prev;   // will return list in reverse
}; 