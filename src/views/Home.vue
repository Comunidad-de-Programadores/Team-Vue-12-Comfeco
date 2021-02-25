<template>
  <div class="home">
    
    <Contador/>
    <communities-card></communities-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import Recuperar from "@/components/Recuperar.vue";
import Contador from "@/components/Contador.vue";
import CommunitiesCard from "../components/CommunitiesCard.vue"
export default {
  name: "Home",
  components: {
    Contador,
    CommunitiesCard
  }
};
</script>
<style scoped>
.home{
  padding-top: 7em;
}
</style>
