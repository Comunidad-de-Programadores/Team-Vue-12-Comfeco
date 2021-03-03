<template>
  <div class="communities-card-container">
    <div class="communities-card__title">
      Encuentra comunidades
    </div>
    <div class="communities-card__search-input">
      <div class="search-input-container">
        <input
          @keyup.enter="searchCommunity()"
          class="search-input"
          type="text"
          placeholder="Buscar por nombre..."
          v-model="communityInput"
        />
        <svg
          @click="searchCommunity()"
          version="1.1"
          class="h-4 text-dark search-icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 52.966 52.966"
          style="enable-background:new 0 0 52.966 52.966;"
          xml:space="preserve"
        >
          <path
            d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
              c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
              C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
              S32.459,40,21.983,40z"
          />
        </svg>
      </div>
    </div>
    <div class="communities-card__cards-grid">
      <community-item
        v-for="item in comunidades"
        :key="item.id"
        :title="item.name"
        :avatarlink="item.avatarlink"
        :joinlink="item.joinlink"
      ></community-item>
    </div>
  </div>
</template>
<script>
import CommunityItem from "../components/ComunityItem";
export default {
  components: {
    CommunityItem
  },
  data: () => ({
    communityInput: "",
    allCommunities: [
      {
        name: "Escuela vue",
        avatarlink:
          "https://cdn.discordapp.com/icons/757662602615849131/58a505ae959bf9a4a9afa8e300d36859.png",
        joinlink: "https://discord.gg/pucEmhYs"
      },
      {
        name: "Null*Pointers",
        avatarlink:
          "https://cdn.discordapp.com/icons/746436392157970457/46890f342efafc43891b79df6aa5b447.png",
        joinlink: "https://discord.gg/7Y9KD3RX"
      },
      {
        name: "Undefined devs",
        avatarlink:
          "https://cdn.discordapp.com/icons/719276503392583752/b809ae230473a94a3e8e8c8f437cf40d.png",
        joinlink: "https://discord.gg/SsYdZHNY"
      },
      {
        name: "Comunidad de Programadores",
        avatarlink:
          "https://cdn.discordapp.com/icons/775907616986890261/ab9f28104aea7bfaa902f903cf173a26.png",
        joinlink: "https://discord.com/invite/5Bb5yvzNPr"
      },
      {
        name: "Comunidad Coderos",
        avatarlink:
          "https://cdn.discordapp.com/icons/675180439392092170/3608a41e44b22b9ac3e5a7a35bcfaa7d.png",
        joinlink: "https://discord.gg/2WgtWYG6"
      },
      {
        name: "Fazt code",
        avatarlink:
          "https://cdn.discordapp.com/icons/466723723853037589/a_14d3c8a100d651c8f53b61e820f2c0fe.png",
        joinlink: "https://discord.com/invite/mFUY4sT"
      },
      {
        name: "Huawei Developers Latinoamérica",
        avatarlink:
          "https://scontent-lim1-1.xx.fbcdn.net/v/t1.0-0/p180x540/141847951_3613269045377071_2610951332260452757_o.jpg?_nc_cat=107&ccb=3&_nc_sid=825194&_nc_eui2=AeHjZBOhq-43n1Fnuq-2-zA6U1aL1gqNZM1TVovWCo1kzVEfdfYa6lrrG01YyrSVXKignPaBaopjWe8TD-FK4xzi&_nc_ohc=FY2aCureq7QAX-BcRUf&_nc_ht=scontent-lim1-1.xx&tp=6&oh=20dbac089e97c018de8dc9ce5cc1898e&oe=606652DA",
        joinlink: "https://www.facebook.com/groups/huaweidevslatam"
      }
    ],
    comunidades: []
  }),
  methods: {
    searchCommunity() {
      let fil = this.allCommunities.filter(elemento =>
        elemento.name.toLowerCase().includes(this.communityInput.toLowerCase())
      );
      this.comunidades = fil;
    }
  },
  mounted() {
    this.comunidades = this.allCommunities;
  }
};
</script>
<style>
.communities-card-container {
  padding-top: 8em;
  padding-bottom: 5em;
  min-height: 100vh;
}
.communities-card__title {
  text-align: center;
  font-size: 2em;
  color: var(--bgfooter);
}
.communities-card__cards-grid {
  display: grid;
  grid-template-columns: 90%;
  grid-template-rows: auto;
  justify-content: center;
}
.communities-card__search-input {
  display: flex;
  justify-content: center;
  margin-bottom: 3em;
  margin-top: 2em;
}
.search-input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #323232;
  width: 90%;
}
.search-input {
  width: 100%;
}
.search-input:focus {
  border: 0px;
}
.search-icon {
  margin: 0.2em;
  cursor: pointer;
}
@media screen and (min-width: 640px) and (orientation: landscape) {
  .communities-card__cards-grid {
    grid-template-columns: repeat(3, 30%);
    grid-gap: 3em;
  }
  .search-input-container {
    width: 50%;
  }
}
</style>
