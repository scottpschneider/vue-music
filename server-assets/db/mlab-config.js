var mongoose = require('mongoose')
var connectionString = 'mongodb://student:student@ds233500.mlab.com:33500/schneidervuemusic2018'
var connection = mongoose.connection

mongoose.connect(connectionString)

connection.on('error', err=>{
    console.log('error from database:', err)
})

connection.once('open',()=>{
    console.log('Connected to Database')
})