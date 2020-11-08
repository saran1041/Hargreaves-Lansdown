Message for Technical Team:

I have used Page Object Model for my Automation Framework. Even though ideally all three tabs (Form Authentication, Dynamic Loading and JavaScript Alerts) would go in one page class as they are in the same web page however I have created separate classes for all three exercises to make my test cleaner. 

I have written seven Scenarios. 
 
Form Authentication: Login with valid username and valid password 
I have stored valid username and valid password in String variables inside FormAuthenticationPage.
1.	Given: I have asserted the given URL to check pre-condition and used JavascriptExecutor to scroll down the page to visible relevant tabs.
2.	When: I have created a method to click on Form Authentication tab 
3.	And: I have created a method for login with valid username and valid password
4.	Then: I have asserted ‘Secure area!’ page and have also used TakeScreenshot class to save logged-in page’s screenshot in local C drive.
     
Form Authentication: Login with invalid username and invalid password 
1.	Given: Pre-condition (I have implemented step from above scenario to avoid repetitive step) 
2.	When: Clicks on Form Authentication tab (I have implemented step from above scenario to avoid repetitive step)
3.	And: I used scenario outline for multiple entries to test invalid username and invalid password. 
4.	Then: I have asserted invalid error message 


Dynamic Loading: Example 2		
1.	Given: I have used Background as pre-condition is the same as Form Authentication. Implemented Given step from FormAuthenticationSteps to avoid repetitive step and methods.
2.	When: Created a method to click on Dynamic Loading tab and asserted Dynamic page.
3.	And: Created a method to click on Example 2 
4.	And: Created a method to click on Start
5.	Then: Applied Explicit Wait by using WebdriverWait class to appear ‘Hello World!’ element, asserted ‘Hello World!’ and used TakeScreenshot class to save a screenshot in local C drive.

Dynamic Loading: Example 1		
1.	Given: Background from Form Authentication feature file. 
2.	When: Clicks on Dynamic Loading tab (I have implemented step from above scenario to avoid repetitive step)
3.	And: Created a method to click on Example 1 
4.	And: Clicks on Start ( I have implemented step from above scenario to avoid repetitive step)
5.	Then: Explicit Wait, Assertion and Screenshot (I have implemented step from above scenario)   


JavaScript Alerts: Click for JS Confirm
1.	Given: Background From Authentication feature file.
2.	When: Created a method to click on JavaScripts Alerts tab 
3.	And: Created a method to click on ‘Click for JS Confirm’
4.	Then: Created a method to switch on the popup/alert window and asserted the message.

JavaScript Alerts: Click for JS Alert
1.	Given: Background From Authentication feature file.
2.	When: Clicks on JavaScripts Alerts tab (I implemented this step from JS Confirm step) 
3.	And: Created a method to click on ‘Click for JS Alert’
4.	Then: Created a method to switch on the popup/alert window and asserted the message.

 
JavaScript Alerts: Click for JS Prompt
1.	Given: Background From Authentication feature file.
2.	When: Clicks on JavaScripts Alerts tab ( I have implemented this step from JS Confirm step)
3.	And: Created a method to click on ‘Click for JS Prompt’
4.	Then: Created a method to switch on the popup/alert window and asserted the message.


RunCukeTest class: 
•	I have given a path of Resource to run all three feature files together. I could run each or some selected scenarios by giving tags (for example - @smoke, @regression).  
•	I have given plugins to generate reports in the target folder. 
