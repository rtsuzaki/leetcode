var middleNode = function(head) {
    let slow = head;
    let fast = head;
    let count = 1;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next
        count +=2;
    }
    if (fast.next) {
        count += 1;
    }
    if (count % 2 !== 0) {
        return slow;
    } else {
        return slow.next
    }
};