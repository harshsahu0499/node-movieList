const express = require('express');
const app = express()
const routes = require('./route/rating')
const cors = require("cors");

app.set('PORT',3002)
app.use(express.json());
app.use('/rating',routes);
app.use(express.urlencoded({ extended: true }))

app.listen(app.get('PORT'), ()=>{console.log("RATING API running on port: " + app.get('PORT'))});