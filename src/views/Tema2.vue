<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Plan de manejo ambiental
    
    .row.container.justify-content-around.align-items-center

      p Un plan de manejo ambiental significa organizar y programar actividades, o prácticas preventivas o correctivas, para la intervención de suelos.

      
      .tarjeta.bloque-slider1-tema2.p-4
        
        figure
            img(src='@/assets/curso/temas/img-fondo-slider1-tema2.png', alt='Texto que describa la imagen').img-fondo-slider1-tema2
        
        
        
        SlyderA(tipo="b")
          .row
            .col-md-6.mb-4.mb-md-0
              h4.txt1-slider-tema2 Diagnóstico
              p.txt1-slider-tema2 El diagnóstico se refiere al resultado de una evaluación ambiental detallada realizada en una zona determinada, cuyo objetivo es establecer las acciones que se llevarán a cabo para corregir, disminuir, prevenir y compensar los daños generados por la ejecución de prácticas no sostenibles de uso del suelo.  

            .col-md-6
              figure
                img(data-aos="flip-right")(src='@/assets/curso/temas/img-diagnostico-tema2.png', alt='Texto que describa la imagen').img-slider-tema2
                //figcaption Leyenda de la imagen

          .row
            .col-md-6.mb-4.mb-md-0
              h4.txt-slider-tema2 Ejecución
              p.txt-slider-tema2 La ejecución de un plan de manejo se divide en cuatro fases. Primero, en la delimitación, se establecen y documentan las problemáticas en la gestión sostenible de los suelos, esto se realiza con la ayuda de la comunidad y se revisa la disponibilidad de recursos económicos para una posible intervención.

            .col-md-6
              figure
                img(data-aos="flip-right")(src='@/assets/curso/temas/img-ejecucion-tema2.png', alt='Texto que describa la imagen').img-slider-tema2
                //figcaption Leyenda de la imagen

          .row
            .col-md-6.mb-4.mb-md-0
              h4.txt-slider-tema2 Prácticas a realizar
              p.txt-slider-tema2 Si los parámetros anteriores se cumplen, se entra en una segunda fase, la de diagnóstico, aquí se dejan por escrito las prácticas no sostenibles del uso del suelo, sirviendo de insumo para iniciar la tercera fase o fase de planificación. En esta, se parte del diagnóstico tanto de las prácticas no sostenibles como del contexto sociocultural.

            .col-md-6
              figure
                img(data-aos="flip-right")(src='@/assets/curso/temas/img-practicas a-realizar-tema2.png', alt='Texto que describa la imagen').img-slider-tema2
                //figcaption Leyenda de la imagen

          .row
            .col-md-6.mb-4.mb-md-0
              h4.txt-slider-tema2 Plan de Intervención
              p.txt-slider-tema2 Posteriormente, se diseña un plan de intervención para la gestión sostenible del suelo, en el cual se incluye un cronograma y el presupuesto necesario para su ejecución, trazando unas metas claras para el final de la intervención. Es importante incluir a la comunidad en este proceso.

            .col-md-6
              figure
                img(data-aos="flip-right")(src='@/assets/curso/temas/img-plan-de-intervencion-tema2.png', alt='Texto que describa la imagen').img-slider-tema2
                //figcaption Leyenda de la imagen

          .row
            .col-md-6.mb-4.mb-md-0
              h4.txt-slider-tema2 Implementación
              p.txt-slider-tema2 Una vez ajustados los parámetros y contando con un documento final que recoja todas las apreciaciones, se pasa a una última fase, la de implementación y seguimiento. Esta fase consiste en la definición de un cronograma de ejecución y de roles dentro del plan de manejo, tanto para el personal técnico como para la comunidad.

            .col-md-6
              figure
                img(data-aos="flip-right")(src='@/assets/curso/temas/img-implementacion-tema2.png', alt='Texto que describa la imagen').img-slider-tema2
                //figcaption Leyenda de la imagen
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        p En el siguiente gráfico se puede apreciar la estructura de un plan de manejo ambiental.
        p Conocer las medidas preventivas y correctivas a ejecutar para el manejo de suelos y adaptar actividades que beneficien la estructura y textura del suelo, se pueden llevar a cabo con la ayuda de un plan de manejo ambiental, como veremos a continuación.

        .row 
          .col-lg-12.bloque-plan-estruc-man-animal
              .titulo-sexto.color-primario.mb-3
                  h5 Figura 6. 
                    span
                  <em>Estructura del plan de manejo ambiental</em>
              figure
                img(data-aos="flip-right")(src='@/assets/curso/temas/img-estruct-plan-manej-animal-tema2.png', alt='Texto que describa la imagen')

    br
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row
          
          figure
              img(src='@/assets/curso/temas/img-fondo-tarj-final-tema2.png', alt='Texto que describa la imagen').img-fondo-tarj-final-tema2

          .col-lg-8
            p.texto-tarj-final-tema2 Una vez se realizan las acciones planeadas en el suelo, se requiere monitorear o hacer seguimiento a las actividades que se planearon y como han sido los resultados según los objetivos trazados. Estos monitoreos se pueden hacer de carácter técnico en compañía de expertos o con la comunidad, según sea el caso de aplicación del estudio de suelos.

          .col-lg-4
              figure
                img(src='@/assets/curso/temas/img-final-tema2.png', alt='Texto que describa la imagen').img-final-tema2
          



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

<style lang="sass"></style>
