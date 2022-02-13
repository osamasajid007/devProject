"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT;
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
