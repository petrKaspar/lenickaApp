"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
// import * as bodyParser from "body-parser";
// import * as cookieParser from "cookie-parser";
// import * as express from "express";
// import * as path from "path";
// import * as logger from "morgan";
// import errorHandler = require("errorhandler");
// import methodOverride = require("method-override");
// const handlebars = require('express-handlebars');
//
// /*
//     First we import the middleware and necessary modules that we previously installed.
//     The body-parser middleware will parse JSON payload data into the req.body object that will be available in our express application.
//     The cookie-parser middleware is similar to the body-parser in that it parses the user’s cookie data and makes this available in the req.cookies object.
//     We then import the express module. This is the express framework.
//     I am using the morgan HTTP logger middleware. This should only be used during development.
//     I then import the path module. I will use this to set the path directories for public and views directories in the config() method.
//     The errorhandler middleware will handle errors during development. Again, this should not be used in production. Rather, you will want to log your errors and then show the user a error indication.
//     Finally, I am using the method-override middleware. You may not need this, but this is required when using “PUT” and “DELETE” HTTP verbs in your REST API configuration.
//  */
//
// // const bodyParser = require('body-parser');
//
//
// /**
//  * The server.
//  *
//  * @class Server
//  */
// export class Server {
//
//     public app: express.Application;
//
//     /**
//      * Bootstrap the application.
//      *
//      * @class Server
//      * @method bootstrap
//      * @static
//      * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
//      */
//     public static bootstrap(): Server {
//         return new Server();
//     }
//
//     /**
//      * Constructor.
//      *
//      * @class Server
//      * @constructor
//      */
//     constructor() {
//         //create expressjs application
//         this.app = express();
//
//         //configure application
//         this.config();
//
//         //add routes
//         this.routes();
//
//         //add api
//         this.api();
//     }
//
//     /**
//      * Create REST API routes
//      *
//      * @class Server
//      * @method api
//      */
//     public api() {
//         //empty for now
//     }
//
//     /**
//      * Configure application
//      *
//      * @class Server
//      * @method config
//      */
//     public config() {
//         //add static paths
//         this.app.use(express.static(path.join(__dirname, "public")));
//
//         //configure handlebars
//         this.app.engine('hbs', handlebars({
//             extname: 'hbs',
//             defaultLayout: 'layout',
//             layoutsDir: __dirname + 'views/layouts/'
//         }));
//         this.app.set('views', path.join(__dirname, 'views'));
//         this.app.set('view engine', 'hbs');
//
//         //use logger middlware
//         this.app.use(logger("dev"));
//
//         //use json form parser middlware
//         this.app.use(bodyParser.json());
//
//         //use query string parser middlware
//         this.app.use(bodyParser.urlencoded({
//             extended: true
//         }));
//
//         //use cookie parser middleware
//         this.app.use(cookieParser("SECRET_GOES_HERE"));
//
//         //use override middlware
//         this.app.use(methodOverride());
//
//         //catch 404 and forward to error handler
//         this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
//             err.status = 404;
//             next(err);
//         });
//
//         //error handling
//         this.app.use(errorHandler());
//
//         this.app.listen(PORT, () => {
//             console.log('listening on port ' + PORT);
//         })
//
//     }
//
//     /**
//      * Create router
//      *
//      * @class Server
//      * @method api
//      */
//     public routes() {
//         //empty for now
//     }
// }
//# sourceMappingURL=server.js.map