require('dotenv').config()
const express = require('express')
const cors = require('cors');
const { yelpApi } = require('./plugins/yelp.js')

const app = express()
app.use(cors())

app.get('/yelp', (req, res) => {
  yelpApi.search({
    ...req.query,
    limit: '50'
  })
    .then(response => res.send(response.jsonBody.businesses))
    .catch(e => console.log(e))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Server running . . .')
})