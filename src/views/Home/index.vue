<template>
  <div>
    <h1>首页</h1>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api"
export default {
  name: "home",
  setup(props, { root }) {
    console.log('初始化成功');
  }
}
</script>

<style lang="scss" scoped>
</style>