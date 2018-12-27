"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser"); //used to parse the form data that you pass in the request
const lenicka_1 = require("./routes/lenicka");
const path = require("path");
const handlebars = require('express-handlebars');
class App {
    constructor() {
        this.lenickaRoutes = new lenicka_1.Messages();
        this.app = express(); //run the express instance and store in app
        this.config();
        this.lenickaRoutes.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));
        // set public folder
        console.log(path.join(__dirname, 'public'));
        this.app.use(express.static(path.join(__dirname, 'public/startbootstrap-stylish-portfolio/')));
        this.app.use('/bootstrap', express.static(path.join(__dirname, 'public/startbootstrap-stylish-portfolio/node_modules/bootstrap/dist/css/')));
        //configure handlebars
        this.app.engine('hbs', handlebars({
            extname: 'hbs',
            defaultLayout: 'layout',
            layoutsDir: __dirname + '/views/layouts/'
        }));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'hbs');
    }
}
exports.default = new App().app;
