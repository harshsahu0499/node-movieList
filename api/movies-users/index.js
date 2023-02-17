const express = require('express');
const config =  require('./../config/db_config')
const app = express()
const movies = require('./route/movie')
const users = require('./route/user')
const cors = require("cors");

app.set('PORT',3001)
app.use(express.json());
app.use('/movies',movies);
app.use('/users',users);
app.use(express.urlencoded({ extended: true }))

app.listen(app.get('PORT'), ()=>{console.log("MOVIES API running on port: " + app.get('PORT'))});