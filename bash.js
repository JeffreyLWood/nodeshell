const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
//Output a prompt
process.stdout.write("prompt > ");

// The stdin "data" event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd") {
    //print directory
    pwd.func1();

    pwd.func2();
  } else if (cmd === "ls") {
    ls.runFs();
  } else if (cmd.split(" ")[0] === "cat") {
    let fileName = cmd.split(" ")[1];
    cat.runCat(fileName);
  } else if (cmd.split(" ")[0] === "curl") {
    let url = cmd.split(" ")[1];
    curl.getCode(url);
  } else {
    process.stdout.write("You typed: " + cmd);
  }

  process.stdout.write("\nprompt > ");
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

module.exports = {
  done,
};
