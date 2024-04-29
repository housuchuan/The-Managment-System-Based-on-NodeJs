import { renderRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import {useEffect} from 'react';
import './App.scss';

const App = ({ route }) => {
   const userInfo = useSelector(state => state.user.userInfo)
   const history = useHistory(),
      location = useLocation()

   useEffect(()=>{
      if(!userInfo){
         history.replace('/')
      }
   },[location.pathname])

   return (
      <div>
         {renderRoutes(route.routes)}
      </div>
   );
};

export default App;
