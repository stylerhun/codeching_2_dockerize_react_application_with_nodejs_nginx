const shell = require("shelljs");
const path = require("path");

shell.cd(path.join(__dirname, "../"));

shell.chmod("+x", "env.sh");

shell.exec("./env.sh");

shell.cp(path.resolve("./env-config.js"), path.resolve("./public"));

shell.exec("npx react-scripts start", (code, stdout, stderr) => {
  console.log("Exit code:", code);
  console.log("Program output:", stdout);
  console.log("Program stderr:", stderr);
});
