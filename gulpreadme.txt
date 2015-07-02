This is a document listing out the different features that gulp is enabling us.

gulpfile.js is the magical file that makes everything work. All of the required modules are located in node_modules.

To ensure that all of the node_modules exist and are up to date, in a command line at this folder's path, run:
> npm install

In order to run the gulp file simply run 'gulpRun.bat'
If that doesn't work in a command line at this folder's path, run:
> gulp
If that doesn't work, you may have bigger problems.


It will begin the javascript linter, minifier, and the scss compiler/minifier.

There are 4 major functions in the gulpfile

1. jshint
- This will look at all development js in the resources/js folder and will list any errors in the command line as it's going.

2. libs
- This will gather all js in the resources/js/libs folder and will minify and output to js/libs.js
This is run first to ensure that all libraries exist (such as jquery) before any user developed script is run.

3. scripts
- This will gather all development js in the resources/js folder and will minify and output to js/all.js

4. styles
- This will gather all development scss in the resources/scss folder and will minify and output to css/style.css

*** NOTES ON SCSS ***

All SCSS files must go through all.scss, via the @import method. In order to create a new scss file, you must:
1. Create a partial file with underscore syntax (i.e. '_footer.scss' or '_modules.scss')
2. Create an import rule in all.scss ('@import "footer"; @import "modules";')
