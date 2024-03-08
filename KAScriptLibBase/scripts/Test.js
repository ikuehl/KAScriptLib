/**
 * @file Test
 * @description Playgroud to test things
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-26
 * @license MIT
 */

!INC Local Scripts.EAConstants-JavaScript
!INC KAScriptLib Base.FileManagement
!INC KAScriptLib Base.ModelProcessing
 
 /**
  * @description Main function to test things
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