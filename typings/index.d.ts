declare module 'index' {
	 type LoggerLevel = "info" | "error" | "debug" | "warn" | undefined; class Logger {
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
	    static getLevelColor(level: LoggerLevel): "\u001B[92m" | "\u001B[94m" | "\u001B[93m" | "\u001B[91m";
	    getID(): number;
	}
	export { Logger, LoggerLevel };
	export default Logger;

}
