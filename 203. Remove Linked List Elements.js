var removeElements = function(head, val) {
    let preHead = new ListNode();
    preHead.next = head;
    let current = head;
    let prev = preHead;
    while (current) {
        console.log(prev.val, current.val)
        if (current.val === val) {
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        current = current.next;
    }
    return preHead.next;
};