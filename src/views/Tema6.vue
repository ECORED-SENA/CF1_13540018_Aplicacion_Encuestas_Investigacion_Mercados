<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 La encuesta

    Separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Herramientas para encuestas presenciales

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Herramientas para encuestas virtuales

    Separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Tipos de preguntas

    Separador
    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4 Realización de encuestas
    
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
