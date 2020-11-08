package TheInternet.StepsDefinitionPackage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import TheInternet.PageClassPackage.JavaScriptAlerts;

public class JavaScriptAlertsSteps {

    JavaScriptAlerts javaScriptAlerts = new JavaScriptAlerts();

    @When("^user clicks on JavaScripts Alerts tab$")
    public void user_clicks_on_JavaScripts_Alerts_tab() throws Throwable {
        javaScriptAlerts.javaScripAlertsTab();          //method to click on JavaScript Alerts tab
    }

    @When("^user clicks on alert 'Click for JS Confirm'$")
    public void user_clicks_on_alert_Click_for_JS_Confirm() throws Throwable {
        javaScriptAlerts.jsConfirmButton();             //method to click on JS Confirm
    }

    @Then("^user should be able to see 'I am a JS Confirm' message in popup window$")
    public void user_should_be_able_to_see_I_am_a_JS_Confirm_alert_message_on_popup_window() throws Throwable {
        javaScriptAlerts.jsConfirmPopup();              //method to switch and assert message in popup window
    }

    @When("^user clicks on 'Click for JS Alert'$")
    public void user_clicks_on_Click_for_JS_Alert() throws Throwable {
        javaScriptAlerts.jsAlertButton();               //method to click on JS Alert
    }

    @Then("^user should be able to see 'I am a JS Alert' message in popup window$")
    public void user_should_be_able_to_see_I_am_a_JS_Alert_message_on_popup_window() throws Throwable {
        javaScriptAlerts.jsAlertPopup();                //method to switch and assert message in popup window
    }

    @When("^user clicks on 'Click for JS Prompt'$")
    public void user_clicks_on_Click_for_JS_Prompt() throws Throwable {
        javaScriptAlerts.jsPromptButton();             //method to switch and assert message in popup window
    }

    @Then("^user should be able to see 'I am a JS Prompt' message and text box in popup window$")
    public void user_should_be_able_to_see_I_am_a_JS_Prompt_message_and_text_box_in_popup_window() throws Throwable {
        javaScriptAlerts.jsPromptPopup();               //method to switch and assert message in popup window
    }
}
