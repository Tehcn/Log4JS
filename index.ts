/// <reference path="./typings/index.d.ts"/>

type LoggerLevel = "info" | "error" | "debug" | "warn" | undefined;

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
    BACKGROUND_WHITE = "\x1b[47m",
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

class Logger {
    public name: string;
    public defaultLevel: LoggerLevel;
    private id: number;
    public static loggers: any = {};

    constructor(name: string, defaultLevel: LoggerLevel = "info", id?: number) {
        if (!Logger.loggers[name]) Logger.loggers[name] = 0;
        this.name = name;
        this.defaultLevel = defaultLevel || "info";
        this.id = Logger.loggers[name];
        Logger.loggers[name] += 1;
    }

    public log(msg: string | number): void {
        if (typeof msg == typeof 1) msg = msg.toString();
        console.log(
            `${Logger.getLevelColor(this.defaultLevel)}[${
                this.name
            }/${this.defaultLevel!.toUpperCase()}${
                Logger.loggers[this.name] > 1 ? ` #${this.id}` : ""
            }]\x1b[0m ${msg}`
        );
    }

    public info(msg: string | number): void {
        if (typeof msg == typeof 1) msg = msg.toString();
        console.log(
            `${Logger.getLevelColor("info")}[${this.name}/INFO${
                Logger.loggers[this.name] > 1 ? ` #${this.id}` : ""
            }]\x1b[0m ${msg}`
        );
    }

    public debug(msg: string | number): void {
        if (typeof msg == typeof 1) msg = msg.toString();
        console.log(
            `${Logger.getLevelColor("debug")}[${this.name}/DEBUG${
                Logger.loggers[this.name] > 1 ? ` #${this.id}` : ""
            }]\x1b[0m ${msg}`
        );
    }

    public warn(msg: string | number): void {
        if (typeof msg == typeof 1) msg = msg.toString();
        console.log(
            `${Logger.getLevelColor("warn")}[${this.name}/WARN${
                Logger.loggers[this.name] > 1 ? ` #${this.id}` : ""
            }]\x1b[0m ${msg}`
        );
    }

    public error(msg: string | number): void {
        if (typeof msg == typeof 1) msg = msg.toString();
        console.log(
            `${Logger.getLevelColor("error")}[${this.name}/ERROR${
                Logger.loggers[this.name] > 1 ? ` #${this.id}` : ""
            }]\x1b[0m ${msg}`
        );
    }

    public static printc(msg: string | number, style: Style | string): void {
        if (typeof msg == "number") msg = msg.toString();
        console.log(`${style}${msg}\x1b[0m`);
    }

    public static getLevelColor(level: LoggerLevel) {
        if (level == "info") return "\x1b[92m";
        else if (level == "debug") return "\x1b[94m";
        else if (level == "warn") return "\x1b[93m";
        else if (level == "error") return "\x1b[91m";
        else throw new Error();
    }

    public getID(): number {
        return this.id;
    }
}

export { Logger, LoggerLevel, Style };
export default Logger;
