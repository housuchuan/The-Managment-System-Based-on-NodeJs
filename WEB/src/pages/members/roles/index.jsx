/**
 * 角色管理
 * housuchuan
 */
import { Input, Flex, Space, Button, Table, InputNumber } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { styled } from 'styled-components';

const { Search } = Input;
const TableList = styled(Table)`
  margin-top: 20px;
`

const onSearch = value => console.log(value);

const columns = [
   {
      title: '角色名称',
      dataIndex: 'role_name'
   },
   {
      title: '角色描述',
      dataIndex: 'role_desc'
   },
   {
      title: '备注',
      dataIndex: 'role_remark'
   },
   {
      title: '角色编码',
      render: (_, record) => (
         <InputNumber min={-1} max={99} defaultValue={record.role_code} />
      ),
   },
   {
      title: '操作',
      key: 'action',
      render: (_, record) => (
         <Space size="middle">
            <a>编辑 {record.role_name}</a>
            <a>删除</a>
         </Space>
      ),
   }
];
const data = [
   {
      key: '1',
      role_name: 'John Brown',
      role_desc: 32,
      role_remark: 'New York No. 1 Lake Park',
      role_code: -1
   }
];

const roleManagement = () => (<>
   <Flex justify='flex-end' align='center'>
      <Space direction='horizontal'>
         <Search placeholder="请输入角色名称" onSearch={onSearch} enterButton />
         <Button type="primary" icon={<UserAddOutlined />}>新增角色</Button>
      </Space>
   </Flex>
   <TableList columns={columns} dataSource={data} />
</>)

export default roleManagement
