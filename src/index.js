module.exports = function toReadable (number) {
    let numbers = [' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
  let dozens = [' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
  let result = [];
  let hundreds = Math.floor(number / 100);
  let tens = Math.floor(number % 100 / 10);
  if(number === 0) {
    return 'zero';
  }   
  if(hundreds != 0) {
    result.push(numbers[hundreds-1] + ' hundred');
  } 
  if(tens >= 2) {
    result.push(dozens[tens - 2]);
    result.push(numbers[number%10 - 1]);
  } else {
    result.push(numbers[number%100 - 1]);
  }
  return result.join('').trim();
}
