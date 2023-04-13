const fizzBuzzContact = (phone) => {

const digits = phone.split('').map(Number);

const sum = digits.reduce((acc, curr) => acc + curr, 0);

let output = '';

for(let i = 1; i<= sum; i++) {

if(i % 4 === 0 && i%5 ===0) {
output += 'FizzBuzz ';
} else if(i % 4 === 0) {
output += 'Fizz ';
} else if(i % 5 === 0) {
output += 'Buzz ';
} else {
output += i + ' ';
}

}
console.log(output.trim());
}

fizzBuzzContact('7028713879');
