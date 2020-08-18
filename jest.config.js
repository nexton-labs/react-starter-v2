const buildLogFolder = "buildlog";
module.exports = {
  testURL: "http://localhost/",
  setupFiles: ["./enzyme.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy"
  },
  collectCoverageFrom: [
    "**/app/**/*.{js,jsx}",
    "!**/app/**/*snap.js",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/app/index.jsx",
    "!**/app/config/settings.js"
  ],
  coverageDirectory: `${buildLogFolder}/coverage`,
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "crossing-minds Test Report",
        outputPath: `${buildLogFolder}/test-results.html`,
        includeFailureMsg: true,
        includeConsoleLog: true,
        theme: "darkTheme",
        sort: "status"
      }
    ]
  ],
  snapshotResolver: "./snapshotResolver.js"
};
