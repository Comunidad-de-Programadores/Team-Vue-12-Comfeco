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
          localStorage.clear();
          this.$router.push({ name: "Login" });
          location.reload();
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
  color: var(--bgheader);
  background: white;
  padding: 0.2rem 1rem;
  margin-left: 1rem;
  border: 1px solid var(--bgheader);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
}
</style>
