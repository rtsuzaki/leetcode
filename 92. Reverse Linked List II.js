var reverseBetween = function(head, m, n) {
    let count = 1;
    let node = head;
    let nodesToFlip = [];
    
    while (count <= n) {
        if (count >= m) {
            nodesToFlip.push(node);
        }
        count++;
        node = node.next;
    }
    
    let mid = Math.floor(nodesToFlip.length/2);
    
    const flip = (left, right) => {
        let temp = left.val;
        left.val = right.val;
        right.val = temp;
    }
    
    for (let i = 0; i < mid; i++) {
        flip(nodesToFlip[i], nodesToFlip[nodesToFlip.length - i - 1]);
    }
    return head;
};

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