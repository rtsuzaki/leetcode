var validateStackSequences = function(pushed, popped) {
    let stack = [];
    while (popped.length > 0) {
        if (stack.length === 0 && pushed.length > 0) {
            stack.push(pushed.shift())
        } else if (stack[stack.length - 1] === popped[0]) {
                popped.shift();
                stack.pop();
        } else if (pushed.length > 0) {
            stack.push(pushed.shift());
        } else if (pushed.length === 0) {
            return false;
        }
    }
    return true;
};