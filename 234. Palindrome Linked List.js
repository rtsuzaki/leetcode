var isPalindrome = function(head) {
    let node = head;
    if (!node) {
        return true;
    }
    let vals = [];
    while (node) {
        vals.push(node.val);
        node = node.next;
    }
    let reversed = vals.slice().reverse();
    if (vals.join('') === reversed.join('')) {
        return true;
    } else {
        return false;
    }
};