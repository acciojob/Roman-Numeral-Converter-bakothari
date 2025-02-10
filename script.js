function convertToRoman(num) {
  	const arr = [
      ['M',1000], 
      ['D', 500], 
      ['C', 100], 
	  ['XC', 90],
      ['L', 50],
	  ['XL', 40],
      ['X', 10], 
	  ['IX',9],
      ['IV', 5],
	  ['I', 1]
    ];

  let result = '';

    for (let [symbol, value] of arr) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
