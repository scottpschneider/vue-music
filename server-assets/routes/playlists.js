var router = require('express').Router()
var Playlist = require('../models/playlist')

//GET ALL./models/playlists
router.get('/api/playlists', (req, res, next) => {
    Playlist.find({})
        .then(playlist => {
            res.status(200).send(songs)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})
//Mark did get and get by id on same function
//router.get('/api/playlists/:id?', (req, res, next) =>{
//     if(req.params.id){
//         Playlist.findById(req.params.id)
//         .then(playlist=>{
//             return res.send(playlist)
//         })
//         catch(err=>{
//             return res.status(404).send({'error': 'No playlist at that Id'})
//         })
//     }
// }
//     Playlist.find({})


//GET BY ID
router.get('/api/playlists/:id?', (req, res, next) => {
    Playlist.findById(req.params.id)
        .then(playlist => {
            res.status(200).send(playlist)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})

// CREATE NEW PLAYLIST
router.post('/api/playlists', (req, res, next) => {
    Playlist.create(req.body). then(newPlaylist=> {
       return res.send(newPlaylist)
    })
    .catch(err=>{
        return res.status(400).send(err)
    })
})

//HAS TO HAVE FULL PLAYLIST OBJECT (USED FOR PROMOTE/DEMOTE) REARRANGE ON FRONT END

router.post('/api/playlists/:listId', (req, res, next) => {
    Playlists.findByIdAndUpdate(req.params.listId, req.body, {new:true}).then(playlist=>{
        res.send(playlist)
    })
    catch(err=>{
        res.status(400).send(err)
    })
})

//ADDS SONG TO LIST BODY OF REQUEST MUST BE SONG OBJECT

router.put('/api/playlists/:Id/songs', (req, res, next) => {
    Playlists.findById(req.params.listId).then(playlist=>{
        playlist.songs.$addToSet(req.body)
        playlist.save()
            .then(()=>{
                res.send(playlist)
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