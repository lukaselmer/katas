export function romanNumeral(num: number) {
  return romanNumeralPart(num, ['I', 'V', 'X']);
}

function romanNumeralPart(num: number, [single, five, ten]: [string, string, string]) {
  if (num === 4) return `${single}${five}`;
  if (num <= 8) return `${five.repeat(num / 5)}${single.repeat(num % 5)}`;
  return `${num === 9 ? single : ''}${ten}`;
}
