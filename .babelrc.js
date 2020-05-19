module.exports = {
  presets: [
    "@babel/typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules: true
      }
    ],
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
};
