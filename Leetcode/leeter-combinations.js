var letterCombinations = function (digits) {
    const obj = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };
    let combs = digits ? [""] : [];
    for (const digit of digits) {
      let newCombs = [];
      for (const comb of combs) {
        for (const letter of obj[digit]) {
          newCombs.push(comb + letter);
        }
      }
      combs = newCombs;
    }
    return combs;
  };

  let r = letterCombinations('23');
  console.log(r);