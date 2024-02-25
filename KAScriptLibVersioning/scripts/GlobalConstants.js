!INC Local Scripts.EAConstants-JavaScript

/* 
 * Script Name: GlobalConstants
 * Author: Ingmar Kuehl
 * Purpose: Definitions globally used throughout versioning removal
 * Date: 21.02.2024
*/

/**
 * @brief Environment variable for config path
 */
const ConfigEV = "%EA_Script%";

/**
 * @brief Retrieve the absolute config file path
 * @return {string} The absolute config file path
 */
function getConfigPath(){
	var wshShell = new COMObject("WScript.Shell");
	var configPath = wshShell.ExpandEnvironmentStrings(ConfigEV);
	
	return configPath;
}