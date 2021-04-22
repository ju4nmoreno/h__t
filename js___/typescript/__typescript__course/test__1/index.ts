function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}
const printResult = true;
const number1 = 5;
const number2 = 2.8;

add(number1, number2, printResult);

const person: {
  name: string;
  age: number;
} = {
  name: 'juan',
  age: 300,
};

console.log(person.name);

// array of numbers
const myArryNumbers: number[] = [1, 2, 3];
const myArryNumbers__2: Array<number> = [1, 2, 3];
const myArryStrings: string[] = ['Diana', 'Mariana', 'Juan'];
const myArryStrings__2: Array<string> = ['Diana', 'Mariana', 'Juan'];
//
const a = { h: 'jada' };
