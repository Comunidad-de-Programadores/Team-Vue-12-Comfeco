<template>
  <div class="edit-form-container">
    <div @click="goback()" class="edit-form__goback-btn">
      <svg-icon color="#3C043D" :size="40" type="mdi" :path="icons.goBack" />
    </div>

    <div class="edit-form__title">
      Editar perfil
    </div>
    <form action="#" class="edit-form__form">
      <div class="edit-form__avatar-container">
        <img
          class="edit-form__avatar"
          src="https://www.comfeco.com/images/leaders/leader-cristopher_paniagua.webp"
          alt=""
        />
        <div class="edit-form__avatar-btn">
          <div>
            <svg-icon
              color="#3C043D"
              :size="30"
              type="mdi"
              :path="icons.camera"
            />
          </div>
        </div>
      </div>
      <div class="edit-form__data-user">
        <div>
          <div class="edit-form__input-container">
            <label for="nick">Nick</label>
            <input type="text" placeholder="Nick de usuario" name="nick" />
          </div>
          <div class="edit-form__input-container">
            <label for="correo">Correo</label>
            <input type="email" placeholder="example@domain.com" name="nick" />
          </div>
        </div>
        <div>
          <div class="edit-form__input-container">
            <label for="genero">Género</label>
            <input type="text" name="genero" />
          </div>
          <div class="edit-form__input-container">
            <label for="fecha">Fecha de nacimiento</label>
            <input type="date" name="fecha" />
          </div>
          <div class="edit-form__input-container">
            <label for="pais">País</label>
            <input type="text" name="pais" />
          </div>
        </div>
        <div>
          <div class="edit-form__input-container">
            <label for="area">Area de conocimiento</label>
            <select name="area" class="edit-form__select-input">
              <option value="">Frontend Developer</option>
              <option value="">Backend Developer</option>
              <option value="">Dev Ops</option>
              <option value="">Video Game Developer</option>
              <option value="">UI/UX</option>
              <option value="">Database Developer</option>
              <option value="">Cloud Computing</option>
            </select>
          </div>
        </div>
        <div>
          <div class="edit-form__input-container">
            <label for="password">Contraseña</label>
            <input type="password" name="password" />
          </div>
          <div class="edit-form__input-container">
            <label for="passwordrepat">Repetir Contraseña</label>
            <input type="password" name="passwordrepeat" />
          </div>
        </div>
        <div>
          <div class="edit-form__input-container">
            <label for="facebook">
              <div class="social-label">
                <svg-icon
                  color="#3C043D"
                  :size="20"
                  type="mdi"
                  :path="icons.facebook"
                />
                <span>facebook.com/</span>
              </div>
            </label>
            <input type="text" name="facebook" />
          </div>
          <div class="edit-form__input-container">
            <label for="github">
              <div class="social-label">
                <svg-icon
                  color="#3C043D"
                  :size="20"
                  type="mdi"
                  :path="icons.github"
                />
                <span>github.com/</span>
              </div>
            </label>
            <input type="text" name="github" />
          </div>
          <div class="edit-form__input-container">
            <label for="linkedin">
              <div class="social-label">
                <svg-icon
                  color="#3C043D"
                  :size="20"
                  type="mdi"
                  :path="icons.linkedin"
                />
                <span>linkedin.com/in/</span>
              </div>
            </label>
            <input type="text" name="linkedin" />
          </div>
          <div class="edit-form__input-container">
            <label for="twitter">
              <div class="social-label">
                <svg-icon
                  color="#3C043D"
                  :size="20"
                  type="mdi"
                  :path="icons.twitter"
                />
                <span>twitter.com/</span>
              </div>
            </label>
            <input type="text" name="twitter" />
          </div>
        </div>
        <div>
          <div class="edit-form__input-container">
            <label for="biografia">Biografía</label>
            <textarea name="biografia" cols="30" rows="10"> </textarea>
          </div>
        </div>
      </div>
      <button type="submit" class="profile-edit__btn">Guardar Cambios</button>
    </form>
  </div>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiArrowLeftCircle,
  mdiCamera,
  mdiFacebook,
  mdiGithub,
  mdiLinkedin,
  mdiTwitter
} from "@mdi/js";
export default {
  name: "ProfileEditForm",
  components: {
    SvgIcon
  },
  data: () => ({
    icons: {
      goBack: mdiArrowLeftCircle,
      camera: mdiCamera,
      facebook: mdiFacebook,
      github: mdiGithub,
      linkedin: mdiLinkedin,
      twitter: mdiTwitter
    }
  }),
  methods: {
    goback() {
      this.$emit("changeview", false);
    }
  }
};
</script>
<style>
.edit-form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.edit-form__goback-btn {
  position: absolute;
  left: 0.1em;
  top: 1em;
  cursor: pointer;
}
.edit-form__title {
  font-size: 1.5em;
  font-weight: bold;
  color: var(--bgfooter);
  margin-top: 1em;
  margin-bottom: 1em;
}
.edit-form__form {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.edit-form__avatar-container {
  width: 10em;
  height: 10em;
  border-radius: 50%;
  background-color: var(--bgheader);
  position: relative;
  border: 5px solid var(--bgfooter);
  overflow: hidden;
  margin-bottom: 1em;
}
.edit-form__avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
}
.edit-form__avatar-btn {
  width: 100%;
  height: 30%;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  bottom: 0px;
  z-index: 2;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.edit-form__data-user {
  width: 90%;
}
.edit-form__input-container {
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
}
.edit-form__input-container label {
  color: var(--bgfooter);
  font-weight: bold;
}
.edit-form__input-container input,
.edit-form__select-input {
  background-color: white;
  padding: 0.2em 0.5em;
  width: 100%;
}

.edit-form__input-container input::placeholder {
  color: #c8a9a9;
}
.social-label {
  width: 100%;
  display: flex;
  align-items: center;
}
.social-label span {
  margin-left: 0.3em;
}

.profile-edit__btn {
  width: 90%;
  margin-bottom: 1em;
  margin-top: 1em;
  padding: 0.5em 1em;
  background-color: var(--bgheader);
  color: var(--yellowcomfeco);
}
@media screen and (min-width: 640px) and (orientation: landscape) {
  .edit-form__form {
    width: 80%;
  }
  .edit-form__data-user div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .edit-form__data-user div:nth-child(1) > div {
    width: 48%;
  }
  .edit-form__data-user div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .edit-form__data-user div:nth-child(2) > div {
    width: 30%;
  }
  .edit-form__data-user div:nth-child(4) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .edit-form__data-user div:nth-child(4) > div {
    width: 48%;
  }
  .edit-form__data-user div:nth-child(5) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .edit-form__data-user div:nth-child(5) > div {
    width: 48%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .edit-form__data-user div:nth-child(5) > div > input {
    width: 50%;
  }
}
</style>
