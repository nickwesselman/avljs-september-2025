avljs
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/avljs.svg)](https://npmjs.org/package/avljs)
[![Downloads/week](https://img.shields.io/npm/dw/avljs.svg)](https://npmjs.org/package/avljs)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g avljs
$ avljs COMMAND
running command...
$ avljs (--version)
avljs/0.0.0 win32-x64 node-v22.19.0
$ avljs --help [COMMAND]
USAGE
  $ avljs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`avljs brewery list`](#avljs-brewery-list)
* [`avljs hello PERSON`](#avljs-hello-person)
* [`avljs hello world`](#avljs-hello-world)
* [`avljs help [COMMAND]`](#avljs-help-command)
* [`avljs iss`](#avljs-iss)
* [`avljs plugins`](#avljs-plugins)
* [`avljs plugins add PLUGIN`](#avljs-plugins-add-plugin)
* [`avljs plugins:inspect PLUGIN...`](#avljs-pluginsinspect-plugin)
* [`avljs plugins install PLUGIN`](#avljs-plugins-install-plugin)
* [`avljs plugins link PATH`](#avljs-plugins-link-path)
* [`avljs plugins remove [PLUGIN]`](#avljs-plugins-remove-plugin)
* [`avljs plugins reset`](#avljs-plugins-reset)
* [`avljs plugins uninstall [PLUGIN]`](#avljs-plugins-uninstall-plugin)
* [`avljs plugins unlink [PLUGIN]`](#avljs-plugins-unlink-plugin)
* [`avljs plugins update`](#avljs-plugins-update)

## `avljs brewery list`

List out breweries

```
USAGE
  $ avljs brewery list [-n <value>] [--city <value>]

FLAGS
  -n, --name=<value>  search by name
      --city=<value>  search by city

DESCRIPTION
  List out breweries

EXAMPLES
  $ avljs brewery list
```

_See code: [src/commands/brewery/list.ts](https://github.com/source/avljs/blob/v0.0.0/src/commands/brewery/list.ts)_

## `avljs hello PERSON`

Say hello

```
USAGE
  $ avljs hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ avljs hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/source/avljs/blob/v0.0.0/src/commands/hello/index.ts)_

## `avljs hello world`

Say hello world

```
USAGE
  $ avljs hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ avljs hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/source/avljs/blob/v0.0.0/src/commands/hello/world.ts)_

## `avljs help [COMMAND]`

Display help for avljs.

```
USAGE
  $ avljs help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for avljs.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.33/src/commands/help.ts)_

## `avljs iss`

print the current location of the ISS

```
USAGE
  $ avljs iss

DESCRIPTION
  print the current location of the ISS
```

_See code: [src/commands/iss.ts](https://github.com/source/avljs/blob/v0.0.0/src/commands/iss.ts)_

## `avljs plugins`

List installed plugins.

```
USAGE
  $ avljs plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ avljs plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/index.ts)_

## `avljs plugins add PLUGIN`

Installs a plugin into avljs.

```
USAGE
  $ avljs plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into avljs.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AVLJS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AVLJS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ avljs plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ avljs plugins add myplugin

  Install a plugin from a github url.

    $ avljs plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ avljs plugins add someuser/someplugin
```

## `avljs plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ avljs plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ avljs plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/inspect.ts)_

## `avljs plugins install PLUGIN`

Installs a plugin into avljs.

```
USAGE
  $ avljs plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into avljs.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AVLJS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AVLJS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ avljs plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ avljs plugins install myplugin

  Install a plugin from a github url.

    $ avljs plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ avljs plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/install.ts)_

## `avljs plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ avljs plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ avljs plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/link.ts)_

## `avljs plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ avljs plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ avljs plugins unlink
  $ avljs plugins remove

EXAMPLES
  $ avljs plugins remove myplugin
```

## `avljs plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ avljs plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/reset.ts)_

## `avljs plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ avljs plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ avljs plugins unlink
  $ avljs plugins remove

EXAMPLES
  $ avljs plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/uninstall.ts)_

## `avljs plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ avljs plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ avljs plugins unlink
  $ avljs plugins remove

EXAMPLES
  $ avljs plugins unlink myplugin
```

## `avljs plugins update`

Update installed plugins.

```
USAGE
  $ avljs plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.47/src/commands/plugins/update.ts)_
<!-- commandsstop -->
