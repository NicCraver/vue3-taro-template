export enum _httpType {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

export interface IGetParams {
  apiKey: string
}
export interface IGetRes {
  area: string
  areaCode: string
  areaid: string
  dayList: any[]
}

export interface IMockLoginRes {
  name: string
}

export interface DMCaipuParams {
  // 食材或菜名
  word: string
  // 返回数量
  num?: string
  // 翻页
  page: string
}

interface CaiPu {
  id: number // 菜谱ID
  type_id: number // 类型ID
  type_name: string // 类型名称
  cp_name: string // 菜肴名称
  zuofa: string // 做法
  texing: string // 菜肴特性
  tishi: string // 提示
  tiaoliao: string // 调料
  yuanliao: string // 原料
  yuanliao1111: string // 原料
}

export interface DMCaipuRes {
  allnum: number
  curpage: number
  list: CaiPu[]
  result: any
}
