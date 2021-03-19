<template>
  <div class="home">
    <div class="home__content-center">
      <div class="home__description-container">
        <descripcion />
      </div>
      <div class="home__collaborators-slide-container">
        <SildesSection />
      </div>

      <div class="home__clockdown-container">
        <contador />
      </div>
    </div>
    <div class="home__communities-container">
      <communities-card />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Recuperar from "@/components/Recuperar.vue";
import Contador from "@/components/Contador.vue";
import CommunitiesCard from "../components/CommunitiesCard.vue";
import Descripcion from "@/components/Descripcion.vue";
import SildesSection from "@/components/SildesSection.vue";

export default {
  name: "Home",
  components: {
    Contador,
    CommunitiesCard,
    SildesSection,
    Descripcion
  }
};
</script>
<style scoped>
.home {
  padding-top: 9em;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home__content-center {
  width: 90%;
}
.home__description-container,
.home__collaborators-slide-container,
.home__sponsors-slide-container,
.home__clockdown-container {
  width: 100%;
  margin-bottom: 1em;
}
.home__communities-container {
  width: 90%;
  margin-bottom: 1em;
}
@media screen and (min-width: 900px) and (orientation: landscape) {
  .home {
    display: grid;
    grid-template-columns: 25% 60% 10%;
    grid-template-rows: auto;
    justify-content: center;
    justify-items: center;
  }
  .home__content-center {
    grid-column: 2;
    grid-row: 1;
  }
  .home__communities-container {
    width: 100%;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
  }
}
</style>
