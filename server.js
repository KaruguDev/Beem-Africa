const express = require('express')
const _ = require('lodash')
const url = require('url')
const {getData} = require('./scraper')

const app = express()

const dataURL = 'https://www.mcc-mnc.com/'

app.get('/', async (req, res) => {
    //get filters
    let filters = url.parse(req.url, true).query

    //get  data
    let data = await getData(dataURL, filters)
    data = _.map(data, _.partialRight(_.pick, ['Network', 'Country']))
    res.send(data)
})

app.get('/networks', async (req, res) => {
    //get filters
    let filters = url.parse(req.url, true).query

    //get  data
    let data = await getData(dataURL, filters)
    data = _.map(data, _.partialRight(_.pick, ['Network']))
    res.send(data)
})

//Express running
app.listen(3000, () => {
    console.log(`server running on port 3000`)
  })
  
module.exports = {app}