// Core Modules Test Suite

// Example function to test
function simpleAdd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

// Test suite for basic arithmetic operations
describe('Core Module: Basic Arithmetic', () => {
  // Test case for addition
  test('should correctly add two positive numbers', () => {
    expect(simpleAdd(2, 3)).toBe(5);
  });

  // Test case for zero
  test('should handle adding zero', () => {
    expect(simpleAdd(5, 0)).toBe(5);
  });

  // Test case for negative numbers
  test('should handle adding negative numbers', () => {
    expect(simpleAdd(-2, 3)).toBe(1);
  });

  // Error handling test
  test('should throw error for non-numeric inputs', () => {
    expect(() => simpleAdd('2', 3)).toThrow('Both arguments must be numbers');
    expect(() => simpleAdd(null, 3)).toThrow('Both arguments must be numbers');
  });
});