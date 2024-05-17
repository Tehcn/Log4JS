import { Style, Logger } from "./index";

const logger = new Logger("Test");
let start = Date.now();
let end: number;

// log levels
logger.debug("Test all log levels");

const logLevelTestLogger = new Logger("logLevelTestLogger");
logLevelTestLogger.log("test log");
logLevelTestLogger.info("test info");
logLevelTestLogger.debug("test debug");
logLevelTestLogger.warn("test warn");
logLevelTestLogger.error("test error");

// space between tests
console.log("\n");

// default log levels
logger.debug("Test all default log levels");

const defaultLevelInfoTestLogger = new Logger(
    "defaultLevelInfoTestLogger",
    "info"
);
const defaultLevelDebugTestLogger = new Logger(
    "defaultLevelDebugTestLogger",
    "debug"
);
const defaultLevelWarnTestLogger = new Logger(
    "defaultLevelWarnTestLogger",
    "warn"
);
const defaultLevelErrorTestLogger = new Logger(
    "defaultLevelErrorTestLogger",
    "error"
);
defaultLevelInfoTestLogger.log("test default info");
defaultLevelDebugTestLogger.log("test default debug");
defaultLevelWarnTestLogger.log("test default warn");
defaultLevelErrorTestLogger.log("test default error");

// space between tests
console.log("\n");

// many same name loggers
logger.debug("Test many loggers with the same name");

const manySameNameLoggersTest01 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest02 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest03 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest04 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest05 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest06 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest07 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest08 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest09 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest10 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest11 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest12 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest13 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest14 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest15 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest16 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest17 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest18 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest19 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest20 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest21 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest22 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest23 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest24 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest25 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest26 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest27 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest28 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest29 = new Logger("manySameNameLoggersTest");
const manySameNameLoggersTest30 = new Logger("manySameNameLoggersTest");

manySameNameLoggersTest01.log("test");
manySameNameLoggersTest01.info("test info");
manySameNameLoggersTest01.debug("test debug");
manySameNameLoggersTest01.warn("test warn");
manySameNameLoggersTest01.error("test error");

console.log("\n");

manySameNameLoggersTest02.log("test");
manySameNameLoggersTest02.info("test info");
manySameNameLoggersTest02.debug("test debug");
manySameNameLoggersTest02.warn("test warn");
manySameNameLoggersTest02.error("test error");

console.log("\n");

manySameNameLoggersTest03.log("test");
manySameNameLoggersTest03.info("test info");
manySameNameLoggersTest03.debug("test debug");
manySameNameLoggersTest03.warn("test warn");
manySameNameLoggersTest03.error("test error");

console.log("\n");

manySameNameLoggersTest04.log("test");
manySameNameLoggersTest04.info("test info");
manySameNameLoggersTest04.debug("test debug");
manySameNameLoggersTest04.warn("test warn");
manySameNameLoggersTest04.error("test error");

console.log("\n");

manySameNameLoggersTest05.log("test");
manySameNameLoggersTest05.info("test info");
manySameNameLoggersTest05.debug("test debug");
manySameNameLoggersTest05.warn("test warn");
manySameNameLoggersTest05.error("test error");

console.log("\n");

manySameNameLoggersTest06.log("test");
manySameNameLoggersTest06.info("test info");
manySameNameLoggersTest06.debug("test debug");
manySameNameLoggersTest06.warn("test warn");
manySameNameLoggersTest06.error("test error");

console.log("\n");

manySameNameLoggersTest07.log("test");
manySameNameLoggersTest07.info("test info");
manySameNameLoggersTest07.debug("test debug");
manySameNameLoggersTest07.warn("test warn");
manySameNameLoggersTest07.error("test error");

console.log("\n");

manySameNameLoggersTest08.log("test");
manySameNameLoggersTest08.info("test info");
manySameNameLoggersTest08.debug("test debug");
manySameNameLoggersTest08.warn("test warn");
manySameNameLoggersTest08.error("test error");

console.log("\n");

manySameNameLoggersTest09.log("test");
manySameNameLoggersTest09.info("test info");
manySameNameLoggersTest09.debug("test debug");
manySameNameLoggersTest09.warn("test warn");
manySameNameLoggersTest09.error("test error");

console.log("\n");

manySameNameLoggersTest10.log("test");
manySameNameLoggersTest10.info("test info");
manySameNameLoggersTest10.debug("test debug");
manySameNameLoggersTest10.warn("test warn");
manySameNameLoggersTest10.error("test error");

console.log("\n");

manySameNameLoggersTest11.log("test");
manySameNameLoggersTest11.info("test info");
manySameNameLoggersTest11.debug("test debug");
manySameNameLoggersTest11.warn("test warn");
manySameNameLoggersTest11.error("test error");

