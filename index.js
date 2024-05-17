"use strict";
/// <reference path="./typings/index.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.Color = void 0;
var Color;
(function (Color) {
    Color["RESET"] = "\u001B[0m";
    Color["WHITE"] = "\u001B[0m";
    Color["GREEN"] = "\u001B[92m";
    Color["BLUE"] = "\u001B[94m";
    Color["YELLOW"] = "\u001B[93m";
    Color["RED"] = "\u001B[94m";
})(Color || (exports.Color = Color = {}));
;
var Logger = /** @class */ (function () {
    function Logger(name, defaultLevel, id) {
        if (defaultLevel === void 0) { defaultLevel = "info"; }
        if (!Logger.loggers[name])
            Logger.loggers[name] = 0;
        this.name = name;
        this.defaultLevel = defaultLevel || "info";
        this.id = Logger.loggers[name];
        Logger.loggers[name] += 1;
    }
    Logger.prototype.log = function (msg) {
        if (typeof (msg) == typeof (1))
            msg = msg.toString();
        console.log("".concat(Logger.getLevelColor(this.defaultLevel), "[").concat(this.name, "/").concat(this.defaultLevel.toUpperCase()).concat(Logger.loggers[this.name] > 1 ? " #".concat(this.id) : '', "]\u001B[0m ").concat(msg));
    };
    Logger.prototype.info = function (msg) {
        if (typeof (msg) == typeof (1))
            msg = msg.toString();
        console.log("".concat(Logger.getLevelColor("info"), "[").concat(this.name, "/INFO").concat(Logger.loggers[this.name] > 1 ? " #".concat(this.id) : '', "]\u001B[0m ").concat(msg));
    };
    Logger.prototype.debug = function (msg) {
        if (typeof (msg) == typeof (1))
            msg = msg.toString();
        console.log("".concat(Logger.getLevelColor("debug"), "[").concat(this.name, "/DEBUG").concat(Logger.loggers[this.name] > 1 ? " #".concat(this.id) : '', "]\u001B[0m ").concat(msg));
    };
    Logger.prototype.warn = function (msg) {
        if (typeof (msg) == typeof (1))
            msg = msg.toString();
        console.log("".concat(Logger.getLevelColor("warn"), "[").concat(this.name, "/WARN").concat(Logger.loggers[this.name] > 1 ? " #".concat(this.id) : '', "]\u001B[0m ").concat(msg));
    };
    Logger.prototype.error = function (msg) {
        if (typeof (msg) == typeof (1))
            msg = msg.toString();
        console.log("".concat(Logger.getLevelColor("error"), "[").concat(this.name, "/ERROR").concat(Logger.loggers[this.name] > 1 ? " #".concat(this.id) : '', "]\u001B[0m ").concat(msg));
    };
    Logger.printc = function (msg, color) {
        if (typeof msg == 'number')
            msg = msg.toString();
        console.log("".concat(color));
    };
    Logger.getLevelColor = function (level) {
        if (level == "info")
            return "\x1b[92m";
        else if (level == "debug")
            return "\x1b[94m";
        else if (level == "warn")
            return "\x1b[93m";
        else if (level == "error")
            return "\x1b[91m";
        else
            throw new Error();
    };
    Logger.prototype.getID = function () {
        return this.id;
    };
    Logger.loggers = {};
    return Logger;
}());
exports.Logger = Logger;
exports.default = Logger;
