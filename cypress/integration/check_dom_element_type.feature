Feature: check DOM element type

  I want to check DOM element type

  Scenario: Positive - check header is string
    Given I open main RZD page
    Then I see header have type "string"
