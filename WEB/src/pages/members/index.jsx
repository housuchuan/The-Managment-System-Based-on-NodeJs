import { renderRoutes } from 'react-router-config';

export default function index({ route }){
   return (
      <>{renderRoutes(route.routes)}</>
   )
}
