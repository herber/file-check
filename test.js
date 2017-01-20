const check = require('./lib/app.js');

if (check('my-file')) {
  console.log('is a file');
} else {
  console.log('is not a file');
}
