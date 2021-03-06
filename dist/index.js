"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Base/Context");
var Base64Work_1 = require("./Base/Works/Base64Work");
var InOutputValue_1 = require("./Base/Object/InOutputValue");
var QRCodeWork_1 = require("./Base/Works/QRCodeWork");
var context = new Context_1.Context();
context.addWork(new Base64Work_1.Base64EnCodeWork());
context.addWork(new Base64Work_1.Base64DecodeWork());
context.addWork(new QRCodeWork_1.QRCodeWork());
context.testRun(new InOutputValue_1.InOutString("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
// var qr = require('qr-image');
// const a = qr.imageSync("AAAA", { type: "svg" })
// console.log(Buffer.from(a).toString('base64'))
//# sourceMappingURL=index.js.map