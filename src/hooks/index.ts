import Taro from '@tarojs/taro'
export * from './useIsLogin'
export * from './useTaroStorage'

export function useLink(url: string) {
  Taro.navigateTo({
    url,
  })
}
