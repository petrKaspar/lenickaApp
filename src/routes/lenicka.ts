import {Request, Response} from "express";

import messages = require('../db.json'); //load our local database file

export class Messages { 
    
    public routes(app): void { //received the express instance from app.ts file         
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send(messages);
        });

	app.route('/:id')
	.get((req:Request, res: Response) => {
	   let id = req.params.id;
	   res.render('index', {
	       message: 'Ahoj svete!',
           text: messages[id],
           myCondition: true,
           anyArray: [1,2,3,4]
	   });
	});
    }
}
