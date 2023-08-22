import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes,
  outputPath: "dist",
  antd: {},
  layout: {
    title: "蜡笔小新",
  },
  plugins: [require.resolve("@umijs/plugins/dist/unocss")],
  unocss: {
    // 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
    watch: ["src/**/*.tsx"],
  },
  //修改webpack配置项
  chainWebpack(memo, { env, webpack }) {},
  //生成哈希值
  hash: true,
});
