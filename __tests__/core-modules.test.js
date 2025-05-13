// Core Modules Test Suite
import { jest } from '@jest/globals';

// Example function to test with comprehensive error handling
export function complexAdd(a, b) {
  // Validate input types
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  
  // Handle edge cases
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Arguments must be finite numbers');
  }
  
  return a + b;
}

// Test suite for complex arithmetic operations
describe('Core Module: Advanced Arithmetic', () => {
  // Test case for standard addition
  test('should correctly add two positive numbers', () => {
    expect(complexAdd(2, 3)).toBe(5);
  });

  // Test case for zero and negative numbers
  test('should handle adding zero and negative numbers', () => {
    expect(complexAdd(5, 0)).toBe(5);
    expect(complexAdd(-2, 3)).toBe(1);
  });

  // Comprehensive error handling tests
  test('should throw TypeError for non-numeric inputs', () => {
    expect(() => complexAdd('2', 3)).toThrow(TypeError);
    expect(() => complexAdd(null, 3)).toThrow(TypeError);
  });

  // Edge case handling
  test('should throw error for non-finite numbers', () => {
    expect(() => complexAdd(Infinity, 3)).toThrow('Arguments must be finite numbers');
    expect(() => complexAdd(NaN, 3)).toThrow('Arguments must be finite numbers');
  });
});