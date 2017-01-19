const check = require('./lib/app.js');

if (check('lib')) {
  console.log('is a file');
} else {
  console.log('is not a file');
}
