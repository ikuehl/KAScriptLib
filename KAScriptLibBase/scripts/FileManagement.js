/**
 * @file FileManagement
 * Reading, writing and parsing JSON files
 * @author Ingmar Kuehl, KUEHL AutomatisierungsTechnologie
 * @date 2024-02-21
 */
 
!INC Local Scripts.EAConstants-JavaScript
!INC EAScriptLib.JavaScript-Logging

var _Win32Import_FSREAD = 1;

/**
 *  @brief FileManagement
 */
class FileManagement {

	/**
	* @brief Read a file and return the corresponding JSON object
	* @param[in] {string} filePath The absolute path to a JSON file
	* @return {JSONObject}
	*/
	readFile(filePath) {
		// Open the provided file
		var fsObject = new COMObject("Scripting.FileSystemObject");
		var file = fsObject.GetFile(filePath);
		var inputStream = file.OpenAsTextStream(_Win32Import_FSREAD, 0);

		var jsonText;
		while (!inputStream.AtEndOfStream) {
			jsonText = inputStream.ReadAll();
		}
		inputStream.Close();

		var jsonObject = JSON.parse(jsonText);

		return jsonObject;
	}

	/**
	* @brief Write an array to a JSON file. Pretach a generated timestamp.
	* @param[in] {string} filePath Absolute file name path for output generation
	* @param[in] {Map} argMap Map of ids and values to write. E.g. [{"startingPackage", EA.Package}, {"vcRes", Array}] 
	*/
	writeFile(filePath, argMap) {
		var fsObject = new COMObject("Scripting.FileSystemObject");
		var outFile = fsObject.CreateTextFile(filePath, true);
				
		const event = new Date(Date.now());
		const jsonDate = event.toJSON();
					
		var newMap = new Map([
			["date", jsonDate]
		]);
		for (const [key, value] of argMap.entries()) {
			newMap.set(key, value);
		}
		const obj = Object.fromEntries(newMap);
		const serialized = JSON.stringify(obj);
		
		outFile.WriteLine(serialized);
		outFile.Close();
	}
}