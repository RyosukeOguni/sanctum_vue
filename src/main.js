import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/*
手順書になかった設定
https://wonwon-eater.com/laravel-sanctum-vue/
*/
import axios from "axios";
// 認証でもらったクッキーをaxiosで返却して、認証ユーザーである確認を取る
axios.defaults.withCredentials = true;
// サーバー側のデフォルトのURLを設定する
axios.defaults.baseURL = "http://localhost:8000/";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
