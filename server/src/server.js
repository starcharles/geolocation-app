"use strict";
exports.__esModule = true;
var express = require("express");
// Expressのインスタンス取得
var app = express();
var dotenv = require("dotenv");
var bodyParser = require("body-parser");
// import {Key} from "./key";
dotenv.config();
app.use(bodyParser.json());
//トークン認証
// app.post("/auth",(req: Request, res: Response, next: NextFunction) => {
// 	const token= req.body.token;
// 	try {
// 		jwt.verify(
// 			token,
// 			Key.PUBLIC,
// 			{algorithms: ["RS256"]});
// 	} catch (e) {
// 		next({message:"@@@@ トークン不正"+e.message});
// 		return;
// 	}
// 	res
// 	    .set("Content-Type","application/json; charset=utf-8")
// 	    .json({message:"@@@@ トークン正常"});
// 	});
app.get("/hello", function (req, res, next) {
    //レスポンス
    res
        .set("Content-Type", "application/json; charset=utf-8")
        .json({ message: req.url + " のリクエストを受けました" });
});
app.use(function (req, res, next) {
    next({ message: "There is no path. path: " + req.path });
});
app.use(function (err, req, res, next) {
    res
        .set("Content-Type", "application/json; charset=utf-8")
        .json(err);
});
var port = 3000;
app.listen(port, function () {
    console.info(port + "番ポートで待機中");
})
    .on(
//起動時エラー
"error", function (error) {
    console.error("ポートが開けません" + error.message);
    process.exit(1);
});
