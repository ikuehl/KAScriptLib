/**
 * @file EnvironmentAccess
 *  Accessing the Environment variables (e.g. for config files)
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-21
 */
 
 !INC Local Scripts.EAConstants-JavaScript

/**
 * @brief Environment variable for config path
 */
const ConfigEV = "%EA_Script%";

class EnvironmentAccess{

	/**
	 *  @brief Retrieve the value of an environment variables
	 *  @param[in] {string} evName environment variable name
	 */
	getValueforEV(evName){
		var wshShell = new COMObject("WScript.Shell");
		var pathValue = wshShell.ExpandEnvironmentStrings(evName);

		return pathValue;
	}

	/**
 	* @brief Retrieve the absolute config file path
 	* @return {string} The absolute config file path
 	*/
	getConfigPath(){
		return getValueForEV(ConfigEV);
	}

}