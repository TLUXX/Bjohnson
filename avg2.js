
function calAvg(numbers){

var avg = 0;

avg = (numbers.reduce((total, one_number) => total + one_number, 0))/numbers.length;
return avg;

}

console.log(calAvg([4, 8, 15, 16, 23, 42]));
