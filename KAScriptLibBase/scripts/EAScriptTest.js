/**
 * @file EAScriptTest
 * @description Minimal test framework for Javascript in EA.
 * Code is adapted for EA. Original code is authored by Joe Walnes, and could be reached at: https://github.com/joewalnes/jstinytest/tree/master.
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-26
 * @license MIT
 */


!INC Local Scripts.EAConstants-JavaScript
!INC EAScriptLib.JavaScript-Logging

/**
 * @description Test stub class which contains setup and teardown method
 */
class TestStub{

    setup(){
        LOGInfo("Setup of the test suite");
    }

    teardown(){
        LOGInfo("Teardown of the test suite");
    }
}


/**
 * @description Struct which contains the test handler function
 */
const EAScriptTest = {

    /**
     * @description Run the test
     * @param[in] {function} tests Set of functions to test
     */ 
    run: function(tests) {
        let failures = 0;
        let testCount = 0;
        
        for (let testName in tests) {
    
            if (testName == "setup" || testName == "teardown"){
                let prepareTeardown = tests[testName];
                try{
                    prepareTeardown();
                }
                catch (e){
                    LOGError("Executing function " + testName + " has failed: ", e);
                    LOGError("Stack trace: " + e.stack);
                }
            }
            else{

                let testAction = tests[testName];
            
                try {
                    testAction();
                    LOGInfo('Test:' + testName + ': OK');
                } catch (e) {
                    failures++;
                    LOGError('Test: ' + testName + ': FAILED', e);
                    LOGError("Stack trace: " + e.stack);
                }
            
                testCount++;
            }
        }
        
        LOGInfo("Number of tests executed: " + testCount);
        LOGInfo("Number of tests failed: " + failures);
    },

    /**
     * @description Fail function 
     * @param[in] {string} msg Failure message text
     */ 
    fail: function(msg) {
        throw new Error('fail(): ' + msg);
    },

    /**
     * @description check if value is true 
     * @param[in] {value} value A value
     * @param[in] {string} msg A message text
     */ 
    assert: function(value, msg) {
        if (!value) {
            throw new Error('assert(): ' + msg);
        }
    },

    /**
     * @description check if @ref actual is equal to @ref expected
     * @param[in] {value} actual An actual value
     * @param[in] {value} expected An expected value
     */ 
    assertEquals: function(expected, actual) {
        if (expected != actual) {
            throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
        }
    },

    /**
     * @description check if @ref actual is the same as @ref expected
     * @param[in] {value} actual An actual value
     * @param[in] {value} expected An expected value
     */ 
    assertStrictEquals: function(expected, actual) {
        if (expected !== actual) {
            throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
        }
    },

};

/**
 * @description fail definition
 */
const fail                = EAScriptTest.fail;

/**
 *  @description assert definition
 */
const assert              = EAScriptTest.assert;

/**
 * @description assert equals definition
 */
const assertEquals        = EAScriptTest.assertEquals;

/**
 * @description eq definition (alias)
 */
const eq                  = EAScriptTest.assertEquals;

/**
 * @description assert strict definition
 */
 const assertStrictEquals  = EAScriptTest.assertStrictEquals;

 /**
  * @description tests definition
  */
 const tests               = EAScriptTest.run;
        
