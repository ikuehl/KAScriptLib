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
	constructor(){
		super();
	}
	
	/**
	 * @description Overloaded Setup routine 
	 */
	setup(){
		Session.Output("Setup with standard output.");
	}
		
	/**
	 * @description Overloade teardown routine
	 */
	teardown(){
		Session.Output("Teardown with standard output.");
	}
	
	/**
	 * @description test to add numbers - every test must start with "test"
	 */
	testAddNumbers(){
		this.eq(6, add(2, 4));
		this.eq(6.4, add(2.4, 4));
	}

	/**
	 * @description test to subtract numbers - every test must start with "test"
	 */
	testSubtractNumbers(){
		this.eq(-2, add(2, -4)); 
	}
	
	/**
	 * @description Show to fail a test
	 */
	testFail(){
		this.fail("Test has failed.");
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
	const myTestSuite = new MyTestSuite();
	myTestSuite.run();
}

main();