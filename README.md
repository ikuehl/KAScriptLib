<h1>Overview</h1>
There have been already some scripting libraries for Enterprise Architect lift up to the air, but a thoroughful engineered Javascript library is not available. This library provides a set of Javascript files to process and automate Enterprise Architect models. The library is implemented to process UML and SysML models, but should be usable as well for other model languages, like Archimate or BPMN.

<h2>License</h2>
The code is licensed under MIT. Feel free to use it, to change it, to fork it. If you need consultancy to utilize the library in your projects please contact me: 
<kontakt@kuehl-at.com>.

<https://www.markdownguide.org>
<fake@example.com>
<kontakt@kuehl-at.com>

<h2>Compatability</h2>
The code is tested with EA 15.2 and 16.1. It runs in a local, file-based deployment and with a database (PostgreSQL).

<h2>Functionality</h2>
In the moment following functionality is implemented:

- reading JSON configuration files
- writing JSON files
- accessing environment variables
- a minimal unit test framework let you write test cases with assertions
- logging with timestamp and to files.


Going to be implemented soon:
- syncing scripts from file system to EA and database
- Executing queries in the model database
- parsing recursively model trees
- parsing DOM trees as a result of database query
- showing Windows dialogues
- adding traces through connections between different flavours of requirements and between requirements and design elements
- removing Version Control flag from packages

<h2>Documentation</h2>
The code is documented with jsdoc. Therefore a special plugin has been developed to parse successfully EA flavor of Javascript.
