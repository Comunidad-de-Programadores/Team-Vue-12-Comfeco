<template>
  <div id="app">
    <Header :isUserAuthenticated="isUserAuthenticated" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { auth } from "@/firebase";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    const isAuthe = localStorage.getItem("isAuth");
    if (isAuthe) this.isUserAuthenticated = true;

    auth.onAuthStateChanged(user => {
      if (user) {
        this.isUserAuthenticated = true;
        const isAuth = localStorage.getItem("isAuth");

        if (!isAuth) {
          localStorage.setItem("isAuth", true);
          this.$router.push({ name: "Home" });
        }
      } else {
        const isAuth = localStorage.getItem("isAuth");
        this.isUserAuthenticated = false;
        if (isAuth) {
          localStorage.clear();
          location.reload();
        }
      }
    });
  },
  data() {
    return {
      isUserAuthenticated: false
    };
  }
};
</script>
