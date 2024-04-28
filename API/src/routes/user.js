const express = require('express')
const { addSysUser, querySysUsers, editSysUser, removeSysUser, sysUserLogin } = require("../controllers/user")
const vertifyAuth = require('../utils/vertifyAuth')

const user = express.Router()

//新增用户
user.post('/addSysUser', vertifyAuth.verify, addSysUser)

//删除用户
user.post('/removeSysUser', vertifyAuth.verify, removeSysUser)

//更新用户
user.post('/editSysUser', vertifyAuth.verify, editSysUser)

//用户查询
user.get('/querySysUsers', vertifyAuth.verify, querySysUsers)

//用户登录
user.post('/sysUserLogin',sysUserLogin)

module.exports = user
