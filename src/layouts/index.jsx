import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export default ({ children }) => {
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
};
