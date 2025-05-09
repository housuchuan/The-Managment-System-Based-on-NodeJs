/**
 * @Description: service层_负责链接数据库并返回数据】
 * @Version: 1.0.0
 * @Author: hsc
 * @CreateTime: 2024-03-13 11:24
 * @LastEditors: hsc
 */
const sql = require('../db')

// 系统新增用户
const addSysUser = ($values) => {
    return new Promise((resolve, reject) => {
        const $sql = "INSERT INTO users(userName,passWord,nickName,sex,mobile,email,authorities,uuid) VALUES (?,UUID())"
        sql?.query($sql,[$values],(error)=>{
            if(error) {
                reject(error)
            }else{
                resolve([])
            }
        })
    })
}

// 根据用户名查询用户
const queryUserWithName = (userName) => {
    return new Promise((resolve, reject) => {
        const $sql = 'SELECT * FROM users WHERE userName = ?';
        sql?.query($sql,[userName],(error, results) => {
            if(error){
                reject(error)
            }else{
                resolve(results)
            }
        })
    })
}

//删除用户
const removeSysUser = (id) => {
    return new Promise((resolve, reject) => {
        const $sql = "DELETE FROM users WHERE id = ?"
        sql?.query($sql,[id],(error)=>{
            if(error){
                reject(error)
            }else{
                resolve([])
            }
        })
    })
}

//更新用户
const editSysUser = (values) => {
    return new Promise((resolve, reject) => {
        let {userName = '' ,passWord = '' , nickName = '', sex = 0, mobile = '', email = '', authorities = '', id = ''} = values,
            $sql = '',
            $values = []
        if(passWord !== ''){
            $sql = "UPDATE users SET userName = ?,passWord = ?,nickName = ?,sex = ?,mobile = ?,email = ?,authorities = ? WHERE id = ?"
            $values = [userName,passWord,nickName,sex,mobile,email,authorities,id]
        }else{
            $sql = "UPDATE users SET userName = ?,nickName = ?,sex = ?,mobile = ?,email = ?,authorities = ? WHERE id = ?"
            $values = [userName,nickName,sex,mobile,email,authorities,id]
        }
        sql?.query($sql,$values,(error)=>{
            if(error) {
                reject(error)
            }else{
                resolve([])
            }
        })
    })
}

// 模糊查询用户
const querySysUsers = async (keyword, uuid) => {
    return new Promise((resolve, reject) => {
        sql?.query('select authorities from users where uuid = ?', [uuid], (e, res)=> {
            if(e) {
                reject(e)
            }else{
                let authorities = res[0].authorities
                const $sql = 'SELECT * FROM users WHERE userName LIKE ? AND authorities <= ?';
                sql?.query($sql,[`%${keyword}%`, authorities <= 1 ? 1 : authorities],(error, results) => {
                    if(error) {
                        reject(error)
                    }else{
                        resolve(results)
                    }
                })
            }
        })
    })
}

module.exports = {
    addSysUser,
    queryUserWithName,
    removeSysUser,
    editSysUser,
    querySysUsers
}
