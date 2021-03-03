<template>
  <div class="card-container">
    <div class="card__header-container">
      <div class="card__title">
        Comunidades
      </div>
      <div>
        <router-link class="card-link" :to="{ name: `Comunidades` }"
          >Ver más</router-link
        >
      </div>
    </div>
    <div class="card__comunity-list">
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
import CommunityItem from "./ComunityItem";
export default {
  name: "CommunitiesCard",
  components: {
    CommunityItem
  },
  data: () => ({
    comunidades: [
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
      }
    ]
  })
};
</script>
<style>
.card-container {
  background-color: #dbc0db;
  padding: 1em;
}
.card__header-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.card__title {
  color: #3c043d;
  font-weight: bold;
  font-size: 1.5em;
}
.card-link {
  color: #4992cd;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1.2em;
}
</style>
