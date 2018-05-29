let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
var schemaName ='playlist'

var songSchema = new Schema({
    title: {type: String, required: true},
    albumArt: {type: String, required: true},
    artist: {type: String, required: true},
    album: {type: String, required: true},
    preview: {type: String, required: true},
    price: {type: String, required: true}    
})

var playlist = new Schema({
    title: (type: String, required: true),
    songs: [songSchema] 
})

// let songSchema = new Schema({
//     songs: {type: String, required: true},
//     title: {type: String, required: true},
//     albumArt: {type: String, required: true},
//     artist: {type: String, required: true},
//     //collection: {type: String, required: false}
// })

// let playlistSchema = new Schema({
//     title: {type: String, required: true},
//     songs: [songSchema]
// })

// playlistSchema.pre('save', function(next){
//     this.markModified('songs')
//     next()
// })

playlist.pre('save', (next)=>{
    this.markModified('songs')
    next()
})

module.exports = mongoose.model(schemaName, playlist)


