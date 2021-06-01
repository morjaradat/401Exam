'use strict'
const Data = require('../model/apiModel')
const superagent = require('superagent')

const apiData = async (req, res) => {
    const url = 'https://psychonauts-api.herokuapp.com/api/characters?limit=9'
    superagent.get(url).then(item => {
        const apiData = item.body.map(i => new Data(i))
        // console.log(apiData)
        res.send(apiData)
    })

}

module.exports = apiData;