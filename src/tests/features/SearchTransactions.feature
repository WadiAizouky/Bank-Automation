Feature: Search Transactions

@TNR_Login
Scenario Outline: Search account transactions
Given I am on the main page and I am logged in
When I click on Online Banking
And I click on Account Activity then I click on Search Transactions
When I select the account Type with Deposit
And I click on find button
Then I should find results

@TNR_Login
Scenario Outline: Search account transactions
Given I am on the main page and I am logged in
When I click on Online Banking
And I click on Account Activity then I click on Search Transactions
When I select the account Type with Deposit and date 2026-07-01
And I click on find button
Then I should see no result message