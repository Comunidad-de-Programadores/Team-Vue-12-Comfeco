<template>
  <div id="app">
    <Header :isUserAuthenticated="isUserAuthenticated" />
    <router-view :user="user" />
    <Footer />
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { getUserService } from "@/services/user_services";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  created() {
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
        getUserService(doc => {
          this.user = doc.data();
        });
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
      isUserAuthenticated: false,
      user: {}
    };
  }
};
</script>
