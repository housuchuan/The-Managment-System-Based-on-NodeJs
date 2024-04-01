import React, { useState, useEffect } from 'react'
import { Link , useLocation } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import logo from '../../logo.svg'
const { Header, Sider, Content } = Layout
const App = ({ route }) => {
   const [collapsed, setCollapsed] = useState(false)
   const [menus, setMenus] = useState(false)
   const { pathname: currentPath = '/' } = useLocation()
   const {
      token: { colorBgContainer }
   } = theme.useToken()

   // 递归菜单展示
   const reduceMenu = (menuRouters) => {
      return menuRouters.reduce((pre,cur)=>{
         return pre.concat({
            key: cur.path,
            label: !cur.routes ? <Link to={cur.path}>{cur.name}</Link> : cur.name,
            icon: cur.icon || '',
            children: cur.routes && cur.routes.length > 0 ? reduceMenu(cur.routes) : null
         })
      },[])
   }

   useEffect(()=>{
      const menus = reduceMenu(route.routes)
      setMenus(menus)
   },[])

   return (
      <Layout className='App'>
         <Sider trigger={null} collapsible collapsed={collapsed}>
            <img src={ logo } className='App-logo' alt="logo" />
            <Menu theme="dark" mode="inline" defaultOpenKeys={[(currentPath.match(/^\/(\w)+\/(\w)+/ig))[0]]} items={menus} />
         </Sider>
         <Layout>
            <Header style={{ padding: '0 16px', background: colorBgContainer }}>
               {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'menuTrigger',
                  onClick: () => setCollapsed(!collapsed)
               })}
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer }}>
               { renderRoutes(route.routes) }
            </Content>
         </Layout>
      </Layout>
   )
}
export default App