console.log("\n");

manySameNameLoggersTest12.log("test");
manySameNameLoggersTest12.info("test info");
manySameNameLoggersTest12.debug("test debug");
manySameNameLoggersTest12.warn("test warn");
manySameNameLoggersTest12.error("test error");

console.log("\n");

manySameNameLoggersTest13.log("test");
manySameNameLoggersTest13.info("test info");
manySameNameLoggersTest13.debug("test debug");
manySameNameLoggersTest13.warn("test warn");
manySameNameLoggersTest13.error("test error");

console.log("\n");

manySameNameLoggersTest14.log("test");
manySameNameLoggersTest14.info("test info");
manySameNameLoggersTest14.debug("test debug");
manySameNameLoggersTest14.warn("test warn");
manySameNameLoggersTest14.error("test error");

console.log("\n");

manySameNameLoggersTest15.log("test");
manySameNameLoggersTest15.info("test info");
manySameNameLoggersTest15.debug("test debug");
manySameNameLoggersTest15.warn("test warn");
manySameNameLoggersTest15.error("test error");

console.log("\n");

manySameNameLoggersTest16.log("test");
manySameNameLoggersTest16.info("test info");
manySameNameLoggersTest16.debug("test debug");
manySameNameLoggersTest16.warn("test warn");
manySameNameLoggersTest16.error("test error");

console.log("\n");

manySameNameLoggersTest17.log("test");
manySameNameLoggersTest17.info("test info");
manySameNameLoggersTest17.debug("test debug");
manySameNameLoggersTest17.warn("test warn");
manySameNameLoggersTest17.error("test error");

console.log("\n");

manySameNameLoggersTest18.log("test");
manySameNameLoggersTest18.info("test info");
manySameNameLoggersTest18.debug("test debug");
manySameNameLoggersTest18.warn("test warn");
manySameNameLoggersTest18.error("test error");

console.log("\n");

manySameNameLoggersTest19.log("test");
manySameNameLoggersTest19.info("test info");
manySameNameLoggersTest19.debug("test debug");
manySameNameLoggersTest19.warn("test warn");
manySameNameLoggersTest19.error("test error");

console.log("\n");

manySameNameLoggersTest20.log("test");
manySameNameLoggersTest20.info("test info");
manySameNameLoggersTest20.debug("test debug");
manySameNameLoggersTest20.warn("test warn");
manySameNameLoggersTest20.error("test error");

console.log("\n");

manySameNameLoggersTest21.log("test");
manySameNameLoggersTest21.info("test info");
manySameNameLoggersTest21.debug("test debug");
manySameNameLoggersTest21.warn("test warn");
manySameNameLoggersTest21.error("test error");

console.log("\n");

manySameNameLoggersTest22.log("test");
manySameNameLoggersTest22.info("test info");
manySameNameLoggersTest22.debug("test debug");
manySameNameLoggersTest22.warn("test warn");
manySameNameLoggersTest22.error("test error");

console.log("\n");

manySameNameLoggersTest23.log("test");
manySameNameLoggersTest23.info("test info");
manySameNameLoggersTest23.debug("test debug");
manySameNameLoggersTest23.warn("test warn");
manySameNameLoggersTest23.error("test error");

manySameNameLoggersTest24.log("test");
manySameNameLoggersTest24.info("test info");
manySameNameLoggersTest24.debug("test debug");
manySameNameLoggersTest24.warn("test warn");
manySameNameLoggersTest24.error("test error");

console.log("\n");

manySameNameLoggersTest25.log("test");
manySameNameLoggersTest25.info("test info");
manySameNameLoggersTest25.debug("test debug");
manySameNameLoggersTest25.warn("test warn");
manySameNameLoggersTest25.error("test error");

console.log("\n");

manySameNameLoggersTest26.log("test");
manySameNameLoggersTest26.info("test info");
manySameNameLoggersTest26.debug("test debug");
manySameNameLoggersTest26.warn("test warn");
manySameNameLoggersTest26.error("test error");

console.log("\n");

manySameNameLoggersTest27.log("test");
manySameNameLoggersTest27.info("test info");
manySameNameLoggersTest27.debug("test debug");
manySameNameLoggersTest27.warn("test warn");
manySameNameLoggersTest27.error("test error");

console.log("\n");

manySameNameLoggersTest28.log("test");
manySameNameLoggersTest28.info("test info");
manySameNameLoggersTest28.debug("test debug");
manySameNameLoggersTest28.warn("test warn");
manySameNameLoggersTest28.error("test error");

console.log("\n");

