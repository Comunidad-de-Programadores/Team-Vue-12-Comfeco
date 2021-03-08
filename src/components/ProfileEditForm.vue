<template>
  <div class="edit-form-container">
    <div @click="goback()" class="edit-form__goback-btn">
      <svg-icon color="#3C043D" :size="40" type="mdi" :path="icons.goBack" />
    </div>

    <div class="edit-form__title">
      Editar perfil
    </div>
    <form @submit.prevent="clickUpdateUser" class="edit-form__form">
      <div class="edit-form__avatar-container">
        <img class="edit-form__avatar" :src="userData.avatar" alt="" />
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
            <label for="nick" class="label-form">
              <span>Nick</span>
              <span
                class="answer-style"
                v-bind:class="[getColorMessage(stateNick)]"
                >{{ getAnswer(stateNick) }}</span
              ></label
            >
            <input
              type="text"
              :placeholder="userProp.nick"
              name="nick"
              v-model.trim="nickString"
            />
          </div>
          <div class="edit-form__input-container">
            <label for="correo" class="label-form"
              ><span>Correo</span>
              <span
                class="answer-style"
                v-bind:class="[getColorMessage(stateEmail)]"
                >{{ getAnswer(stateEmail) }}</span
              ></label
            >
            <input
              type="email"
              v-model.trim="emailString"
              :placeholder="userProp.email"
              name="nick"
            />
          </div>
        </div>
        <div>
          <div class="edit-form__input-container">
            <label for="genero">Género</label>
            <input type="text" name="genero" v-model.trim="userData.genero" />
          </div>
          <div class="edit-form__input-container">
            <label for="fecha">Fecha de nacimiento</label>
            <input type="date" name="fecha" v-model.trim="userData.fecha" />
          </div>
          <div class="edit-form__input-container">
            <label for="pais">País</label>
            <input type="text" name="pais" v-model.trim="userData.pais" />
          </div>
        </div>
        <div>
          <div class="edit-form__input-container">
            <label for="name">Nombre</label>
            <input type="text" name="name" v-model.trim="userData.name" />
          </div>
          <div class="edit-form__input-container">
            <label for="area">Area de conocimiento</label>
            <select
              name="area"
              class="edit-form__select-input"
              v-model="userData.area"
              ><option disabled value="NOT_COINCIDENCE"
                >Seleccione un area</option
              >
              <option
                v-for="(option, index) in areasArrays"
                v-bind:value="option"
                v-bind:key="index"
              >
                {{ areas[option] }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <div class="edit-form__input-container">
            <label for="password" class="label-form">
              <span>Contraseña</span>
              <span
                class="answer-style"
                v-bind:class="[getColorMessage(statePassword)]"
                >{{ getAnswer(statePassword) }}
              </span>
            </label>
            <input type="password" name="password" v-model="passwordString" />
          </div>
          <div class="edit-form__input-container">
            <label for="passwordrepat" class="label-form">
              <span>Repetir Contraseña</span>
              <span
                class="answer-style"
                v-bind:class="[getColorMessage(statePassConfirm)]"
                >{{ getAnswer(statePassConfirm) }}
              </span>
            </label>
            <input
              type="password"
              v-model="passwordConfirmString"
              name="passwordrepeat"
            />
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
            <input
              type="text"
              name="facebook"
              v-model.trim="userData.social.facebook"
            />
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
            <input
              type="text"
              name="github"
              v-model.trim="userData.social.github"
            />
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
            <input
              type="text"
              name="linkedin"
              v-model.trim="userData.social.linkedin"
            />
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
            <input
              type="text"
              name="twitter"
              v-model.trim="userData.social.twitter"
            />
          </div>
        </div>
        <div>
          <div class="edit-form__input-container">
            <label for="biografia">Biografía</label>
            <textarea
              name="biografia"
              cols="30"
              rows="10"
              v-model.trim="userData.biography"
            >
            </textarea>
          </div>
        </div>
      </div>
      <button type="submit" class="profile-edit__btn">
        {{ isLoading ? "Espere..." : "Guardar Cambios" }}
      </button>
    </form>
  </div>
</template>
<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  stateField,
  areasEnum,
  imagenDefaultPerfil
} from "@/services/enums.js";
import {
  existNicknameService,
  updateUserService
} from "@/services/user_services";
import Email from "@/services/value_object/Email.js";
import Password from "@/services/value_object/Password.js";
import Nickname from "@/services/value_object/Nickname.js";
import lodash from "lodash";
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
  props: ["userProp"],

  data: () => ({
    areas: {},
    userData: {},
    icons: {
      goBack: mdiArrowLeftCircle,
      camera: mdiCamera,
      facebook: mdiFacebook,
      github: mdiGithub,
      linkedin: mdiLinkedin,
      twitter: mdiTwitter
    },
    nickString: "",
    emailString: "",
    passwordString: "",
    passwordConfirmString: "",
    stateNick: stateField.INITIAL,
    stateEmail: stateField.INITIAL,
    statePassword: stateField.INITIAL,
    statePassConfirm: stateField.INITIAL,
    isLoading: false
  }),
  methods: {
    goback() {
      this.$emit("changeview", false);
    },
    async setStateNick() {
      if (this.showErrorStateNick()) return;
      this.stateNick = stateField.LOADING;
      try {
        const existNick = await existNicknameService({
          nickname: this.nickname.getValue()
        });
        if (existNick) this.stateNick = stateField.NOT_AVAILABLE;
        else this.stateNick = stateField.AVAILABLE;
      } catch (error) {
        this.stateNick = stateField.ERROR;
      }
    },
    setStateEmail() {
      if (this.emailString == "") {
        this.stateEmail = stateField.INITIAL;
        return;
      }
      if (!this.email.isValid()) {
        this.stateEmail = stateField.INVALID;
        return;
      }
      this.stateEmail = stateField.VALID;
    },
    setStatePass() {
      if (this.passwordString == "") {
        this.statePassword = stateField.INITIAL;
        return;
      }
      if (!this.password.isValid()) {
        this.statePassword = stateField.INVALID;
        return;
      }
      this.statePassword = stateField.VALID;
    },
    setStatePassConfirm() {
      if (this.passwordString !== this.passwordConfirmString) {
        this.statePassConfirm = stateField.NOT_COINCIDENCE;
        return;
      }
      if (this.passwordConfirmString == "") {
        this.statePassConfirm = stateField.INITIAL;
        return;
      }
      if (!this.password.isValid()) {
        this.statePassConfirm = stateField.INVALID;
        return;
      }
      this.statePassConfirm = stateField.VALID;
    },

    showErrorStateNick() {
      if (this.nickString == "") {
        this.stateNick = stateField.INITIAL;
        return true;
      }
      if (!this.nickname.isValid()) {
        this.stateNick = stateField.INVALID;
        return true;
      }
      return false;
    },
    getColorMessage(state) {
      const options = {
        [stateField.LOADING]: "",
        [stateField.INITIAL]: "",
        [stateField.AVAILABLE]: "green",
        [stateField.NOT_AVAILABLE]: "yellow",
        [stateField.ERROR]: "yellow",
        [stateField.NOT_COINCIDENCE]: "orange",
        [stateField.EMPTY]: "orange",
        [stateField.VALID]: "green",
        [stateField.INVALID]: "orange",
        default: ""
      };
      return options[state] || options["default"];
    },
    getAnswer(state) {
      const options = {
        [stateField.INITIAL]: "",
        [stateField.LOADING]: ". . .",
        [stateField.AVAILABLE]: "Disponible",
        [stateField.NOT_AVAILABLE]: "Ya en uso",
        [stateField.EMPTY]: "Falta completar",
        [stateField.INVALID]: "No válido",
        [stateField.VALID]: "Válido",
        [stateField.ERROR]: "hubo un error",
        [stateField.NOT_COINCIDENCE]: "No coinciden",
        default: ""
      };
      return options[state] || options["default"];
    },
    clickUpdateUser() {
      console.log(this.userData.fecha);
      if (this.isLoading) return;
      this.isLoading = true;
      if (this.showValidatedErrors()) return;
      this.updateUser();
    },
    updateUser() {
      updateUserService({
        email: this.emailString ? this.email.getValue() : "",
        password: this.passwordString ? this.password.getValue() : "",
        nickname: this.nickString ? this.nickname.getValue() : "",
        data: this.userData
      })
        .then(() => {
          if (this.nickname.isValid()) this.userData.nick = this.nickString;
          if (this.email.isValid()) this.userData.email = this.emailString;
          this.showAlert("Se editó su perfil");
          this.nickString = "";
          this.emailString = "";
          this.passwordString = "";
          this.passwordConfirmString = "";
        })
        .catch(error => {
          const options = {
            [stateField.NOT_AVAILABLE]: "El nick ya está en uso",

            "auth/email-already-in-use":
              "El email ya está siendo usado por otra cuenta",
            default: error?.message ?? ""
          };
          if (error.code === stateField.NOT_AVAILABLE) {
            this.stateNick = stateField.NOT_AVAILABLE;
          }

          this.showAlert(options[error.code] || options["default"]);
        });
    },
    showValidatedErrors() {
      this.showErrorMessageLogin = true;
      if (this.passwordString !== this.passwordConfirmString) {
        this.showAlert("Las contraseñas no coinciden");
        return true;
      }

      if (
        this.nickString &&
        (!this.nickname.isValid() || this.stateNick !== stateField.AVAILABLE)
      ) {
        this.showAlert(
          "Nick Inválido o no disponible. Mínimo 6 carácteres y máximo 20, solo carácteres alfanuméricos y guión bajo"
        );
        return true;
      }
      if (this.emailString && !this.email.isValid()) {
        this.showAlert("Correo no válido");
        return true;
      }
      if (this.passwordString && !this.password.isValid()) {
        this.showAlert("Contraseña mínimo 6 carácteres y máximo 60 carácteres");
        return true;
      }
      return false;
    },
    showAlert(errorMessage) {
      this.isLoading = false;
      alert(errorMessage, "");
      return;
    }
  },
  computed: {
    areasArrays() {
      const areasArray = Object.keys(this.areas);
      areasArray.pop();
      return areasArray;
    },
    email() {
      return new Email(this.emailString);
    },
    password() {
      return new Password(this.passwordString);
    },
    nickname() {
      return new Nickname(this.nickString);
    }
  },
  watch: {
    nickname: function() {
      if (this.stateNick === stateField.INITIAL) {
        this.debouncedSetStateNick();
        return;
      }
      if (this.showErrorStateNick()) return;
      this.stateNick = stateField.LOADING;
      this.debouncedSetStateNick();
    },
    email: function() {
      if (this.stateEmail === stateField.INITIAL) {
        this.debouncedSetStateEmail();
        return;
      }
      this.setStateEmail();
    },
    password: function() {
      if (this.statePassword === stateField.INITIAL) {
        this.debouncedSetStatePass();
        return;
      }
      this.setStatePass();
      if (this.statePassConfirm !== stateField.INITIAL)
        this.setStatePassConfirm();
    },
    passwordConfirmString: function() {
      if (this.statePassConfirm === stateField.INITIAL) {
        this.debouncedSetPassConfirm();
        return;
      }
      this.setStatePassConfirm();
    }
  },
  created() {
    this.userData = {
      name: this.userProp?.name ?? "",
      avatar: this.userProp?.avatar ?? imagenDefaultPerfil,
      area: this.userProp?.area ?? "NOT_COINCIDENCE",
      genero: this.userProp?.genero ?? "",
      nick: new Nickname(this.userProp?.nick).getValue(),
      email: new Email(this.userProp?.email).getValue(),
      fecha: this.userProp?.fecha ?? "",
      pais: this.userProp?.pais ?? "",
      biography: this.userProp?.biography ?? "",
      social: {
        facebook: this.userProp?.social?.facebook ?? "",
        github: this.userProp?.social?.github ?? "",
        linkedin: this.userProp?.social?.linkedin ?? "",
        twitter: this.userProp?.social?.twitter ?? ""
      }
    };
    this.areas = areasEnum;
    this.debouncedSetStateNick = lodash.debounce(this.setStateNick, 900);
    this.debouncedSetStateEmail = lodash.debounce(this.setStateEmail, 1100);
    this.debouncedSetStatePass = lodash.debounce(this.setStatePass, 1100);
    this.debouncedSetPassConfirm = lodash.debounce(
      this.setStatePassConfirm,
      1100
    );
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
.label-form {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.answer-style {
  font-size: 0.75rem;
}
.yellow {
  color: rgb(194, 155, 0) !important;
}
.green {
  color: rgb(32, 218, 53) !important;
}
.orange {
  color: rgb(255, 119, 70) !important;
}
</style>
