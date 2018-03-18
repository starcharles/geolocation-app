import * as express from "express";
import {NextFunction, Request, Response} from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as logger from 'morgan';
import {Sequelize} from 'sequelize-typescript';
import {Development} from './config/environment/development';
import * as jwt from "jsonwebtoken";
// import {Key} from "./key";

dotenv.config();

if(process.env.NODE_ENV !== 'production'){
    // const sequelize =  new Sequelize({
    //     database: 'some_db',
    //     dialect: 'sqlite',
    //     username: 'root',
    //     password: '',
    //     storage: ':memory:',
    //     modelPaths: [__dirname + '/models']
    // });
} else {

}

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use((req: Request,res: Response, next: NextFunction) =>{
    // console.log(`${req.method} : ${req.url}`);
    next()
});

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

app.get("/hello",(req: Request, res: Response, next: NextFunction) => {
	//レスポンス
	res
	    .set("Content-Type","application/json; charset=utf-8")
	    .json({message:req.url+" のリクエストを受けました"})
});

app.use((req: Request, res: Response, next: NextFunction) => {
    next({message: `There is no path. path: ${req.path}`});
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res
        .set("Content-Type","application/json; charset=utf-8")
        .json(err);
    }
);

const port = process.env.PORT || '3000';
app.listen(port, () => {
        console.log(`Successfully running a server at port:${port}`);
})
.on(
    "error", (error) => {
        console.error("failed opening port! :" + error.message);
        process.exit(1);
});
