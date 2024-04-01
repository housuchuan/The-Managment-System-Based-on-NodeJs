import { PayCircleOutlined } from '@ant-design/icons';
import container from '@/pages/salary'
import statistics from '@/pages/salary/statistics'

export default [{
   name: '工资',
   path: '/menu/salary',
   icon: <PayCircleOutlined />,
   component: container,
   routes: [{
      name: '结算统计',
      path: '/menu/salary/statistics',
      component: statistics
   }],
}]
