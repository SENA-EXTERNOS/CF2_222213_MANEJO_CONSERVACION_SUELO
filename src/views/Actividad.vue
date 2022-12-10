<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.puzzle-piece.fas.fa-puzzle-piece
        h1 Actividad didáctica
  
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-primario
          h2 Completar espacios
        p.mb-4 Aprendiz, la siguiente actividad tiene como objetivo revisar y poner a prueba los conocimientos adquiridos en este componente de formación, se le invita a leer, con detenimiento, cada una de las oraciones, luego, digite en los espacios la palabra que le dé sentido a toda la oración. Esta actividad le permitirá identificar el concepto específico dentro de un enunciado general, promoviendo el análisis y la contextualización.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar espacios
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/Actividad_didáctica-CF2 T_222213_Manejo y conservación del suelo - Storyline output/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
