export async function useIsLogin() {
  const res = await useGetStorage('token')
  if (res === undefined)
    console.log('未登录')
  // useLink('/pages/login/index')
}
