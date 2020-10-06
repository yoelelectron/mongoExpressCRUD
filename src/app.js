const path = require('path')
const express = require('express')
const logger = require('morgan')
const bParser = require('body-parser')
const app = express()
const indexRoutes = require('./routes/index')


//Settings
app.set('port', process.env.PORT || 3693)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')




// Middlewares
app.use(logger('dev'))
app.use(bParser.urlencoded({extended: false}))


//Routes

app.use('/', indexRoutes)




app.listen(app.get('port'), () => {
    console.log('server on port' , app.get('port'))
})