<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Monitoreo técnico y participativo

    
    .row.container.justify-content-around.align-items-center
      
      p Como podrá observar a continuación, para realizar ejercicios de monitoreo técnico y participativo para el manejo de suelos, se debe partir de un análisis participativo.

      .bg--img_03.bloque-acordeon-tema3
        .row.justify-content-center.mb-4
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/img-acordeon-tema3.png", alt="alt").img400.m-auto
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-acordeon-tema3")
              .row(titulo="Análisis de componentes")
                .col-12
                  p.texto-acordeon-tema3.mb-0 Busca realizar un análisis de los componentes del suelo, así como de las prácticas que ocasionan su degradación. Parte de información secundaria, recorridos en campo y talleres de construcción colectiva que fomentan la organización, colaboración y concientización de las comunidades, creando, así, un espacio para compartir conocimientos técnicos y tradicionales.

              .row(titulo="Trabajo Colaborativo")
                .col-12
                  p.texto-acordeon-tema3.mb-0 Se lleva a cabo realizando mesas de trabajo colaborativas, en el cual los actores de la zona participan realizando actividades como:

              .row(titulo="Actividades")
                .col-12
                    ul.lista-ul--color.texto-acordeon-tema3
                      li 
                        i.fas.fa-angle-right
                        | Priorización de problemáticas para la gestión sostenible del suelo.
                      li 
                        i.fas.fa-angle-right
                        | Entrevistas semiestructuradas.
                      li 
                        i.fas.fa-angle-right
                        | Recorridos por las áreas de intervención.
                      li 
                        i.fas.fa-angle-right
                        | Realización de calendarios agrícolas.
                      li 
                        i.fas.fa-angle-right
                        | Toma de fotografías para identificar daños por el uso no sostenible del suelo.  
                      li 
                        i.fas.fa-angle-right
                        | Evaluación de servicios ecosistémicos asociados a los suelos.
                      li 
                        i.fas.fa-angle-right
                        | Realización de mapas sociales.
                      li 
                        i.fas.fa-angle-right
                        | Talleres de planificación de la intervención a realizar.
                      li 
                        i.fas.fa-angle-right
                        | Cuadros de prácticas a implementar dentro de la intervención.
                      li 
                        i.fas.fa-angle-right
                        | Socialización del plan de intervención.
                      li 
                        i.fas.fa-angle-right

                        | Asignación de roles.

      p A continuación, se enfatiza que el monitoreo y estudio de suelos, es una actividad fundamental para conocer la evolución, el desgaste y las necesidades de este recurso, algo importante para cualquier proceso productivo o estudio de conservación.
      
    separador 

    br

    .row.container.justify-content-around.align-items-center
        
        figure
            img(src='@/assets/curso/temas/img-lat-dere-tema3.png', alt='Texto que describa la imagen').img-lat-dere-tema3
        

        #parametros-de-monitoreo
        .titulo-segundo.color-acento-contenido
          h2 3.1 Parámetros de monitoreo
        
        p Para la realización de intervenciones en suelos con prácticas no sostenibles, se hace necesario un proceso de comprensión del mismo, iniciando por la diagramación del predio para identificar los factores determinantes en la dinámica del suelo, con el fin de identificar los puntos clave de la parcela, para, posteriormente, evaluar el suelo en cada uno de estos puntos.

        .row 
          figure
              img(src='@/assets/curso/temas/img2-fondo-tabs-tema3.png', alt='Texto que describa la imagen').img-fondo-tabs-tema3
          

          TabsC.color-primario.bloque-tabs-tema3
            .py-3.py-md-4(titulo="Evaluación del suelo")
              .row
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/img-eval-suelo-tema3.png', alt='Texto que describa la imagen').img1-tabs-tema3
                    //figcaption Leyenda de la imagen

                .col-md-6
                  //h4.txt-tabs-tema3 Evaluación del suelo
                  p.txt-tabs-tema3 La evaluación del suelo se puede realizar de dos maneras. La forma cualitativa no implica la realización de análisis especializados o de costo elevado, se basa en la obtención de información del suelo utilizando los sentidos (vista, olfato y tacto), considerándose como una herramienta útil al momento de evaluar los cambios que se presentan en el suelo y ayudando a tomar de decisiones sobre su uso sostenible.
              


            .py-3.py-md-4(titulo="Análisis de laboratorio")
              .row
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/img-anal-lab-tema3.png', alt='Texto que describa la imagen').img2-tabs-tema3
                    //figcaption Leyenda de la imagen
                .col-md-6
                  //h4.txt-tabs-tema3 Análisis de laboratorio
                  p.txt-tabs-tema3 En la forma cuantitativa, se hacen análisis de laboratorio a muestras de suelo para conocer, de manera precisa, las características físicas como la disponibilidad de agua, el crecimiento de raíces y plántulas. Las características químicas también se evidencian, es decir, el contenido de nutrientes, la presencia de carbono orgánico, el pH, la capacidad de intercambio de energía, los cambios en la materia orgánica, el nitrógeno fijado y la disponibilidad de nitrógeno y fósforo.

            
            .py-3.py-md-4(titulo="Observaciones cuantitativas")
              .row
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/img-observ-cuanti-tema3.png', alt='Texto que describa la imagen').img3-tabs-tema3
                    //figcaption Leyenda de la imagen
                .col-md-6
                  //h4.txt-tabs-tema3 Observaciones cuantitativas
                  .txt-tabs-tema3
                    p Las observaciones cuantitativas arrojan datos de características biológicas como la abundancia y la diversidad de macro y microorganismos, o la abundancia de raíces. Estas observaciones cuantitativas permiten tomar decisiones para la sostenibilidad del terreno, sobre la aplicación de fertilizantes.
                    p Esta técnica se usa, comúnmente, en suelos con problemas de fertilidad, con condiciones notorias de degradación a nivel físico, con capacidad de compactación e infiltración, o con sospechas de toxicidad por aluminio, salinidad o actividades que generen riesgos de contaminación. 
              

            
            .py-3.py-md-4(titulo="Evaluación cualitativa")
              .row
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/img-eval-cuant-tema3.png', alt='Texto que describa la imagen').img4-tabs-tema3
                    //figcaption Leyenda de la imagen
                .col-md-6
                  //h4.txt-tabs-tema3 Evaluación cualitativa
                  p.txt-tabs-tema3 La evaluación del suelo se puede realizar de dos maneras, una cualitativa, que no implica la realización de análisis especializados o de costo elevado, sino que se basa en la obtención de información del suelo utilizando los sentidos (vista, olfato y tacto) considerándose como una herramienta útil al momento de evaluar los cambios que se presentan en el suelo.

          p El conocimiento de los suelos no se deriva, exclusivamente, de estudios de laboratorio, existen características a tener en cuenta al momento de hacer un diagnóstico inicial del predio, estos parámetros se encuentran ilustrados a continuación. En el siguiente recurso, encontrará información ampliada sobre los parámetros cualitativos para el análisis de suelos.
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center
      
      h4 Parámetros cualitativos para el análisis de suelos
      
      .col-lg-7.fondo-diversificacion-funcional.tarjeta

          .row.justify-content-between.align-items-center


            .col.mb-3.mb-sm-0
              //h3.mb-1 Título del recurso
              .bloque-diversificacion-funcional
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.texto-diversificacion-funcional Parámetros cualitativos para el análisis de suelos
                  p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit.
              
              
            .col-sm-auto
              .boton-descargar-diversificacion-funcional
                a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_4_CF2_Parámetros cualitativos para el análisis de suelos.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

      p.txt-inf-param-cuantit Es necesario monitorear los suelos y hacer seguimiento de su evolución, a causa de procesos productivos, para la planeación de actividades y la toma de decisiones. 
    
    separador

    br

    .row.container.justify-content-around.align-items-center

    
        #instrumentos-y-elementos-de-monitoreo
        .titulo-segundo.color-acento-contenido
          h2 3.2 Instrumentos y elementos de monitoreo
        
        p.txt-instrum-monit-tema3 Es importante conocer algunos elementos sobre los instrumentos y las herramientas de monitoreo para la evaluación y el estudio de suelos.
        

        .col-lg-4.d-none.d-lg-flex
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/img-acordeon-inst-monitoreo.png", alt="alt").m-auto

        .col-lg-8
          p Por lo anterior, se puede hablar de tres fases dentro de todo proceso productivo, las cuales se evidencian en el siguiente recurso de aprendizaje:

          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta ")

            .row(titulo="Monitoreo")
              .col-12
                p El monitoreo se lleva a cabo a través de la observación directa y la toma de muestras de forma planificada, teniendo en cuenta las condiciones particulares de cada sitio o terreno. Los instrumentos y elementos básicos necesarios para llevar a cabo el muestreo son palines, palas, barrenos de muestreo, baldes, cuchillos o machetes, bolsas, registros y elementos de seguridad.


            .row(titulo="Seguimiento de procesos")
              .col-12
                p Como el monitoreo obedece a un seguimiento de procesos y es llevado a cabo por los habitantes de la zona a intervenir, se necesitan estrategias y herramientas participativas y se requiere desarrollar reuniones y encuentros con la comunidad.


            .row(titulo="Evaluación de terrenos")
              .col-12
                p Apoyado en  materiales (material audiovisual, papelería, herramientas), locaciones específicas (lugares de encuentro) y formatos detallados (cuadros de evaluación de terrenos, matrices de seguimiento de prácticas implementadas, diagramas de parcelas y tarjetas para la observación de suelo en el campo), se determina la vocación de uso del suelo, el objeto del estudio y los parámetros cualitativos para su intervención.
        
        p En las actividades de seguimiento y manejo de suelos, se deben llevar registros, hacer anotaciones y tomar las fechas en las cuales las medidas fueron realizadas.  


    separador

    br

    .row.container.justify-content-around.align-items-center

        #manejo-de-registros
        .titulo-segundo.color-acento-contenido
          h2 3.3 Manejo de registros


        .col-lg-7.fondo-diversificacion-funcional.tarjeta

          .row.justify-content-between.align-items-center


            .col.mb-3.mb-sm-0
              //h3.mb-1 Título del recurso
              .bloque-diversificacion-funcional
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.texto-diversificacion-funcional Manejo de registros
                  p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit.
              
              
            .col-sm-auto
              .boton-descargar-diversificacion-funcional
                a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_5_CF2_Manejo de registros.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

        .cajon.color-acento-contenido.bloque-cajon-color-tema3.p-4
          .row.container
          
            .col-lg-7
            
              p Para concluir, en este componente formativo se abordaron temáticas relacionadas con las prácticas para el manejo, conservación y uso del suelo, encaminadas hacia la conservación y protección de la biodiversidad y de los ecosistemas de actividades físicas, biológicas y químicas que ocurren en el intercambio de animales y plantas.  Se enfatizó en reconocer el suelo como un componente vivo, a aplicar medidas de manejo y conservación conforme a parámetros técnicos o características del entorno y a realizar los monitoreos necesarios a este importante recurso. 
              p Aprendiz, se le sugiere leer detenidamente la síntesis, realizar la actividad incluida y recurrir al material complementario. 
            
            .col-lg-5
              figure
                img(src="@/assets/curso/temas/img-manejo-registros-tema3.png", alt="alt").img-manejo-registros-tema3
        
        p.texto-invisible Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptas maiores doloribus exercitationem deserunt, autem sint illo illum laborum commodi iste deleniti reprehenderit ab quas quasi quis aut neque magnam.

</template>

<script>
export default {
  name: 'Tema3',
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
