const { Given, Then, After, When } = require("cucumber");

Given("I visit the site", async function() {
  return await this.openHomePage()
});

// After(async function() {
//   return await this.closeHomePage()
// })

Then("I should see {string}", async function(content) {
  return await this.pageHasTextContent(content);
});

When('I click {string}', async function (string) {
  return await this.clickOnButton(string)
})



