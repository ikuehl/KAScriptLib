!INC Local Scripts.EAConstants-JavaScript
!INC KAScriptLib Base.FileManagement
!INC KAScriptLib Base.ModelProcessing

/*
 * Script Name: 
 * Author: 
 * Purpose: 
 * Date: 
 */
 
function main()
{
	Session.Output("START");
	var fMan = new FileManagement();
	
	var myPack = Repository.Models.GetByName("Model");
	var myArr = ["1", "2", "3"];
	var myMap = new Map([
			["startingPackage", myPack.Name],
			["vcRes", myArr]
	]);
	
	fMan.writeFile("C:\\Work\\github\\KAScriptLib\\test.json", myMap);
	Session.Output("test2");
	
	var modelProc = new ModelProcessing();
	modelProc.findPackage(myPack, "SysML_mdg");
	
	Session.Output("test3");

	
}

main();