package TheInternet.BaseClassPackage;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
    DriverFactory driverFactory = new DriverFactory();

@Before
public void setup(){
    driverFactory.openBrowser();
}

@After
public void tearDown() throws InterruptedException {
    driverFactory.closeBrowser();
}
}
