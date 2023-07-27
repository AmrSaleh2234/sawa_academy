import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";
// i18n
import i18n from "@/plugins/i18n";
import PrimeVue from "primevue/config";
import VueHtmlToPaper from "vue-html-to-paper";

// Vuetify
import "vuetify/styles";
import vuetify from "@/plugins/vuetify";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import print from "vue3-print-nb";
import VueCarousel from 'vue-carousel';


import "primevue/resources/primevue.min.css";

/* import font awesome icon component */

// import vuetify sass
// import './main.scss'
//import vueitfy icons
import "@mdi/font/css/materialdesignicons.css";
// pinia resetStore
import resetStore from "@/plugins/reset-store";
import "animate.css";

import "./axios";
import "./style.css";
import "./views/frontend/assets/main.css";
import App from "@/App.vue";
const pinia = createPinia();

// use router in pinia store
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
pinia.use(resetStore);
const app = createApp(App);
app.use(pinia);
app.use(i18n);
app.use(vuetify);
app.use(router);
app.use(PrimeVue);
app.use(print);
app.use(VueHtmlToPaper);
app.use(VueCarousel);

app.mount("#app");
