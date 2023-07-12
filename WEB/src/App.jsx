import { createBrowserRouter, RouterProvider, Route, Router } from 'react-router-dom'
import routes from './router'
const router = createBrowserRouter(routes)
import './App.scss';

const App = () => {
   return (
      <RouterProvider router={router}>
         <Router>
            <Route path='/' />
         </Router>
      </RouterProvider>
   );
};
export default App;
