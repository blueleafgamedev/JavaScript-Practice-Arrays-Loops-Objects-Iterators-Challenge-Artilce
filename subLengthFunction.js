//SUBLENGTH FUNCTION
// Write function below
const subLength = (word, char) => {
  let count = 0;
  let pos1 = word.indexOf(char);
  let pos2 = word.indexOf(char, pos1 + 1);
  let pos3 = word.indexOf(char, pos2 + 1);
  let slicedWordCount = word.slice(pos1, pos2 + 1).length;
  if (pos1 >= 0) {
    count++;
    if (pos2 >= 1) {
      count++;
      if (pos3 != -1 || pos3 > 2) {
        count++;
      }
    }
  if (count > 2 || count < 2) {
    slicedWordCount = 0;
    }  
  }
  return slicedWordCount;
};

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0