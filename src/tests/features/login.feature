Feature: Login User

Scenario: User logs in with valid credentials

    Given the user is on the home page and he click on the login

    When the user enters valid username and password

    And clicks the login button

    Then the user should be redirected to the dashboard