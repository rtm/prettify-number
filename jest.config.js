module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {pageTitle: "Test Report", outputPath: "./artifacts/test-results/test-results.html"},
    ],
  ],
  collectCoverage: true,
  coverageDirectory: "./artifacts/test-results"
};
