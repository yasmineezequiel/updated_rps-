const { Given, Then, After, When } = require("cucumber");

Given("I visit the site", async function() {
  return await this.openHomePage()
});

After(async function() {
  return await this.closeHomePage()
})

Then("I should see {string}", async function(content) {
  return await this.pageHasTextContent(content);
});

When('I click {string}', async function (string) {
  return await this.clickOnRockBtn()
})

// When('Computer choose {string}', function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// Then('I see {string} for player and for Computer', function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

