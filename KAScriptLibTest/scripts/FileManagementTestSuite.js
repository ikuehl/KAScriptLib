/**
 * @file TestSuiteFileManagement
 * @description Tests to assert that file management functions work properly
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-03-01
 * @license MIT
 * @note To run the test you need to specifiy an environment variable %EA_Test% which points to the config file "unitTest.json". 
 * This file is contained in the KAScriptLib Test folder.
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
		this.fMan = new FileManagement();
		var evAccess = new EnvironmentAccess();
		this.cfgFile = this.fMan.readFile(evAccess.getValueForEV("%EA_Test%"));
	}
	
	/**
	 * @function
	 * @description Overloaded Setup routine 
	 */
	setup(){
		var myPack = Repository.Models.GetByName(this.cfgFile.package);
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
	 * @function
	 * @description test to write a file - every test must start with "test"
	 */
	testWriteFile(){
		this.fMan.writeFile(this.cfgFile.test.dir + "\\" + this.cfgFile.test.file, this.myMap);
		this.assert(this.fMan.fileExists(this.cfgFile.test.dir + "\\" + this.cfgFile.test.file));
	}

	/**
	 * @function testReadFile
	 * @description test to read a file - every test must start with "test"
	 */	
	testReadFile(){
		var file = this.fMan.readFile(this.cfgFile.test.dir + "\\" + this.cfgFile.test.file);
		
		this.assert(file != null, "Read has failed.");
		this.assert(file.date != null, "Tage date does not exist.");
		this.assert(file.vcRes != null, "Tage vcRes does not exist.");
		this.assert(file.startingPackage != null, "Tage startingPackage does not exist.");		
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
