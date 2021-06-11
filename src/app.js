const express = require('express');
const Action = require('./model/Action');
const Ticket = require('./model/Ticket');
const routes = require('./routes');

class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.router();
        this.inicio();
    }

    middlewares(){
        this.app.use(express.json());
    }

    router(){
        this.app.use(routes);
    }
    async inicio(){
        Action.drop();
        Ticket.sync({force:true}).then(()=>{
            Action.sync({force:true})
        });  
    }
}
module.exports = new App().app;