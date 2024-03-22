/**
 * @Description: service层_负责业务逻辑】
 * @Version: 1.0.0
 * @Author: hsc
 * @CreateTime: 2024-03-13 11:24
 * @LastEditors: hsc
 */

const bcrypt = require('bcryptjs')
const userModel = require('../models/user')


const addSysUser = async ($values) => {
    try{
        const {userName = '' ,passWord = '' , nickName = '', sex = 0, mobile = '', email = '', authorities = ''} = $values;
        let salt = bcrypt.genSaltSync(10);
        let hashPWD = bcrypt.hashSync(passWord, salt);
        $values = [userName,hashPWD,nickName,sex,mobile,email,authorities];
        let users = await userModel.queryUserWithName(userName)
        if(users.length > 0){
            return Promise.reject({
                status: 201,
                message: '抱歉，该用户名已存在无法新增',
                data: ''
            })
        }else{
            return await userModel.addSysUser($values)
        }
    }catch (e) {
        return Promise.reject(e)
    }
}

//删除用户
const removeSysUser = async (id) => {
    try{
        return await userModel.removeSysUser(id)
    }catch (e) {
        return Promise.reject(e)
    }
}

//更新用户
const editSysUser = async (values) => {
    try {
        const {passWord = '' } = values;
        let hashPWD = '';
        if(passWord){
            const salt = bcrypt.genSaltSync(10);
            hashPWD = bcrypt.hashSync(passWord, salt)
        }
        return await userModel.editSysUser({
            ...values,
            passWord: hashPWD || passWord
        })
    }catch (e) {
        return Promise.reject(e)
    }
}

// 模糊查询用户
const querySysUsers = async (keyword) => {
    try{
        let result = await userModel.querySysUsers(keyword)
        return result.map(({id = '',authorities = 0,email = '',mobile = '',nickName ='',sex = 0,userName = ''})=>({
            id,authorities,email,mobile,nickName,sex,userName
        }))
    }catch (e) {
        return Promise.reject(e)
    }
}

// 用户登录
const sysUserLogin = async () => {

}

module.exports = {
    addSysUser,
    removeSysUser,
    editSysUser,
    querySysUsers,
    sysUserLogin
}
