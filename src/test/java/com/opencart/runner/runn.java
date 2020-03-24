package com.opencart.runner;



import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/features/openn.feature",
plugin = {"pretty", "html:reports/cucumber-html-report"},
//	plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
//		tags = {"@tc02"},
		glue = {"com.opencart.steps"},
		monochrome = true
		)
public class runn{

//	@AfterClass
//    public static void writeExtentReport() {
//        Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
    }

