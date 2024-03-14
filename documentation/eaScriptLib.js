/**
	* @description
	* This plugin removes the !INC statements and as for var from Enterprise Architect Javascript files. 
	* Otherwise the jsdoc parser will not parse successfully the source files.
	* @module plugins/eaScriptLib
	* @note For debugging uncomment console.log command lines
	*/
exports.handlers = {
	beforeParse(e) {
		// remove !INC
		const include = e.source.match(/^[ ]*!INC [a-zA-Z|\.|\- ]*/gm);
		//console.log(e.source);
		//console.log("Include: " + include);

		if (include) {
			for (let i = 0; i < include.length; i++) {
				//console.log("item: " + include[i] + " is going to be removed.");
				e.source = e.source.replace(include[i], '');
			}
		}

		// remove as for var
		const as = e.source.match(/[\t]*var [A-Za-z]* as [A-Za-z.;]*/gm);
		//console.log("as: " + as);

		if (as) {
			for (let i = 0; i < as.length; i++) {
				//console.log("item: " + as[i] + " is going to be removed.");
				e.source = e.source.replace(as[i], '');
			}
		}

		//console.log(e.source);
	}
};