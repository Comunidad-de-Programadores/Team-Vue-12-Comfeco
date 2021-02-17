<template>
  <div id="app">
    <Header :isUserAuthenticated="isUserAuthenticated" />
    <router-view />
  </div>
</template>

<script>
import { auth } from "@/firebase";
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  },
  created() {
    const isAuth = localStorage.getItem("isAuth");

    auth.onAuthStateChanged(user => {
      if (user) {
        this.isUserAuthenticated = true;
        if (!isAuth) {
          localStorage.setItem("isAuth", true);
          this.$router.push({ name: "Home" });
        }
      } else {
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
