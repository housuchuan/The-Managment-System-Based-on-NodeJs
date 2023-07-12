/**
 * @Description: 登录组件
 * @Version: 1.0.0
 * @Author: housc
 * @CreateTime: 2023-07-11 15:30
 * @LastEditors: housc
 */

import PropTypes from 'prop-types';
import {Button, Form, Input} from 'antd';
import styles from './index.module.scss';

const Login = function (props){
   const onFinish = (values) => {
      console.log('Success:', values);
   };

   return <Form name="login" initialValues={{remember: true}} onFinish={onFinish} autoComplete="off">
      <Form.Item label="用户名" name="userName" rules={[{required: true, message: '请输入用户名!'}]}>
         <Input />
      </Form.Item>
      <Form.Item label="密&nbsp;&nbsp;&nbsp;&nbsp;码" name="password" rules={[{required: true, message: '请输入登录密码!'}]}>
         <Input.Password />
      </Form.Item>
      <div className={styles.forget} onClick={()=>props.forgetPw('register')}>忘记密码&nbsp;?</div>
      <Button className={styles.submit} type="primary" htmlType="submit" block>登录</Button>
   </Form>
}

Login.propTypes = {
   forgetPw: PropTypes.func
}

export default Login
