import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   UploadOutlined,
   UserOutlined,
   VideoCameraOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import logo from '../../logo.svg'
const { Header, Sider, Content } = Layout
const App = () => {
   const [collapsed, setCollapsed] = useState(false)
   const { pathname: currentPath = '/' } = useLocation()
   const {
      token: { colorBgContainer }
   } = theme.useToken()
   return (
      <Layout className='App'>
         <Sider trigger={null} collapsible collapsed={collapsed}>
            <img src={ logo } className='App-logo' alt="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[currentPath]} items={[
               {
                  key: '/',
                  icon: <UserOutlined />,
                  label: <Link to="/">用户CRM</Link>
               },
               {
                  key: '/personal',
                  icon: <VideoCameraOutlined />,
                  label: <Link to="/personal">个人中心</Link>
               },
               {
                  key: '/table',
                  icon: <UploadOutlined />,
                  label: <Link to="/table">数据报表</Link>
               }
            ]} />
         </Sider>
         <Layout>
            <Header style={{ padding: '0 16px', background: colorBgContainer }}>
               {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'menuTrigger',
                  onClick: () => setCollapsed(!collapsed)
               })}
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer }}>
               <Outlet />
            </Content>
         </Layout>
      </Layout>
   )
}
export default App
