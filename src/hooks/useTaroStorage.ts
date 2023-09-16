import Taro from '@tarojs/taro'

export const useGetStorage = (key) => {
  return new Promise((resolve) => {
    Taro.getStorage({
      key,
      success(res) {
        console.log('res', res)
        resolve(res)
      },
      fail() {
        resolve(undefined)
      },
    })
  })
}

export function useSetStorage(key: string, data: any) {
  Taro.setStorage({
    key,
    data,
  })
}
