# Log4JS

Simple logging for JavaScript

## Examples

Some examples on how to use Log4JS
All output is colored in use, but not here. :(

### Basic logging

```js
// import the Logger class from Log4JS
const { Logger } = require('@tehcn/log4js'); 

// create a new logger named main
const logger = new Logger('main'); 

// log something to the console
logger.log("Hello, Log4JS!");
```

Output (not colored):

```txt
[main/INFO] Hello, Log4JS!
```

### Logging with default level

```js
// import the Logger class from Log4JS
const { Logger } = require('@tehcn/log4js'); 

// create a new logger named main with a default of debug
const logger = new Logger('main', 'debug'); 

// log something to the console
logger.log("Hello, Log4JS!");
```

Output:

```txt
[main/DEBUG] Hello, Log4JS!
```

## Logging with multiple threads

or something that will use a logger with the same name (threads for example)

```js
// import the Logger class from Log4JS
const { Logger } = require('@tehcn/log4js'); 

// a function to represent a thread
function thread() {
    // Log4JS automatically handles this
    const logger = new Logger('thread');

    logger.log("test");
}

thread();
thread();
thread();
```

Output:

```txt
[multithreadTestLogger/INFO] multithreadTestLogger
[multithreadTestLogger/INFO #1] multithreadTestLogger
[multithreadTestLogger/INFO #2] multithreadTestLogger
```

## Custom Styles

Here's an example that makes a red bold text:

```js
const { Logger, Style } = require('@tehcn/log4js');

Logger.printc('Hello, World!', Style.FOREGROUND_LIGHT_RED + Style.BOLD);
```

## Documentation

All of the methods/function follow Typescript type notation.

Using the `Logger` class the following instance and static methods become available:

- `log(msg: string | number): void`
- `info(msg: string | number): void`
- `debug(msg: string | number): void`
- `warn(msg: string | number): void`
- `error(msg: string | number): void`
- `static printc(msg: string | number, style: Style | string) : void`
- `static getID(): number`

There is also the static method `getLevelColor(level: LoggerLevel): string` which takes in a `LoggerLevel`

The available `LoggerLevel`s are:

- `info`
- `debug`
- `warn`
- `error`

> Note: `log` logs at a level of `info` by default.
