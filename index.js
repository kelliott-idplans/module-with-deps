let aws = require('aws-sdk');

module.exports = function moduleWithDeps() {
  return new aws.SecretsManager();
}