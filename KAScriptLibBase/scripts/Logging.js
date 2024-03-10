/**
	* @file Logging
	* @description
	* This script library contains helper functions to assist with logging. Log messages can be 
	* submitted to the various functions in this module, and will be filtered according to the value
	* of LOGLEVEL.
	*
	* Valid values for LOGLEVEL are:
	* <ul>
	* 	<li>LOGLEVEL_ERROR</li>
	* 	<li>LOGLEVEL_WARNING</li>
	* 	<li>LOGLEVEL_INFO</li>
	* 	<li>LOGLEVEL_DEBUG</li>
	* 	<li>LOGLEVEL_TRACE</li>
	* </ul>
	* 
	* <p>You can change the log level at any time during execution by setting the LOGLEVEL variable to the
	* desired value.</p>
	*
	* <p>Functions provided by this module are identified by the prefix LOG.</p>
	* 
	* <p>Code was originally authored by Sparx Systems.</p>
	*
	* @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
	* @date 2024-03-09
	* @license MIT
	*/

!INC Local Scripts.EAConstants-JavaScript
!INC KAScriptLib Base.FileManagement
!INC KAScriptLib Base.EnvironmentAccess


// LOGLEVEL values

/**
	* @type {Number}
	* @description Error level
	*/
var LOGLEVEL_ERROR = 0;

/**
	* @type {Number}
	* @description Warning level
	*/
var LOGLEVEL_WARNING = 1;

/**
	* @type {Number}
	* @description Info level
	*/
var LOGLEVEL_INFO = 2;

/**
	* @type {Number}
	* @description Debug level
	*/
var LOGLEVEL_DEBUG = 3;

/**
	* @type {Number}
	* @description Trace level
	*/
var LOGLEVEL_TRACE = 4;

/**
 * @class Logger
 * @description Provides logging methods for console and file output
 */
class Logger {
	
	/**
	 * @function isConsoleLogger
	 * @description Checks whether in the config file logging is defined for console output
	 * @return {Boolean} True, if console output
	 */
	isConsoleLogger(){
		return this.cfgFile.logtype == "console";
	}

	/**
	 * @function isFileLogger
	 * @description Checks whether in the config file logging is defined for file output
	 * @return {Boolean} True, if file output
	 */	
	isFileLogger(){
		return this.cfgFile.logtype == "file";
	}
	
	getLogPath(){
		var path = this.evAccess.getValueForEV(this.cfgFile.file.directory) + "\\" + this.cfgFile.file.sub_directory + "\\" + this.cfgFile.file.logfile;
		Session.Output("path=" + path);
		
		return path;
	}
	
		
	/**
	 * @constructor
	 * @description Default constructor, initiate file management and read config file
	 */
	constructor(){
		this.LOGLEVEL = LOGLEVEL_INFO;
		this.evAccess = new EnvironmentAccess();
		this.fMan = new FileManagement();
		this.cfgFile = this.fMan.readFile(this.evAccess.getConfigLog());
	}

	/**
		* @function LOGError
		* @description Logs a message at the ERROR level. The message will be displayed if LOGLEVEL is set to 
		* LOGLEVEL_ERROR or above.
		*
		* @param {String} message The message to log
		*/
	 LOGError(message) {
		if (this.LOGLEVEL >= LOGLEVEL_ERROR) {
			if (this.isConsoleLogger()){
				Session.Output(this._LOGGetDisplayDate() + " [ERROR]: " + message);
			}
			else
			if (this.isFileLogger()){
				this.fMan.writeTextFile(this.getLogPath(), this._LOGGetDisplayDate() + " [ERROR]: " + message);
			}
		}
	}

	/**
		* @function LOGInfo
		* @description Logs a message at the INFO level. The message will be displayed if LOGLEVEL is set to 
		* LOGLEVEL_INFO or above.
		*
		* @param {String} message The message to log
		*/
	 LOGInfo(message) {
		if (this.LOGLEVEL >= LOGLEVEL_INFO) {
			if (this.isConsoleLogger()){
				Session.Output(this._LOGGetDisplayDate() + " [INFO]: " + message);
			}
			else
			if (this.isFileLogger()){
				this.fMan.writeTextFile(this.getLogPath(), this._LOGGetDisplayDate() + " [INFO]: " + message);
			}

		}
	}

	/**
		* @function
		* @description Logs a message at the WARNING level. The message will be displayed if LOGLEVEL is set to 
		* LOGLEVEL_WARNING or above.
		*
		* @param {String} message The message to log
		*/
	 LOGWarning(message) {
		if (this.LOGLEVEL >= LOGLEVEL_WARNING) {
			if (this.isConsoleLogger()){
				Session.Output(this._LOGGetDisplayDate() + " [WARNING]: " + message);
			}
			else
			if (this.isFileLogger()){
				this.fMan.writeTextFile(this.getLogPath(), this._LOGGetDisplayDate() + " [WARNING]: " + message);
			}
		}
	}

	/**
		* @function
		* @description 
		* Logs a message at the DEBUG level. The message will be displayed if LOGLEVEL is set to 
		* LOGLEVEL_DEBUG or above.
		*
		* @param {String} message The message to log
		*/
	 LOGDebug(message) {
		if (this.LOGLEVEL >= LOGLEVEL_DEBUG) {
			if (this.isConsoleLogger()){
				Session.Output(this._LOGGetDisplayDate() + " [DEBUG]: " + message);
			}
			else
			if (this.isFileLogger()){
				this.fMan.writeTextFile(this.getLogPath(), this._LOGGetDisplayDate() + " [DEBUG]: " + message);
			}
		}
	}

	/**
		* @function
		* @description Logs a message at the TRACE level. The message will be displayed if LOGLEVEL is set to 
		* LOGLEVEL_TRACE or above.
		*
		* @param {String} message The message to log
		*/
	 LOGTrace(message) {
		if (this.LOGLEVEL >= LOGLEVEL_TRACE) {
			if (this.isConsoleLogger()){
				Session.Output(this._LOGGetDisplayDate() + " [TRACE]: " + message);
			}
			else
			if (this.isFileLogger()){
				this.fMan.writeTextFile(this.getLogPath(), this._LOGGetDisplayDate() + " [TRACE]: " + message);
			}
		}
	}

	/**
		* @function 
		* @description Returns the current date/time in a format suitable for logging.
		*
		* @return {String} A String representing the current date/time
		* @private
		*/
	 _LOGGetDisplayDate() {
		var now = new Date();

		// Pad hour value
		var hours = now.getHours();
		if (hours < 10)
			hours = "0" + hours;

		// Pad minute value
		var minutes = now.getMinutes();
		if (minutes < 10)
			minutes = "0" + minutes;

		// Pad second value
		var seconds = now.getSeconds();
		if (seconds < 10)
			seconds = "0" + seconds;

		var displayDate = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
		displayDate += " " + hours + ":" + minutes + ":" + seconds;

		return displayDate;
	}
}