package TheInternet;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\Resource",                             //resource path to run all feature files
        plugin = {"html:target/cucumber-html-report",                          //reports to save in target folder
                "json:target/cucumber-json-report.json",
                "junit:target/cucumber-xml-report.xml",
                "pretty:target/cucumber-pretty-report.txt"
        })

public class RunCukeTest {
}
