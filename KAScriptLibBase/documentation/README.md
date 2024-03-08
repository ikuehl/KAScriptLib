<h1>Overview</h1>
Code documentation can be generated with jsdoc. Install jsdoc and the contained plugin to the plugins folder of your jsdoc installation. The plugin removes all EA specific Javascript addons which prevent jsdoc to parse successfully the code. You need a jsdoc JSON config to specify the plugin. This file could look like this:

{
    "plugins": ["plugins/eaScriptLib"],
    "recurseDepth": 10,
    "source": {
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "sourceType": "module",
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc","closure"]
    },
  "templates": {
    "default": {"layoutFile": ""},
    "cleverLinks": false,
    "monospaceLinks": false
  }
}
