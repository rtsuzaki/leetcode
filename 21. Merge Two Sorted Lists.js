var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return null;
    } else if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    }
    let first = l1;
    let second = l2;
    let current, head;
    if (l1.val <= l2.val) {
        head = l1;
        current = l1;
        first = first.next;
    } else {
        head = l2;
        current = l2;
        second = second.next;
    }
    
    
    while (first || second) {
        if (!second) {
            current.next = first;
            first = first.next;
        } else if (!first) {
            current.next = second;
            second = second.next;
        } else if (first && second) {
            if (first.val <= second.val) {
                current.next = first;
                first = first.next;
            } else {
                current.next = second;
                second = second.next;
            }
        }
        current = current.next;
    }
    return head;
};