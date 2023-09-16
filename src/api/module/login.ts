import Taro from '@tarojs/taro'

export function onLogin() {
  return new Promise((resolve, reject) => {
    Taro.login({
      success(res) {
        if (res.code) {
          console.log('登录成功！', res)
          // 获取用户信息
          Taro.getUserInfo()
            .then((userInfo) => {
              resolve({ code: res.code, userInfo })
            })
            .catch((error) => {
              // eslint-disable-next-line prefer-promise-reject-errors
              reject(`获取用户信息失败！${error}`)
            })
        }
        else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(`登录失败！${res.errMsg}`)
        }
      },
      fail(error) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(`登录失败！${error}`)
      },
    })
  })
}

// function getOpenId(code: string) {
//   console.log('code', code)
// }

export function testGet(params: any = {}) {
  return get({
    url: 'https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/200',
    params,
  })
}
