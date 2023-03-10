const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
    "uuid": require.resolve('uuid'),
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@enums(.*)$': '<rootDir>/src/enums$1',
  },
};
module.exports = createJestConfig(customJestConfig);