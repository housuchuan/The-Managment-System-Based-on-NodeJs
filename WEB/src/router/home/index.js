import { HomeOutlined } from '@ant-design/icons';
import container from '@/pages/home'
import upgradeRecord from '@/pages/home/upgradeRecord'

export default [{
   name: '主页',
   path: '/menu/home',
   icon: <HomeOutlined />,
   component: container,
   routes: [{
      name: '更新日志',
      path: '/menu/home/upgradeRecord',
      component: upgradeRecord
   }]
}]
