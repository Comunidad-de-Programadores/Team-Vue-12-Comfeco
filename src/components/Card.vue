<template>
  <div class="card__comtainer">
    <img class="img" :src="params.image" alt="" />
    <p class="name">{{ params.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["params"]
};
</script>

<style scoped>
.card__comtainer {
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: #8a178c;
  align-items: center;
  text-align: center;
}
.name {
  padding: 0.2rem;
  font-size: 0.8rem;
}
.img {
  height: 7rem;
  object-fit: cover;
  width: 100%;
}
</style>
