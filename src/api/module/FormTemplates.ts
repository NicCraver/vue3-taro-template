interface RequestResponse {
  code: number
  desc: string
  result: any
  total: number | null
}

// 查看模板
export function onQueryTemplateById(data: any): Promise<RequestResponse> {
  return post({
    url: '/ygt-followup/whitelist/onQueryTemplateById',
    data,
  })
}

// 获取模板需要自动返显的数据
export function getTemplateDateById(params: any): Promise<RequestResponse> {
  return get({
    url: '/ygt-followup/whitelist/getTemplateDateById',
    params,
  })
}
