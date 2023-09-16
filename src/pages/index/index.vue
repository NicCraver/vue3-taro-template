<template>
  <div class="index">
    <div>
      <img src="" alt="" />
    </div>
    {{ state.msg }} <Dongdong />
    <div class="btn">
      <nut-button type="primary" @click="handleClick('text', state.msg2, true)">
        点我
      </nut-button>
    </div>
    <div class="btn">
      <nut-button type="primary" @click="handleLogin()">
        登录
      </nut-button>
    </div>
    <nut-toast
      :msg="state.msg2"
      v-model:visible="state.show"
      :type="state.type"
      :cover="state.cover"
    />
  </div>
</template>

<script lang="ts" setup>
import { onLogin, testGet } from "@api/module/login";
import { Dongdong } from "@nutui/icons-vue-taro";
const state = reactive({
  msg: "欢迎使用 NutUI4.0 开发小程序",
  msg2: "你成功了～",
  type: "text",
  show: false,
  cover: false,
});

const handleClick = (type, msg, cover = false) => {
  state.show = true;
  state.msg2 = msg;
  state.type = type;
  state.cover = cover;
};
async function handleLogin() {
  await onLogin();
  await testGet();
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
