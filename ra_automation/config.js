'use strict';
let log4js = require('log4js');
let specReporter = require('jasmine-spec-reporter').SpecReporter;
let htmlReporter = require('protractor-beautiful-reporter');
let allureReporter = require('jasmine-allure-reporter');
let jasmineReporters= require('jasmine-reporters');

exports.config = {
    //Disabling the now deprecated Selenium Promise Manager 
    SELENIUM_PROMISE_MANAGER: false,
    
    directConnect: true, 
    //seleniumAddress: "http://192.168.43.136:4444/wd/hub",
    //seleniumSessionId: null,
    specs: ['../jsfileslocation/spec/admindashboard/insuranceproviderbucket/workflow/InsuranceProviderManagementWorkflowTest.js'],
    suites: { regression : '../jsfileslocation/spec/**/*.js' },

    //The params object will be directly passed to the Protractor instance and can be accessed as browser.params.xxx
    params: {           
        login: {
            baseURL: 'https://qat.referralanswer.com/',
            usertype: 'Admin',
            username: 'TEST_Auto_Admin_Seven@css', 
            password: 'Anridh7.',
        }
    }, 

    //Capabilities to be passed to the webdriver instance.
    maxSessions: 4,
    capabilities: {
            logName: 'Chrome',
            browserName: 'chrome',
            shardTestFiles: true,
            maxInstances: 4,
            chromeOptions: {
                'args': ['start-maximized']
            },
    },

    //Global test information. 
    allScriptsTimeout: 300000,
    getPageTimeout: 300000,

    //Framework
    framework: 'jasmine2',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        print: function() {}
    },

    beforeLaunch: function() {
        //Configure logger - Destination folder: './ra_automation/results' to be kept same as the execution report. 
        log4js.configure({
            appenders: {
                fileLog: { type: 'file', filename: 'Results/execution log.log' },
                console: { type: 'log4js-protractor-appender' }
                },
                categories: {
                file: { appenders: ['fileLog'], level: 'error' },
                another: { appenders: ['console'], level: 'trace' },
                default: { appenders: ['console', 'fileLog'], level: 'trace' }
                }
        });
    },

    onPrepare: async function() {	
        browser.logger = log4js.getLogger('protractorLog4js');

        //Protractor Spec Reporter
        jasmine.getEnv().clearReporters(); 
        jasmine.getEnv().addReporter(new specReporter({
            suite: {
                displayNumber: true,
            },
            
            summary: {
                displayErrorMessages: true,
                displayStacktrace: true,
                displaySuccessful: true,
                displayFailed: true,
                displayPending: true,
                displayDuration: true
            },
            
            prefixes: {
                enabled: true,
                successful: '🍻 ',
                failed: '✗ ',
                pending: '* '
            },

            customProcessors: []
          }));

        //protractor-beautiful-reporter - Destination folder: './ra_automation/results' to be kept same as the execution log.
        jasmine.getEnv().addReporter(new htmlReporter({
            baseDirectory: 'Results/execution report',
            screenshotsSubfolder: 'screenshots',
            docTitle: 'RA Automation Test Execution Report'
        }).getJasmine2Reporter());
        
        //jasmine-allure-reporter - 
        jasmine.getEnv().addReporter(new allureReporter({
            resultsDir: 'allure-results'
        }))
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
              allure.createAttachment('Screenshot', function () {
                return new Buffer(png, 'base64')
              }, 'image/png')();
              done();
            })
        });
        // Report 
		jasmine.getEnv().addReporter(
            new jasmineReporters.JUnitXmlReporter({
            // Setup the OutPut
            savePath: 'output/',
            consolidateAll: false,
            })
            );
    }, 

}