# Changelog

Most recent updates are at the top
Note: Every update assumes updating of CHANGELOG.md and package.json

## 1.0.5 - Bug Fix

Fixed:

- Invalid main in package.json (caused complete loss of functionality)
- Built JavaScript file using `tsc` command (allows for usage in `.js` files)

## 1.0.4 - Dev Patch

Added:

- nfgit.py now accepts no files (useful for updating just CHANGELOG.md or package.json)

Fixed:

- nfgit.py now asks if the CHANGELOG.md and package.json files were properly updated

## 1.0.3 - Dev Update

Added:

- nfgit.py which automatically handles Git/GitHub and NPM publishing (Name stands for Never Forget Git)

## 1.0.2 - Patch

Fixed:

- Examples in README.md now import the package correctly

## 1.0.1 - Patch

Fixed:

- Changed module name from 'index' to '@tehcn/log4js'
- Added changelog
