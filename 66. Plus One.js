var plusOne = function(digits) {
  let output = null;
  let add = (newDigits, changePlace) => {
      if (newDigits[changePlace] !== 9) {
          newDigits[changePlace]++;
          output = newDigits;
          return;
      } else {
          newDigits[changePlace] = 0;
          if (changePlace === 0) {
              newDigits.unshift(1);
              output = newDigits;
              return;
          }
          changePlace--;
          add(newDigits, changePlace);
      }
  }
  add(digits, digits.length-1);
  return output
};