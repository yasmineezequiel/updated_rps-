const { Given, Then, When } = require("cucumber");

Given("I visit the site", async function() {
  return await this.openHomePage()
});

Then("I should see {string}", async function(content) {
  // Write code here that turns the phrase above into concrete actions
  return "pending";
});

When('I click \'Let\'s Play\'', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('Computer choose {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('I see {string} for player and for Computer', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});