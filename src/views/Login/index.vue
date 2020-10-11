<template>
  <div>
    <h1>登录</h1>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api"
export default {
  name: "login",
  setup(props, { root }) {
    root.$router.push({
      name: "BackStage"
    });
    console.log('登录页');
  }
}
</script>

<style lang="scss" scoped>
</style>