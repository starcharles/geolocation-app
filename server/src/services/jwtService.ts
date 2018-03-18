import {ServerConfig} from "../config/serverConfig";
import {Key} from "../config/key";
import {Response, Request, NextFunction} from "express";
import * as jwt from "jsonwebtoken";
import {User} from "../models/user";

export class Jwt {

    // トークンを生成しset-cookieヘッダに書き出し
    public static setNewToken(res: Response, userData: User, timeout?): string {
        // トークン生成
        const tokenStr = jwt.sign(
            userData,
            Key.PRIVATE,
            {
                algorithm: "RS256",
                expiresIn: timeout || ServerConfig.TOKEN_TIMEOUT * 60,
            });
        // set-cookieヘッダ書き込み
        res.cookie(ServerConfig.JWT_HEADER,
            ServerConfig.TOKEN_PREFIX + tokenStr);
        return tokenStr;
    }

    // reqオブジェクトからトークン取得
    public static getToken(req: Request): string {
        let tokenStr = req.cookies[ServerConfig.JWT_HEADER] || "";
        tokenStr = tokenStr.replace(ServerConfig.TOKEN_PREFIX, "").trim();
        return tokenStr;
    }

    // トークンの検証
    public static verifyToken(token: string): string {
        let tokenObj;
        try {
            tokenObj = jwt.verify(
                token,
                Key.PUBLIC,
                {algorithms: ["RS256"]});
        } catch (e) {
            console.error("@@@@ トークン不正" + e.message);
            return null;
        }
        console.log("@@@@ トークン正常");
        return tokenObj;
    }

    // トークンからユーザー情報取得
    public static getUserData(tokenObj): User {
        // デコード結果からiat(発行日時)とexp(有効期限)を削除
        delete tokenObj.iat;
        delete tokenObj.exp;
        return tokenObj;
    }

}
