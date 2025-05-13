module.exports = {
  // Test environment setup
  testEnvironment: 'node',
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // Test match patterns
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  
  // Ignore certain directories
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  
  // Verbose output for better debugging
  verbose: true
};