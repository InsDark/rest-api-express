const express = require('express')
require('dotenv').config()
const cors = require('cors')
class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users';
        //Middleware 
        this.middlewares()

        //Web Routes
        this.routes()
    }

    middlewares() {
        this.app.use(express.static('public'))

        this.app.use(cors())

        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
    }
    listen() {
        this.app.listen(this.port, ()=> {
            console.log('The server is listening on port ' + this.port)
        })
    }
}


module.exports = Server