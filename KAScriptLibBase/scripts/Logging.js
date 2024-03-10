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
	* @type {Number}
	* @description The level to log at
	*/
var LOGLEVEL = LOGLEVEL_INFO;

/**
	* @description Logging class
	*/
class Logger {

	/**
		* @function LOGError
		* @description Logs a message at the ERROR level. The message will be displayed if LOGLEVEL is set to 
		* LOGLEVEL_ERROR or above.
		*
		* @param {String} message The message to log
		*/
	LOGError(message) {
		if (LOGLEVEL >= LOGLEVEL_ERROR) {
			Session.Output(_LOGGetDisplayDate() + " [ERROR]: " + message);
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
		if (LOGLEVEL >= LOGLEVEL_INFO) {
			Session.Output(_LOGGetDisplayDate() + " [INFO]: " + message);
		}
	}

	/**
		* @function LOGWarning
		* @description Logs a message at the WARNING level. The message will be displayed if LOGLEVEL is set to 
		* LOGLEVEL_WARNING or above.
		*
		* @param {String} message The message to log
		*/
	LOGWarning(message) {
		if (LOGLEVEL >= LOGLEVEL_WARNING) {
			Session.Output(_LOGGetDisplayDate() + " [WARNING]: " + message);
		}
	}

	/**
		* @function LOGDebug
		* @description 
		* Logs a message at the DEBUG level. The message will be displayed if LOGLEVEL is set to 
		* LOGLEVEL_DEBUG or above.
		*
		* @param {String} message The message to log
		*/
	LOGDebug(message) {
		if (LOGLEVEL >= LOGLEVEL_DEBUG) {
			Session.Output(_LOGGetDisplayDate() + " [DEBUG]: " + message);
		}
	}

	/**
		* @function LOGTrace
		* @description Logs a message at the TRACE level. The message will be displayed if LOGLEVEL is set to 
		* LOGLEVEL_TRACE or above.
		*
		* @param {String} message The message to log
		*/
	LOGTrace(message) {
		if (LOGLEVEL >= LOGLEVEL_TRACE) {
			Session.Output(_LOGGetDisplayDate() + " [TRACE]: " + message);
		}
	}

	/**
		* @function _LOGGetDisplayDate
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