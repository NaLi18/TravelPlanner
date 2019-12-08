const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors= require('cors')
app.use(cors())
var unirest = require('unirest')


const hotelsUrl= "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyCFCDqcWZryyPAnPa8h_cJVAWemz-kOhYo&query="

app.use(express.static(path.join(__dirname, 'dist', 'TravelPlanner')))

app.get('/hotel/:uid', (req, res) =>{
    const locat = req.params.uid
    request.get(hotelsUrl+"hotels+in+"+locat)
    .pipe(res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))