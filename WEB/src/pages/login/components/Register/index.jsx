/**
 * @Description: 注册组件
 * @Version: 1.0.0
 * @Author: housc
 * @CreateTime: 2023-07-11 15:30
 * @LastEditors: housc
 */

import {Button, Form, Input} from 'antd';
import styles from './index.module.scss';

const Register = function (){
   const onFinish = (values) => {
      console.log('Success:', values);
   };
   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   return <Form name="register" initialValues={{remember: true}} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item label="用&nbsp;&nbsp;户&nbsp;名" name="userName" rules={[{required: true, message: '请输入用户名!'}]}>
         <Input />
      </Form.Item>
      <Form.Item label="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码" name="password" rules={[{required: true, message: '请输入登录密码!'}]}>
         <Input.Password />
      </Form.Item>
      <Form.Item label="确认密码" name="confirmPassword" rules={[{required: true, message: '请再次输入登录密码!'}]}>
         <Input.Password />
      </Form.Item>
      <Button className={styles.submit} type="primary" htmlType="submit" block>注 册</Button>
   </Form>
}

export default Register
