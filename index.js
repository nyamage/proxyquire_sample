const proxyquire = require("proxyquire");
const foo = require("./foo");

console.log("without mock");
foo.sampleFileExist();

const mockedFoo = proxyquire("./foo", {
  fs: {
    existsSync: function(file) {
      //Always exist!!!!
      return true;
    }
  }
});
console.log("without mock");
mockedFoo.sampleFileExist();
