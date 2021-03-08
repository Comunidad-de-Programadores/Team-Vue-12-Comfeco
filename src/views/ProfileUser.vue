<template>
  <div class="profile-user-container">
    <div class="profile-user__tabs-container">
      componente de tabs
    </div>
    <div class="profile-user__content" v-if="!showProfileEdit">
      <div class="profile-user__profile-tab">
        <div class="profile-user__profile-card">
          <profile-card @changeview="changeShowProfileEdit" :userData="user" />
        </div>
        <div class="profile-user__activities-container">
          <div class="profile-user__badges-container">
            componente de insignias
          </div>
          <div class="profile-user__actions">
            componente de actividades recientes
          </div>
        </div>
        <div class="profile-user__events">
          Componente de eventos de interes
        </div>
      </div>
    </div>
    <div v-else class="profile-user-edit-view">
      <profile-edit-form @changeview="changeShowProfileEdit" :userProp="user" />
    </div>
  </div>
</template>
<script>
import ProfileCard from "../components/ProfileCard";
import ProfileEditForm from "../components/ProfileEditForm.vue";
export default {
  components: {
    ProfileCard,
    ProfileEditForm
  },
  props: ["user"],
  data: () => ({
    showProfileEdit: false
  }),
  methods: {
    changeShowProfileEdit(status) {
      this.showProfileEdit = status;
    }
  }
};
</script>
<style>
.profile-user-container {
  width: 100%;
  min-height: 100vh;
  padding-top: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5e7f5;
  padding-bottom: 3em;
}
.profile-user__tabs-container {
  display: flex;
  justify-content: center;
}
.profile-user__content {
  width: 100%;
  display: flex;
  justify-content: center;
}
.profile-user__profile-tab {
  width: 90%;
}
.profile-user-edit-view {
  width: 90%;
}
@media screen and (min-width: 640px) and (orientation: landscape) {
  .profile-user__profile-tab {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: auto;
    justify-items: center;
  }
}
</style>
