/**
 * @file ExampleTestSuite
 * @description Example tests with the unit test framework EAScriptTest
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
	
	/**
	 * @description Default constructor
	 */
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
	 * @see add
	 */
	testAddNumbers(){
		this.eq(6, add(2, 4));
		this.eq(6.4, add(2.4, 4));
	}
	
	/**
	 * @description test to multiply numbers - every test must start with "test"
	 * @see mul
	 */
	testMultiply(){
		this.assertEquals(24, mul(6,4));
		this.assert(42 == mul(2,21));
		var a = "24";
		var b = mul(6,4);
		this.assertStrictEquals(a,b);
	}

	/**
	 * @description test to subtract numbers - every test must start with "test"
	 * @see add
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
 * @param {Number} a A number
 * @param {Number} b A number
 * @return {Number} The sum of a and b
*/
function add(a, b) {
	return a + b;
}

/**
 * @description Example function to multiply two numbers
 * @param {Number} a A number
 * @param {Number} b A number
 * @return {Number} The product of a and b
*/
function mul(a, b){
	return a*b;
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