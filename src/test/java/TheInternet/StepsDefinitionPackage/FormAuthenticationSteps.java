package TheInternet.StepsDefinitionPackage;

import TheInternet.PageClassPackage.FormAuthenticationPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FormAuthenticationSteps {

    FormAuthenticationPage formAuthenticationPage = new FormAuthenticationPage();

    @Given("^user is on the-internet\\.herokuapp\\.com$")
    public void user_is_on_the_internet_herokuapp_com() throws Throwable {
        formAuthenticationPage.websiteAssertion();          //Assertion method for given url
        formAuthenticationPage.scrollPageMethod();          //scroll down method
    }

    @When("^user clicks on Form Authentication tab$")
    public void user_clicks_on_Form_Authentication_tab() throws Throwable {
        formAuthenticationPage.formAuthenticationTab();     //method to click on Form Authentication tab
    }

    @When("^user provides valid username and password on login page$")
    public void user_provides_valid_username_and_password_on_login_page() throws Throwable {
        formAuthenticationPage.validLogin();                //method with valid login
    }

    @Then("^user should be able to securely login to their account$")
    public void user_should_be_able_to_securely_login_to_their_account() throws Throwable {
        formAuthenticationPage.secureAreaAssertion();       //assertion method for logged-in page
        formAuthenticationPage.secureAreaScreenshot();      //screenshot method
    }

    @When("^user types invalid \"([^\"]*)\" and \"([^\"]*)\" on login page$")
    public void user_types_invalid_and_on_login_page(String InvalidUsername, String InvalidPassword) throws Throwable {
        formAuthenticationPage.invalidLogin(InvalidUsername,InvalidPassword);     //method with invalid login
    }

    @Then("^user should be able to see error message$")
    public void user_should_be_able_to_see_error_message() throws Throwable {
        formAuthenticationPage.invalidErrorAssertion();     //assertion method for invalid error message
    }
}
