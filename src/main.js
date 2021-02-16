import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/tailwind.css";
import "@/assets/css/style-icoMoon.css";
import "@/assets/css/colors.css";
import firebase from "firebase";

Vue.config.productionTip = false;


var firebaseConfig = {
  apiKey: "AIzaSyBcLyp3_RK1AbB4yJ4qJelAtvTFoBinLuk",
  authDomain: "comfeco-2e108.firebaseapp.com",
  projectId: "comfeco-2e108",
  storageBucket: "comfeco-2e108.appspot.com",
  messagingSenderId: "35272339077",
  appId: "1:35272339077:web:d9d90781fb7908117403ec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
