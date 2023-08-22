import { createBrowserRouter, RouterProvider, Route, Router } from 'react-router-dom'
import { ThemeContext } from '@/utils/themeContext'
import routes from './router'
const router = createBrowserRouter(routes)
import './App.scss';

const App = () => {
   return (
      <ThemeContext.Provider value={{}}>
         <RouterProvider router={router}>
            <Router>
               <Route path='/' />
            </Router>
         </RouterProvider>
      </ThemeContext.Provider>
   );
};
export default App;
