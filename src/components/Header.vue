<template>
  <header class="container_header">
    <nav class="nav">
      <img src="../assets/logo-comfeco.svg" alt="logo" />
      <div @click="activeMenu()">
        <svg-icon
                class="menu-btn"
                color="#FFF"
                :size="50"
                type="mdi"
                :path="menuIcon"
                
        />
      </div>
      
      <ul :class="['nav-list',active]" v-if="isUserAuthenticated">
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
        <li>
          <router-link :to="{ name: `Login` }">
            <button
              v-if="isInReset"
              class="hidden sm:block text-xs yellow p-2 rounded font-medium transform hover:scale-105"
            >
              Iniciar sesión
            </button>
          </router-link>
        </li>
      </ul>
      
    </nav>
  </header>
</template>

<script>
import ButtonSignOut from "@/components/ButtonSignOut.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu } from '@mdi/js';
export default {
  name: "Header",
  components: {
    ButtonSignOut,
    SvgIcon
  },
  props: {
    isUserAuthenticated: { type: Boolean }
  },
  mounted() {
    // this.isInReset = localStorage.getItem;
  },
  data() {
    return {
      menuIcon:mdiMenu,
      menu:false,
      active:'deactive-menu',
      nav_links: [
        { rutaName: "Home", name: "Inicio" },
        { rutaName: "ProfileUser", name: "Perfil" }
      ],
      isInReset: false
    };
  },
  watch: {
    $route(from) {
      if (from.path === "/Reset") {
        console.log("entre");
        this.isInReset = true;
        return;
      }
      this.isInReset = false;
      return;
    }
  },
  methods:{
    activeMenu(){
      this.menu = !this.menu;
      if(this.menu)
      {
        this.active='active'
      }
      else{
        this.active='deactive-menu'
      }
    }
  }
};
</script>

<style scoped>
.yellow {
  background-color: var(--yellowcomfeco);
}
.menu-btn{
  display: block;
}
.nav {
  z-index: 5;
  position: fixed;
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
.nav-list{
  z-index: 3;
  position: fixed;
  background-color: var(--bgfooter);
  top: 4.5rem;
  right: 0px;
  width: 60%;
  min-height: 100vh;
  padding-top:2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s;
  
}
.active-menu{
  transform: translateX(0%);
}
.deactive-menu{
  transform: translateX(100%);
}
.nav-item{
  margin-top:1em;
}
@media screen and (min-width: 640px) and (orientation: landscape) {
        .active-menu{
        transform: translateX(0%);
      }
      .deactive-menu{
        transform: translateX(0%);
      }
      .menu-btn{
        display: none;
      }
      .nav-list {
      display: flex;
      align-items: center;
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

}
</style>
