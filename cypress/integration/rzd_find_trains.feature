Feature: The RZD find trains

  I want to open a RZD main page and find trains

  Scenario: Positive - Find result with only from date picker
    Given I open main RZD page
    When I feel "Москва" in from station
    And I feel "Санкт-Петербург" in to station
    And I feel fromDatePicker
    And I click find button
    Then I see "ticket.rzd.ru" in the location

  Scenario: Positive - Find result with from and to date picker
    Given I open main RZD page
    When I feel "Москва" in from station
    And I feel "Санкт-Петербург" in to station
    And I feel fromDatePicker
    And I feel toDatePicker
    And I click find button
    Then I see "ticket.rzd.ru" in the location

  Scenario: Negative - Check Error if from station is empty
    Given I open main RZD page
    When I click find button
    Then I see "Введите пункт отправления" in the from tooltip

  Scenario: Negative - Check Error if to station is empty
    Given I open main RZD page
    When I feel "Москва" in from station
    And I click find button
    Then I see "Введите пункт назначения" in the to tooltip

  Scenario: Negative - Check Error if from station is empty and to station is feeling
    Given I open main RZD page
    When I feel "Санкт-Петербург" in to station
    And I click find button
    Then I see "Введите пункт отправления" in the from tooltip

  Scenario: Negative - Check Error if time is empty
    Given I open main RZD page
    When I feel "Москва" in from station
    And I feel "Санкт-Петербург" in to station
    And I click find button
    Then I see "Укажите дату отправления" in the departure time tooltip
