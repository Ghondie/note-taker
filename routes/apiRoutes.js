// gettin data from db.json
//updating db.json 
var db = require("../db/db.json")
var ids = db.map(obj => obj.id)

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(db)
    })
    app.post("/api/notes", function (req, res) {
        var newid = 1
        while (!ids.includes(newid)) {
            newid++
        }
        ids.push(newid)
        req.body.id = newid
        db.push(req.body)
        res.redirect("/notes")
    })
    app.delete("/api/notes/:id", function (req, res) {
        var id = req.params.id
        note.splice(req.perams.id, 1);
        db.push(req.body)
        res.redirect("/notes")

    })

}



