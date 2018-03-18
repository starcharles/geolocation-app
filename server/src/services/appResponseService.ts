import {Response, Request, NextFunction} from "express";
import {ResJson} from "../models/resJson";

export class AppRes {

    // レスポンスデータ生成
    public static async sendJson(res: Response, isSuccess = false, message = "", jsonData = null) {
        try {
            const obj: ResJson = await ResJson.create({
                    success: isSuccess,
                    message: message,
                    data: jsonData
                    });
            res.set("Cache-Control" , "no-cache").json(obj);
        } catch (e) {
            res.set("Cache-Control" , "no-cache")
               .json({
                         success: false,
                         message: e,
                         data: jsonData
                     });
        }
    }

}
