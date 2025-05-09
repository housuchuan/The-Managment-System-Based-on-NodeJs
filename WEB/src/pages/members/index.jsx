import { renderRoutes } from 'react-router-config';
import {Suspense} from 'react';
import { Spin } from 'antd';

export default function index({ route }){
   return (
      <Suspense fallback={<Spin />}>{renderRoutes(route.routes)}</Suspense>
   )
}
