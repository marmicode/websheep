module.exports = config => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [...config.module.rules, {
        test: /\.ya?ml$/,
        loader: 'raw-loader'
      }]
    }
  }
};
