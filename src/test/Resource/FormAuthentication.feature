Feature: Form Authentication (verify successful login by valid credential)

  Scenario: Form Authentication with valid login details
    Given user is on the-internet.herokuapp.com
    When  user clicks on Form Authentication tab
    And   user provides valid username and password on login page
    Then  user should be able to securely login to their account

  Scenario Outline: Form Authentication with invalid login details
      Given user is on the-internet.herokuapp.com
      When  user clicks on Form Authentication tab
      And user types invalid "<username>" and "<password>" on login page
      Then user should be able to see error message
      Examples:
        | username | password |
        |tomsmith123 | 12345  |
        |TomSmith    |SuperSecretPassword!|
        |          |          |




