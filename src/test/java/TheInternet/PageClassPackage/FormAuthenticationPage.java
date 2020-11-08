package TheInternet.PageClassPackage;
import org.apache.commons.io.FileUtils;
import TheInternet.BaseClassPackage.DriverFactory;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.support.FindBy;
import java.io.File;
import java.io.IOException;

public class FormAuthenticationPage extends DriverFactory {

    String validusername = "tomsmith";                  //storing valid username variable
    String validpassword = "SuperSecretPassword!";      //storing valid password variable

    @FindBy(xpath = "//a[contains(text(),'Form Authentication')]")
    WebElement formAuthentication;                      //element for Form Authentication tab

    @FindBy(xpath = "//input[@id='username']")
    WebElement usernameField;                                //element for username field

    @FindBy(xpath = "//input[@id='password']")
    WebElement passwordField;                                //element for password field

    @FindBy(xpath = "//i[contains(text(),'Login')]")
    WebElement loginButton;                                  //element for login button

    @FindBy(xpath = "//div[@id='flash']")
    WebElement secureAreaTitle;                              //element for secure logged-in message

    @FindBy(xpath = "//div[@id='flash']")
    WebElement invalidMessage;                                //element for invalid error message

    public void websiteAssertion(){                           //Assertion method for given url
        String actual = driver.getCurrentUrl();
        Assert.assertThat(actual, Matchers.containsString("the-internet.herokuapp.com"));
    }

    public void scrollPageMethod() throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,400)");
        Thread.sleep(2000);                //pause to check if page has scrolled down to our tabs
    }

    public void formAuthenticationTab(){
        formAuthentication.click();
    }

    public void validLogin(){
        usernameField.sendKeys(validusername);
        passwordField.sendKeys(validpassword);
        loginButton.click();
    }

    public void secureAreaAssertion(){
        String actual = secureAreaTitle.getText();
        Assert.assertThat(actual,Matchers.containsString("You logged into a secure area!"));
    }

    //following method is to save a screenshot in local machine
    public void secureAreaScreenshot() throws IOException, InterruptedException {
        Thread.sleep(1000);
        TakesScreenshot screenshot = ((TakesScreenshot) driver);
        File sourcefile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File destinationFolder = new File("C:\\SecureArea.png");
        FileUtils.copyFile(sourcefile,destinationFolder);
    }

    public void invalidLogin(String InvalidUsername, String InvalidPassword){
        usernameField.sendKeys(InvalidUsername);
        passwordField.sendKeys(InvalidPassword);
        loginButton.click();
    }

    public void invalidErrorAssertion(){
        String errorMessage = invalidMessage.getText();
        Assert.assertThat(errorMessage, Matchers.containsString("invalid!"));
    }
}
