<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p A continuación, encontrará la información necesaria para la comprensión del uso sostenible del suelo, así como el compilado de las técnicas utilizadas para la protección de la erosión u otro tipo de afectaciones de origen antrópico. Así mismo, encontrará datos relevantes sobre los planes de manejo ambiental, su función, los actores que participan en él y las fases de su implementación. Todo esto, está diseñado para que afiance sus conocimientos y alcance los objetivos planteados en el componente.  


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/img-sintesis.png", alt="alt").img-sintesis
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
