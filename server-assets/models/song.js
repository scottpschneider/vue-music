var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = 'Song'

var schema = new Schema({
    songName: {
    title: {type: String, required: true},
    albumArt: {type: String, required: true},
    artist: {type: String, required: true},
    collection: {type: String, required: false}
    }

})

module.exports = mongoose.model(schemaName, schema)