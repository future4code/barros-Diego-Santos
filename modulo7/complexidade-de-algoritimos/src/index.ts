// Exercicio 1
// Complexidade  O(n)
const findFirstRecurringCharacter = (input:object[]):any => {
  const charHashMap:object = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
}; 
// --------- /// ------ // ---------- //
// Exercicio 2
// Complexidade  O(n)
export const func = (source:string,comparison:string):boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
// --------- /// ------ // ---------- //
// Exercicio 3
// Complexidade O(1)
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
// --------- /// ------ // ---------- //
// Exercicio 4
// Complexidade O(n2)
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
// --------- /// ------ // ---------- //
// Exercicio 5
// Da maior eficiência/performance para a menor
// 3 → 1 = 2 → 4

// PS: foi no copia e cola