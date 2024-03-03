/**
 * @file ModelProcessing
 * Traverse the whole model
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-26
 */
 
!INC Local Scripts.EAConstants-JavaScript
!INC EAScriptLib.JavaScript-Logging
 
 /**
  * @description Class which provides methods to traverse tree
  */
 class ModelProcessing {
	 
	 /**
	  * @description Find a package
	  * @param[in] {EA.Package} thePackage A package
	  * @param[in] {Array} packagePathItems String array with path elements
	  */
	 findPackage(thePackage, packagePathItems) {
	 	var foundPackages as EA.Collection;
		//foundPackages = new Array();
		/* var foundPackagesIntern as EA.Collection;
		 var foundPackage as EA.Package;
		 var subPackageItems as EA.Collection;
		 
		 LOGDebug("Items: " + packagePathItems[0]);
		 */
	 }

 }