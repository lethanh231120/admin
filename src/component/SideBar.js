import React, { useState } from 'react'
import { Layout,Menu } from 'antd'
import { TeamOutlined, HomeOutlined, DashboardOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const { Sider } = Layout;

export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="/">
                <HomeOutlined />
                <span>Log Basic</span>
                <NavLink to="logs-basic"></NavLink>
            </Menu.Item>

            <Menu.Item key="/health">
                <TeamOutlined />
                <span>Health Check</span>
                <NavLink to="health"></NavLink>
            </Menu.Item>

            <Menu.Item key="/more">
                <DashboardOutlined />
                <span>Counter</span>
                <NavLink to="More"></NavLink>
            </Menu.Item>
        </Menu>
    </Sider>
  )
}
