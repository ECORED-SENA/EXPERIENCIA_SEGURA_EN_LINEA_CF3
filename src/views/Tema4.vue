<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Amenazas a la privacidad
    .row.mb-5
      .col-lg-8.slideInLeft
        p.mb-3.text-bold.blueT  Tanto en las redes sociales como en internet en general, se está propenso a que se filtren los datos personales debido a que se acepten términos y condiciones sin leer previamente como en un ciberataque realizado por un pirata informático o los tan mencionados hackers.
        p.mb-3  La privacidad en sí comprende las actividades que se llevan a cabo en un ámbito reservado; en internet se entiende como el control sobre la información para limitar la cantidad de personas autorizadas a acceder a la misma. Esto incluye datos personales, fotografías, documentos, conversaciones, entre otras.
      .col-lg-4
        .animatedImage.slideInRight
          figure.mb-5
            img(src="@/assets/curso/t4-i1.png", alt="hombre con un pasamontañas en su cabeza")
          .floatingCircle
          .floatingCircle2

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.custom-cardBlock.ltr(data-aos="flip-up")
          .bloque-texto-g__texto.p-4
            p.mb-0 La virtualización de muchas actividades ha transformado las bases de la sociedad y es comúnmente conocida como sociedad de la información y del conocimiento, que radica su fundamento en utilizar dispositivos digitales para las tareas diarias tales como comprar, vender, realizar operaciones financieras entre otras, a través de un solo clic.

          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t4-i2.jpg')})`}"
          )









      


</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass" scoped>
.floatingCircle, .floatingCircle2
  background-image: url('../assets/curso/circle1.svg')
  background-size: cover
</style>
