import request from './request';
import download from './download';
import upload from './upload';

// 定义几种请求策略
export default {
  get(url, { params } = {}) {
    return request(url, { params });
  },
  post(url, { data, params } = {}) {
    return request(url, { data, params, method: 'POST' });
  },
  put(url, { data, params } = {}) {
    return request(url, { data, params, method: 'PUT' });
  },
  delete(url, { params } = {}) {
    return request(url, { params, method: 'DELETE' });
  },
  // form表单请求
  form(url, { data, params } = {}) {
    return request(url, { data, params, method: 'POST', type: 'form' });
  },
  // 一般的request请求
  extend(url, options) {
    return request(url, options);
  },
  // 下载文件
  download(url, options) {
    return download(url, options);
  },
  // 上传文件
  upload(url, options) {
    return upload(url, options);
  },
};
