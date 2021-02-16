<template>
  <body>
    <div class="center">
      <div class="container">
          <div class="links">
            <router-link to="/Login">Inicia sesión</router-link> |
            <router-link to="/Login">Regístrate</router-link>
          </div>
        <form action="#">
          <div class="data">
            <label>Correo electronico</label>
            <input type="text" required />
          </div>
          <div class="data">
            <label>Contraseña</label>
            <input type="password" required />
          </div>
          <div class="forgot-pass">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <div class="btn">
            <div class="inner"></div>
            <button type="submit">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  </body>
</template>

<script>
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
  background:#843c84;
  width: 410px;
  padding: 30px;
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
</style>
