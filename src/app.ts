import * as express from 'express';
import * as bodyParser from 'body-parser'; //used to parse the form data that you pass in the request
import { Messages } from "./routes/lenicka";
import * as path from "path";
const handlebars = require('express-handlebars');

class App {

    public app: express.Application;
    public lenickaRoutes: Messages = new Messages();

    constructor() {
        this.app = express(); //run the express instance and store in app
        this.config();
	    this.lenickaRoutes.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));

        // set public folder
        console.log(path.join(__dirname, '../public'));
        this.app.use(express.static(path.join(__dirname, '../public')));
        // this.app.use('/bootstrap',express.static(path.join(__dirname, 'public/startbootstrap-stylish-portfolio/node_modules/bootstrap/dist/css/')));

        //configure handlebars
        this.app.engine('hbs', handlebars({
            extname: 'hbs',
            defaultLayout: 'layout',
            layoutsDir: __dirname + '/../views/layouts/'
        }));
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'hbs');
    }

}

export default new App().app;
