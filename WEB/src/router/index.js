/**
 * @name: 路由配置表
 * @desc: 路由配置信息列表
 */
import { Redirect } from 'react-router-dom'

import App from '@/App'
import Container from '@/components/Container'

import analysis from './analysis'
import home from './home'
import login from './login'
import members from './members'
import salary from './salary'

import error from '@/pages/error/404'

const routes = [{
   component: App,
   routes: [
      ...login,
      {
         path: '/menu',
         name: '菜单',
         component: Container,
         routes: [
            {
               path: '/menu',
               exact: true,
               render: ()=> <Redirect to="/menu/home/upgradeRecord" />,
            },
            ...home,
            ...members,
            ...salary,
            ...analysis,
         ]
      },
      {
         path: '*',
         component: error
      }
   ]
}]

export default routes
