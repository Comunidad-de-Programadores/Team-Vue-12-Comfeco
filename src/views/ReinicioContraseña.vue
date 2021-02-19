<template>
  <div>
    <div class="contenedor">
      <Recuperar />
  </div>
  </div>
</template>

<script>
import Recuperar from "@/components/Recuperar.vue";
  export default {
    name: "Reset",
    components: {
      Recuperar
    }
    
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
/* * {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
} */

.contenedor {
  height: 100vh;
  /* width: 100%; */
  background-image: url("~@/assets/bg-desktop/bg-desktop.svg");
  background-color: var(--bgmain);
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: 50%;
}

</style>
