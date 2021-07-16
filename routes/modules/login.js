const express = require('express')
const router = express.Router()

const User = require('../../models/user')

router.get('/', (req, res) => {
  res.redirect('/login')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  return User.findOne({email: email})
    .lean()
    .then((user) => {
      if (!user) {
        const message = "該email尚未註冊"
        return res.render('login', { message })
      }
      else if (user.password !== password) {
        const message = "輸入的密碼有誤"
        return res.render('login', { message })
      }
      return res.redirect(`/welcome/${user._id}`)
    })
})

router.get('/welcome/:id', (req, res) => {
  const id = req.params.id
  return User.findById(id)
    .lean()
    .then( (user) => {
      res.render('welcome', { name: user.firstName})
    })
})

module.exports = router