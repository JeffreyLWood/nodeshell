const fs = require("fs");
const done = require("./bash");

function runFs() {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
      // process.stdout.write("\nprompt > ");
      done.done();
    }
  });
}

module.exports = {
  runFs,
};

//files will be an array of filenames, like ['bash.js, 'pwd.js']
// function runFs() {
//   fs.readdir("./", "utf8", (err, files) => {
//     if (err) {
//       throw err;
//     } else {
//       process.stdout.write(files.join("\n"));
//       process.stdout.write("\nprompt > ");
//     }
//   });
// }

// module.exports = {
//   runFs,
// };
