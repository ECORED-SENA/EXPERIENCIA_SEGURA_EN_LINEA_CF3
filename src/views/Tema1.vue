<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Riesgos o amenazas asociados al uso de las nuevas tecnologías
    .row.mb-5.slideInUp
      .col-lg-2
        figure.mb-5
          img.nW(src="@/assets/curso/t1-ic1.svg", alt="icono decorativo")

      .col-lg-10
        p.mb-3.text-bold.blueT Las nuevas herramientas tecnológicas brindan oportunidades de comunicación, así, las redes sociales son de las más importantes porque se enfocan en el ocio y entretenimiento, permiten una comunicación permanente síncrona y asíncrona con amigos y familiares e, incluso, con personas totalmente desconocidas, pero...
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.custom-cardBlock(data-aos="flip-up")
          .bloque-texto-g__texto.p-4
            p.mb-0 Las TIC no solo aportan innumerables ventajas y oportunidades, <b>están acompañadas de diversos inconvenientes y peligros que afectan directamente la integridad y privacidad de la información que se comparte.</b>

          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i1.jpg')})`}"
          )


    #t_1_1.titulo-segundo
      h2 1.1  Uso prolongado de dispositivos








    Separador
    br
    br
    #t_1_2.titulo-segundo
      h2 1.2  Riesgos y recomendaciones de buen uso








    Separador
    br
    br
    #t_1_3.titulo-segundo
      h2 1.3  Uso prolongado de redes sociales

    .row.mb-5(data-aos="flip-up")
      .col-lg-2
        figure.mb-3(data-aos="flip-left")
          img.nW(src="@/assets/curso/t1-ic3.svg", alt="icono decorativo")

      .col-lg-10
        p.mb-5 El uso excesivo de los perfiles en redes sociales y el aumento de las mismas en la era digital es cada vez más común. A continuación, se expone un recurso que permitirá conocer más sobre el tema:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0 Ese exceso del uso de redes sociales, se puede dar por entendido cuando la cantidad de horas de uso afecta al normal desarrollo de la vida cotidiana (Castellana, Sánchez-Carbonell, Graner y Beranuy, 2007; Viñas, 2009) y no solo por lo que se refiere al tiempo invertido, sino también por el impacto que causa en aspectos personales y sociales de la vida, donde se acerca a los que están lejos y se aleja a los que están cerca, tal como suelen decir los eruditos en el tema.














    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

<style lang="sass" scoped></style>
