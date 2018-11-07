var oddEvenList = function(head) {
    if (!head) {
        return null;
    } else if (!head.next) {
        return head;
    }
    let odd = head;
    let even = head.next;
    let evenStart = head.next;
    while (odd.next && odd.next.next) {
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }
    odd.next = evenStart;
    return head;
};