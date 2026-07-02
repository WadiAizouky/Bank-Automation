Feature: Online Banking Payment

@TNR_Login
  Scenario Outline: Successfully pay bills to a saved payee

    Given I am logged into my online banking account

    When I click on online banking

    And I click on Pay Bills

    And I select Payee Type as "<payeeType>"

    And I select Account Type as "<accountType>"

    And I fill in the Amount field with "<Amount>"

    And I fill in the Date field with "<paymentDate>"

    And I fill in the Description field with "<paymentDescription>"

    And I click on Pay

    Then I should see the message "<message>"

 Examples:
    | payeeType  | accountType      | Amount      | paymentDate      | paymentDescription      | message   |

    | Apple      | Savings      | 1000      | 2026-07-01      | description      | The payment was successfully submitted. |

    | Sprint   | Checking      | 2000      | 2026-07-02      | description2      | The payment was successfully submitted. |