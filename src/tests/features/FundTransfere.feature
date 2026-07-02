Feature: Transfer Funds


  Scenario Outline: Perform a funds transfer

    Given I am logged into my online banking account and I click on Online Banking
    When I click on Transfer Funds
    And I fill in the From Account field with "<Account A>"
    And I fill in the To Account field with "<Account B>"
    And I fill in the Amount field with "<Amount>"
    And I fill in the Description field with "<Description>"
    And I click on Continue"
    Then I should see in the "Transfer Money & Make Payments - Verify" page the correctes information
    When I click on Submit"
    Then I should see the confirmation message : You successfully submitted your transaction.
    
    Examples:
    | Account A | Account B | Amount | Description |
    | Savings 1000      | Checking -500.2      | 100    | Test Transfer |
    | Savings 1548      | Loan 780      | 50     | Test Transfer 2 |
    | Credit Card -265      | Brokerage 197      | 200    | Test Transfer 3 |