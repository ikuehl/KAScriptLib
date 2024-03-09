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
 * @description Test suite class 
 */
class TestSuite {
    
    /**
     * @description Constructor - class is abstract
     */
    constructor(){
        if (this.constructor == TestSuite){
            throw new Error("This class is abstract.");
        }
    }
        
    /**
     * @description Retrieve an array of method names
     * @return {Array} An array of method names in the implementing class and all super classes
     */
    getAllMethodNames(){
        var methodClassMap = new Map();

        var obj = this; 
        while (obj = Reflect.getPrototypeOf(obj)) {
            var methodList = new Array();
            methodList = methodList.concat(Object.getOwnPropertyNames(obj));
            LOGTrace("class names: " + obj.constructor.name + ", with methods: " + methodList);
            
            methodClassMap.set(obj.constructor.name, methodList);
        }
        
        var resultList = new Array();
        var mapEntries = methodClassMap.entries();
        for (let [key,val] of mapEntries){
            LOGTrace("key=" + key);
            if (key == this.constructor.name){
                resultList = resultList.concat(val);
            }
            else{
                for (let method of val){
                    if (!resultList.includes(method)){
                        resultList.push(method);
                    }
                }
            }
        }
        
        return resultList;
    }
    
    /**
     * @description Setup routine
     */
    setup(){
        LOGInfo("Setup of the test suite");
    }


    /**
     * @description Teardown routine
     */
    teardown(){
        LOGInfo("Teardown of the test suite");
    }
    
    /**
     * @description run the test suite
     */
    run() {
        let failures = 0;
        let testCount = 0;
        
        this.setup();
                
        var methodNames = this.getAllMethodNames();
        LOGDebug("methods: " + methodNames);
        
        for (let i=0; i < methodNames.length; i++) {
            var methodName = methodNames[i];
            LOGDebug("method: " + methodName);
            if (methodName.startsWith("test")){
                
                var fnEval = eval("this." + methodName);
                
                try {
                    const testAction = Reflect.apply(fnEval, this, []);
                    LOGInfo('Test:' + methodName + ': OK');
                } catch (e) {
                    failures++;
                    LOGError('Test: ' + methodName + ': FAILED', e);
                    LOGError("Error message: " + e.message);
                    if (e.trace != undefined){
                        LOGError("Errro Stack trace: " + e.trace);
                    }
                }
            
                testCount++;
            }
        }
        
        LOGInfo("Number of tests executed: " + testCount);
        LOGInfo("Number of tests failed: " + failures);
        
        this.teardown();
    }
    
    /**
     * @description Fail with a message by throwing an error
     * @param {string} msg A failure message
     */
    fail(msg){
        throw new Error('fail(): ' + msg);
    }
    
    /**
     * @description Assert a boolean value and throw an error message, if assert is not true
     * @param {Boolean} value A boolean expression
     * @param {String} msg A message
     */
    assert(value, msg) {
        if (!value) {
            throw new Error('assert(): ' + msg);
        }
    }
    
    /**
     * @description Assert that an actual value equals to an expected value and throw an error message, if assert is not true
     * @param {Undefined} expected An expected value or object
     * @param {Undefined} actual The actual value
     */
    assertEquals(expected, actual) {
        if (expected != actual) {
            throw new Error('assertEquals() "' + expected + '" != "' + actual + '"');
        }
    }
    
    /**
     * @description Assert that an actual value equals and is identical to an expected value and throw an error message, if assert is not true
     * @param {Undefined} expected An expected value or object
     * @param {Undefined} actual The actual value
     */
    assertStrictEquals(expected, actual) {
        if (expected !== actual) {
            throw new Error('assertStrictEquals() "' + expected + '" !== "' + actual + '"');
        }
    }
    
    /**
     * @description Assert that an actual value equals to an expected value and throw an error message, if assert is not true
     * @param {Undefined} expected An expected value or object
     * @param {Undefined} actual The actual value
     */
    eq(expected, actual) {
        this.assertEquals(expected, actual);
    }
}