import React from 'react'
import { Layout } from 'antd'
import { SideBar } from './SideBar';
import { ContentLog } from './Content';
import { Route, Routes } from 'react-router-dom'
import { HealthCheck } from './HealthCheck';
export const LogBasic = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <SideBar/>
        <Routes>
          <Route path='/' element={<ContentLog />} />
          <Route path='/logs-basic' element={<ContentLog />} />
          <Route path='/health' element={<HealthCheck />} />
        </Routes>
    </Layout>
  )
}
