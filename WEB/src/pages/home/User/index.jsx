import { useState, useEffect } from 'react'
import { Space, Button, Table, Tag, Input, Popconfirm, Modal, Form, Select, message } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import API from '@/service'
import styles from './index.module.scss'
const { Search } = Input
// 栏目定义
const UserTags = [{
   label: '游客',
   value: '0'
}, {
   label: '体验者',
   value: '1'
}, {
   label: '开发者',
   value: '2'
}, {
   label: '系统管理员',
   value: '3'
}]
const userSex = [{ value: 0, label: '女' },
   { value: 1, label: '男' }]
const columns = [
   {
      title: '用户名',
      dataIndex: 'userName',
      key: 'userName',
      render: (text) => <a>{text}</a>
   },
   {
      title: '用户昵称',
      dataIndex: 'nickName',
      key: 'nickName'
   },
   {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      render: (sex) => sex === 1 ? '男' : '女'
   },
   {
      title: '手机号',
      dataIndex: 'mobile',
      key: 'mobile'
   },
   {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email'
   },
   {
      title: '用户权限',
      key: 'authorities',
      dataIndex: 'authorities',
      render: (_, { authorities }) => {
         const color = authorities === 3 ? 'geekblue' : authorities === 2 ? 'green' : 'volcano'
         return (<Tag color={color} key={authorities}>{UserTags[authorities].label}</Tag>)
      }
   },
   {
      title: '操作',
      key: 'action',
      render: (_, record) => (
         <Space size="middle">
            <a onClick={() => record.edit(record)}>编辑 {record.name}</a>
            <Popconfirm title="确定删除吗?" cancelText='取消' okText='确定' onConfirm={() => record.delete(record)}>
               <a>删除</a>
            </Popconfirm>
         </Space>
      )
   }
]
const Index = () => {
   // 模态框状态
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [userTags] = useState(UserTags)
   const [userInfo, setUserInfo] = useState(null)
   const [form] = Form.useForm()
   const [messageApi, contextHolder] = message.useMessage()
   // 展示用户信息模态框
   const showUserModal = (user = null) => {
      setUserInfo(user)
      setIsModalOpen(true)
      user
         ? form.setFieldsValue(Object.assign({}, user, {
            authorities: UserTags[user.authorities],
            sex: userSex[user.sex],
            passWord: ''
         }))
         : form.resetFields()
   }
   // 用户数据
   const [users, setUsers] = useState([])
   /**
     * 用户筛选操作 action
     */
   const onSearch = (val) => {
      requestUsers(val)
   }
   /**
     * @param {string} keyword
     * @return {void}
     * @description 获取接口用户数据
     */
   const requestUsers = (keyword = '') => {
      API({
         method: 'GET',
         url: '/user/queryUsers',
         params: {
            keyword
         }
      }).then(res => {
         setUsers(res.data.map(({ id, userName, nickName, sex, mobile, email, authorities }) => ({
            id,
            userName,
            nickName,
            sex,
            mobile,
            email,
            authorities,
            edit (user) {
               showUserModal(user)
            },
            delete (user) {
               userDelete(user)
            }
         })))
      }).catch(() => {})
   }
   /**
     * @param userInfo: {
     *
     * }
     * @return void
     * @description 新增系统用户
     */
   const addSysUser = (userInfo = {}, callback = () => {}) => {
      API({
         url: '/user/addUser',
         params: userInfo
      }).then(res => {
         callback()
         messageApi.success(res.message).then(() => {
            requestUsers()
         })
      }).catch(() => {})
   }
   /**
     * @param userInfo: {
     *
     * }
     * @return void
     * @description 新增系统用户
     */
   const editSysUser = (userInfo = {}) => {
      API({
         url: '/user/editUser',
         params: userInfo
      }).then(res => {
         messageApi.success(res.message).then(() => {
            requestUsers()
         })
      }).catch(() => {})
   }
   /**
     * 用户添加 || 编辑操作 action
     */
   const handleOk = () => {
      form.validateFields().then((res) => {
         const { authorities: { value: authorities = '0' }, email = '', mobile = '', sex: { value: sex = '0' }, nickName = '', userName = '', passWord = '' } = res
         const params = { userName, passWord, nickName, sex, mobile, email, authorities }
         if (userInfo) {
            // 编辑
            editSysUser(Object.assign(params, { id: userInfo.id }))
            setIsModalOpen(false)
         } else {
            // 新增
            addSysUser(params, () => {
               setIsModalOpen(false)
            })
         }
      }).catch(() => {})
   }
   /**
     * 用户删除操作 action
     */
   function userDelete (user) {
      API({
         url: '/user/removeUser',
         params: {
            id: user.id
         }
      }).then(res => {
         messageApi.success(res.message).then(() => {
            requestUsers()
         })
      }).catch(() => {})
   }
   /**
     *
     */
   useEffect(() => {
      requestUsers() // eslint-disable-next-line
    },[])
   return (
      <>
         {contextHolder}
         <Space className={styles.search}>
            <Button onClick={() => showUserModal()}><UserAddOutlined />新增用户</Button>
            <Search placeholder="请输入姓名检索相关用户" enterButton="检索" onSearch={onSearch} />
         </Space>
         <Table columns={columns} dataSource={users} rowKey={({ id }) => id} />
         <Modal title={(userInfo ? '编辑' : '新增') + '系统用户信息'} cancelText='取消' okText='确认' open={isModalOpen} wrapClassName={styles.userModal} onOk={handleOk} onCancel={() => setIsModalOpen(false)}>
            <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} form={form} name="user">
               <Form.Item name='userName' label="用户名" rules={[{ required: true, message: '请输入用户名!' }, { pattern: /^[a-zA-Z]([a-zA-Z0-9]|[._]){4,19}$/, message: '请输入正确的用户名!' }]}>
                  <Input disabled={userInfo} placeholder='请输入用户名!' />
               </Form.Item>
               <Form.Item name='passWord' label="密码" rules={[{ required: !userInfo, message: '请输入密码!' }, { pattern: /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/, message: '密码强度不符合规范，请重新输入!' }]}>
                  <Input.Password placeholder='请输入密码!' />
               </Form.Item>
               <Form.Item name='nickName' label="用户昵称" rules={[{ required: true, message: '请输入用户昵称!' }]}>
                  <Input placeholder='请输入用户昵称!' />
               </Form.Item>
               <Form.Item name='sex' label="性别" initialValue={userSex[0]}>
                  <Select style={{ width: 120 }} labelInValue options={userSex} />
               </Form.Item>
               <Form.Item name='mobile' label="手机号" rules={[{ required: true, message: '请输入用户手机号!' }, { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号!' }]}>
                  <Input placeholder="请输入用户手机号!" type='tel' />
               </Form.Item>
               <Form.Item name='email' label="用户邮箱" rules={[{ required: true, message: '请输入用户邮箱!' }, { type: 'email', message: '请输入正确的邮箱地址!' }]}>
                  <Input placeholder="请输入用户邮箱!" />
               </Form.Item>
               <Form.Item name='authorities' label="用户权限" initialValue={userTags[0]}>
                  <Select allowClear placeholder="请选择用户权限" labelInValue options={userTags} />
               </Form.Item>
            </Form>
         </Modal>
      </>
   )
}
export default Index
