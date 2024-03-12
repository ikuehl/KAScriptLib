/**
 * @file EnvironmentAccess
 * @description Accessing the Environment variables (e.g. for config files)
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-21
 * @license MIT
 */
 
 !INC Local Scripts.EAConstants-JavaScript

/**
 * @type {String}
 * @description Environment variable for config path
 */
const ConfigEAScript = "%EA_Script%";

/**
 * @type {String}
 * @description Environment variable for config path
 */
const ConfigLog= "%EA_Log%";

/**
 * @description Defines methods to access environment variables
 */
class EnvironmentAccess{

	/**
	 * @description Retrieve the value of an environment variables - this method is for unknown environment variables
	 * @param {String} evName environment variable name
	 * @return {String} value of the environment variable
	 */
	getValueForEV(evName){
		var wshShell = new COMObject("WScript.Shell");
		var pathValue = wshShell.ExpandEnvironmentStrings(evName);

		return pathValue;
	}

	/**
 	* @description Retrieve the absolute config file path
 	* @return {String} The absolute config file path
 	*/
	getConfigBasePath(){
		return this.getValueForEV(ConfigEV);
	}
	
	/**
 	* @description Retrieve the absolute config file path
 	* @return {String} The absolute config file path
 	*/
	getConfigLog(){
		return this.getValueForEV(ConfigLog);
	}


}