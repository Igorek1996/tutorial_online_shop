import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import "./assets/styles/styles.scss";

Vue.config.productionTip = false;

Vue.prototype.$store = store;

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
