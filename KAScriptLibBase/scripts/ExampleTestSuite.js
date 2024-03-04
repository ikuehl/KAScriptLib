/**
 * @file ExampleTestSuite
 * Example tests with the unit test framework EAScriptTest
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-03-01
 * @license MIT
 */

!INC Local Scripts.EAConstants-JavaScript
!INC KAScriptLib Base.EAScriptTest

/**
 * @description An example stub for preparation and teardown methods
 */
class MyTestSuite extends TestSuite{
	setup(){
		Session.Output("Setup with standard output.");
	}
	
	teardown(){
		Session.Output("Teardown with standard output.");
	}
}

/**
 * @description Example function to add two numbers
 * @param[in] {number} a A number
 * @param[in] {number} b A number
 * @return {number} The sum of @see {@link a} and @see {@link b}
*/
function add(a, b) {
	return a + b;
}
 
 /**
  * @description Main function to run test
 */
function main()
{
	var myTestSuite = new MyTestSuite();
	myTestSuite.addTestSuite({

   'adds numbers': function() {
     myTestSuite.eq(6, add(2, 4));
     myTestSuite.eq(6.4, add(2.4, 4));
   },

   'subtracts numbers': function() {
     myTestSuite.eq(-2, add(2, -4)); 
   }
 });
	myTestSuite.run();
}

main();