/**
 * @Description: 系统首页
 * @Version: 1.0.0
 * @Author: housc
 * @CreateTime: 2023-07-11 15:30
 * @LastEditors: housc
 */

import { Tabs } from 'antd';
import { useContext,useState } from 'react';
import { ThemeContext } from '@/utils/themeContext'
import Login from './components/Login'
import Register from './components/Register'
import CopyRight from '@/components/CopyRight';
import styles from './index.module.scss';

const index = () => {
   const theme = useContext(ThemeContext)
   console.log(theme)
   const [activeKey, setActiveKey] = useState('login')

   const tabs = [
      {
         key: 'login',
         label: '密码登录',
         children: <Login forgetPw={setActiveKey} />,
      },
      {
         key: 'register',
         label: '账号注册',
         children: <Register />,
      }
   ]

   return (
      <div className={styles.container}>
         <div className={styles.wrapper}>
            <div className={styles.content}>
               <h4 className={styles.title}>H&D Design</h4>
               <Tabs activeKey={activeKey} centered tabBarGutter={100} items={tabs} onChange={label=>setActiveKey(label)} />
            </div>
            <CopyRight />
            <ThemeContext.Consumer>
               {
                  (theme)=>{
                     console.log(theme)
                  }
               }
            </ThemeContext.Consumer>
         </div>
      </div>
   )
}
export default index
