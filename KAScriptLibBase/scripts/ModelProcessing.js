/**
 * @file ModelProcessing
 * @description Traverse the whole model
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-26
 * @license MIT
 */
 
!INC Local Scripts.EAConstants-JavaScript
!INC EAScriptLib.JavaScript-Logging
 
 /**
  * @description Processing models
  */
 class ModelProcessing{
	 
	 /**
	  * @description Find a package in the tree
	  * @param {Object} thePackage The package (EA.PAckage) to be found
	  * @param {Object} packagePathItems String array with path to the package
	  */
	 findPackage(thePackage, packagePathItems){
		 var foundPackages as EA.Collection = new Array();
		 var foundPackagesIntern as EA.Collection;
		 var foundPackage as EA.Package;
		 var subPackageItems as EA.Collection;
		 
		 LOGDebug("Items: " + packagePathItems[0]);
	 }
 }
 
 
 
