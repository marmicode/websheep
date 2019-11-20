module.exports = {
  name: 'websheep-api',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/websheep-api',
  transform: {
    '^.+\\.yaml$': '<rootDir>/jest-yaml-transformer.js'
  }
};
