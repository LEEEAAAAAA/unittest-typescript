import { add, multiply, subtract ,divide} from "./calculator";

test("add one to two is three", () => {
  // Arrange
  const a: number = 1;
  const b: number = 2;
  const expected: number = 3;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract seven from three is four", () => {
  // Arrange
  const a: number = 7;
  const b: number = 3;
  const expected: number = 4;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply eight and six to get 48", () => {
  // Arrange
  const a: number = 8;
  const b: number = 6;
  const expected: number = 48;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide sox and three to get two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 3;
  const expected: number = 2;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("division durch null wirft einen Fehler", () => {
  // Arrange
  const dividend = 10;
  const divisor = 0;

  // Act + Assert
  expect(() => divide(dividend, divisor)).toThrow("Division durch 0 ist nicht erlaubt");
});