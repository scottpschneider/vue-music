var express = require('express')
var bp = require ('body-parser')
var app = express()
var cors = require('cors')
var port = 4000

app.use(cors())

require('./server-assets/db/mlab-config')

//register middlewear
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

//routes
var playlists = require('./server-assets/routes/playlists')
app.use(playlists.router)

//register middlewear

app.listen(port, ()=>{
    console.log('server listening on port', port)
})