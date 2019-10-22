
module.exports = {
  process(src) {
    return `module.exports = {default: \`${src}\`}`;
  }
};
