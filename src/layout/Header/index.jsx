import React from 'react'
import { Layout } from 'antd'
const { Header } = Layout

const HeaderCom = () => {
  return (
    <Header
      className='site-layout-sub-header-background'
      style={{ padding: 0 ,background:'#f9f9f9'}}>
      头部
    </Header>
  )
}

export default HeaderCom
