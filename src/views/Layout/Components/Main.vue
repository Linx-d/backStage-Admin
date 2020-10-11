<template>
  <div id="main-wrap">
    <div id="main-wrap-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api"
export default {
  name: "BackStage",
  setup(props, { root }) {
  }
}
</script>

<style lang="scss" scoped>
#main-wrap {
  height: 100vh;
  width: 100vw;
  padding-top: $layoutHeadHeight+$layoutMainPadding;
  padding-left: $layoutNavWidth+$layoutMainPadding;
  padding-right: $layoutMainPadding;
  padding-bottom: $layoutMainPadding;
  background-color: #f0f2f5;
  @include webkit('box-sizing', border-box);
  #main-wrap-content {
    background-color: #fff;
    height: 850px;
  }
}
</style>