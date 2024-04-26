import { BarChartOutlined } from '@ant-design/icons';
import container from '@/pages/analysis'
import roleDistribution from '@/pages/analysis/roleDistribution'
import {Redirect} from 'react-router-dom';

export default [{
   name: '分析',
   path: '/menu/analysis',
   icon: <BarChartOutlined />,
   component: container,
   routes: [{
      path: '/menu/analysis',
      exact: true,
      render: ()=> <Redirect to="/menu/analysis/roleDistribution" />,
   },{
      name: '角色分析',
      path: '/menu/analysis/roleDistribution',
      component: roleDistribution
   }],
}]
