const express = require('express')
const { insertUser, queryUser, updateUser, deleteUser } = require("../controllers/user")

const user = express.Router()

//新增用户
user.post('/addUser',insertUser)

//删除用户
user.post('/removeUser',deleteUser)

//更新用户
user.post('/editUser',updateUser)

//用户查询
user.get('/queryUsers',queryUser)

module.exports = user
