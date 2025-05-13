export default {
  // Test environment setup
  testEnvironment: 'node',
  
  // ES Module support
  extensionsToTreatAsEsm: ['.js'],
  
  // Transform configuration
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
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
  
  // Module mapping for ES modules
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  
  // Verbose output for better debugging
  verbose: true
};