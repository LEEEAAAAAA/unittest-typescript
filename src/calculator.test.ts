import { add, subtract } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 1;
  const b: number = 2;
  const expected: number = 3;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 7;
  const b: number = 3;
  const expected: number = 4;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

