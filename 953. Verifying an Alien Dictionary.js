var isAlienSorted = function(words, order) {
    const checkOrder = (a, b, index) => {
        if (order.indexOf(a[index]) > order.indexOf(b[index])) {
            return false;
        } else if (a[index] === b[index]) {
            return checkOrder(a, b, index + 1);
        } else {
            return true;
        }
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        let current = words[i];
        let next = words[i + 1];
        if (!checkOrder(current, next, 0)) {
            return false;
        }
    }
    
    return true;
};