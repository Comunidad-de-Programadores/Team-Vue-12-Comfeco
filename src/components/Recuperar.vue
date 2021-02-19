<template>
    <div class="center">
      <div class="container2">
        <div class="text-xl colorAmarilloTexto">
          Reasignar Contraseña
        </div>
        <form action="#">
          <div class="data">
            <label class="text-base text-white">Correo electronico</label>
            <input type="text" required />
          </div>
          <div class="flex justify-between py-8">
            <button class="text-md text-white font-medium p-2 rounded-md colorBoton" type="submit">Enviar enlace</button>
            <button class="text-md text-white font-medium p-2 rounded-md colorBoton" type="submit" @click.prevent="ocultarReinicio">Iniciar sesión</button>
          </div>

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
.colorAmarilloTexto{
  color: var(--yellowcomfeco);
}



.colorBoton {
    background: -webkit-linear-gradient(
    right,
    #dd9206,
    #eaac01,
    #dd9206,
    #eaac01
  );
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
/* 
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */


.container2 {
  background: #843c84;
  width: 410px;
  padding: 30px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
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
</style>
