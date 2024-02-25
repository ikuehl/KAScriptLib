!INC Local Scripts.EAConstants-JavaScript

/* 
 * Script Name: ConfigAccess
 * Author: Ingmar Kuehl
 * Purpose: Accessing the Environment variables for config files
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