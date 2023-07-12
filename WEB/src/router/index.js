/**
 * @name: 路由配置表
 * @desc: 路由配置信息列表
 */
import Login from '@/pages/login'
import Home from '@/pages/home'
import User from '../pages/home/User'
import Personal from '../pages/home/Personal'
import Table from '../pages/home/Table'
import NotFound from '../pages/notFound'
const routes = [
   {
      path: '/',
      element: <Login />
   }, {
      path: '/user',
      element: <Home />,
      children: [
         {
            index: true,
            element: <User />
         },
         {
            path: 'personal',
            element: <Personal />
         },
         {
            path: 'table',
            element: <Table />
         }
      ]
   }, {
      path: '*',
      element: <NotFound />
   }
]
export default routes
