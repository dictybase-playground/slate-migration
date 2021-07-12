# slate-migration

This repository contains the core logic for converting our Slate 0.47 data to 0.5x.

`data.js` contains some sample data to test against.

Run `node convert.js` to convert the sample data to the new Slate format. This will write the results to two JSON files.

This script will be used internally by the page editor library to convert on the fly.
