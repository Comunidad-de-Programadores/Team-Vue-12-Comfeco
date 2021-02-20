<template>
  <div class="contenedor">
    <div class="center">
      <div class="container">
        <NavBarAuth />
        <form @submit.prevent="clickLogin">
          <div class="data">
            <label
              class="label-email"
              v-bind:class="{ invalid: showErrorMessageEmail }"
              >Correo electronico</label
            >
            <input type="text" v-model="emailString" required="required" />
          </div>
          <div class="data">
            <label
              class="label-email"
              v-bind:class="{ invalid: showErrorMessagePassword }"
              >Contraseña</label
            >
            <input
              type="password"
              v-model="passwordString"
              required="required"
            />
          </div>
          <div class="forgot-pass">
            <router-link :to="{ name: `Reset` }">
              ¿Olvidaste tu contraseña?</router-link
            >
          </div>
          <div class="btn">
            <div class="inner"></div>
            <button type="submit">{{ botomName }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "@/services/auth_services";
import Email from "@/services/value_object/Email.js";
import Password from "@/services/value_object/Password.js";
import NavBarAuth from "@/components/NavBarAuth.vue";

export default {
  name: "Login",
  components: {
    NavBarAuth
  },
  data() {
    return {
      emailString: "",
      passwordString: "",
      isLoading: false,
      showErrorMessageLogin: false
    };
  },
  computed: {
    botomName() {
      return this.isLoading ? "Espere..." : "Ingresar";
    },
    email() {
      return new Email(this.emailString);
    },
    password() {
      return new Password(this.passwordString);
    },
    showErrorMessageEmail() {
      return !this.email.isValid() && this.showErrorMessageLogin;
    },
    showErrorMessagePassword() {
      return !this.password.isValid() && this.showErrorMessageLogin;
    }
  },
  methods: {
    clickLogin() {
      if (this.isLoading) return;
      this.isLoading = true;
      if (this.showValidatedErrors()) return;
      signInWithEmailAndPassword({
        email: this.email,
        password: this.password
      })
        .then(() => {
          localStorage.setItem("isAuth", true);
          this.$router.push({ name: "Home" });
        })
        .catch(error => {
          var errorMessage = error.message;
          this.showAlert(errorMessage);
        });
    },
    showValidatedErrors() {
      this.showErrorMessageLogin = true;
      if (!this.email.isValid() && !this.password.isValid()) {
        this.showAlert("Correo y contraseña inválidos");
        return true;
      }
      if (!this.email.isValid()) {
        this.showAlert("Correo Inválido");
        return true;
      }
      if (!this.password.isValid()) {
        this.showAlert("Mínimo 6 carácteres y máximo 60 carácteres");
        return true;
      }
      return false;
    },
    showAlert(errorMessage) {
      this.isLoading = false;
      alert(errorMessage);
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
  width: 26rem;
  padding: 3rem 3.5rem 2rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
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
form .data label {
  color: white;
  font-size: 18px;
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
  margin: 30px 0;
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
.label-email {
  color: white;
  font-size: 18px;
}
.invalid {
  color: rgb(255, 97, 97) !important;
}
</style>
