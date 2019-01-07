const db = require("./models");

module.exports = {
    index: (req, res) => {
        res.send('NOT IMPLEMENTED: Site Home Page');
    },

    //Get all ToDo's
    getToDos: (req, res) => {
        db.ToDo.findAll({})
            .then(function(dbToDo){
                console.log("ToDo: ", dbToDo);
                res.json(dbToDo);
            })
    },

    makeToDo: (req, res) => {
        // console.log(req.body.text)
        db.ToDo.create({
            text: req.body.text, 
            completed: req.body.completed
        })
            .then(function(dbToDo){
                console.log("New ToDos...", dbToDo.text);

            })
    }


    
}