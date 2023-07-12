/**
 * @Description: 系统首页
 * @Version: 1.0.0
 * @Author: housc
 * @CreateTime: 2023-07-11 15:30
 * @LastEditors: housc
 */

import { Tabs } from 'antd';
import Login from './components/Login'
import Register from './components/Register'
import styles from './index.module.scss';

const index = () => {
   const tabs = [
      {
         key: 'login',
         label: '密码登录',
         children: <Login />,
      },
      {
         key: 'register',
         label: '账号注册',
         children: <Register />,
      }
   ]

   const onChange = (label) => {
      console.log(label);
   };

   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <h4 className={styles.title}>H&D Design</h4>
            <Tabs defaultActiveKey="login" centered tabBarGutter={100} items={tabs} onChange={onChange} />
         </div>
      </div>
   )
}
export default index
