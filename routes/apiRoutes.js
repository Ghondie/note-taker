// gettin data from db.json
//updating db.json 
var db = require("../db/db.json")
var ids = db.map(obj => obj.id)
const fs = require("fs")

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(db)
    })
    app.post("/api/notes", function (req, res) {
        var newid = 1
        while (ids.includes(newid)) {
            newid++
        }

        ids.push(newid)
        req.body.id = newid
        db.push(req.body)
        const data = JSON.stringify(db)
        fs.writeFile('./db/db.json', data, function (err) {
            if (err) throw err;
            console.log('saved')
            res.redirect("/notes")
        })
    })
    app.delete("/api/notes/:id", function (req, res) {
        var id = req.params.id
        db = db.filter(obj => obj.id != id);
        const data = JSON.stringify(db);
        fs.writeFile('./db/db.json', data, function (err) {
            if (err) throw err;
            console.log('saved')
            res.json("deleted")
        })
    })

}



