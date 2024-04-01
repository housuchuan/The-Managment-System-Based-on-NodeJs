import { TeamOutlined } from '@ant-design/icons';
import container from '@/pages/members'
import management from '@/pages/members/management'

export default [{
   name: '成员',
   path: '/menu/members',
   icon: <TeamOutlined />,
   component: container,
   routes: [{
      name: '用户管理',
      path: '/menu/members/management',
      component: management
   }]
}]
