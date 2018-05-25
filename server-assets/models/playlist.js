let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schemaName = 'Playlist'

let songSchema = new Schema({
    songName: {type: String, required: true},
    title: {type: String, required: true},
    albumArt: {type: String, required: true},
    artist: {type: String, required: true},
    //collection: {type: String, required: false}
})

let playlistSchema = new Schema({
    title: {type: String, required: true},
    songs: [songSchema]
})

playlistSchema.pre('save', function(next){
    this.markModified('songs')
    next()
})

module.exports = mongoose.model(schemaName, playlistSchema)


