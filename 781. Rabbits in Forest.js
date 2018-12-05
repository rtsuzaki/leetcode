var numRabbits = function(answers) {
    if (answers.length === 0) {
        return 0;
    }
    let output = 0;
    let counts = {};
    for (let i = 0; i < answers.length; i++) {
        if (!counts[answers[i]]) {
            counts[answers[i]] = 1;
        } else {
            counts[answers[i]]++;
        }
    }
    for (let key in counts) {
        if (counts[key] === Number(key) + 1) {
            output += Number(key) + 1;
        } else if (Number(key) === 0) {
            output += counts[key];
        }else if (counts[key] < Number(key) + 1) {
            output += Number(key) + 1;
        } else if (counts[key] > Number(key) + 1) {
            let x = Math.floor(counts[key]/(Number(key) + 1));
            output += x*(Number(key) +1);
            if ((counts[key] % (Number(key) + 1)) !== 0) {
                output += Number(key) + 1;
            }
        }
    }
    return output;
};