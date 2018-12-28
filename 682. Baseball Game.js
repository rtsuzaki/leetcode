var calPoints = function(ops) {
    let stack = [];
    let total = 0;
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] !== '+' && ops[i] !== 'D' && ops[i] !== 'C') {
            stack.push(Number(ops[i]));
            total += Number(ops[i]);
        } else if (ops[i] === 'C') {
            total -= stack[stack.length - 1];
            stack.pop();
        } else if (ops[i] === 'D') {
            total += 2 * stack[stack.length - 1]
            stack.push(2 * stack[stack.length - 1]);
        } else if (ops[i] === '+') {
            total += stack[stack.length - 1] + stack[stack.length - 2];
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        }
    }
    return total;
};