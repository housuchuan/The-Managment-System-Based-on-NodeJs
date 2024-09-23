/**
 * @Description: control层_负责处理参数及返回】
 * @Version: 1.0.0
 * @Author: hsc
 * @CreateTime: 2024-03-13 11:24
 * @LastEditors: hsc
 */

const userService = require('../services/user')

//新增用户
const addSysUser = async (req,res) => {
    let data = req.body
    const {userName = '' ,passWord = ''} = data;
    try {
        if(!userName || !passWord){
            res.json({
                status: 201,
                message: '用户名或密码缺失，请确认后新增',
                data: ''
            })
        }else{
            let result = await userService.addSysUser(data)
            res.json({
                status: 200,
                message: '用户信息新增成功',
                data: result
            })
        }
    }catch (e) {
        res.json({
            status: 203,
            message: e.toString(),
            data: ''
        })
    }
}

//删除用户
const removeSysUser = async (req,res) => {
    const {id = ''} = req.body;
    try{
        let result = await userService.removeSysUser(id)
        res.json({
            status: 200,
            message: '用户删除成功',
            data: result
        })
    }catch (e) {
        res.json({
            status: 203,
            message: e.toString(),
            data: ''
        })
    }
}

//更新用户
const editSysUser = async (req,res) => {
    try {
        let result = await userService.editSysUser(req.body)
        res.json({
            status: 200,
            message: '用户信息修改成功',
            data: result
        })
    }catch (e) {
        res.json({
            status: 203,
            message: e.toString(),
            data: ''
        })
    }
}

// 模糊查询用户
const querySysUsers = async ({query, uuid = ''},res) => {
    try{
        const { keyword = ''} = query || {}
        let results = await userService.querySysUsers(keyword, uuid)
        return res.json({
            status: 200,
            message: '查询成功',
            data: results
        })
    }catch (e) {
        res.json({
            status: 203,
            message: e.toString(),
            data: ''
        })
    }
}

// 用户登录
const sysUserLogin = async (req,res) => {
    try {
        const {userName = '', password = ''} = req.body
        if(!userName || !password){
            res.json({
                status: 201,
                message: '请填写用户名或密码',
                data: ''
            })
        }else{
            let results = await userService.sysUserLogin(req.body)
            res.json({
                status: 200,
                message: '登录成功',
                data: results
            })
        }
    }catch (e) {
        res.json({
            status: 203,
            message: e.toString(),
            data: ''
        })
    }

}

// 用户注册
const registerSysUser = async (req,res) => {
    let data = req.body
    const {userName = '' ,passWord = ''} = data;
    try {
        if(!userName || !passWord){
            res.json({
                status: 201,
                message: '用户名或密码缺失，请确认后新增',
                data: ''
            })
        }else{
            let result = await userService.addSysUser(data)
            res.json({
                status: 200,
                message: '用户信息新增成功，请前往登录',
                data: result
            })
        }
    }catch (e) {
        res.json({
            status: 203,
            message: e.toString(),
            data: ''
        })
    }
}

module.exports = { addSysUser , removeSysUser , editSysUser , querySysUsers, sysUserLogin, registerSysUser }

