var router = require('express').Router()
var Playlists = require('../models/playlist')

//GET ALL./models/playlists
router.get('/api/playlists', (req, res, next) => {
    Playlists.find({})
        .then(playlist => {
            res.status(200).send(songs)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

//GET BY ID
router.get('/api/playlists/:id', (req, res, next) => {
    Playlists.findById(req.params.id)
        .then(playlist => {
            res.status(200).send(playlist)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

// CREATE NEW PLAYLIST
router.post('/api/playlists', (req, res, next) => {
    Playlists.create(req.body). then(list=> {
        res.send(list)
    })
})


//HAS TO HAVE FULL PLAYLIST OBJECT (USED FOR PROMOTE/DEMOTE) REARRANGE ON FRONT END

router.post('/api/playlists/:listId', (req, res, next) => {
    Playlists.findByIdAndUpdate(req.params.listId, req.body).then(list=>{
        res.send(list)
    })
})

//ADDS SONG TO LIST BODY OF REQUEST MUST BE SONG OBJECT

router.put('/api/playlists/:listId/songs', (req, res, next) => {
    Playlists.findById(req.params.listId).then(list=>{
        list.songs.$addToSet(req.body)
        list.save()
            .then(()=>{
                res.send(list)
            })
    })
})

//DESTROY
router.delete('/api/playlists/:id', (req, res, next) => {
    Playlists.findByIdAndRemove(req.params.id)
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