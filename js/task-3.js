function findLongestWord(string = "") {
  // Write code under this line
  let names = string.split(" ");
  let LongestWord = "";
  for (const name of names) {
    if (name.length > LongestWord.length) {
      LongestWord = name;
    }
  }
  return LongestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'

// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая
// принимает параметром произвольную строку(в строке будут только
//   слова и пробелы) и возвращает самое длинное слово в этой строке.
