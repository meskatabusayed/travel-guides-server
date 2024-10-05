"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//route handling start
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const not_found_1 = require("./app/middlewares/not-found");
const error_1 = __importDefault(require("./app/middlewares/error"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
    res.send("Travel guides...");
});
app.use(not_found_1.notFound);
app.use(error_1.default);
exports.default = app;
//route handling end
