const express = require('express')
const { addSysUser, querySysUsers, editSysUser, removeSysUser, sysUserLogin } = require("../controllers/user")

const user = express.Router()

//新增用户
user.post('/addSysUser',addSysUser)

//删除用户
user.post('/removeSysUser',removeSysUser)

//更新用户
user.post('/editSysUser',editSysUser)

//用户查询
user.get('/querySysUsers',querySysUsers)

//用户登录
user.post('/sysUserLogin',sysUserLogin)

module.exports = user
