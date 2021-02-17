<template>
  <div class="polices-comfeco-container">
    <div class="polices-card">
      <h1 class="polices-card__title">
        Política de privacidad y protección de datos
      </h1>
      <div class="polices-card__text">
        <h2 class="polices-card__subtitle">Licencia</h2>
        <p>
          Tu contenido sigue siendo tuyo, lo que significa que seguirás siendo
          titular de los derechos de propiedad intelectual que tengas sobre él.
          Por ejemplo, tienes derechos de propiedad intelectual sobre el
          contenido que creas, como las reseñas que escribes. O puede que tengas
          el derecho a compartir el contenido que otro usuario ha creado si te
          ha dado permiso para hacerlo.
        </p>
        <br />
        <p>
          Necesitamos tu permiso si tus derechos de propiedad intelectual
          restringen nuestro uso de tu contenido. Concedes a Google este permiso
          a través de esta licencia.
        </p>
        <br />
        <h2 class="polices-card__subtitle">Ámbito</h2>
        Esta licencia es:<br />
        <p>
          Mundial, lo que quiere decir que es válida en todo el mundo. No
          exclusiva, lo que quiere decir que puedes conceder una licencia de tu
          contenido a terceros. Libre de royalties, lo que quiere decir que no
          hay que pagar una tarifa por esta licencia.
        </p>
        <br />
        <h2 class="polices-card__subtitle">Derechos</h2>
        Esta licencia permite a Google hacer lo siguiente: Alojar, reproducir,
        distribuir, comunicar y usar tu contenido; por ejemplo, para guardarlo
        en nuestros sistemas y permitir que puedas acceder a él desde cualquier
        lugar. Publicar, ejecutar o mostrar públicamente tu contenido, si has
        hecho que sea visible para otros usuarios. Modificar o crear obras
        derivadas que estén basadas en tu contenido; por ejemplo, mediante un
        cambio de formato o una traducción.
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.polices-comfeco-container {
  width: 100%;
  height: 100vh;
  background-color: var(--bgmain);
  display: flex;
  justify-content: center;
}
.polices-card {
  margin-top: 2em;
  margin-bottom: 2em;
  width: 90%;
  background-color: var(--bgcard);
  padding: 1em;
  overflow: auto;
}
.polices-card__title {
  color: var(--yellowcomfeco);
  font-size: 1.5em;
  margin-bottom: 1em;
}
.polices-card__text {
  color: white;
}
.polices-card__subtitle {
  font-size: 1.2em;
}

@media screen and (min-width: 640px) and (orientation: landscape) {
  .polices-comfeco-container {
    background-image: url("../assets/bg-desktop/bg-desktop.svg");
    background-repeat: no-repeat;
    background-position-y: 50%;
    background-position-x: 50%;
  }
  .polices-card {
    width: 80%;
    box-shadow: black 0px 0px 20px;
  }
}
</style>
