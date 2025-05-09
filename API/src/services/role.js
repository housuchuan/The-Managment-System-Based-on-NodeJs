/**
 * @Description: service层_负责业务逻辑】
 * @Version: 1.0.0
 * @Author: hsc
 * @CreateTime: 2024-03-13 11:24
 * @LastEditors: hsc
 */

const userModel = require('../models/role')


const addUserRole = async ($values) => {
    try{
        const {name = '' ,desc = '' , remark = '', code} = $values;
        $values = [name,desc,remark,code];
        let users = await userModel.queryUserWithName(userName)
        if(users.length > 0){
            return Promise.reject({
                status: 201,
                message: '抱歉，该角色名及角色编码已存在暂无法新增',
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
const querySysUsers = async (keyword, uuid) => {
    try{
        let result = await userModel.querySysUsers(keyword, uuid)
        return result.map(({id = '',authorities = 0,email = '',mobile = '',nickName ='',sex = 0,userName = ''})=>({
            id,authorities,email,mobile,nickName,sex,userName
        }))
    }catch (e) {
        return Promise.reject(e)
    }
}

module.exports = {
    addUserRole,
    removeSysUser,
    editSysUser,
    querySysUsers
}
