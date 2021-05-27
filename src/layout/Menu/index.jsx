import React from 'react'
import { Layout, Menu } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import './index.scss'

const { Sider } = Layout

const MenuCom = () => {
  return (
    <div>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}>
        <div className='logo' />
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={['4']}
          style={{ background: '#f0f2f5' }}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            登录
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            发现音乐
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key='4' icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  )
}

export default MenuCom
