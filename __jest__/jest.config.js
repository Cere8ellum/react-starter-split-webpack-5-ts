module.exports = {
  roots: ["../__tests__", "../src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Modules are meant for code which is repeating in each test file
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["../node_modules", "../src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/filesMock.js",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        // Compile each file separately. It's lose type-checking ability and some features such as const enum
        // At the current config it helps to avoid of errors with importing css modules
        isolatedModules: true,
        diagnostics: { ignoreCodes: [151001] },
      },
    ],
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform", // To work with CSS like modules
  },
  testMatch: ["**/?(*.)(spec|test).[jt]s?(x)"], // Finds test files named like abc.test|spec.ts?tsx|js|jsx in roots:[] prop.
  testEnvironment: "jsdom", // To avoid of js DOM errors
};
