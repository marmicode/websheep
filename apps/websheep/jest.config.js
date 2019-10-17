module.exports = {
  name: 'websheep',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/websheep',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
