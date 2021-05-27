import { Layout } from 'antd'

import MenuCom from './Menu'
import HeaderCom from './Header'
import Main from './Main'
import FooterCom from './Foot'
import './index.scss'

const LayoutCom = () => {
  return (
    <div className='layoutCom'>
      <Layout style={{ height: '100%' }}>
        <MenuCom />
        <Layout>
          <HeaderCom />
          <Main />
          <FooterCom />
        </Layout>
      </Layout>
    </div>
  )
}

export default LayoutCom
