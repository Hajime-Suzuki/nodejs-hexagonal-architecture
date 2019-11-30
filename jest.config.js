module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  resetMocks: true,
  testMatch: ['**/__tests__/**/*.test.ts'],
  moduleNameMapper: {
    '^@utils/(.+)': '<rootDir>/src/utils/$1',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
}
