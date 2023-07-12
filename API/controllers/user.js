const bcrypt = require('bcryptjs')
const sql = require('../db')

//新增用户
const insertUser = async (req,res) => {
    const {userName = '' ,passWord = '' , nickName = '', sex = 0, mobile = '', email = '', authorities = ''} = req.body,
        $sql = "INSERT INTO users(userName,passWord,nickName,sex,mobile,email,authorities) VALUES (?)",
        salt = bcrypt.genSaltSync(10),
        hashPWD = bcrypt.hashSync(passWord, salt),
        $values = [userName,hashPWD,nickName,sex,mobile,email,authorities]
    try {
        let user = await QueryUserForName(userName)
        if(user.length > 0){
            res.json({
                status: 2001,
                message: '抱歉，该用户名已存在无法新增'
            })
        }else{
            sql?.query($sql,[$values],(error)=>{
                if(error) {
                    res.status(201).json(error)
                }else{
                    res.json({
                        status: 200,
                        message: '用户信息新增成功',
                        data: []
                    })
                }
            })
        }
    }catch (error) {
        res.status(201).json(error)
    }
}

//删除用户
const deleteUser = (req,res) => {
    const {id = ''} = req.body,
        $sql = "DELETE FROM users WHERE id = ?"
    sql?.query($sql,[id],(error)=>{
        if(error){
            res.status(201).json(error)
        }else{
            res.json({
                status: 200,
                message: '用户删除成功',
                data: []
            })
        }
    })
}

//更新用户
const updateUser = (req,res) => {
    const {userName = '' ,passWord = '' , nickName = '', sex = 0, mobile = '', email = '', authorities = '', id = ''} = req.body;
    let $sql = "",
        $values = [];
        if(passWord){
            const salt = bcrypt.genSaltSync(10),
                hashPWD = bcrypt.hashSync(passWord, salt)
            $sql = "UPDATE users SET userName = ?,passWord = ?,nickName = ?,sex = ?,mobile = ?,email = ?,authorities = ? WHERE id = ?"
            $values = [userName,hashPWD,nickName,sex,mobile,email,authorities,id]
        }else{
            $sql = "UPDATE users SET userName = ?,nickName = ?,sex = ?,mobile = ?,email = ?,authorities = ? WHERE id = ?"
            $values = [userName,nickName,sex,mobile,email,authorities,id]
        }
        sql?.query($sql,$values,(error)=>{
            if(error) {
                res.status(201).json(error)
            }else{
                res.json({
                    status: 200,
                    message: '用户信息修改成功',
                    data: []
                })
            }
        })
}

//用户查询
async function QueryUserForName(userName = ''){
    return new Promise((resolve, reject) => {
        const q = 'SELECT * FROM users WHERE userName = ?';
        sql?.query(q,[userName],(error, results) => {
            if(error){
                reject(error)
            }else{
                resolve(results)
            }
        })
    })
}


const queryUser = (req,res) => {
    const { keyword = '' } = req.query || {}
    const q = 'SELECT * FROM users WHERE userName LIKE ?';
    sql?.query(q,[`%${keyword}%`],(error, results) => {
        if(error) return res.status(201).json(error)
        res.status(200).json({
            status: 200,
            message: '查询成功',
            data: results.map(({id = '',authorities = 0,email = '',mobile = '',nickName ='',sex = 0,userName = ''})=>({
                id,authorities,email,mobile,nickName,sex,userName
            }))
        })
    })
}

module.exports = { insertUser , deleteUser , updateUser , queryUser }
