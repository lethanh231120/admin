import React, { useState, useEffect } from 'react';
import './index.css';
import { Breadcrumb, Layout, Table, Tag } from 'antd';
import axios from 'axios';

const { Header, Content, Footer } = Layout;
const columns = [
    {
      title: 'Service Name',
      dataIndex: 'service',
      sorter: (a, b) => a.service.localeCompare(b.service)
    },
    {
      title: 'Health Check',
      dataIndex: 'health',
      sorter: (a, b) => a.health.localeCompare(b.health),
      render: (health) => (
          <span>
              <Tag color={health !== 200 ? 'warning' : 'green'}>
              {health}
              </Tag>
          </span>
        ),
    }
];
export const HealthCheck = () => {
  const [data, setData] = useState([])


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  }
  
  const checkHealth = async() => {
    const coinPriceService = await axios.get('coinPriceService/health').then(res => res).catch(error => error)
    const accountService = await axios.get('accountService/health').then(res => res).catch(error => error)
    const addressService = await axios.get('addressService/health').then(res => res).catch(error => error)
    console.log('coinPriceService', coinPriceService)
    console.log('accountService', accountService)
    console.log('addressService', addressService)
    
    if (addressService && coinPriceService && accountService) {
        setData([
            ...data,
            {
                service: 'Service Address',
                health: addressService.status
            },
            {
                service: 'Service Account',
                health: accountService.status
            },
            {
                service: 'Service Coin Price',
                health: coinPriceService.status
            }
        ])
    }
  }

  useEffect(() => {
    checkHealth()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
        checkHealth()
    }, 300000)
    return () => clearTimeout(timer)
  }, [])

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
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
