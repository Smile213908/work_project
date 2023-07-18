import React , { useState }from 'react';
// import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';

import Charts1 from './component/charts1';
import Charts2 from './component/charts2';
import Charts3 from './component/charts3';
import Charts4 from './component/charts4';


const { Content } = Layout;
function getItem(label, key) {
  return {
    label,
    key
  }
}

const items = [
  // getItem('记账', <PieChartOutlined />),
  // getItem('统计', <DesktopOutlined />),
  getItem('道具更换记录', '/charts1'),
  getItem('数控机床维修记录', '/charts2'),
  getItem('六轴机器人维修记录', '/charts3'),
  getItem('零件卡爪维修记录', '/charts4'),
]

const Middle = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key, { replace: true })
  }

  window.onresize = function(){
    Middle()
  }
  return (
    // <div className="middle" style={{ display: 'flex', alignItems: 'center' }} >
      <div className="middle" style={{ display: 'flex', alignItems: 'center' }} 
      collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu
        className='option'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        // items={new Array(4).fill(null).map((Array, index) => {
        //   const arr = [
        //     '道具更换记录',
        //     '数控机床维修记录',
        //     '六轴机器人维修记录',
        //     '零件卡爪维修记录'
        //   ]
        //   return {
        //     index,
        //     label: arr[index],
        //   };
        // })}
        items={items}
        style={{ color: 'white' }}
        onClick={onClick}
      />
      <Layout className="site-layout">
        <Content>
          <div className='route'>
            <Routes>
              <Route exact path="/charts1" element={<Charts1 />} />
              <Route exact path="/charts2" element={<Charts2 />} />
              <Route exact path="/charts3" element={<Charts3 />} />
              <Route exact path="/charts4" element={<Charts4 />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Middle;