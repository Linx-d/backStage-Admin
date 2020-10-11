<template>
  <div>
    <layoutHeader />
    <layoutMain />
    <layoutNav />
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api"
import layoutHeader  from "./Components/Head.vue"
import layoutMain from "./Components/Main.vue"
import layoutNav from "./Components/Nav.vue"
export default {
  name: "layout",
  components: {layoutHeader, layoutMain, layoutNav},
  setup(props, { root }) {
  }
}
</script>

<style lang="scss" scoped>
</style>