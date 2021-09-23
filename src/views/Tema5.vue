<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Ciberbullying o ciberacoso
    .row.mb-5.slideInUp
      .col-lg-4
        .animatedImage
          figure.mb-5
            img(src="@/assets/curso/t5-i1.png", alt="hombre usando un teléfono celular")
          .floatingCircle
          .floatingCircle2
      .col-lg-8
        p.mb-3.text-bold.blueT  Según la Unicef (2010), para iniciar a describir este fenómeno muy popular, se hace indispensable conocer la definición del término “<i>bullying</i>”, que se traduce en sinónimos como atemorizar, excluir, golpear, insultar, intimidar, ridiculizar, provocar o incomodar a una persona, 
        p Es por ello que hay que estar atentos a los signos de alerta que pueden presentar los niños, niñas, adolescentes y hasta adultos frente a estos temas de interés para el buen desarrollo socio emocional de una persona, más aún cuando los medios electrónicos presentes están en el diario vivir de una persona por medio de redes sociales y otras herramientas que son de uso cotidiano.

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.custom-cardBlock(data-aos="flip-up")
          .bloque-texto-g__texto.p-4
            p.mb-0 Es importante estar atentos a los cambios en comportamiento, lenguaje o pensamiento, ya que el hostigamiento online es una práctica bastante común entre los usuarios de internet, incluso se presenta de forma pasiva sin darnos cuenta. <b>El <i>ciberbullying</i> tiene bastantes semejanzas con el <i>bullying</i> tradicional (discriminación), aunque su manifestación y características son propias y es fundamental conocerlas para una sana convivencia social-digital pacífica y libre de discriminación.</b>

          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t5-i2.jpg')})`}"
          )

    .row.mb-5
      .col-lg-3
        figure.mb-5(data-aos="flip-left")
          img(src="@/assets/curso/t5-i3.svg", alt="imagen decorativa")
      .col-lg-9(data-aos="flip-up")
        p Las personas no pueden dimensionar los alcances que pueden llegar a tener lo que se publica en la red y que puede llegar a millones de usuarios en cuestión de segundos. El ciberacoso se ha vuelto una normalidad cuando se navega en internet, puesto que se presenta de manera pasiva (cuando se ve alguna imagen cuyo fin sea hacer gracia) y de manera activa (cuando ven comentarios xenófobos y ofensivos en comentarios o reseñas) por lo cual ya no es ningún tabú y, de hecho, se divide en varias facciones para identificar su tipo, tal como se relaciona a continuación: 

    //-- Aqui viene el slider

    p.mb-5  El <i>ciberbullying</i> tiene diferentes características las cuales permite ser consciente que esta práctica es más común de lo que crees, la era digital es un hecho y ha cambiado muchas formas de pensamiento, es importante conocer cuáles son sus características más relevantes y poner “stop” a esas malas prácticas de uso de las nuevas tecnologías emergentes y construir una identidad digital pertinente y segura para todas las personas. A continuación, se relacionan estas características:
    .row.mb-5
      .col-lg-4
        figure.mb-5(data-aos="flip-up")
          img(src="@/assets/curso/t5-ic1.svg", alt="imagen decorativa")
      .col-lg-4
        figure.mb-5(data-aos="flip-down")
          img(src="@/assets/curso/t5-ic2.svg", alt="imagen decorativa")
      .col-lg-4
        figure.mb-5(data-aos="flip-down")
          img(src="@/assets/curso/t5-ic3.svg", alt="imagen decorativa")

    p.mb-5  El acoso incorpora diferentes actores en los cuales se relacionan roles específicos, esto para que se materialice y de lo cual depende la forma cómo se lleve a cabo, ya sea por:
       


</template>

<script>
export default {
  name: 'Tema5',
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
