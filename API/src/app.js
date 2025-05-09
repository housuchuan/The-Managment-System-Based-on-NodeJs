const express = require("express"),
    cors = require('cors'),
    app = express(),
    PORT = process.env.PORT || 3000,
    user = require('./routes/user'),
    role = require('./routes/role');

// 处理cors
app.use(cors({
    origin: 'http://120.27.145.235',
    port: '3001',
    optionsSuccessStatus: 200
}))
/**
 * 解析body参数
 * body (raw)
 * content-type (application/json)
 */
app.use(express.json())
/**
 * body (x-www-form-urlencoded)
 */
// app.use(express.urlencoded({ extended: false }))

//注册用户路由
app.use('/user',user)
app.use('/role',role)

app.listen(PORT,err=>{
    if(err) console.log(err)
    console.log(`Server is running on http://localhost:${PORT}`);
})
