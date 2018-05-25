var router = require('express').Router()
var Musics = require('../models/song')

//GET ALL
router.get('/api/musics', (req, res, next) => {
    Musics.find({})
        .then(musics => {
            res.status(200).send(songs)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

//GET BY ID
router.get('/api/musics/:id', (req, res, next) => {
    Musics.findById(req.params.id)
        .then(music => {
            res.status(200).send(music)
            // should this musid parameter be one of my models?
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

//ADD
router.post('/api/musics', (req, res, next) => {
    var ship = req.body
    Musics.create(music)
        .then(newMusic => {
            res.status(200).send(newMusic)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

//EDIT
router.put('/api/musics/:id', (req, res, next) => {
    Musics.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(music => {
            res.status(200).send({ message: "Successfully Updated", music })
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

//DESTROY
router.delete('/api/musics/:id', (req, res, next) => {
    Musics.findByIdAndRemove(req.params.id)
        .then(data => {
            res.send("Successfully Deleted Song")
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

module.exports = {
    router
}