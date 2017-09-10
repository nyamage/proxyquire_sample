const fs = require("fs");

function sampleFileExist() {
  if (fs.existsSync("sample_file")) {
    console.log("sample file exist");
  } else {
    console.log("not exist!!!!");
  }
}
module.exports = { sampleFileExist };
