$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DynamicLoading.feature");
formatter.feature({
  "line": 1,
  "name": "Dynamic Loading example 1 and 2 with \"Hello World\" message after loading bar disappears",
  "description": "",
  "id": "dynamic-loading-example-1-and-2-with-\"hello-world\"-message-after-loading-bar-disappears",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7574630874,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Pre-condition is same for all three tasks. user is on the-internet.herokuapp.com",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.match({
  "location": "FormAuthenticationSteps.user_is_on_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 2171328923,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Example-2  “Hello World” message appears after the loading bar disappears",
  "description": "",
  "id": "dynamic-loading-example-1-and-2-with-\"hello-world\"-message-after-loading-bar-disappears;example-2--“hello-world”-message-appears-after-the-loading-bar-disappears",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user clicks on Dynamic Loading tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Example 2: Element rendered after the fact",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Start",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should be able to see “Hello World” message after the loading bar disappears",
  "keyword": "Then "
});
formatter.match({
  "location": "DynamicLoadingSteps.user_clicks_on_Dynamic_Loading_tab()"
});
formatter.result({
  "duration": 492119294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "DynamicLoadingSteps.user_clicks_on_Example_Element_rendered_after_the_fact(int)"
});
formatter.result({
  "duration": 263127241,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingSteps.user_clicks_on_Start()"
});
formatter.result({
  "duration": 71585327,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingSteps.user_should_be_able_to_see_Hello_World_message_after_the_loading_bar_disappears()"
});
formatter.result({
  "duration": 6511456509,
  "status": "passed"
});
formatter.after({
  "duration": 2681928043,
  "status": "passed"
});
formatter.before({
  "duration": 8549045199,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Pre-condition is same for all three tasks. user is on the-internet.herokuapp.com",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.match({
  "location": "FormAuthenticationSteps.user_is_on_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 2038317790,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Example-1 “Hello World” message appears after the loading bar disappears",
  "description": "",
  "id": "dynamic-loading-example-1-and-2-with-\"hello-world\"-message-after-loading-bar-disappears;example-1-“hello-world”-message-appears-after-the-loading-bar-disappears",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user clicks on Dynamic Loading tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on Example 1: Element on page that is hidden",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user clicks on Start",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should be able to see “Hello World” message after the loading bar disappears",
  "keyword": "Then "
});
formatter.match({
  "location": "DynamicLoadingSteps.user_clicks_on_Dynamic_Loading_tab()"
});
formatter.result({
  "duration": 649858285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "DynamicLoadingSteps.user_clicks_on_Example_Element_on_page_that_is_hidden(int)"
});
formatter.result({
  "duration": 404835843,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingSteps.user_clicks_on_Start()"
});
formatter.result({
  "duration": 87773081,
  "status": "passed"
});
formatter.match({
  "location": "DynamicLoadingSteps.user_should_be_able_to_see_Hello_World_message_after_the_loading_bar_disappears()"
});
formatter.result({
  "duration": 6392641681,
  "status": "passed"
});
formatter.after({
  "duration": 2690907318,
  "status": "passed"
});
formatter.uri("FormAuthentication.feature");
formatter.feature({
  "line": 1,
  "name": "Form Authentication (verify successful login by valid credential)",
  "description": "",
  "id": "form-authentication-(verify-successful-login-by-valid-credential)",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6769669480,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Form Authentication with valid login details",
  "description": "",
  "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-valid-login-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on Form Authentication tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user provides valid username and password on login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to securely login to their account",
  "keyword": "Then "
});
formatter.match({
  "location": "FormAuthenticationSteps.user_is_on_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 2028988290,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthenticationSteps.user_clicks_on_Form_Authentication_tab()"
});
formatter.result({
  "duration": 946764930,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthenticationSteps.user_provides_valid_username_and_password_on_login_page()"
});
formatter.result({
  "duration": 678195729,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthenticationSteps.user_should_be_able_to_securely_login_to_their_account()"
});
formatter.result({
  "duration": 1345234715,
  "status": "passed"
});
formatter.after({
  "duration": 2654855514,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Form Authentication with invalid login details",
  "description": "",
  "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-invalid-login-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Form Authentication tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user types invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" on login page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should be able to see error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-invalid-login-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-invalid-login-details;;1"
    },
    {
      "cells": [
        "tomsmith123",
        "12345"
      ],
      "line": 16,
      "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-invalid-login-details;;2"
    },
    {
      "cells": [
        "TomSmith",
        "SuperSecretPassword!"
      ],
      "line": 17,
      "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-invalid-login-details;;3"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 18,
      "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-invalid-login-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8860179363,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Form Authentication with invalid login details",
  "description": "",
  "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-invalid-login-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Form Authentication tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user types invalid \"tomsmith123\" and \"12345\" on login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should be able to see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "FormAuthenticationSteps.user_is_on_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 2032100119,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthenticationSteps.user_clicks_on_Form_Authentication_tab()"
});
formatter.result({
  "duration": 951807914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith123",
      "offset": 20
    },
    {
      "val": "12345",
      "offset": 38
    }
  ],
  "location": "FormAuthenticationSteps.user_types_invalid_and_on_login_page(String,String)"
});
formatter.result({
  "duration": 693508135,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthenticationSteps.user_should_be_able_to_see_error_message()"
});
formatter.result({
  "duration": 52252387,
  "status": "passed"
});
formatter.after({
  "duration": 2617838560,
  "status": "passed"
});
formatter.before({
  "duration": 5838914413,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Form Authentication with invalid login details",
  "description": "",
  "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-invalid-login-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Form Authentication tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user types invalid \"TomSmith\" and \"SuperSecretPassword!\" on login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should be able to see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "FormAuthenticationSteps.user_is_on_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 2037886317,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthenticationSteps.user_clicks_on_Form_Authentication_tab()"
});
formatter.result({
  "duration": 726726922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TomSmith",
      "offset": 20
    },
    {
      "val": "SuperSecretPassword!",
      "offset": 35
    }
  ],
  "location": "FormAuthenticationSteps.user_types_invalid_and_on_login_page(String,String)"
});
formatter.result({
  "duration": 795469395,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthenticationSteps.user_should_be_able_to_see_error_message()"
});
formatter.result({
  "duration": 44993021,
  "status": "passed"
});
formatter.after({
  "duration": 2625906993,
  "status": "passed"
});
formatter.before({
  "duration": 9760368202,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Form Authentication with invalid login details",
  "description": "",
  "id": "form-authentication-(verify-successful-login-by-valid-credential);form-authentication-with-invalid-login-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on Form Authentication tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user types invalid \"\" and \"\" on login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should be able to see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "FormAuthenticationSteps.user_is_on_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 2023185415,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthenticationSteps.user_clicks_on_Form_Authentication_tab()"
});
formatter.result({
  "duration": 3218722632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "FormAuthenticationSteps.user_types_invalid_and_on_login_page(String,String)"
});
formatter.result({
  "duration": 4052216040,
  "status": "passed"
});
formatter.match({
  "location": "FormAuthenticationSteps.user_should_be_able_to_see_error_message()"
});
formatter.result({
  "duration": 41426199,
  "status": "passed"
});
formatter.after({
  "duration": 2694726012,
  "status": "passed"
});
formatter.uri("JavaScriptAlerts.feature");
formatter.feature({
  "line": 1,
  "name": "Click the alert buttons and check the relevant message appears",
  "description": "",
  "id": "click-the-alert-buttons-and-check-the-relevant-message-appears",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8394338926,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Pre-condition is same for all three tasks. user is on the-internet.herokuapp.com",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.match({
  "location": "FormAuthenticationSteps.user_is_on_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 2019537344,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Click for JS Confirm: click the buttons on the alert and check that a relevant message appears",
  "description": "",
  "id": "click-the-alert-buttons-and-check-the-relevant-message-appears;click-for-js-confirm:-click-the-buttons-on-the-alert-and-check-that-a-relevant-message-appears",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user clicks on JavaScripts Alerts tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user clicks on alert \u0027Click for JS Confirm\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should be able to see \u0027I am a JS Confirm\u0027 message in popup window",
  "keyword": "Then "
});
formatter.match({
  "location": "JavaScriptAlertsSteps.user_clicks_on_JavaScripts_Alerts_tab()"
});
formatter.result({
  "duration": 422244040,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertsSteps.user_clicks_on_alert_Click_for_JS_Confirm()"
});
formatter.result({
  "duration": 2089179114,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertsSteps.user_should_be_able_to_see_I_am_a_JS_Confirm_alert_message_on_popup_window()"
});
formatter.result({
  "duration": 5732317,
  "status": "passed"
});
formatter.after({
  "duration": 2718794473,
  "status": "passed"
});
formatter.before({
  "duration": 11783337667,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Pre-condition is same for all three tasks. user is on the-internet.herokuapp.com",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.match({
  "location": "FormAuthenticationSteps.user_is_on_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 2035948747,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Click on \u0027Click for JS Alert\u0027 and check a relevant message",
  "description": "",
  "id": "click-the-alert-buttons-and-check-the-relevant-message-appears;click-on-\u0027click-for-js-alert\u0027-and-check-a-relevant-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user clicks on JavaScripts Alerts tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on \u0027Click for JS Alert\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user should be able to see \u0027I am a JS Alert\u0027 message in popup window",
  "keyword": "Then "
});
formatter.match({
  "location": "JavaScriptAlertsSteps.user_clicks_on_JavaScripts_Alerts_tab()"
});
formatter.result({
  "duration": 710005918,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertsSteps.user_clicks_on_Click_for_JS_Alert()"
});
formatter.result({
  "duration": 2115209947,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertsSteps.user_should_be_able_to_see_I_am_a_JS_Alert_message_on_popup_window()"
});
formatter.result({
  "duration": 4364771,
  "status": "passed"
});
formatter.after({
  "duration": 2762369489,
  "status": "passed"
});
formatter.before({
  "duration": 8260980562,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Pre-condition is same for all three tasks. user is on the-internet.herokuapp.com",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the-internet.herokuapp.com",
  "keyword": "Given "
});
formatter.match({
  "location": "FormAuthenticationSteps.user_is_on_the_internet_herokuapp_com()"
});
formatter.result({
  "duration": 2037057578,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Click on \u0027Click for JS Prompt\u0027 and check a relevant message",
  "description": "",
  "id": "click-the-alert-buttons-and-check-the-relevant-message-appears;click-on-\u0027click-for-js-prompt\u0027-and-check-a-relevant-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user clicks on JavaScripts Alerts tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user clicks on \u0027Click for JS Prompt\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user should be able to see \u0027I am a JS Prompt\u0027 message and text box in popup window",
  "keyword": "Then "
});
formatter.match({
  "location": "JavaScriptAlertsSteps.user_clicks_on_JavaScripts_Alerts_tab()"
});
formatter.result({
  "duration": 641338279,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertsSteps.user_clicks_on_Click_for_JS_Prompt()"
});
formatter.result({
  "duration": 2106238368,
  "status": "passed"
});
formatter.match({
  "location": "JavaScriptAlertsSteps.user_should_be_able_to_see_I_am_a_JS_Prompt_message_and_text_box_in_popup_window()"
});
formatter.result({
  "duration": 4182175,
  "status": "passed"
});
formatter.after({
  "duration": 2898558732,
  "status": "passed"
});
});