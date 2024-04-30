# windows-cli

> Get metadata about the [active window](https://en.wikipedia.org/wiki/Active_window) (title, id, bounds, owner, URL, etc)

Works on macOS 10.14+, [Linux](https://github.com/sindresorhus/get-windows?tab=readme-ov-file#linux-support), and Windows 7+.

## Install

```sh
npm install --global windows-cli
```

## Usage

```console
$ active-window --help

  Usage
    $ active-window [property]

    Returns title, id, app, pid, or the specified property

  Examples
    $ active-window
    npm install
    54
    Terminal
    368
    $ active-window app
    Terminal
```

## Tip

You can use the `id` property with the builtin `screencapture` CLI tool to screenshot the active window:

```sh
screencapture -l$(active-window id) screenshot.png
```

## Related

- [get-windows](https://github.com/sindresorhus/get-windows) - API for this package
