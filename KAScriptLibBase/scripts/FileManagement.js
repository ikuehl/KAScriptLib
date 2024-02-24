!INC Local Scripts.EAConstants-JavaScript
!INC EAScriptLib.JavaScript-Logging

/* 
 * Script Name: FileManagement
 * Author: Ingmar Kuehl
 * Purpose: Reading, writing and parsing JSON files
 * Date: 21.02.2024
*/

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
	* @param[in] {Array} outputStringArr An array of array (parsed DOM items)
	* @param[in] {EA.Package} startingPackage The starting package
	*/
	writeFile(filePath, outputStringArr, startingPackage) {
		var fsObject = new COMObject("Scripting.FileSystemObject");
		var outFile = fsObject.CreateTextFile(filePath, true);
		
		LOGInfo("ResArr: " + outputStringArr);
		
		const event = new Date(Date.now());
		const jsonDate = event.toJSON();
		const jsonPack = startingPackage;
		var jsonText = JSON.stringify({date: jsonDate, startingPackage: jsonPack, vcRes: outputStringArr});
			
		outFile.WriteLine(jsonText);
		outFile.Close();
	}
}