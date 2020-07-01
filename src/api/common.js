import request from '@/utils/request'

// 获取所有的机构
export function getDZData(url) {//GET /home/selectAllOrg
  return request({
    url: url,
    method: 'get'
  })
}
