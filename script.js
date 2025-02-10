function convertToRoman(num) {
  const arr = [
    ['M', 1000],
    ['D', 500],
    ['CD', 400],
    ['C', 100], 
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10], 
    ['IX', 9],
    ['IV', 5],
    ['I', 1]
  ];

  let result = '';
  for (let i = 0; i < arr.length; i++) {
    let [roman, value] = arr[i];
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

console.log(convertToRoman(36));

module.exports = convertToRoman;
