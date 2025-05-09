/**
 * @Description: 登录组件
 * @Version: 1.0.0
 * @Author: housc
 * @CreateTime: 2024-09-29 17:55
 * @LastEditors: housc
 */

const express = require('express')
const { addUserRole, queryUserRoles, updateUserRole, delUserRole } = require("../controllers/role")
const vertifyAuth = require('../utils/vertifyAuth')
const role = express.Router()

//用户查询
role.get('/addUserRole', vertifyAuth.verify, addUserRole)

role.get('/queryUserRoles', vertifyAuth.verify, queryUserRoles)

role.get('/updateUserRole', vertifyAuth.verify, updateUserRole)

role.get('/delUserRole', vertifyAuth.verify, delUserRole)

module.exports = role
