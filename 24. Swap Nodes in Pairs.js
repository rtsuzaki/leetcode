var swapPairs = function(head) {
    if (!head || !head.next) {
        console.log('hit')
        return head;
    }
    let left = head;
    let right = head.next;
    
    const swap = (l, r) => {
        if (!r) {
            return;
        }
        console.log(head)
        let temp = l.val;
        l.val = r.val;
        r.val = temp;
        if (r.next && r.next.next) {
           swap(l.next.next, r.next.next) 
        }  
    }
    
    swap(left, right);
    
    return head;
};