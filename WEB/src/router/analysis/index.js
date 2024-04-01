import { BarChartOutlined } from '@ant-design/icons';
import container from '@/pages/analysis'
import roleDistribution from '@/pages/analysis/roleDistribution'

export default [{
   name: '分析',
   path: '/menu/analysis',
   icon: <BarChartOutlined />,
   component: container,
   routes: [{
      name: '角色分析',
      path: '/menu/analysis/roleDistribution',
      component: roleDistribution
   }],
}]
