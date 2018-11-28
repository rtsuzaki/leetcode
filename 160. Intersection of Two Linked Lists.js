var getIntersectionNode = function(headA, headB) {
    let lengthOfA = 0;
    let lengthOfB = 0;
    let A = headA;
    let B = headB;
    while (A) {
        A = A.next;
        lengthOfA++;
    }
    while (B) {
        B = B.next;
        lengthOfB++;
    }
    A = headA;
    B = headB;
    if (lengthOfA > lengthOfB) {
        for (let i = 0; i < lengthOfA - lengthOfB; i++) {
            A = A.next;
        }
    } else if (lengthOfB > lengthOfA) {
        for (let j = 0; j < lengthOfB - lengthOfA; j++) {
            B = B.next;
        }
    }
    while (A && B) {
        if (A === B) {
            return A;
        } else {
            A = A.next;
            B = B.next;
        }
    }
    return null;
};