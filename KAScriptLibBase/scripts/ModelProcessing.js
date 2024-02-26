/**
 * @file ModelProcessing
 * Traverse the whole model
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-26
 */
 
!INC Local Scripts.EAConstants-JavaScript
!INC EAScriptLib.JavaScript-Logging
 
 class ModelProcessing{
	 
	 /**
	  * @brief Find 
	  */
	 findPackage(thePackage, packagePathItems){
		 var foundPackages as EA.Collection = new Array();
		 var foundPackagesIntern as EA.Collection;
		 var foundPackage as EA.Package;
		 var subPackageItems as EA.Collection;
		 
		 LOGDebug("Items: " + packagePathItems[0]);
	 }
 }