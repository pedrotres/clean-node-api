module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': "ts-jest"
  }
  
}