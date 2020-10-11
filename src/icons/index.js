import Vue from "vue";
import svgicon from "@/icons/svgicon.vue";

Vue.component("svg-icon", svgicon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};
requireAll(req);