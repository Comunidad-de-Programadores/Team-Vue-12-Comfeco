<template>
  <div class="home">
    <Descripcion />
    <Contador />
    <communities-card></communities-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import Recuperar from "@/components/Recuperar.vue";
import Contador from "@/components/Contador.vue";
import CommunitiesCard from "../components/CommunitiesCard.vue";
import Descripcion from "@/components/Descripcion.vue";

export default {
  name: "Home",
  components: {
    Contador,
    CommunitiesCard,
    Descripcion
  }
};
</script>
<style scoped>
.home {
  padding-top: 7em;
}
</style>