manySameNameLoggersTest29.log("test");
manySameNameLoggersTest29.info("test info");
manySameNameLoggersTest29.debug("test debug");
manySameNameLoggersTest29.warn("test warn");
manySameNameLoggersTest29.error("test error");

console.log("\n");

manySameNameLoggersTest30.log("test");
manySameNameLoggersTest30.info("test info");
manySameNameLoggersTest30.debug("test debug");
manySameNameLoggersTest30.warn("test warn");
manySameNameLoggersTest30.error("test error");

// space between tests
console.log("\n");

// performance test
// also, i know performance.now is better but whatever
logger.debug("Performance Test (1000 logs)");
let performanceStart: number, performanceEnd: number;

performanceStart = Date.now();
logger.debug(`Start: ${performanceStart}`);

const performanceTestLogger = new Logger("performanceTestLogger");
for (var i = 0; i <= 100; i++) {
    performanceTestLogger.info(i);
}

performanceEnd = Date.now();
logger.debug(`End: ${performanceEnd}`);

logger.debug(
    `Performance test took ${performanceEnd - performanceStart} miliseconds`
);

console.log("\n");

// multithread test
logger.debug("Multiple Threads using same name (represented by function)");

function thread() {
    const multithreadTestLogger = new Logger("multithreadTestLogger");

    multithreadTestLogger.log("multithreadTestLogger");
}

thread();
thread();
thread();
thread();
thread();

console.log("\n");

// // printc test
logger.debug("Logger.printc test (custom colors)");

Logger.printc("printc", Style.RESET);
Logger.printc("printc", Style.FOREGROUND_WHITE);
Logger.printc("printc", Style.BOLD);
Logger.printc("printc", Style.FOREGROUND_GRAY);
Logger.printc("printc", Style.FOREGROUND_GREY);
Logger.printc("printc", Style.ITALICS);
Logger.printc("printc", Style.UNDERLINE);
Logger.printc("printc", Style.BLINK);
Logger.printc("printc", Style.HIGHLIGHT);
Logger.printc("printc", Style.HIDE);
Logger.printc("printc", Style.STRIKETHROUGH);
Logger.printc("printc", Style.DOUBLE_UNDERLINE);
Logger.printc("printc", Style.FOREGROUND_BACKGROUND);
Logger.printc("printc", Style.FOREGROUND_LIGHT_RED);
Logger.printc("printc", Style.FOREGROUND_LIGHT_GREEN);
Logger.printc("printc", Style.FOREGROUND_LIGHT_YELLOW);
Logger.printc("printc", Style.FOREGROUND_LIGHT_BLUE);
Logger.printc("printc", Style.FOREGROUND_LIGHT_MAGENTA);
Logger.printc("printc", Style.FOREGROUND_LIGHT_AQUA);
Logger.printc("printc", Style.BACKGROUND_DARK_RED);
Logger.printc("printc", Style.BACKGROUND_DARK_GREEN);
Logger.printc("printc", Style.BACKGROUND_DARK_YELLOW);
Logger.printc("printc", Style.BACKGROUND_DARK_BLUE);
Logger.printc("printc", Style.BACKGROUND_DARK_MAGENTA);
Logger.printc("printc", Style.BACKGROUND_DARK_AQUA);
Logger.printc("printc", Style.BACKGROUND_WHITE);
Logger.printc("printc", Style.OVERLINE);
Logger.printc("printc", Style.FOREGROUND_DARK_GRAY);
Logger.printc("printc", Style.FOREGROUND_DARK_GREY);
Logger.printc("printc", Style.FOREGROUND_DARK_RED);
Logger.printc("printc", Style.FOREGROUND_DARK_GREEN);
Logger.printc("printc", Style.FOREGROUND_DARK_YELLOW);
Logger.printc("printc", Style.FOREGROUND_DARK_BLUE);
Logger.printc("printc", Style.FOREGROUND_DARK_MAGENTA);
Logger.printc("printc", Style.FOREGROUND_DARK_AQUA);
Logger.printc("printc", Style.BACKGROUND_LIGHT_GRAY);
Logger.printc("printc", Style.BACKGROUND_LIGHT_GREY);
Logger.printc("printc", Style.BACKGROUND_LIGHT_RED);
Logger.printc("printc", Style.BACKGROUND_LIGHT_GREEN);
Logger.printc("printc", Style.BACKGROUND_LIGHT_YELLOW);
Logger.printc("printc", Style.BACKGROUND_LIGHT_BLUE);
Logger.printc("printc", Style.BACKGROUND_LIGHT_MAGENTA);
Logger.printc("printc", Style.BACKGROUND_LIGHT_AQUA);
Logger.printc("printc", Style.BACKGROUND_LIGHT_WHITE);

end = Date.now();

logger.debug(`All tests completed in ${end - start} miliseconds`);
