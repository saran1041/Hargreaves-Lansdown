package TheInternet.PageClassPackage;
import TheInternet.BaseClassPackage.DriverFactory;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class JavaScriptAlerts extends DriverFactory {

    @FindBy(xpath = "//a[contains(text(),'JavaScript Alerts')]")
    WebElement javaScriptAlert;                 //element for JavaScript Alerts

    @FindBy(xpath = "//button[contains(text(),'Click for JS Confirm')]")
    WebElement jsConfirm;                       //element for JS Confirm

    @FindBy(xpath = "//button[contains(text(),'Click for JS Alert')]")
    WebElement jsAlert;                         //element for JS Alert

    @FindBy(xpath = "//button[contains(text(),'Click for JS Prompt')]")
    WebElement jsPrompt;                        //element for JS Prompt

    public void javaScripAlertsTab(){
        javaScriptAlert.click();
    }

    public void jsConfirmButton() throws InterruptedException {
        Thread.sleep(2000);                //pause to see the page before clicking on JS Confirm
        jsConfirm.click();
    }

    public void jsConfirmPopup(){
        String actualConfirm = driver.switchTo().alert().getText();
        Assert.assertThat(actualConfirm, Matchers.containsString("I am a JS Confirm"));
    }

    public void jsAlertButton() throws InterruptedException {
        Thread.sleep(2000);
        jsAlert.click();
    }

    public void jsAlertPopup(){
        String actualAlert = driver.switchTo().alert().getText();
        Assert.assertThat(actualAlert, Matchers.containsString("I am a JS Alert"));
    }

    public void jsPromptButton() throws InterruptedException {
        Thread.sleep(2000);
        jsPrompt.click();
    }

    public void jsPromptPopup(){
        String actualPrompt = driver.switchTo().alert().getText();
        Assert.assertThat(actualPrompt, Matchers.containsString("I am a JS prompt"));
    }
}
