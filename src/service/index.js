import request from '@/utils/request';

export function queryList(params) {
  return request.get('/example/list', { params });
}

export function post(params) {
  return request('/example/list', { params, method: 'POST' });
}
