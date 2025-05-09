/**
 * @Description: control层_负责处理参数及返回】
 * @Version: 1.0.0
 * @Author: hsc
 * @CreateTime: 2024-03-13 11:24
 * @LastEditors: hsc
 */

const userService = require('../services/role')

//新增角色
const addUserRole = async (req,res) => {
    let data = req.body
    const {name = '' ,desc = '', code = ''} = data;
    try {
        if(!name || !desc || !code){
            res.json({
                status: 201,
                message: '缺少必填信息，请填写完整后提交',
                data: ''
            })
        }else{
            let result = await userService.addUserRole(data)
            res.json({
                status: 200,
                message: '角色新增成功',
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
const delUserRole = async (req,res) => {
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
const updateUserRole = async (req,res) => {
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
const queryUserRoles = async ({query, uuid = ''},res) => {
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

module.exports = { addUserRole , queryUserRoles , updateUserRole , delUserRole }

