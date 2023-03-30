<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.container.justify-content-around.align-items-center.p-2.p-md-3.fondo-introduccion.mb-5

      figure
        img(src="@/assets/curso/temas/img-fondo-texto-intro.png").img-fondo-texto-intro
    
      .col-md.col-lg-7
        .bloque-texto-color-introduccion.p-4
          p.txt-introduccion Apreciado aprendiz, bienvenido a este componente formativo, donde usted encontrará una contextualización acerca del concepto de suelo y de cómo las prácticas no sostenibles han generado impactos negativos sobre él. Así mismo, se abordará el manejo sostenible del suelo, a través de información crucial sobre las problemáticas presentadas, los aspectos relevantes y las herramientas y técnicas comúnmente utilizadas. Igualmente, se presentarán los beneficios que reciben los suelos al implementar estas técnicas, junto con las pautas para llevar a cabo un adecuado plan de manejo ambiental, con los requerimientos metodológicos necesarios y los mecanismos de participación ciudadana.
            br
            br
            |El manejo y la conservación del suelo, requiere de conocimientos básicos sobre acciones pertinentes para intervenir este recurso, procurando, siempre, su sostenibilidad frente a formas de uso y conservación. Sumado a esto, se deben implementar estrategias para el diseño de recursos de apoyo estructural por medio de prácticas agrícolas sostenibles y amigables con el medio ambiente.
            br
            br
      
      .col-md.col-lg-5
        figure
          img(data-aos="fade-left")(src="@/assets/curso/temas/img-introduccion.png").img-introduccion
    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo. 


    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/GQDvZLMCT5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
