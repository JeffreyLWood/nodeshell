const fs = require("fs");

function runCat(path) {
  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write("\nprompt > ");
    }
  });
}

module.exports = {
  runCat,
};
