<template>
  <div class="comunity-item-container">
    <div class="comunity__avatar-container">
      <img class="comunity__avatar" :src="avatarlink" :alt="title" />
    </div>
    <div class="comunity__title">
      {{ title }}
    </div>
    <div class="comunity__button-container">
      <a target="_blank" class="comunity__join-button" :href="joinlink">
        <span>Unirme</span>
        <img src="../assets/icons/join-group.svg" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityItem",
  props: ["title", "avatarlink", "joinlink"]
};
</script>
<style scoped>
.comunity-item-container {
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1em;
  padding-bottom: 0.5em;
  border-bottom: 5px solid #69156a;
}
.comunity__avatar-container {
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background: var(--bgfooter);
}
.comunity__avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.comunity__title {
  width: 50%;
  margin-left: 1em;
  font-weight: bold;
  color: var(--bgfooter);
}
.comunity__button-container {
  height: 100%;
  width: 30%;
  display: flex;
  align-items: flex-end;
}
.comunity__join-button {
  width: 100%;
  background-color: var(--yellowcomfeco);
  font-weight: bold;
  color: #323232;
  padding: 0.2em 0.5em;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comunity__join-button img {
  width: 1.3em;
  height: 1.3em;
  margin-left: 0.2em;
}
</style>
