Feature: Online Statements

  Scenario: Check account balance from statement
  Given I am logged into my online banking account and I click on Online Banking
  When I am on the online statements page
  And I select the account
  And I click on the statement for "01/10/12"
  Then I should see in the documents uploaded the balance total as "$1100"