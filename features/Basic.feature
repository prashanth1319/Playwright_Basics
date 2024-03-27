Feature: Basic validation

  Scenario: Login to application
  Given logi to application with "prashudp45@gmail.com" and "Prashu@123"
    When the greeter says hello
    Then I should have heard "hello"