import { TeamOutlined } from '@ant-design/icons';
import container from '@/pages/members'
import management from '@/pages/members/management'
import {Redirect} from 'react-router-dom';
import {lazy} from 'react';

const roleManagement = lazy(() => import('@/pages/members/roles'))

export default [{
   name: '成员',
   path: '/menu/members',
   icon: <TeamOutlined />,
   component: container,
   routes: [{
      path: '/menu/members',
      exact: true,
      render: ()=> <Redirect to="/menu/members/management" />,
   },{
      name: '用户管理',
      path: '/menu/members/management',
      component: management
   },{
      name: '角色管理',
      path: '/menu/members/roles',
      component: roleManagement
   }]
}]
