import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import router from "./router/router";
import "./assets/styles/styles.scss";

Vue.config.productionTip = false;

Vue.prototype.$store = store;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
