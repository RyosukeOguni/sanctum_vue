import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
Vue.use(Vuex)
/*
手順書になかった設定
https://wonwon-eater.com/laravel-sanctum-vue/
*/
export default new Vuex.Store({
  // authをモジュールで読み込む
  modules: {
    auth
  }
})
