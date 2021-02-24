<template>
  <div class="Contador">
    <p>
      <span>Días</span>
      {{ dias }} 
    </p>
    <p>
      <span>Horas</span>
       {{ horas }} 
    </p>
    <p>
      <span> Minutos </span>
      {{ minutos }}
    </p>
    <p>
      <span>Segundos </span>
      {{ segundos }} 
    </p>
    <p>
      <span>Total Segundos </span>
      {{ totalSegundos }} 
    </p>
  </div>
</template>
<script>
const fechas = {fechaActual: new Date(), fechaFinal: new Date('February 24, 2021 22:00:30') }

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
      var s = (fechas.fechaFinal -  fechas.fechaActual);
      s = this.totalSegundos;
      var secs = s % 60;
      secs = (secs < 10)? '0' + secs : secs;
      return secs;
    },
    minutos: function () {
      var s = this.totalSegundos;
      var minute = Math.floor((s / 60) % 60);
      minute = (minute < 10)? '0' + minute : minute;
      return minute;
    },    
    horas: function () {
      var s = this.totalSegundos;
      var hour = Math.floor(s / 3600);
      hour = (hour < 10) ? '0' + hour : hour;
      hour = (parseInt(hour) >= 24 ) ? '00' : hour;
      return hour;
    },    
    dias: function () {
      var s = this.totalSegundos;
      var hour = Math.floor(s / 3600);
      var day =  Math.floor(hour / 24);
      day = (day < 10)? '0' + day : day;
      return day;
    },      
  }
};
</script>

<style>
</style>