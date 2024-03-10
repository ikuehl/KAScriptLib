/**
 * @file TestSuiteFileManagement
 * @description Tests to assert that file management functions work properly
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-03-01
 * @license MIT
 */

!INC Local Scripts.EAConstants-JavaScript
!INC KAScriptLib Test.EAScriptTest
!INC KAScriptLib Base.FileManagement


/**
 * @class
 * @description An example stub for preparation and teardown methods
 */
class TestSuiteFileManagement extends TestSuite{
	
	/**
	 * @constructor
	 * @description Default constructor
	 */
	constructor(){
		super();
	}
	
	/**
	 * @function
	 * @description Overloaded Setup routine 
	 */
	setup(){
		var myPack = Repository.Models.GetByName("Model");
		var myArr = ["1", "2", "3"];
		this.myMap = new Map([
			["startingPackage", myPack.Name],
			["vcRes", myArr]
		]);
	}
		
	/**
	 * @function
	 * @description Overloade teardown routine
	 */
	teardown(){
		this.myPack = null;
		this.myArr = null;
		this.myMap = null;
	}
	
	/**
	 * @description test to write a file - every test must start with "test"
	 */
	testWriteFile(){
		this.fMan = new FileManagement();
		this.fMan.writeFile("C:\\Work\\github\\KAScriptLib\\test.json", this.myMap);
		this.assert(this.fMan.fileExists("C:\\Work\\github\\KAScriptLib\\test.json"));
	}

	/**
	 * @description test to read a file - every test must start with "test"
	 */	
	testReadFile(){
	}
}
	
	

/**
 * @function main
 * @description Main function to run test
 */
function main()
{
	const fManTest = new TestSuiteFileManagement();
	fManTest.run();
}

main();
