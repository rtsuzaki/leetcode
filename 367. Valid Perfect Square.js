var isPerfectSquare = function(num) {
    let squaringNum = 1;
    while (true) {
        if (squaringNum*squaringNum === num) {
            return true;
        } else if (squaringNum*squaringNum > num) {
            return false;
        }
        squaringNum++;
    }
};