Feature: Bank Search

@TNR
  Scenario Outline: Search for a bank
    Given I am on the main page
    When I fill "<text>" in the search field
    And I click on Enter
    Then I should see the "<text>" results

  Examples:
    | text      |
    | Bank      |
    | Checking   |
    | Account   |