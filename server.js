const express = require('express')
const next = require('next')
const sequelize = require('sequelize')

const PORT = process.env.PORT || 3001;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config

const db = require("./models")
const routes = require("./routes/routes")

nextApp.prepare().then(() => {

    // express code here
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use( routes)

    app.get('*', (req, res) => {
        return handle(req, res) // for all the react stuff
    })

    db.sequelize.sync().then(function(){
        app.listen(PORT, err => {
            if (err) throw err;
            console.log(`ready at http://localhost:${PORT}`)
        })    
    })

});
