<template>
  <main>
    <section class="text-center">
      <h1 class="text-4xl">Bienvenidos a Community Fest and Code</h1>
      <h2 class="text-xl">!Conoce gente aprende y gana¡</h2>
      <p>La próxima edición regresa en el <span class="font-bold">{{anio}}</span>, en la cual se planea involucrar a todos los programadores independientes</p>
      <p>del área de conocimientos que se encuentre, todo con un mismo proposito, <span class="font-medium">aprender en comunidad</span>.</p>
    </section>
  </main>
</template>

<script>
  export default {
    name: "Descripcion",
    mounted() {
      this.year();
    },
    data() {
      return {
        anio: 0
      }
    },
    methods: {
      year() {
        let anioActual = new Date();
        this.anio = anioActual.getFullYear()+1
      }
    }
    
  }
</script>

<style scoped>

</style>