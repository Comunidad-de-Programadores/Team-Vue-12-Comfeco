<template>
  <div class="profile-card-container">
    <div class="profile-card">
      <div class="profile-card-link" @click="changeViewToEditProfile()">
        Editar perfil
      </div>
      <div class="profile-card__avatar">
        <img :src="user.avatar" :alt="user.name" />
      </div>
      <div class="profile-card__about">
        <div class="profile-card__name">
          {{ user.name }}
        </div>
        <div class="profile-card__area">
          {{ user.area }}
        </div>
      </div>
      <div class="profile-card__description">
        {{ user.biography }}
      </div>
      <div class="profile-card__social-network-link-container">
        <a
          target="_blank"
          :href="user.social.facebook"
          class="profile-card__social-icon"
        >
          <svg-icon
            type="mdi"
            :size="28"
            color="white"
            :path="icons.facebook"
          />
        </a>
        <a
          target="_blank"
          :href="user.social.github"
          class="profile-card__social-icon"
        >
          <svg-icon type="mdi" :size="28" color="white" :path="icons.github" />
        </a>
        <a
          target="_blank"
          :href="user.social.linkedin"
          class="profile-card__social-icon"
        >
          <svg-icon
            type="mdi"
            :size="28"
            color="white"
            :path="icons.linkedin"
          />
        </a>
        <a
          target="_blank"
          :href="user.social.twitter"
          class="profile-card__social-icon"
        >
          <svg-icon type="mdi" :size="28" color="white" :path="icons.twitter" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiFacebook, mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js";
export default {
  name: "ProfileCard",
  components: {
    SvgIcon
  },
  data: () => ({
    icons: {
      facebook: mdiFacebook,
      github: mdiGithub,
      linkedin: mdiLinkedin,
      twitter: mdiTwitter
    },
    user: {
      name: "Bazael Pérez",
      avatar:
        "https://www.comfeco.com/images/leaders/leader-cristopher_paniagua.webp",
      area: "Frontend Developer / UX/UI",
      biography:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. l sapiente assumenda molestias voluptas blanditiis.",
      social: {
        facebook: "#",
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  }),
  methods: {
    changeViewToEditProfile() {
      this.$emit("changeview", true);
    }
  }
};
</script>
<style>
.profile-card-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.profile-card {
  width: 100%;
  background-color: #d0b0d1;
}
.profile-card-link {
  color: #4992cd;
  text-align: end;
  padding: 0.5em;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
}
.profile-card__avatar {
  width: 100%;
  display: flex;
  justify-content: center;
}
.profile-card__avatar img {
  width: 15em;
  height: 15em;
  border-radius: 50%;
}
.profile-card__about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
}
.profile-card__name {
  font-size: 2em;
  font-weight: bold;
  color: var(--bgfooter);
}
.profile-card__area {
  color: var(--bgfooter);
}
.profile-card__description {
  padding: 1em;
  text-align: center;
  color: #2a062a;
  border-bottom: 0.5em solid #69156a;
}
.profile-card__social-network-link-container {
  display: flex;
  justify-content: space-evenly;
  margin: 1em 0em 1em 0em;
}
.profile-card__social-icon {
  background-color: #69156a;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
</style>
