<template>
  <div class="links">
    <router-link class="nav-link" :to="{ name: `Login` }"
      >Inicia sesión</router-link
    >
    <div class="separeter">|</div>
    <router-link class="nav-link" :to="{ name: `Register` }"
      >Regístrate</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.separeter {
  color: #eaac01;
}
.links {
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.nav-link {
  color: white;
  position: relative;
}
.nav-link:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.15rem;
  background-color: #eaac01;
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
  bottom: -0.15rem;
  background-color: #eaac01;
  width: 100%;
  height: 1.6px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 650ms;
  transform: scaleX(1);
}
</style>
