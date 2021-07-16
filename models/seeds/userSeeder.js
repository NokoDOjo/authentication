const User = require('../user')
const db = require('../../config/mongoose')

const userList = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

// 連線成功
// 載入餐廳資料
db.once('open', () => {
  for (let i = 0; i < userList.length; i++) {
    User.create({
      ...userList[i]
    })
  }
  console.log('mongodb connected! User data done !!')
})


