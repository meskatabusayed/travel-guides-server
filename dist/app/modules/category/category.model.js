"use strict";
//category model...
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CategorySchema = new mongoose_1.default.Schema({
    label: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true });
const Category = mongoose_1.default.model("Category", CategorySchema);
exports.default = Category;
