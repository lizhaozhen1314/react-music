import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout
const Main = () => {
  return (
    <Content style={{ height: '80%' }}>
      <div
        className='site-layout-background'
        style={{ minHeight: 360, height: '100%' }}>
        content
      </div>
    </Content>
  )
}

export default Main
