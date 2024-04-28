/**
 * @Description: 用户鉴权相关
 * @Version: 1.0.0
 * @Author: housc
 * @CreateTime: 2024-04-28 14:06
 * @LastEditors: housc
 */
const jwt= require('jsonwebtoken')
const config = require('../consts/index')

// 签名生成
const sigh = (data = {}) => {
    return jwt.sign(data, config.JWT_SECRET_KEY, {
        expiresIn: 60 * 60
    })
}

// 签名校验
const verify = (req, res, next) => {
    let authorization = req.headers?.authorization || req.body.token || req.query.token || '';
    let token = '';
    if (authorization.includes('Bearer')) {
        token = authorization.replace('Bearer ', '');
    } else {
        token = authorization;
    }
    jwt.verify(token, config.JWT_SECRET_KEY, (error, data) => {
        if (error) {
            res.status(202).json({
                status: 202,
                message: '请先登录',
                data: ''
            });
        } else {
            req.uuid = data.uuid;
            next();
        }
    });
};

module.exports = {
    sigh,
    verify
}
