import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    hidden: true,
    redirect: "/login",
    meta: {
      name: "主页"
    }
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      name: "登录"
    },
    component: (resolve) => require(["../views/Login/index.vue"], resolve),
  },
  /**
   * 首页
   */
  {
    path: "/backStage",
    name: "BackStage",
    redirect: "/index",
    meta: {
      name: "首页"
    },
    component: (resolve) => require(["../views/Layout/index.vue"], resolve),
    children: [
      {
        path: "/index",
        name: "Index",
        meta: {
          name: "驾驶舱"
        },
        component: (resolve) => require(["../views/BackStage/index.vue"], resolve),
      },
    ],
  },
  /**
   * 住宅
   */
  {
    path: "/residential",
    name: "Residential",
    meta: {
      name: "住宅"
    },
    component: (resolve) => require(["../views/Layout/index.vue"], resolve),
    children: [
      {
        path: "/residentialIndex",
        name: "ResidentialIndex",
        meta: {
          name: "楼盘列表"
        },
        component: (resolve) => require(["../views/Residential/index.vue"], resolve),
      },
      {
        path: "/residentialCreate",
        name: "residentialCreate",
        meta: {
          name: "楼盘创建"
        },
        component: (resolve) => require(["../views/Residential/create.vue"], resolve),
      },
    ],
  },
  /**
   * 商业
   */
  {
    path: "/business",
    name: "Business",
    meta: {
      name: "商业"
    },
    component: (resolve) => require(["../views/Layout/index.vue"], resolve),
    children: [
      {
        path: "/businessIndex",
        name: "BusinessIndex",
        meta: {
          name: "商业信息"
        },
        component: (resolve) => require(["../views/Business/index.vue"], resolve),
      }
    ],
  },
  /**
   * 任务管理
   */
  {
    path: "/taskManagement",
    name: "TaskManagement",
    meta: {
      name: "任务管理"
    },
    component: (resolve) => require(["../views/Layout/index.vue"], resolve),
    children: [
      {
        path: "/taskManagementIndex",
        name: "TaskManagementIndex",
        meta: {
          name: "已发布任务"
        },
        component: (resolve) => require(["../views/TaskManagement/index.vue"], resolve),
      },
      {
        path: "/taskManagementReview",
        name: "TaskManagementReview",
        meta: {
          name: "审核任务"
        },
        component: (resolve) => require(["../views/TaskManagement/review.vue"], resolve),
      },
      {
        path: "/taskManagementRelease",
        name: "TaskManagementRelease",
        meta: {
          name: "发布任务"
        },
        component: (resolve) => require(["../views/TaskManagement/release.vue"], resolve),
      }
    ],
  },
];

//避免对当前位置的冗余导航
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "hash", // history
  routes,
});

export default router;
