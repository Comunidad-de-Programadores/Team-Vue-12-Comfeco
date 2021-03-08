<template>
  <div class="contenedor">
    <div class="center">
      <div class="container">
        <NavBarAuth />
        <form @submit.prevent="clickRegister">
          <div class="data">
            <label class="label-form">
              <span>Nick</span>
              <span
                class="answer-style"
                v-bind:class="[getColorMessage(stateNick)]"
                >{{ getAnswer(stateNick) }}</span
              >
            </label>
            <input type="email" v-model="nickString" required="required" />
          </div>
          <div class="data">
            <label class="label-form">
              <span>Correo electrónico</span>
              <span
                class="answer-style"
                v-bind:class="[getColorMessage(stateEmail)]"
                >{{ getAnswer(stateEmail) }}</span
              >
            </label>
            <input type="text" v-model="emailString" required="required" />
          </div>
          <div class="data">
            <label class="label-form">
              <span>Contraseña</span>
              <span
                class="answer-style"
                v-bind:class="[getColorMessage(statePassword)]"
                >{{ getAnswer(statePassword) }}
              </span>
            </label>
            <input
              type="password"
              v-model="passwordString"
              required="required"
            />
          </div>
          <div class="data">
            <label class="label-form">
              <span>Confirmar Contraseña</span>
              <span
                class="answer-style"
                v-bind:class="[getColorMessage(statePassConfirm)]"
                >{{ getAnswer(statePassConfirm) }}
              </span>
            </label>
            <input
              type="password"
              v-model="passwordConfirmString"
              required="required"
            />
          </div>
          <div class="forgot-pass">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <div class="btn">
            <div class="inner"></div>
            <button type="submit">
              {{ isLoading ? "Espere..." : "Registrarse" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { registerUserService } from "@/services/auth_services";
import { existNicknameService } from "@/services/user_services";
import { stateField } from "@/services/enums.js";
import Email from "@/services/value_object/Email.js";
import Password from "@/services/value_object/Password.js";
import Nickname from "@/services/value_object/Nickname.js";
import NavBarAuth from "@/components/NavBarAuth.vue";
import lodash from "lodash";

export default {
  name: "Register",
  components: {
    NavBarAuth
  },
  data() {
    return {
      nickString: "",
      emailString: "",
      passwordString: "",
      passwordConfirmString: "",
      stateNick: stateField.INITIAL,
      stateEmail: stateField.INITIAL,
      statePassword: stateField.INITIAL,
      statePassConfirm: stateField.INITIAL,
      isLoading: false
    };
  },
  computed: {
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
    this.debouncedSetStateNick = lodash.debounce(this.setStateNick, 900);
    this.debouncedSetStateEmail = lodash.debounce(this.setStateEmail, 1100);
    this.debouncedSetStatePass = lodash.debounce(this.setStatePass, 1100);
    this.debouncedSetPassConfirm = lodash.debounce(
      this.setStatePassConfirm,
      1100
    );
  },

  methods: {
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
        this.stateEmail = stateField.EMPTY;
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
        this.statePassword = stateField.EMPTY;
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
      if (!this.password.isValid()) {
        this.statePassConfirm = stateField.INVALID;
        return;
      }
      this.statePassConfirm = stateField.VALID;
    },

    showErrorStateNick() {
      if (this.nickString == "") {
        this.stateNick = stateField.EMPTY;
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
    clickRegister() {
      if (this.isLoading) return;
      this.isLoading = true;
      if (this.showValidatedErrors()) return;
      this.registerUser();
    },
    registerUser() {
      registerUserService({
        email: this.email,
        password: this.password,
        nickname: this.nickname
      })
        .then(() => {
          this.$router.push({ name: "Home" });
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

      if (!this.nickname.isValid() || this.stateNick !== stateField.AVAILABLE) {
        this.showAlert(
          "Nick Inválido o no disponible. Mínimo 6 carácteres y máximo 20, solo carácteres alfanuméricos y guión bajo"
        );
        return true;
      }
      if (!this.email.isValid()) {
        this.showAlert("Correo Inválido");
        return true;
      }
      if (!this.password.isValid()) {
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
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.contenedor {
  height: 100vh;
  width: 100%;
  background-image: url("~@/assets/bg-desktop/bg-desktop.svg");
  background-color: var(--bgmain);
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: 50%;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input[type="checkbox"] {
  display: none;
}
.container {
  background: #843c84;
  width: 80%;

  overflow: auto;
  padding: 2rem 3.5rem 2.5rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
}
@media (min-width: 700px) {
  .container {
    width: 26rem;
  }
}
#show:checked ~ .container {
  display: block;
}
.container .close-btn {
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 18px;
  cursor: pointer;
}
.container .close-btn:hover {
  color: #3498db;
}
.container .text {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
}
.container form {
  margin-top: -20px;
}
.container form .data {
  height: 45px;
  width: 100%;
  margin: 40px 0;
}

.links {
  color: white;
  font-size: 14px;
}
form .data input {
  height: 100%;
  width: 100%;
  padding-left: 10px;
  font-size: 17px;
  border: 1px solid silver;
}
form .data input:focus {
  border-color: #3498db;
  border-bottom-width: 2px;
}
form .forgot-pass {
  margin-top: -8px;
}
form .forgot-pass a {
  font-size: 12px;
  color: #fafafa;
  text-decoration: none;
  text-decoration: underline;
}
form .btn {
  margin: 30px 0 0;
  height: 45px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
form .btn .inner {
  height: 100%;
  width: 300%;
  position: absolute;
  left: -100%;
  z-index: -1;
  background: -webkit-linear-gradient(
    right,
    #dd9206,
    #eaac01,
    #dd9206,
    #eaac01
  );
  transition: all 0.4s;
}
form .btn:hover .inner {
  left: 0;
}
form .btn button {
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
}
form .signup-link {
  text-align: center;
}
form .signup-link a {
  color: #3498db;
  text-decoration: none;
}
form .signup-link a:hover {
  text-decoration: underline;
}

form .data label {
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.label-form {
  color: white;
}
.yellow {
  color: rgb(255, 248, 34) !important;
}
.green {
  color: rgb(38, 245, 62) !important;
}
.orange {
  color: rgb(255, 166, 70) !important;
}
form .data label .answer-style {
  font-size: 0.75rem;
}
</style>
