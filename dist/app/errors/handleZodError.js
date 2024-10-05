"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (err) => {
    const errorSources = err.errors.map((error) => {
        return { path: error.path.join('.'), message: error.message };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: "Validation Error occurred",
        errorSources,
    };
};
exports.default = handleZodError;
