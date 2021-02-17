<template>
  <div class="nav">
    <img src="../assets/logo-comfeco.svg" alt="logo" />
    <div>
      <router-link v-if="isUserAuthenticated" to="/"> Home | </router-link>
      <router-link v-if="isUserAuthenticated" to="/about"> About |</router-link>
      <router-link v-if="isUserAuthenticated" to="/politicas-privacidad">
        politicas |</router-link
      >
      <ButtonSignOut v-if="isUserAuthenticated" />
    </div>
  </div>
</template>

<script>
import ButtonSignOut from "@/components/ButtonSignOut.vue";

export default {
  name: "Header",
  components: {
    ButtonSignOut
  },
  props: {
    isUserAuthenticated: { type: Boolean }
  }
}
</script>

<style scoped>
.nav {
  position: absolute;
  background-color: var(--bgheader);
  width: 100%;
  height: 12%;
  padding: 17px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
