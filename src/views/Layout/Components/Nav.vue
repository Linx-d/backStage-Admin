<template>
  <div id="nav-wrap">
    <div class="nav_top"></div>
    <div class="nav_menu">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        background-color="transparent"
        text-color="#a5acb3"
        active-text-color="#ffffff"
        router
      >
        <template v-for="(item, index) in routes">
          <el-submenu index="1" :key="item.id" v-if="!item.hidden" :index="index">
            <!-- 一级菜单 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ item.meta.name }}</span>
            </template>
            <!-- 子级菜单 -->
            <template v-for="subItem in item.children">
              <el-menu-item v-if="!subItem.hidden" :key="subItem.id" :index="subItem.path">{{ subItem.meta.name }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "BackStage",
  setup(props, { root }) {
    /**
     * data 数据
     */
    const isCollapse = ref(false);
    const routes = reactive(root.$router.options.routes);

    /**
     * 函数
     */
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    console.log(routes, "routes");
    return { isCollapse, routes, handleOpen, handleClose };
  },
};
</script>

<style lang="scss" scoped>
#nav-wrap {
  height: 100vh;
  width: $layoutNavWidth;
  background-color: $navBgc;
  position: fixed;
  left: 0;
  top: 0;
  .nav_top {
    height: $layoutHeadHeight;
    width: 100%;
    text-align: center;
    line-height: $layoutHeadHeight;
    background-color: #00284d;
  }
}
</style>