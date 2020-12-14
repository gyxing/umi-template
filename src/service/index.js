import request from '@/utils/request';

export function queryList(params) {
  return request.get('/example/list', { params });
}
