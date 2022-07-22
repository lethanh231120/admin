import React, { useState } from 'react'
import 'antd/dist/antd.css';
import './index.css';
import { Table, Tag, Form, Input, Button } from 'antd';
const columns = [
  {
    title: 'Service',
    dataIndex: 'service',
    sorter: (a, b) => a.service.localeCompare(b.service)
  },
  {
    title: 'Message',
    dataIndex: 'msg',
    sorter: (a, b) => a.msg.localeCompare(b.msg)
  },
  {
    title: 'Level',
    dataIndex: 'level',
    sorter: (a, b) => a.level.localeCompare(b.level),
    render: (level) => (
        <span>
            <Tag color={level === 'infor' ? 'yellow' : level === 'error' ? 'volcano' : level === 'warning' ? 'geekblue' : 'green'}>
            {level.toUpperCase()}
            </Tag>
        </span>
      ),
  }
];
const dataDemo = [
  { 
    "id": 1,
    "label": "server-http",
    "level":"info",
    "msg":"server worker started at pid 14681 listening on 127.0.0.1:8000",
    "service":"base",
    "time": "2022-07-20T15:25:06.746725+07:00"
  },
  {
    "id": 2,
    "label":"http-access",
    "level":"error",
    "msg":"token is expired",
    "service":"addresses-service",
    "time":"2022-07-20T10:14:48.278741141Z"
  },
  {
    "id": 3,
    "label":"http-access",
    "level":"error",
    "msg":"token is expired",
    "service":"addresses-service",
    "time":"2022-07-20T10:15:46.792215562Z"
  },
  {
    "id": 4,
    "label":"http-access",
    "level":"warning",
    "msg":"unauthorized method GET at URI /accounts/confirm-email/uuid=null",
    "service":"auth-svc",
    "time":"2022-07-20T10:15:58.604521475Z"
  },
  {
    "id": 5,
    "label":"http-access",
    "level":"error",
    "msg":"token is expired",
    "service":"addresses-service",
    "time":"2022-07-20T10:18:47.551878633Z"
  },
  {
    "id": 6,
    "label":"http-access",
    "level":"error",
    "msg":"token is expired",
    "service":"addresses-service",
    "time":"2022-07-20T10:19:07.536938501Z"
  }
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
}

const TableLog = () => {
  const [data, setData] = useState(dataDemo)
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    const dataClone = [...dataDemo]
    let listData
    const list = () => {
        if(values['service'] !== undefined && values['level'] !== undefined){
            listData = dataClone.filter((item) => (item.service === values['service'] && item.level === values['level']))
            return listData
        }
        if(values['service'] !== undefined && values['level'] === undefined){
            listData = dataClone.filter((item) => item.service === values['service'])
            return listData
        }
        if(values['service'] === undefined && values['level'] !== undefined){
            listData = dataClone.filter((item) => item.level === values['level'])
            return listData
        }
    }
    list()
    console.log(listData)
    setData(listData)
  }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const getLogs = () => {
  //       const logs = axios.get('').then((res) => console.log(res.data)).catch((error) => console.log(error))
  //       setData([
  //         ...data,
  //         logs
  //       ])
  //     }
  //     getLogs()
  //   }, 1000)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item label="Service" name='service'>
            <Input />
        </Form.Item>
        <Form.Item label="Level" name='level'>
            <Input />
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  )
}

export default TableLog 
