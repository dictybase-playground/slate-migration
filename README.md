# slate-migration

This repository contains a script to convert Slate 0.47 data to the new 0.5x format
and then update it in the content database.

## Usage

```bash
index <command>

Commands:
  index convert [options]  convert slate 0.47 data to 0.5x format

Options:
  --version   Show version number                                      [boolean]
  --help      Show help                                                [boolean]
  --database                                                          [required]
  --user                                                              [required]
  --password                                                          [required]
```

Sample command:

`node index.js --user cosmo --password kramer --database dictycontent`

The database host and port are picked up from environmental variables used inside the cluster.

This script can be run locally by using `kubectl port-forward` to connect to the content database.

## Process

The script works by doing the following in order:

1. Return a list of slugs and their corresponding page content from the database.
2. Loop over these entries and perform these actions inside the loop:
   - Run the data conversion script on each piece of content.
   - Update the content for each slug with this new content.
