import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
   const [currentPath, setCurrentPath] = useState(['/menu/home','/menu/home/upgradeRecord'])
   const {
      token: { colorBgContainer }
   } = theme.useToken()

   // 递归菜单展示
   const reduceMenu = (menuRouters) => {
      return menuRouters.reduce((pre,cur)=>{
         return cur.name ? pre.concat({
            key: cur.path,
            label: !cur.routes ? <Link to={cur.path}>{cur.name}</Link> : cur.name,
            icon: cur.icon || '',
            children: cur.routes && cur.routes.length > 0 ? reduceMenu(cur.routes) : null
         }) : pre
      },[])
   }

   const onMenuClick = ({keyPath: [subMenuPath,menuPath]}) => {
      setCurrentPath([menuPath,subMenuPath])
   }

   useEffect(()=>{
      const menus = reduceMenu(route.routes)
      setMenus(menus)
      const pathMatches = location.pathname.match(/\/\w+/g)
      setCurrentPath([pathMatches.slice(1,3).join(''),pathMatches.slice(1).join('')])
   },[])

   return (
      <Layout className='App'>
         <Sider trigger={null} collapsible collapsed={collapsed}>
            <img src={ logo } className='App-logo' alt="logo" />
            <Menu theme="dark" mode="inline" defaultOpenKeys={[currentPath[0]]} selectedKeys={[currentPath[1]]} items={menus} onSelect={onMenuClick} />
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
