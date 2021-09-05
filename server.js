const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const app = express()
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abcd',
    database: 'articles'
}

//middleware
app.use(myconn(mysql, dbOptions, 'single'))

//routes
app.get('/', (req, res) =>{
    res.send('Welcome to my API')
})

app.get('/api', (req, res) =>{
    res.send('Testing my API')
})

//server running
app.listen(app.get('port'), () => {
    console.log('Server is running on port', app.get('port'))
})