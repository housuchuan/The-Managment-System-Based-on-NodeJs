import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { ThemeContext } from '@/utils/themeContext'
import routes from './router'
const router = createBrowserRouter(routes,{
   basename: '/jellyhasky'
})
import './App.scss';

const App = () => {
   return (
      <ThemeContext.Provider value={{}}>
         <RouterProvider router={router}>
            {/*<BrowserRouter>*/}
            <Route path='/' />
            {/*</BrowserRouter>*/}
         </RouterProvider>
      </ThemeContext.Provider>
   );
};
export default App;
