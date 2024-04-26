import { Redirect } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons';
import container from '@/pages/home'
import upgradeRecord from '@/pages/home/upgradeRecord'

export default [{
   name: '主页',
   path: '/menu/home',
   icon: <HomeOutlined />,
   component: container,
   routes: [{
      path: '/menu/home',
      exact: true,
      render: ()=> <Redirect to="/menu/home/upgradeRecord" />,
   },{
      name: '更新日志',
      path: '/menu/home/upgradeRecord',
      component: upgradeRecord
   }]
}]
