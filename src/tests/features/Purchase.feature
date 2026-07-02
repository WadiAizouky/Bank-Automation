Feature: Purchase foreign currency


  Scenario Outline: Purchase foreign currency
    Given I am logged into my online banking account
    When I click on Online Banking
    And I click on Pay Bills
    And i click on Purchase foreign currency
    And I select Currency as "<Currency>"
    And I fill Account as "<Account>" and i check Selected currency
    And i click on Calculate Costs
    Then I should see in Conversion Amount the correctes amounts
    When I click on purchase
    Then I should see the message  : Foreign currency cash was successfully purchased.

    Examples:
    | Currency       | Account      |
    | Canada       | 1000    |
    | Australia    | CHECK DEPOSIT    |