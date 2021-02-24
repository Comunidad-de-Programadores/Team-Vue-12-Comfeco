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
const fechas = {fechaActual: new Date(), fechaFinal: new Date('February 26, 2021 23:00:30') }

export default {
  data() {
    return {
      fechaActual : fechas.fechaActual,
      totalSegundos: Math.floor(((fechas.fechaFinal -  fechas.fechaActual)/1000)),
    };
  },
  watch: {
    totalSegundos: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.totalSegundos--;
          }, 1000);
        }
      },
      immediate: true,
    },    
  },
  computed: {
    segundos: function () {
      var secs = this.totalSegundos % 60;
      secs = (secs < 10)? '0' + secs : secs;
      return secs;
    },
    minutos: function () {
      var minute = Math.floor((this.totalSegundos / 60) % 60);
      minute = (minute < 10)? '0' + minute : minute;
      return minute;
    },    
    horas: function () {
      var hour = Math.floor((this.totalSegundos / 3600) % 24);
      hour = (hour < 10) ? '0' + hour : hour;
      return hour;
    },    
    dias: function () {
      var hour = Math.floor(this.totalSegundos / 3600);
      var day =  Math.floor(hour / 24);
      day = (day < 10)? '0' + day : day;
      return day;
    },      
  }
};
</script>

<style>
.contador {
  background-image: linear-gradient(90deg,
  rgba(66, 24, 108, 0.8) 0%, rgba(82, 22, 110, 0.8) 9.87%, rgba(110, 18, 112, 0.8) 30.04%, rgba(121, 34, 98, 0.8) 36.71%);
  background-color: initial;
  color: #3C043D;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bolder;
  font-family: "Poppins", sans-serif;
  padding: 40px 0;  
}

.contador_tiempo {
    display: flex;
    width: 100%;
    min-height: 140px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;  
}

.contador_tiempo p {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
}

.hora_numero {
    font-size: 103.63px;
}

.hora_texto {
    margin: -2rem 0 0 0;
    font-size: 11.33px;
}
</style>