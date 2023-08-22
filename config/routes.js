const routes = [
  { path: "/", redirect: "/index" },
  {
    path: "/index",
    component: "home",
    name: "首页",
    routes: [{ path: "/index", component: "home/home-child" }],
  },
  { path: "/iot", component: "home/iot", name: "设备管理" },
  {
    path: "/template",
    component: "home/template",
    name: "运维管理",
  },
  { path: "/video", component: "home/video", name: "视频中心" },
  { path: "/login", component: "login" },
  { path: "*", component: "404" },
];
export default routes;
