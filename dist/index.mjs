// src/rules/testRule.ts
var testRule = [
  {
    rules: {
      "no-console": "error"
    }
  }
];

// src/index.ts
var initialConfig = () => {
  const config = [...testRule];
  return config;
};
export {
  initialConfig
};
