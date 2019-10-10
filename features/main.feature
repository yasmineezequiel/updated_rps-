Feature: Play Rock Paper Scissors
  As a user
  In order to entertain myself
  I would like to play the game rock, paper, scissors


  Scenario: Play can choose rock, paper or scissors 
    Given I visit the site
    Then I should see 'Rock paper and scissors'
    When I click 'Let's Play'
    Then I should see 'rock'
    When I click 'rock' as Player
    And Computer choose 'rock'
    Then I should see 'It is a tie'
    And I see 'score zero' for player and for Computer 