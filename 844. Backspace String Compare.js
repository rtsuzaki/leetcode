var backspaceCompare = function(S, T) {
    let sStr = [];
    let tStr = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] !== '#') {
            sStr.push(S[i])
        } else {
            sStr.pop();
        }
    }
    
    for (let j = 0; j < T.length; j++) {
        if (T[j] !== '#') {
            tStr.push(T[j])
        } else {
            tStr.pop();
        }
    }
    if (sStr.join('') === tStr.join('')) {
        return true;
    }
    return false;
};