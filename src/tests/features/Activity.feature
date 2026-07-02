Feature: Account Activity

  @TNR_Login
  Scenario Outline: View account transactions
    Given I am on the main page and I am logged in
    When I click on Online Banking
    And I click on Account Activity
    Then I should see the Show Transactions page
    And I select the account "<account>"
    Then I should have Description value "<Description>"
    And I should have Deposit value "<Deposit>"

  Examples:
    | account       | Description      | Deposit  |
    | Savings       | OFFICE SUPPLY    | nul      |
    | Checking      | CHECK DEPOSIT    | 186.7    |
    | Credit Card   | nul              | nul      |
