Feature: Play Rock Paper Scissors
  As a user
  In order to play this game against the computer
  I would like to be able of clicking one of the buttons to play


  Scenario: Play game against the computer
    Given I visit the site
    Then I should see "Let's play"
    And I should see "rock, paper, scissors"