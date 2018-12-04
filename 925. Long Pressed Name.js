var isLongPressedName = function(name, typed) {
    if (typed.length < name.length) {
        return false;
    }
    let nameIndex = 0;
    let typedIndex = 0;
    while (name[nameIndex] === typed[typedIndex] && nameIndex < name.length) {
        if (name[nameIndex + 1] !== name[nameIndex]) {
            while (typed[typedIndex + 1] === typed[typedIndex]) {
                typedIndex++;
            }
            typedIndex++;
            nameIndex++;
        } else if (name[nameIndex + 1] === name[nameIndex]) {
            typedIndex++;
            nameIndex++;
        }
    }
    if (nameIndex === name.length) {
        return true;
    } else {
        return false;
    }
};