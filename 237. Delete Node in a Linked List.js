var deleteNode = function(node) {
    let current = node;
     while (current.next) {
         var prev = current;
         current.val = current.next.val
         current = current.next
     }
     prev.next = null
 };