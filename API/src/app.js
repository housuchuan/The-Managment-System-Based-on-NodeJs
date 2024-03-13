const express = require("express"),
    app = express(),
    PORT = process.env.PORT || 3000,
    user = require('./routes/user');

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

app.listen(PORT,err=>{
    if(err) console.log(err)
    console.log(`Server is running on http://localhost:${PORT}`);
})
