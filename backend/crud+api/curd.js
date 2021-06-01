'use strict'

const charactersModel = require('../model/mongoSchema')

const getFunction = (req, res) => {
  charactersModel.find({}, (error, data) => {
    if (error) {
      console.log('===============')
      console.log(error)
      console.log('==================')
    } else {
      res.send(data)
    }
  })
};
const postFunction = (req, res) => {
  const { name, img, gender, powerAraay } = req.body;
  const slug = name.split(' ').join('-');
  charactersModel.find({ slug: slug }, (error, data) => {
    if (data.length > 0) {
      res.send('data already exsit');
    } else {
      // console.log(powerAraay)
      const newFav = new charactersModel({
        name: name,
        slug: slug,
        img: img,
        gender: gender,
        psiPowers:
          (powerAraay.map(i => {
            console.log('in map')
            return (
              {
                img: i.img,
                name: i.name
              }
            )
          }))

      })
      newFav.save()
      res.send('character added')
    }
  })
}

const updateFunction = (req, res) => {
  const slug = req.params.slug;
  const { name, gender } = req.body;
  const newSlug = name.split(' ').join('-')
  charactersModel.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      data[0].name = name
      data[0].gender = gender
      data[0].slug = newSlug
      data[0].save()
      res.send('updated')
    }
  })
}

const deleteFunction = (req, res) => {
  const slug = req.params.slug;
  charactersModel.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      res.send('deleted')
    }
  })
}

module.exports = {
  getFunction,
  postFunction,
  updateFunction,
  deleteFunction,
}