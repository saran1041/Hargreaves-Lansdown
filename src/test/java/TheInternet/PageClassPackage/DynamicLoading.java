package TheInternet.PageClassPackage;

import TheInternet.BaseClassPackage.DriverFactory;
import org.apache.commons.io.FileUtils;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.io.File;
import java.io.IOException;

public class DynamicLoading extends DriverFactory {
    @FindBy(xpath = "//a[contains(text(),'Dynamic Loading')]")
    WebElement dynamicLoading;                      //element for Dynamic Loading tab

    @FindBy(xpath = "//h3[contains(text(),'Dynamically Loaded Page Elements')]")
    WebElement dynamicPageTitle;                    //element for Dynamic Loading page title

    @FindBy(xpath = "//a[contains(text(),'Example 2: Element rendered after the fact')]")
    WebElement example2;                            //element for Example 2

    @FindBy(xpath = "//a[contains(text(),'Example 1: Element on page that is hidden')]")
    WebElement example1;                            //element for Example 1

    @FindBy(xpath = "//button[contains(text(),'Start')]")
    WebElement startButton;                         //element for Start button

    @FindBy(xpath = "//h4[contains(text(),'Hello World!')]")
    WebElement helloWorldTitle;                     //element for Hello World Message

    public void dynamicLoadingTab(){
        dynamicLoading.click();
    }

    public void dynamicLoadingAssertion(){
        String actual = dynamicPageTitle.getText();
        Assert.assertThat(actual, Matchers.containsString("Dynamically Loaded Page Elements"));
    }

    public void example2Method(){
        example2.click();
    }

    public void example1Method(){
        example1.click();
    }

    public void startButtonMethod(){
        startButton.click();
    }

    public void helloWorldMethod(){                 //method with explicit Wait using WebDriverWait class
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement helloWorld = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h4[contains(text(),'Hello World!')]")));
        System.out.println(helloWorld.isDisplayed());
    }

    public void helloWorldAssertion(){
        String actual = helloWorldTitle.getText();
        Assert.assertThat(actual, Matchers.containsString("Hello World!"));
    }

    public void helloWorldScreenshot() throws IOException, InterruptedException {
        Thread.sleep(1000);
        TakesScreenshot screenshot = ((TakesScreenshot) driver);
        File sourcefile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File destinationFolder = new File("C:\\HelloWorld.png");
        FileUtils.copyFile(sourcefile,destinationFolder);
    }
}
