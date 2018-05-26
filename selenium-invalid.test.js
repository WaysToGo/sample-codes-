var webdriver = require("selenium-webdriver"),
driver = new webdriver.Builder().forBrowser("chrome")
.build(),
  // .withCapabilities({
  //   "chrome.binary.path":
  //     "C:UsersshivaprasadDesktopwebdriverschromedriver.exe"
  // })

assert = require("chai").assert;

describe("App", function() {
describe("default page", function() {
it("Submit", function(done) {
  var url=
  driver.get(process.env.uix_url);
  ele = driver.findElement(webdriver.By.id("submit"));
  ele.getAttribute("type").then(val => {
    assert.equal(val, "submit");
    done();
  });
});
});
});
