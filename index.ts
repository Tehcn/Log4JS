/// <reference path="./typings/index.d.ts"/>

type LoggerLevel = "info" | "error" | "debug" | "warn" | undefined;

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
        if (typeof (msg) == typeof (1)) msg = msg.toString();
        console.log(`${Logger.getLevelColor(this.defaultLevel)}[${this.name}/${this.defaultLevel!.toUpperCase()}${Logger.loggers[this.name] > 1 ? ` #${this.id}` : ''}]\x1b[0m ${msg}`);
    }

    public info(msg: string | number): void {
        if (typeof (msg) == typeof (1)) msg = msg.toString();
        console.log(`${Logger.getLevelColor("info")}[${this.name}/INFO${Logger.loggers[this.name] > 1 ? ` #${this.id}` : ''}]\x1b[0m ${msg}`);
    }

    public debug(msg: string | number): void {
        if (typeof (msg) == typeof (1)) msg = msg.toString();
        console.log(`${Logger.getLevelColor("debug")}[${this.name}/DEBUG${Logger.loggers[this.name] > 1 ? ` #${this.id}` : ''}]\x1b[0m ${msg}`);
    }

    public warn(msg: string | number): void {
        if (typeof (msg) == typeof (1)) msg = msg.toString();
        console.log(`${Logger.getLevelColor("warn")}[${this.name}/WARN${Logger.loggers[this.name] > 1 ? ` #${this.id}` : ''}]\x1b[0m ${msg}`);
    }

    public error(msg: string | number): void {
        if (typeof (msg) == typeof (1)) msg = msg.toString();
        console.log(`${Logger.getLevelColor("error")}[${this.name}/ERROR${Logger.loggers[this.name] > 1 ? ` #${this.id}` : ''}]\x1b[0m ${msg}`);
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

export { Logger, LoggerLevel };
export default Logger;