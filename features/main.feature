Feature: Play Rock Paper Scissors
  As a user
  In order to entertain myself
  I would like to play the game rock, paper, scissors


  Scenario: Play can choose rock, paper or scissors 
    Given I visit the site
    When I click 'rock'
    Then I should see 'content'
