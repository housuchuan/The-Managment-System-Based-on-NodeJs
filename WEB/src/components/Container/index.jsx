import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '@/store/slices/user';
import logo from '../../logo.svg'
const { Header, Sider, Content } = Layout
const App = ({ route }) => {
   const [collapsed, setCollapsed] = useState(false)
   const [menus, setMenus] = useState(false)
   const [currentPath, setCurrentPath] = useState(['/menu/home','/menu/home/upgradeRecord'])
   const {
      token: { colorBgContainer }
   } = theme.useToken()
   const history = useHistory()
   const userInfo = useSelector(state => state.user.userInfo),
      dispatch = useDispatch()

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

   const onMenuChange = (e) => {
      const [,path] = e
      setCurrentPath([path,currentPath[1]])
   }
   const onSubMenuChange = ({key}) => {
      setCurrentPath([currentPath[0],key])
   }

   const exit = () => {
      dispatch(clearUser())
      history.replace('/')
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
            <Menu theme="dark" mode="inline" openKeys={[currentPath[0]]} selectedKeys={[currentPath[1]]} items={menus} onOpenChange={onMenuChange} onClick={onSubMenuChange} />
         </Sider>
         <Layout>
            <Header style={{ padding: '0 16px', background: colorBgContainer,display: 'flex',justifyContent: 'space-between',alignItems: 'center' }}>
               {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'menuTrigger',
                  onClick: () => setCollapsed(!collapsed)
               })}
               <div>
                  <span>欢迎您，{userInfo?.nickName || ''}</span>
                  <Button style={{marginLeft: '10px'}} type="primary" onClick={exit}>退出</Button>
               </div>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer }}>
               { renderRoutes(route.routes) }
            </Content>
         </Layout>
      </Layout>
   )
}
export default App
