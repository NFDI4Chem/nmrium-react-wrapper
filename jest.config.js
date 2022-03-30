module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  // Remove /data to include component files when components are tested.
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
};
