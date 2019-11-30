module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  resetMocks: true,
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^@utils/(.+)': '<rootDir>/src/utils/$1',
    '^@hotels/(.+)': '<rootDir>/src/hotels/$1',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
}
