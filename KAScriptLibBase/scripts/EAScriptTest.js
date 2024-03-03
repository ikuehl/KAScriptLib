/**
 * @file EAScriptTest
 * Minimal test framework for Javascript in EA
 * Code is adapted for EA. Original code is authored by Joe Walnes, and could be reached at: https://github.com/joewalnes/jstinytest/tree/master.
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-26
 * @license MIT
 */


/**
 * @namespace
 * @ignore
 */
!INC Local Scripts.EAConstants-JavaScript

/**
 * @namespace
 * @ignore
 */
!INC EAScriptLib.JavaScript-Logging

/**
 * @description Struct which contains the test handler function
 */
const EAScriptTest = {

	/**
	 * @brief Run the test
	 * @param[in] {function} tests Set of functions to test
     */	
    run: function(tests) {
        let failures = 0;
		
        for (let testName in tests) {
            let testAction = tests[testName];
            try {
                testAction();
                LOGInfo('Test:' + testName + ': OK');
            } catch (e) {
                failures++;
                LOGError('Test: ' + testName + ': FAILED', e);
                LOGError("Stack trace: " + e.stack);
            }
        }
    },

	/**
	 * @description Fail function 
	 * @param[in] {string} msg Failure message text
	 */	
    fail: function(msg) {
        throw new Error('fail(): ' + msg);
    },

	/**
	 * @brief check if value is true 
	 * @param[in] {value} value A value
	 * @param[in] {string} msg A message text
	 */	
    assert: function(value, msg) {
        if (!value) {
            throw new Error('assert(): ' + msg);
        }
    },

	/**
	 * @brief check if @ref actual is equal to @ref expected
	 * @param[in] {value} actual An actual value
	 * @param[in] {value} expected An expected value
	 */	
    assertEquals: function(expected, actual) {
        if (expected != actual) {
            throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
        }
    },

	/**
	 * @brief check if @ref actual is the same as @ref expected
	 * @param[in] {value} actual An actual value
	 * @param[in] {value} expected An expected value
	 */	
    assertStrictEquals: function(expected, actual) {
        if (expected !== actual) {
            throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
        }
    },

};

const fail                = EAScriptTest.fail,
      assert              = EAScriptTest.assert,
      assertEquals        = EAScriptTest.assertEquals,
      eq                  = EAScriptTest.assertEquals, // alias for assertEquals
      assertStrictEquals  = EAScriptTest.assertStrictEquals,
      tests               = EAScriptTest.run;