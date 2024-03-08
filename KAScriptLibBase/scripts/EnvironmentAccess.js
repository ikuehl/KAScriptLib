**
 * @file EnvironmentAccess
 * @description Accessing the Environment variables (e.g. for config files)
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-21
 */
 
 !INC Local Scripts.EAConstants-JavaScript

/**
 * @type Environment variable for config path
 */
const ConfigEV = "%EA_Script%";

/**
 * @description Defines methods to access environment variables
 */
class EnvironmentAccess{

	/**
	 * @description Retrieve the value of an environment variables
	 * @param {String} evName environment variable name
	 * @return {String} value of the environment variable
	 */
	getValueforEV(evName){
		var wshShell = new COMObject("WScript.Shell");
		var pathValue = wshShell.ExpandEnvironmentStrings(evName);

		return pathValue;
	}

	/**
 	* @description Retrieve the absolute config file path
 	* @return {String} The absolute config file path
 	*/
	getConfigPath(){
		return getValueForEV(ConfigEV);
	}

}