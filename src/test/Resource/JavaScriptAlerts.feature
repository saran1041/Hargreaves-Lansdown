Feature: Click the alert buttons and check the relevant message appears

  Background: Pre-condition is same for all three tasks. user is on the-internet.herokuapp.com
    Given user is on the-internet.herokuapp.com

  Scenario: Click for JS Confirm: click the buttons on the alert and check that a relevant message appears
    When user clicks on JavaScripts Alerts tab
    And user clicks on alert 'Click for JS Confirm'
    Then user should be able to see 'I am a JS Confirm' message in popup window

    Scenario: Click on 'Click for JS Alert' and check a relevant message
      When user clicks on JavaScripts Alerts tab
      And user clicks on 'Click for JS Alert'
      Then user should be able to see 'I am a JS Alert' message in popup window

      Scenario: Click on 'Click for JS Prompt' and check a relevant message
        When user clicks on JavaScripts Alerts tab
        And user clicks on 'Click for JS Prompt'
        Then user should be able to see 'I am a JS Prompt' message and text box in popup window