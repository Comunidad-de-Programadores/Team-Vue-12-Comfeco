<template>
  <button v-on:click="signOutClick" class="btn">Salir</button>
</template>

<script>
import { signOut } from "@/services/auth_services";
export default {
  methods: {
    signOutClick() {
      console.log("signOut");
      signOut()
        .then(() => {
          location.reload();
          localStorage.clear();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 0.2rem 1rem;
  margin-left: 1rem;
  border: 1px solid black;
}
</style>
