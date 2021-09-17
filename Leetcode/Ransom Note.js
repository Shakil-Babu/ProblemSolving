var canConstruct = function (ransomNote, magazine) {
  
    const noteArr = ransomNote.split('');
    const magazineArr = magazine.split('');
  
    for (let i = 0; i < noteArr.length; i++) {
      if (magazineArr.includes(noteArr[i])) {
        const index = magazineArr.indexOf(noteArr[i]);
        magazineArr.splice(index, 1);
      } else {
        return false;
      }
    }
    return true;
  };