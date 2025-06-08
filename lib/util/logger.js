"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultLogger = void 0;
exports.DefaultLogger = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    silly: (...params) => {
        // console.log(params);
    },
    debug: (...params) => {
        console.log(params);
    },
    notice: (...params) => {
        console.log(params);
    },
    info: (...params) => {
        console.info(params);
    },
    warning: (...params) => {
        console.error(params);
    },
    error: (...params) => {
        console.error(params);
    },
};
//# sourceMappingURL=logger.js.map