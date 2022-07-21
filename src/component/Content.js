import React from 'react';
import './index.css';
import { Breadcrumb, Layout } from 'antd';
import TableLog from './Table';
const { Header, Content, Footer } = Layout;

export const ContentLog = () => {
  return (
    <Layout className="site-layout">
      <Header
        className="site-layout-background"
        style={{ padding: 0 }}
      />
      <Content
        style={{ margin: '0 16px' }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}></Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <TableLog/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
