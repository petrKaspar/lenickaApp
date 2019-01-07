"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages = require("../db.json"); //load our local database file
class Messages {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send(messages);
        });
        app.route('/:id')
            .get((req, res) => {
            let id = req.params.id;
            res.render('index', {
                message: 'Ahoj svete!',
                text: messages[id],
                myCondition: true,
                anyArray: [1, 2, 3, 4]
            });
        });
    }
}
exports.Messages = Messages;
//# sourceMappingURL=lenicka.js.map