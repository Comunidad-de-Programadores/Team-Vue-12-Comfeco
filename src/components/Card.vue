<template>
  <div class="card__comtainer">
    <img class="img" :src="params.image" alt="" />
    <div class="name">
      <p>{{ params.name }}</p>
    </div>
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
  height: 100%;
  align-items: center;
  text-align: center;
}
.name {
  height: 30%;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}
.img {
  height: 70%;
  object-fit: cover;
  width: 100%;
}
</style>
