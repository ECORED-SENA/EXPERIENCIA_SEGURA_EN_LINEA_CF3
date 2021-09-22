<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fraude electrónico
    .row.mb-5.slideInUp
      .col-lg-2
        figure.mb-5
          img(src="@/assets/curso/t2-ic1.svg", alt="icono decorativo")

      .col-lg-10
        p.mb-3.text-bold.blueT Como una de las costumbres más marcadas dentro de la actual sociedad, está el uso de las herramientas informáticas, lo que hace que sea más vulnerable a ataques cibernéticos y a los fraudes electrónicos, pues normalmente se comparten información revelando datos importantes de identidad, lo que es un espacio propicio para delincuentes. 




</template>

<script>
export default {
  name: 'Tema2',
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
