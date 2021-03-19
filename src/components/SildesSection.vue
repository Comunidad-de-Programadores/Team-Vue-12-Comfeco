<template>
  <div class="slice_section">
    <h2 class="tittle">Ellos ya creen en esta iniciativa</h2>
    <vueper-slides
      autoplay
      :touchable="true"
      class="no-shadow"
      :arrows="false"
      :visible-slides="5"
      :gap="3"
      slide-multiple
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{
        800: { visibleSlides: 3, slideMultiple: 3 }
      }"
    >
      <vueper-slide v-for="(card, i) in leaders" :key="i">
        <template v-slot:content>
          <Card :params="card" />
        </template>
      </vueper-slide>
    </vueper-slides>
    <h2 class="tittle">Sponsors</h2>
    <vueper-slides
      :touchable="true"
      class="no-shadow"
      :visible-slides="9"
      :gap="2"
      slide-multiple
      :slide-ratio="1 / 10"
      :breakpoints="{
        800: { visibleSlides: 5, slideMultiple: 5, slideRatio: 1 / 5.5 }
      }"
    >
      <vueper-slide v-for="(slide, i) in sponsors" :key="i">
        <template v-slot:content>
          <div class="div_sponsor">
            <img :src="slide.image" alt="" class="img_sponsor" />
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import {
  getLeadersService,
  getSponsorsService
} from "@/services/slice_services.js";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide, Card },
  name: "SildesSection",
  data() {
    return {
      leaders: [],
      sponsors: []
    };
  },
  created() {
    getLeadersService(doc => {
      this.leaders = doc.data().list;
    });
    getSponsorsService(doc => {
      this.sponsors = doc.data().list;
    });
    /*   this.leaders = getleaders();
    this.sponsors = getSponsors(); */
  }
};
</script>

<style scoped>
.slice_section {
  padding: 0 5rem;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.tittle {
  padding: 2rem;
  text-align: center;
  color: #8a178c;
  font-size: 1.2rem;
  font-weight: bold;
}
.img_sponsor {
  width: 80%;
  height: auto;
  object-fit: contain;

  margin: auto;
  /*   background-color: #f7f7f7;*/
}
.div_sponsor {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vueperslides__arrow {
  color: rgb(109, 11, 206);
}
</style>
