import type { AxiosResponse } from 'axios'
import type { DMCaipuParams, DMCaipuRes } from '@/types'

// 获取表单模板列表
export function getFormTemplates(params: any) {
  return get({
    url: '/formTemplates',
    params,
  })
}

// 获取菜谱
export function getExampleCaiPu(params: DMCaipuParams): Promise<AxiosResponse<DMCaipuRes>> {
  return get({
    url: 'https://api.qqsuu.cn/api/dm-caipu',
    params,
  })
}
