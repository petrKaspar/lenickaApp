import {Request, Response} from "express";

import messages = require('../db.json'); //load our local database file

export class Messages {

//----------------------------------------------------------
    public daysdifference(date1, date2) {
        // The number of milliseconds in one day
        var ONEDAY = 1000 * 60 * 60 * 24;
        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();
        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms);

        // Convert back to days and return
        return Math.round(difference_ms/ONEDAY);
    }
//----------------------------------------------------------

    public routes(app): void { //received the express instance from app.ts file         
        app.route('/')
        .get((req: Request, res: Response) => {
//----------------------------------------------------------
            let id = Math.floor(Math.random() * messages.array.length+1);   // random int  0 - length
//----------------------------------------------------------

            res.render('index', {
                title: messages.array[id].title,
                message: messages.array[id].message,
                days: this.daysdifference(new Date(2017,0,11), new Date())
            });
        });

        app.route('/:id')
        .get((req:Request, res: Response) => {
           let id = req.params.id;
            console.log(messages[id]);
            res.render('index', {
               title: messages[id].title,
               message: messages[id].message,
               days: this.daysdifference(new Date(2017,0,11), new Date())
           });
        });
    }
}
