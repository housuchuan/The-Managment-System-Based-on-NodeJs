import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/reset.css'

import routes from '@/router'
import store from './store'

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter basename={'/jellyhasky'}>
         {renderRoutes(routes)}
      </BrowserRouter>
   </Provider>,
   document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
