"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
//import store from '@/store'
const URL = 'http://api.filicabh.com/api/v1';
const http = axios_1.default.create({
    baseURL: URL,
});
exports.http = http;
//# sourceMappingURL=http.js.map