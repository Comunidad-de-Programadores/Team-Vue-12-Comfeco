<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Contador />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import Recuperar from "@/components/Recuperar.vue";
import Contador from "@/components/Contador.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Contador
  }
};
</script>
