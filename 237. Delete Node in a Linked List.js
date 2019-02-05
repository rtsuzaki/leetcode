var deleteNode = function(node) {
    let curr = node;
    let prev;
    while (curr && curr.next) {
        curr.val = curr.next.val;
        prev = curr;
        curr = curr.next;
    }
    prev.next = null;
};