Feature: Dynamic Loading example 1 and 2 with "Hello World" message after loading bar disappears

  Background: Pre-condition is same for all three tasks. user is on the-internet.herokuapp.com
    Given user is on the-internet.herokuapp.com

  Scenario: Example-2  “Hello World” message appears after the loading bar disappears
    When user clicks on Dynamic Loading tab
    And user clicks on Example 2: Element rendered after the fact
    And user clicks on Start
    Then user should be able to see “Hello World” message after the loading bar disappears

    Scenario: Example-1 “Hello World” message appears after the loading bar disappears
      When user clicks on Dynamic Loading tab
      And user clicks on Example 1: Element on page that is hidden
      And user clicks on Start
      Then user should be able to see “Hello World” message after the loading bar disappears



