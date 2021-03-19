<template>
  <div class="contador">
    <div class="contador_tiempo">
      <p>
        <span class="hora_numero">{{ dias }} </span>
        <span class="hora_texto">Días </span>
      </p>
      <p>
        <span class="hora_numero">{{ horas }} </span>
        <span class="hora_texto">Horas </span>
      </p>
      <p>
        <span class="hora_numero">{{ minutos }}</span>
        <span class="hora_texto"> Minutos </span>
      </p>
      <p>
        <span class="hora_numero">{{ segundos }} </span>
        <span class="hora_texto">Segundos </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    setInterval(this.countdouwn, 1000);
  },
  data() {
    return {
      dias: "",
      horas: "",
      minutos: "",
      segundos: ""
    };
  },
  methods: {
    countdouwn() {
      let fechaActual = new Date();
      let fechaFinal = new Date("25 March 2021 10:00:00");
      let totalSegundos = Math.floor((fechaFinal - fechaActual) / 1000);
      this.dias = Math.floor(totalSegundos / 3600 / 24);
      this.horas = Math.floor(totalSegundos / 3600) % 24;
      this.minutos = ("0" + (Math.floor(totalSegundos / 60) % 60)).slice(-2);
      this.segundos = ("0" + Math.floor(totalSegundos % 60)).slice(-2);
    }
  }
};
</script>

<style>
.contador {
  background-image: linear-gradient(
    90deg,
    rgba(66, 24, 108, 0.8) 0%,
    rgba(82, 22, 110, 0.8) 9.87%,
    rgba(110, 18, 112, 0.8) 30.04%,
    rgba(121, 34, 98, 0.8) 36.71%
  );
  background-color: initial;
  color: #3c043d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bolder;
  font-family: "Poppins", sans-serif;
  padding: 1em 0;
}

.contador_tiempo {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.contador_tiempo p {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hora_numero {
  font-size: 3em;
}

.hora_texto {
  font-size: 1em;
}
@media screen and (min-width: 640px) and (orientation: landscape) {
  .hora_numero {
    font-size: 7em;
  }

  .hora_texto {
    transform: translateY(-80%);
    font-size: 2em;
  }
}
</style>
