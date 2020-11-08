package TheInternet.StepsDefinitionPackage;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import TheInternet.PageClassPackage.DynamicLoading;

public class DynamicLoadingSteps {

    DynamicLoading dynamicLoading = new DynamicLoading();

    @When("^user clicks on Dynamic Loading tab$")
    public void user_clicks_on_Dynamic_Loading_tab() throws Throwable {
        dynamicLoading.dynamicLoadingTab();
        dynamicLoading.dynamicLoadingAssertion();
    }

    @When("^user clicks on Example (\\d+): Element rendered after the fact$")       //Example 2
    public void user_clicks_on_Example_Element_rendered_after_the_fact(int arg1) throws Throwable {
        dynamicLoading.example2Method();        //method to click on example 2
    }

    @When("^user clicks on Example (\\d+): Element on page that is hidden$")        //Example 1
    public void user_clicks_on_Example_Element_on_page_that_is_hidden(int arg1) throws Throwable {
        dynamicLoading.example1Method();        //method to click on example 1
    }

    @When("^user clicks on Start$")
    public void user_clicks_on_Start() throws Throwable {
        dynamicLoading.startButtonMethod();
    }

    @Then("^user should be able to see “Hello World” message after the loading bar disappears$")
    public void user_should_be_able_to_see_Hello_World_message_after_the_loading_bar_disappears() throws Throwable {
        dynamicLoading.helloWorldMethod();              //Hello World element using explicit wait
        dynamicLoading.helloWorldAssertion();           //Hello World Assertion method
        dynamicLoading.helloWorldScreenshot();          //Hello World Screenshot method
    }
}
