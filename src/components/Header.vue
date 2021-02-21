<template>
  <header class="container_header">
    <nav class="nav">
      <img src="../assets/logo-comfeco.svg" alt="logo" />

      <ul class="nav-list" v-if="isUserAuthenticated">
        <li
          class="nav-item"
          v-for="(item, index) in nav_links"
          v-bind:key="index"
        >
          <router-link :to="{ name: item.rutaName }" class="nav-link">{{
            item.name
          }}</router-link>
        </li>
        <li class="last-li">
          <ButtonSignOut />
        </li>
      </ul>
      <router-link :to="{ name: `Login` }">
        <button 
          v-if="isInReset"  
          class="text-xs yellow p-2 rounded font-medium transform hover:scale-105"
        >
          Iniciar sesión
        </button>
      </router-link>
    </nav>
  </header>
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
  },
  mounted() {
    this.isInReset = localStorage.getItem; 
  },
  data() {
    return {
      nav_links: [
        { rutaName: "Home", name: "Inicio" },
        { rutaName: "About", name: "About" },
        { rutaName: "PoliticasPrivacidad", name: "Políticas" }
      ],
      isInReset: false
    };
  },
  watch:{
    $route (from){
      if(from.path === "/Reset"){
        console.log('entre');
        this.isInReset = true;
        localStorage.setItem("isInReset", "true");
        return
      }
        this.isInReset = false;
        // localStorage.setItem("isInReset", "true");
        return
    }
  }
};
</script>

<style scoped>

.yellow {
  background-color: var(--yellowcomfeco);
}

.nav {
  position: absolute;
  background-color: var(--bgheader);
  width: 100%;
  min-height: 4.5rem;
  height: 12%;
  padding: 17px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-list {
  display: flex;
  width: auto;
  height: initial;
  background-color: transparent;
  position: initial;
  top: initial;
  right: initial;
  flex-direction: row;
  transition: initial;
}

.nav-item {
  margin: 0 1.5rem;
  padding-bottom: 0;
  padding-top: 0.3rem;
}
.nav-link {
  color: white;
  position: relative;
}
.nav-link:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.2rem;
  background-color: white;
  width: 100%;
  height: 1.6px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 650ms;
}
.nav-link:hover::before {
  transform: scaleX(1);
}
.router-link-exact-active {
  color: white;
  position: relative;
}
.router-link-exact-active:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.2rem;
  background-color: white;
  width: 100%;
  height: 1.6px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 650ms;
  transform: scaleX(1);
}
</style>
