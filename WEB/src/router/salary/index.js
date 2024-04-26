import { PayCircleOutlined } from '@ant-design/icons';
import container from '@/pages/salary'
import statistics from '@/pages/salary/statistics'
import {Redirect} from 'react-router-dom';

export default [{
   name: '工资',
   path: '/menu/salary',
   icon: <PayCircleOutlined />,
   component: container,
   routes: [{
      path: '/menu/salary',
      exact: true,
      render: ()=> <Redirect to="/menu/salary/statistics" />,
   },{
      name: '结算统计',
      path: '/menu/salary/statistics',
      component: statistics
   }],
}]
