<template>
  <div id="app">
    <div class="nav">
      <router-link v-if="isUserAuthenticated" to="/"> Home | </router-link>
      <router-link v-if="isUserAuthenticated" to="/about"> About |</router-link>
      <router-link v-if="isUserAuthenticated" to="/politicas-privacidad">
        politicas |</router-link
      >

      <ButtonSignOut v-if="isUserAuthenticated" />
    </div>
    <router-view />
  </div>
</template>

<script>
import { auth } from "@/firebase";
import ButtonSignOut from "@/components/ButtonSignOut.vue";
export default {
  components: {
    ButtonSignOut
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

<style scoped>
.nav {
  display: flex;
}
</style>
