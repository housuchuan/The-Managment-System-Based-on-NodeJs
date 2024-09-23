/**
 * @Description: 注册组件
 * @Version: 1.0.0
 * @Author: housc
 * @CreateTime: 2023-07-11 15:30
 * @LastEditors: housc
 */

import {Button, Form, Input, message} from 'antd';
import styles from './index.module.scss';
import { user } from '@/api'

const Register = function ({onChange}){
   const [messageApi, context] = message.useMessage()

   // eslint-disable-next-line no-unused-vars
   const onFinish = ({confirmPassword, ...values}) => {
      user.registerSysUser(values).then(res=>{
         messageApi.success(res.message).then(() => {
            onChange('login')
         })
      })
   };

   return (<>{context}<Form name="register" initialValues={{remember: true}} onFinish={onFinish} autoComplete="off">
      <Form.Item label="用&nbsp;&nbsp;户&nbsp;名" name="userName" rules={[{required: true, message: '请输入用户名!'}, { pattern: /^[a-zA-Z]([a-zA-Z0-9]|[._]){4,19}$/, message: '请输入正确的用户名!' }]}>
         <Input />
      </Form.Item>
      <Form.Item label="密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码" name="passWord" rules={[{required: true, message: '请输入登录密码!'}, { pattern: /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/, message: '密码强度不符合规范，请重新输入!' }]}>
         <Input.Password />
      </Form.Item>
      <Form.Item label="确认密码" name="confirmPassword" dependencies={['passWord']} hasFeedback rules={[{required: true, message: '请再次输入登录密码!'}, ({ getFieldValue }) => ({
         validator(_, value) {
            if (!value || getFieldValue('passWord') === value) {
               return Promise.resolve();
            }
            return Promise.reject(new Error('您输入的新密码不匹配!'));
         },
      })]}>
         <Input.Password />
      </Form.Item>
      <Button className={styles.submit} type="primary" htmlType="submit" block>注 册</Button>
   </Form></>)
}

export default Register
