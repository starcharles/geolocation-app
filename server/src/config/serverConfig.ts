export class ServerConfig {
    /** Expressサーバー設定 **/
    // Webサーバー待ち受けポート番号
    public static PORT_NUMBER = 3000;
    // 受信するデータの最大サイズ
    public static MAX_REQUEST_SIZE = 20000000;

    /** 実行ファイルの配置場所 **/
    // フロントエンドモジュールの保存場所
    public static APP_PROJECT_DIR = "../client";
    // ログイン関連ファイルの保存場所
    public static LOGIN_FILE_DIR = ServerConfig.APP_PROJECT_DIR + "/dist";
    // アプリケーション関連ファイルの保存場所
    public static APP_FILE_DIR = ServerConfig.APP_PROJECT_DIR + "/dist";
    // システム管理者用関連ファイルの保存場所
    public static ADMIN_FILE_DIR = ServerConfig.APP_PROJECT_DIR + "/dist";

    /**トークン関連**/
    //  単位(sec)　新規生成するトークンの有効期間（1時間）
    public static TOKEN_TIMEOUT =1 * 3600;
    // token書き込み時のキー名
    public static JWT_HEADER = "authorization";
    // JWTのprefix
    public static TOKEN_PREFIX = "Bearer ";

    /** データベース関連**/
    // データベースファイルの場所
    public static SQLITE_DB_PATH = "/db/development_sqlite3.db";

    /** Web API関連**/
    //  管理者用Web API接続先
    public static adminApiUrl = "/api/admin/";
    //  ユーザー用Web API接続先
    public static userApiUrl = "/api/";
}
