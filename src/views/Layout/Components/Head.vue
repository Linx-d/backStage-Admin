<template>
  <div id="header-wrap">
    <div class="header_left">
      <svg-icon iconClass="head_menu" class="head_menu"></svg-icon>
    </div>
    <div class="header_right">
      <ul>
        <li class="avatar">
          <svg-icon iconClass="head_avatar" class="head_avatar"></svg-icon>
          <span>momo.zxy</span>
        </li>
        <li>
          <svg-icon iconClass="head_prompt"></svg-icon>
        </li>
        <li>
          <svg-icon iconClass="head_search"></svg-icon>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "BackStage",
  setup(props, { root }) {},
};
</script>

<style lang="scss" scoped>
#header-wrap {
  height: $layoutHeadHeight;
  position: fixed;
  left: $layoutNavWidth;
  right: 0;
  top: 0;
  background-color: #fff;
  @include webkit("box-shadow", 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  .header_left {
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: $layoutMainPadding;
    .head_menu {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
  .header_right {
    width: 80%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    ul {
      position: relative;
      height: 100%;
      li {
        float: right;
        margin-top: 20.5px;
        margin-right: $layoutMainPadding;
        cursor: pointer;
      }
    }
    .avatar {
      .head_avatar {
        vertical-align: middle;
      }
      span {
        color: #5a5a5a;
        font-size: 14px;
        margin-left: 9px;
      }
    }
  }
}
</style>