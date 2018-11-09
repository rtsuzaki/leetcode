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