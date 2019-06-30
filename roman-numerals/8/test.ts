import { romanNumeral } from './roman-numeral';

let counter = 0;

export function testRomanNumeral(num: number, expected: string) {
  counter += 1;
  const actual = romanNumeral(num);
  console.assert(actual === expected, `expected romanNumeral(${num}) = ${expected}, but was ${actual}`);
}

function testRomanNumerals(spec: string) {
  spec
    .split(' ')
    .map(s => s.split('='))
    .map(([num, expected]) => [parseInt(num, 10), expected] as const)
    .forEach(res => testRomanNumeral(...res));
}

testRomanNumerals('1=I 2=II 3=III 4=IV 5=V 6=VI 7=VII 8=VIII 9=IX 10=X');
// testRomanNumerals('10=X 20=XX 30=XXX 40=XL 50=L 60=LX 70=LXX 80=LXXX 90=XC');

console.log(`Ran ${counter} tests`);
