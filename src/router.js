import Vue from "vue";
import VueRouter from "vue-router";

// ルート用のコンポーネントの読み込み
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";

//プラグインとして登録
Vue.use(VueRouter);

// VueRouterインスタンスを生成する
const router = new VueRouter({
  mode: "history",
  //　URLのパスと紐づくコンポーネントをマッピング
  routes: [{ path: "/", component: Home }, { path: "/about", component: About }]
});

// 生成したVueRouterインスタンスをエクスポート
export default router;
