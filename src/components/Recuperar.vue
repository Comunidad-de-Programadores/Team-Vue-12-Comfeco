<template>
    <div class="center">
      <div class="container2">
        <div class="links">
          Reasignar Contraseña
        </div>
        <form action="#">
          <div class="data">
            <label>Correo electronico</label>
            <input type="text" required />
          </div>
          <div class="btn">
            <div class="enviarEnlace"></div>
            <button type="submit">Enviar enlace</button>
          </div>
          <router-link :to="{ name: `Login` }">
          <div class="btn">
            <div class="inner"></div>
            <button type="submit">Iniciar sesión</button>
          </div>
          </router-link>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: "Recuperar"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  height: 100vh;
  width: 100%;
}

.container2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 55%;
  overflow: auto;
  margin-top: 10px ;
}

input[type="checkbox"] {
  display: none;
}
.container2 {
  background: #843c84;
  width: 80%;
  padding: 10px 30px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 700px) {
  .container2{
    width:410px;
  }
}

#show:checked ~ .container2 {
  display: block;
}
.container2 .close-btn {
  position: absolute;
  right: 20px;
  top: 15px;
  font-size: 18px;
  cursor: pointer;
}
.container2 .close-btn:hover {
  color: #3498db;
}
.container2 .text {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
}
.container2 form {
  margin-top: -20px;
}
.container2 form .data {
  height: 45px;
  width: 100%;
  margin: 40px 0;
}
form .data label {
  color: white;
  font-size: 16px;
}
.links {
  color: var(--yellowcomfeco);
  font-size: 20px;
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
form .btn .enviarEnlace {
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
</style>