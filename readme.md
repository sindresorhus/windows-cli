# active-win-cli

> Get the title/id/etc of the [active window](https://en.wikipedia.org/wiki/Active_window) *(macOS & Linux)*


## Install

```
$ npm install --global active-win-cli
```


## Usage

```
$ active-win --help

  Usage
    $ active-win [property]

    Returns title, id, app, pid, or the specified property

  Examples
    $ active-win
    npm install
    54
    Terminal
    368
    $ active-win app
    Terminal
```


## Tip

You can use the `id` property with the builtin `screencapture` CLI tool to screenshot the active window:

```
$ screencapture -l$(active-win id) screenshot.png
```


## Related

- [active-win](https://github.com/sindresorhus/active-win) - API for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
