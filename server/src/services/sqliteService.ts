// import * as path from "path";
// import * as sqlite3 from "sqlite3";
// import {ServerConfig} from "./serverConfig";
//
// export class Sqlite {
//
//     private static db: any; // DBオブジェクト
//
//     // ------------------------------------
//     // 初期化処理
//     // ------------------------------------
//     public static init() {
//         Sqlite.onBeforeExit();
//         Sqlite.open();
//     }
//
//     // ------------------------------------
//     // イベント処理登録: アプリ終了時にdbクローズ
//     // ------------------------------------
//     private static onBeforeExit() {
//         process.on("beforeExit", () => {
//             this.close();
//         });
//     }
//
//     // ------------------------------------
//     // DBオープン
//     // ------------------------------------
//     private static open() {
//         const dbFilePath = path.resolve("") + ServerConfig.SQLITE_DB_PATH;
//         Sqlite.db = new sqlite3.Database(
//             dbFilePath, // DBファイルの場所
//             sqlite3.OPEN_READWRITE, // 実行モード
//             (err) => { // callback
//                 if (err) {
//                     console.error("データベース初期化失敗" + err.message);
//                     process.exit(1);
//                 } else {
//                     console.log("データベースオープン成功");
//                 }
//             });
//     }
//
//     // ------------------------------------
//     // DBクローズ
//     // ------------------------------------
//     private static close(): void {
//         console.log("dbクローズ");
//         Sqlite.db.close();
//     }
//
//     // ------------------------------------
//     // 検索
//     // ------------------------------------
//     public static select(sql, param): Promise<any> {
//         return new Promise((resolve, reject) => {
//             const data = [];
//             param = param || [];
//             Sqlite.db.each(sql, param,
//                 (err, row) => data.push(row), // 検索結果１件ごとのコールバック
//                 (err, count) => {// 検索完了時のコールバック
//                     if (err) {
//                         console.error("DB検索失敗");
//                         process.exit(1);
//                     }
//                     console.log(err || ("DB検索成功:" + count + "件"));
//                     return resolve({rows: data});
//                 });
//         });
//     }
//
//     // ------------------------------------
//     // 削除
//     // ------------------------------------
//     public static delete(sql, param): Promise<string> {
//         return new Promise((resolve, reject) => {
//             Sqlite.db.run(sql, param, (err) => {
//                 if (err) {
//                     console.error("レコード削除失敗");
//                     process.exit(1);
//                 }
//                 console.log(err || "レコード削除完了");
//                 return resolve("success");
//             });
//         });
//     }
//
//     // ------------------------------------
//     // 追加
//     // ------------------------------------
//     public static insert(sql, param): Promise<string> {
//         return new Promise((resolve, reject) => {
//             Sqlite.db.run(sql, param, (err) => {
//                 if (err) {
//                     console.error("レコード追加失敗");
//                     process.exit(1);
//                 }
//                 console.log("レコード追加完了");
//                 return resolve("success");
//             });
//         });
//     }
//
//     // ------------------------------------
//     // 更新
//     // ------------------------------------
//     public static update(sql, param): Promise<string> {
//         return new Promise((resolve, reject) => {
//             Sqlite.db.run(sql, param, (err) => {
//                 if (err) {
//                     console.error("レコード更新失敗");
//                     process.exit(1);
//                 }
//                 console.log("レコード更新完了");
//                 return resolve("success");
//             });
//         });
//     }
//
// }
