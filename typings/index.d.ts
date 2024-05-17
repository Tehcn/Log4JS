declare module "@tehcn/log4js" {
    type LoggerLevel = "info" | "error" | "debug" | "warn" | undefined;
    class Logger {
        name: string;
        defaultLevel: LoggerLevel;
        private id;
        static loggers: any;
        constructor(name: string, defaultLevel?: LoggerLevel, id?: number);
        log(msg: string | number): void;
        info(msg: string | number): void;
        debug(msg: string | number): void;
        warn(msg: string | number): void;
        error(msg: string | number): void;
        static getLevelColor(
            level: LoggerLevel
        ): "\u001B[92m" | "\u001B[94m" | "\u001B[93m" | "\u001B[91m";
        static printc(msg: string | number, color: Style | string): void;
        getID(): number;
    }
    enum Style {
        RESET = "\x1b[0m",
        FOREGROUND_WHITE = "\x1b[0m",
        BOLD = "\x1b[1m",
        FOREGROUND_GRAY = "\x1b[2m",
        FOREGROUND_GREY = "\x1b[2m",
        ITALICS = "\x1b[3m",
        UNDERLINE = "\x1b[4m",
        BLINK = "\x1b[5m",
        HIGHLIGHT = "\x1b[7m",
        HIDE = "\x1b[8m",
        STRIKETHROUGH = "\x1b[9m",
        DOUBLE_UNDERLINE = "\x1b[21m",
        FOREGROUND_BACKGROUND = "\x1b[30m",
        FOREGROUND_LIGHT_RED = "\x1b[31m",
        FOREGROUND_LIGHT_GREEN = "\x1b[32m",
        FOREGROUND_LIGHT_YELLOW = "\x1b[33m",
        FOREGROUND_LIGHT_BLUE = "\x1b[34m",
        FOREGROUND_LIGHT_MAGENTA = "\x1b[35m",
        FOREGROUND_LIGHT_AQUA = "\x1b[36m",
        BACKGROUND_DARK_RED = "\x1b[41m",
        BACKGROUND_DARK_GREEN = "\x1b[42m",
        BACKGROUND_DARK_YELLOW = "\x1b[43m",
        BACKGROUND_DARK_BLUE = "\x1b[44m",
        BACKGROUND_DARK_MAGENTA = "\x1b[45m",
        BACKGROUND_DARK_AQUA = "\x1b[46m",
<<<<<<< HEAD
        BACKGROUND_WHITE = "\x1b[47m",
=======
        BACKGROUND_WHITE = "\x1b[46m",
>>>>>>> 56d0abb06586c5a646a8a732596514b004da3402
        OVERLINE = "\x1b[53m",
        FOREGROUND_DARK_GRAY = "\x1b[90m",
        FOREGROUND_DARK_GREY = "\x1b[90m",
        FOREGROUND_DARK_RED = "\x1b[91m",
        FOREGROUND_DARK_GREEN = "\x1b[92m",
        FOREGROUND_DARK_YELLOW = "\x1b[93m",
        FOREGROUND_DARK_BLUE = "\x1b[94m",
        FOREGROUND_DARK_MAGENTA = "\x1b[95m",
        FOREGROUND_DARK_AQUA = "\x1b[96m",
        BACKGROUND_LIGHT_GRAY = "\x1b[100m",
        BACKGROUND_LIGHT_GREY = "\x1b[100m",
        BACKGROUND_LIGHT_RED = "\x1b[101m",
        BACKGROUND_LIGHT_GREEN = "\x1b[102m",
        BACKGROUND_LIGHT_YELLOW = "\x1b[103m",
        BACKGROUND_LIGHT_BLUE = "\x1b[104m",
        BACKGROUND_LIGHT_MAGENTA = "\x1b[105m",
        BACKGROUND_LIGHT_AQUA = "\x1b[106m",
        BACKGROUND_LIGHT_WHITE = "\x1b[107m",
    }
    export { Logger, LoggerLevel, Style };
    export default Logger;
}
