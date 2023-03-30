<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conservación del suelo

    .tarjeta.fondo-tema1_1.px-5.py-2(style='background-color: #594e38').mb-5
      .row.align-items-center.justify-content-center
        .col-lg-8
            p.text-white.mb-0 El suelo, como recurso, puede definirse como la capa de tierra en la cual se encuentran los nutrientes necesarios para el desarrollo de los seres vivos. Este, además de estar formado por una mezcla de minerales y materiales orgánicos, también está conformado por agua, aire y microorganismos que cumplen funciones en su interior. La constitución del suelo tarda miles de años, pero los efectos de prácticas inadecuadas, sobre todo por parte del hombre, son rápidamente evidenciados en su esencia. 

        
        .col-lg-4
          figure
            img.m-auto(data-aos="fade-left")(src="@/assets/curso/temas/img-targ1-tema1.png" style='width: 280px')
      
    p.mb-5 La conservación del suelo como capa externa de la tierra y como factor determinante en ciclos de transformación de nutrientes para la satisfacción de necesidades humanas y la protección de la biodiversidad.


        

    .tarjeta.fondo-tema1_2.p-5.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema1
              h4 Ciclos biogeoquímicos
              p El suelo es un factor clave en los ciclos biogeoquímicos que transforman hidrógeno, nitrógeno, carbono y fósforo en la energía necesaria para la vida en el planeta, esto se logra a través de la distribución, transporte, almacenamiento y transformación de estos materiales en el suelo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/ciclos-biogeoquimicos-tema1.png', alt='Texto que describa la imagen').imagenes-slider-tema1
              //figcaption Leyenda de la imagen

        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema1
              h4 Base de la Sociedad
              p Es por esto que el suelo ha sido fundamental para las sociedades humanas. Por generaciones, ha proporcionado espacios para asentarse y vivir, garantizando soberanía alimentaria gracias a la posibilidad de cultivar sobre él todo tipo de alimentos, lo que, a su vez, garantiza solvencia económica con la venta de lo cultivado.

          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/base-sociedad-tema1.png', alt='Texto que describa la imagen').imagenes-slider-tema1
              //figcaption Leyenda de la imagen

        
        
        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema1
              h4 Elemento natural
              p En este sentido, el suelo debe ser tratado de manera integral, es decir, desde los elementos naturales que lo caracterizan hasta las dimensiones sociales, económicas, políticas y culturales. Así, se aborda el conjunto de sus otras funciones, por ejemplo, el suelo también regula el clima y las inundaciones, retiene el carbono, es fuente de productos farmacéuticos o de recursos genéticos y, además, suministra materiales de construcción. 


          .col-md-6
            figure
              img(src='@/assets/curso/temas/elemento-natural-tema1.png', alt='Texto que describa la imagen').imagenes-slider-tema1
              //figcaption Leyenda de la imagen


        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema1
              h4 Servicios ecosistémicos
              p Teniendo en cuenta lo anterior, el estado óptimo de los suelos es un requisito para la satisfacción de necesidades (alimento, energía, protección y otros productos) en todo el planeta, tanto por los bienes y servicios ecosistémicos asociados a ellos, como por el mantenimiento de la biodiversidad. Así, las prácticas de conservación del suelo se pueden definir como un conjunto de técnicas que propenden por el mantenimiento de la biodiversidad y por el aumento de la productividad de los suelos.


          .col-md-6
            figure
              img(src='@/assets/curso/temas/sistemas-ecosistemicos-tema1.png', alt='Texto que describa la imagen').imagenes-slider-tema1
              //figcaption Leyenda de la imagen

        
        .row.justify-content-center.align-items-center.my-lg-4

          .col-md-6.mb-4.mb-md-0
            .txt-slider-tema1
              h4 Funciones ecosistémicas 
              p Con técnicas como la incorporación de materia orgánica o la descomposición de organismos con ciclos de vida largos, se reducen gases como el dióxido de carbono y se logra incorporar agua y oxígeno. Así mismo, se disminuye la erosión del suelo, se aumenta la humedad, se reducen agentes contaminantes y sedimentos por la purificación del agua, y se aumenta la flora en los cultivos en desarrollo. Todo esto contribuye, significativamente, a las comunidades que se benefician de las actividades agrícolas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/funciones-ecosistemicas-tema1.png', alt='Texto que describa la imagen').imagenes-slider-tema1
              //figcaption Leyenda de la imagen

    p.mb-5 La pérdida del potencial productivo del suelo, ha centrado la atención en él como un organismo vivo y no solo como soporte de las actividades humanas. Así, se ha reconocido que las malas prácticas de manejo, pueden desencadenar en consecuencias fatales como su degradación.
    h3 Manejo y uso sostenible

    p.mb-5 El suelo, como componente vivo, es un factor fundamental para el desarrollo de la sociedad y de los sistemas productivos. A continuación, se profundiza sobre esta temática.  


    .row.container.justify-content-around.align-items-center.mb-5
    
      .row 
        figure
            img(src='@/assets/curso/temas/img-fondo-slider2-tema1.png', alt='Texto que describa la imagen').img-fondo-slider2-tema1
        
        SlyderB.mb-5(:datos="datosSlyder")



    h3 Técnicas de conservación        
  
        
    .fondo-tema1_1.tarjeta.p-5

      .row.align-items-center.justify-content-center
        .col-lg-3
          figure
            img(data-aos="fade-left")(src="@/assets/curso/temas/img-tecnicas-de-conservacion-tema1.png")
        .col-lg-8
          
          p.text-white.mb-0 El manejo adecuado del suelo como capa externa de la tierra, es un factor determinante en ciclos de transformación de nutrientes, para la satisfacción de necesidades humanas y protección de la biodiversidad. Mediante la aplicación de técnicas apropiadas, es posible recuperarlo; seguidamente, conoceremos cómo.

    p Las prácticas inadecuadas en el desarrollo de actividades agrícolas y productivas, generan pérdida del potencial productivo, haciendo necesaria la implementación de técnicas de conservación del suelo. 




    .row.container.justify-content-around.align-items-center


      .col-lg-9.position-relative.bloque-tar-conect-tema1

          .avatar
            figure
              img(src="@/assets/curso/temas/img-arbol-der-tar-conect-tema1.png", alt="alt").img-arbol-der-tar-conect-tema1

          .crd.crd--avatarHorizontal.crd--first.fondo-tar1-conect-tema1.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/img1-targ-conectad-tema1.png", alt="alt").img100.imagenes-tarj-conect-tema1
              .col
                .txt-tar-conect-tema1
                  h5 Pérdida de potencial productivo
                  p La pérdida de potencial productivo del suelo se encuentra relacionada con su erosión, es decir, con la pérdida de fertilidad por agentes como el viento o el agua que desplazan los componentes presentes en el suelo (materia vegetal, microorganismos, nutrientes, etc.).
          .crd.crd--avatarHorizontal.fondo-tar2-conect-tema1.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/img2-targ-conectad-tema1.png", alt="alt").img100.imagenes-tarj-conect-tema1
              .col
                .txt-tar-conect-tema1
                  h5 Afectaciones al  suelo
                  p Las afectaciones sobre el suelo se agravan con factores como la intensidad de la lluvia, la inclinación y longitud de la pendiente, la vegetación o los cultivos plantados en el terreno y las prácticas de agricultura llevadas a cabo en él.

          .crd.crd--avatarHorizontal.crd--last.fondo-tar3-conect-tema1.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/img3-targ-conectad-tema1.png", alt="alt").img100.imagenes-tarj-conect-tema1
              .col
                .txt-tar-conect-tema1
                  h5 Prácticas inadecuadas
                  p El fenómeno de pérdida de potencial productivo es ocasionado, generalmente, por prácticas inadecuadas de las personas en el desarrollo de las actividades agrícolas y productivas.

          
          .crd.crd--avatarHorizontal.crd--last.fondo-tar4-conect-tema1.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/img4-targ-conectad-tema1.png", alt="alt").img100.imagenes-tarj-conect-tema1
              .col
                .txt-tar-conect-tema1
                  h5 Protección o recuperación
                  p Por esto, es necesario llevar a cabo maniobras que permitan la protección o recuperación del suelo, este puede permanecer en su condición natural, protegiendo su estabilidad, o puede estar en una condición inestable y ser recuperado.

    br
    br
    br

    .tarjeta.fondo-tema1_3.p-5
      .row.align-items-center
        .col-lg-4
          figure
            img(data-aos="fade-left")(src="@/assets/curso/temas/img-conservacion-tema1.png")

        .col-lg-8
          
          p.text-white La conservación implica buscar que los suelos puedan ser manejados de forma sostenible con los menores impactos posibles, para lograrlo, se deben ejercer unas buenas prácticas generales para su uso. Estas prácticas se dividen en el uso del suelo según su vocación, la labranza mínima, la utilización de abonos verdes u orgánicos o biofertilizantes, el empleo de coberturas permanentes, el uso de barreras y cercas vivas, el pastoreo controlado o rotativo, la rotación de cultivos, los policultivos o cultivos asociados, la diversificación funcional, las obras biomecánicas para el manejo del suelo y flujos de agua, y el control biológico y biopreparados (FAO, 2018).
    br
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        h4 Uso del suelo según su vocación

        .cajon.color-acento-botones.cajon-color-vocacion-suelo-tema1.p-4

          .row.p-4
            .col-lg-6        
              p Al hablar de ‘usos del suelo, según su vocación’ se hace referencia a las condiciones físicas asociadas al suelo, las cuales le confieren ciertas características que lo hacen deseable para determinados tipos de cultivos. Usar el suelo según su vocación presenta ventajas, por ejemplo, se garantiza la conservación a largo plazo, en tanto está sujeto a requerimientos que el suelo pueda soportar, también, se evitan problemas como la sobreutilización o la erosión y se conservan sus cualidades físicas, evitando, con ello, pérdidas de humedad o fertilidad.

            .col-lg-6
              .titulo-sexto.color-primario.texto-figura1.mb-3
                  h5 Figura 1 
                  br
                  span
                    <em>Vocación del suelo</em>
              figure
                img(src="@/assets/curso/temas/img-vocacion-suelo-tema1.png").img-vocacion-suelo-tema1

        p.texto-inf-cajon-color-vocacion-suelo-tema1 Los procesos de labranza mínima, también llamada mínimo movimiento, consisten en, como su nombre lo indica, mover el suelo lo menos posible al momento de cultivar. De esta forma, no se interfiere en los procesos naturales que se desarrollan en él, fortaleciendo sus procesos naturales de regeneración y de conservación de condiciones químicas, biológicas y físicas que suceden en él al ser un recurso vivo.
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        h4 Labranza mínima

        p El suelo, es un sistema cambiante susceptible a las variables a las que es sometido por las presiones de las actividades humanas o de las actividades agropecuarias, es por esto que, para la recuperación y conservación de su biodiversidad, se aconseja la labranza mínima. A continuación, se profundizará en este tema.


        .tarjeta.p-4
          figure
              img(src='@/assets/curso/temas/img-fondo-slider-nav-tit.png', alt='Texto que describa la imagen').img-fondo-slider-nav-tit
          
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo="Mínimo movimiento")
              .col-md-6.mb-4.mb-md-0
              
                //h4.text-slider-nav-tit Mínimo movimiento
                p.text-slider-nav-tit Al proteger la humedad y regular su temperatura, el mínimo movimiento aumenta la fertilidad del suelo y disminuye la descomposición de la materia orgánica, lo que representa, a su vez, pérdida de carbono.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-min-mov-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen


            .row(titulo="No requiere maquinaria pesada")

              .col-md-6.mb-4.mb-md-0
                //h4.text-slider-nav-tit No requiere maquinaria pesada
                p.text-slider-nav-tit Además, representa un ahorro para los agricultores al no requerir maquinaria pesada, que hace uso de combustibles, o no necesitar un gran número de personal para el cultivo.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-no-req-maq-pesad-tema1.png', alt='Texto que describa la imagen').img-maq-pesad-tema1
                  //figcaption Leyenda de la imagen

            
            .row(titulo="Labranza mínima")

              .col-md-6.mb-4.mb-md-0
                //h4.text-slider-nav-tit Labranza mínima
                p.text-slider-nav-tit La labranza mínima se realiza de tres maneras diferentes:
                  
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span I)
                      | La labranza cero, o siembra directa, permite sembrar cultivos sin que estos requieran preparación mecánica o alteración del suelo, aflojando un área muy estrecha y poco profunda, en la cual se ubicarán las semillas.
                
                

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-labran-minim-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

  
            .row(titulo="Menos compactación")
            
              .col-md-6.mb-4.mb-md-0
                //h4.text-slider-nav-tit Menos compactación
                p.text-slider-nav-tit Este tipo de siembra es apta para suelos de tipo arena grava, ya que son más suaves y reduce la probabilidad de compactación.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-menos-compact-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

            
            .row(titulo="Suelo sin remover")

              .col-md-6.mb-4.mb-md-0
                //h4.text-slider-nav-tit Suelo sin remover
                p.text-slider-nav-tit
                  ol.lista-ol--cuadro
                      li 
                        .lista-ol--cuadro__vineta
                          span II)
                        | La labranza mínima en surcos, o continua, remueve el suelo en surcos de 20 a 30 centímetros, allí se ubicará el cultivo, dejando suelo sin remover entre estos.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-suelo-sin-remover-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen


          
            .row(titulo="Suelos fríos y húmedos")

            
              .col-md-6.mb-4.mb-md-0
                //h4.text-slider-nav-tit Suelos fríos y húmedos
                p.text-slider-nav-tit Este tipo de labranza funciona, especialmente, en suelos fríos y húmedos, los surcos ofrecen ambientes más cálidos y mejor drenados.

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-suelos-humedos-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen

            
            .row(titulo="Promueve crecimiento raíces")

              .col-md-6.mb-4.mb-md-0
                //h4.text-slider-nav-tit Promueve crecimiento raíces
                p.text-slider-nav-tit 
                  ol.lista-ol--cuadro
                      li 
                        .lista-ol--cuadro__vineta
                          span III)
                        | La labranza mínima puntual, o sitio a sitio, prepara sitios puntuales del suelo, enfocándose en alterar solo una pequeña porción del suelo, creando una fila de plantas y dejando la mayor parte de la superficie sin perturbar. Este tipo de labranza fomenta el crecimiento más profundo de las raíces y promueve el movimiento del agua.
              
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/img-prom-crecim-raices-tema1.png', alt='Texto que describa la imagen')
                  //figcaption Leyenda de la imagen
    br  
    br  
    br

    .row.container.justify-content-around.align-items-center


      h4 Medidas de manejo de suelos

      p Entre los tipos de manejo del suelo, hay algunas medidas que permiten mejorar el rendimiento de los cultivos y la estructura del suelo, del cual depende, en gran medida, el desarrollo de la sociedad y las formas de establecer sistemas productivos, ya sean urbanos o rurales. Conozcámoslos a continuación:


      ImagenInfografica.color-primario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/img-punto-caliente-tema1.png', alt='Texto que describa la imagen').img-punto-caliente-tema1
            //figcaption Leyenda de la imagen

        .tarjeta.tarj-punto-caliente-tema1.p-3(x="45%" y="5%" numero="1")
          .h5.mb-2 Abonos verdes y cobertura permanente del suelo: 
          p Consisten en incorporar plantas, o materia vegetal, para mejorar la fertilidad y calidad del suelo dada su capacidad de reciclar grandes cantidades de nutrientes. El suelo cultivable también se debe cubrir para evitar la influencia del sol, de la lluvia y, con ello, de la erosión.
            br
            | Esta técnica mejora la retención de humedad, disminuye las variaciones extremas de temperatura, reduce la presencia de plagas, disminuye la necesidad de usar plaguicidas aumentando la actividad biológica mejorando las relaciones entre los organismos.


        .tarjeta.tarj-punto-caliente-tema1.p-3(x="80%" y="35%" numero="2")
          .h5.mb-2 Barreras y cercas vivas:
          p Son cultivos que se ubican en laderas para mejorar la resistencia del sistema agrícola, sobre todo, ante eventos climáticos, evitando la erosión del suelo. 
          p Esta técnica se usa, igualmente, para establecer límites, es decir, con la siembra de árboles se controla el tránsito humano, animal e, incluso vectores. Además, los árboles sirven como refugio y alimento de poblaciones reguladoras para el control de plagas.
          p Las barreras requieren poco mantenimiento, ocupan poco espacio y proporcionan beneficios como pastos, leña, alimento para animales y humanos manteniendo la fertilidad de los suelos.



        .tarjeta.tarj-punto-caliente-tema1.p-3(x="70%" y="75%" numero="3")
          .h5.mb-2 Pastoreo controlado o rotativo:
          p Es el intercambio de ganado dentro del terreno para evitar compactación del suelo, ubicando a los animales en sitios fijos para cumplir con la función de corte de pasto en zonas delimitadas, previniendo daños a los cultivos. 
          p Esto provee de alimentos al ganado (forrajes) y permite un mayor crecimiento de animales, sin desperdiciar energía en el pastoreo. Así mismo, se interrumpen los ciclos de vida de plagas o malezas que pueden afectar a las especies vegetales del cultivo, protegiendo las plantaciones.
          p Esta técnica permite el crecimiento rápido de pastos por la distribución del estiércol en fertirrigación al suelo, aportando nutrientes y beneficiando su recuperación.

        .tarjeta.tarj-punto-caliente-tema1.p-3(x="25%" y="75%" numero="4")
          .h5.mb-2 Rotación de cultivos:
          p Conjunto de secuencias en cultivos que se van alternando cada año, así se mantiene la producción de suelos y se asegura la diversificación y sostenibilidad de cultivos.
          p La rotación también disminuye plagas, evita saturación de plaguicidas, aporta materia orgánica, fija nutrientes en suelos e incrementa la diversificación de especies para una alimentación balanceada de comunidades campesinas y de animales. 
          p La FAO (2018) sugiere, para la rotación de cultivos, utilizar maíz, frijol, soya, girasol, maní, algodón y trigo, realizando una rotación por grupos de esta manera: 
          p Grupo I – Cultivo principal: maíz, sorgo, ajonjolí, papa y mijo.
            br
            | Grupo II – Granos: avena, cebada, trigo, centeno, arroz, amaranto.
            br
            | Grupo III - Pastos: guinea, ovillo, insurgente y praderas.
            br
            | Grupo IV - Diversos: alfalfa, frijol, haba, soya, guaje, garbanzo y tréboles.

        .tarjeta.tarj-punto-caliente-tema1.p-3(x="20%" y="35%" numero="5")
          .h5.mb-2 Policultivos o cultivos asociados:
          p Se trata de la plantación simultánea de diversas especies vegetales, complementarias entre sí, en una misma parcela mejorando la captación de nutrientes, promoviendo el reciclaje y regulando las malezas sin emplear herbicidas.
          p Así mismo, se hace un mejor uso del suelo, del agua y del espacio; fomentando la presencia de polinizadores garantizando un mayor rendimiento con respecto a un monocultivo.
          p Además, se promueve un mayor balance diversificando la dieta, dada la disponibilidad de varias especies vegetales. 
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center
      
      p Otras medidas funcionales, para tener en cuenta, en el adecuado manejo del suelo, son: la diversificación funcional y las obras biomecánicas. Conózcalas con más detalle, explorando el documento que se propone a continuación:
      
      br
      br 
      

      
      .col-lg-6.fondo-diversificacion-funcional.tarjeta

          .row.justify-content-between.align-items-center


            .col.mb-3.mb-sm-0
              //h3.mb-1 Título del recurso
              .bloque-diversificacion-funcional
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.texto-diversificacion-funcional Diversificación funcional
                  p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit.
              
              
            .col-sm-auto
              .boton-descargar-diversificacion-funcional
                a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_2_CF2_Diversificacion funcional.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
            
      p.texto-inf-diversificacion-funcional Entre las actividades para el manejo del suelo, la diversificación funcional mejora la diversidad. De la misma manera y con alta efectividad, existen obras biomecánicas que aportan beneficios a su estructura y textura, para el manejo del suelo, como veremos a continuación:
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        h4 Obras biomecánicas para el manejo del suelo    

        p Se conocen como obras biomecánicas para el manejo del suelo, a las actividades que buscan aumentar la diversidad en los cultivos y las interacciones entre insectos, planta y suelo, teniendo en cuenta que la pérdida del recurso conlleva a la baja productividad del predio.        




        .row
          .col-lg-12
              .titulo-sexto.color-primario.tit-obras-biomecanicas-tema1.mb-3

              figure
                img(src='@/assets/curso/temas/img-obras-biomecanicas-tema1.png', alt='Texto que describa la imagen').img-obras-biomecanicas-tema1

        .row.bloque-tarj-avatar-tema1
          .col-sm-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.fondo-tarj-avatar1(@mouseover="indicadorTarjetaSlide = false")
              .indicador--hover(v-if="indicadorTarjetaSlide")
              .tarjeta-slide__contenedor
                .tarjeta-slide__contenido.p-4.p-xl-5
                  //h1 John Doe
                  p Algunas obras biomecánicas combinan algún material vivo con material inerte, para formar estructuras económicas y de fácil construcción, con las cuales se puedan controlar la erosión y los deslizamientos, y lograr preservar los suelos.
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tarj-avatar1-tema1.png')})`}")

          .col-sm-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-slide.arriba.fondo-tarj-avatar2(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tarj-avatar2-tema1.png')})`}")
                .tarjeta-slide__contenido.p-4.p-xl-5
                  //h1 John Doe
                  p Algunas obras biomecánicas permiten la restauración de áreas degradadas, retienen materia orgánica, enriquecen el suelo, haciéndolo más fértil, y regeneran de manera natural, las especies vegetales presentes en el área.

          .col-sm-6.col-xl-3.mb-4.mb-sm-0
            .tarjeta.tarjeta-slide.arriba.fondo-tarj-avatar3(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tarj-avatar3-tema1.png')})`}")
                .tarjeta-slide__contenido.p-4.p-xl-5
                  //h1 John Doe
                  p Las obras biomecánicas se pueden seleccionar, de acuerdo con el grado de erosión de los suelos, del área que se encuentra disponible para realizar el proceso, y a las necesidades del beneficiario de los predios.

          .col-sm-6.col-xl-3
            .tarjeta.tarjeta-slide.arriba.fondo-tarj-avatar4(@mouseover="indicadorTarjetaSlide = false")
              .tarjeta-slide__contenedor
                .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tarj-avatar4-tema1.png')})`}")
                .tarjeta-slide__contenido.p-4.p-xl-5
                  //h1 John Doe
                  p Las obras que se pueden implementar son la revegetalización de taludes, los trinchos, las terrazas o gaviones, los surcos en contorno, los trazados de senderos y las barreras corta fuegos. 
    br
    br
    br
    br

    .row.container.justify-content-around.align-items-center.mb-5
      
      .row.mb-5
        figure
            img(src='@/assets/curso/temas/fondo-tarje-manejo-agroecologico2.png', alt='Texto que describa la imagen').fondo-tarje-manejo-agroecologico

        .col-lg-7

            p.texto-tarje-manejo-agroecologico Dentro del manejo agroecológico de los cultivos se tiene algunos preparados y compuestos, como #[b abonos orgánicos y biofertilizantes], que aportan materia orgánica al suelo, estos benefician las interacciones de los microorganismos presentes en el suelo.
              br
              br
              |Conozca más sobre ellos, explorando el siguiente enlace:

        .col-lg-5

            figure
                img(src='@/assets/curso/temas/img-tarje-manejo-agroecologico.png', alt='Texto que describa la imagen').img-tarje-manejo-agroecologico


    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/icono-pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Abonos orgánicos y biofertilizantes
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_3_CF2_Abonos organicos y biofertilizantes.pdf')" target="_blank")
                    span Descargar 
                    i.fas.fa-file-download
    p.mb-5  Así mismo, existen fertilizantes líquidos que pueden ser adheridos al suelo, para mejorar la estructura, textura y contenido de materia, presentes en suelos que, en muchos casos, se encuentran desgastados a causa de las actividades agropecuarias:  
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/icono-pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Abonos orgánicos líquidos
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_6_CF2_Abonos orgánicos Líquidos.pdf')" target="_blank")
                    span Descargar 
                    i.fas.fa-file-download

      
    h4 Biopreparados
    p Los #[b biopreparados] son técnicas que mantienen el aspecto natural del suelo, evitando la contaminación y controlando la propagación de enfermedades y plagas. A partir de los principios activos que los componen, los biopreparados, o preparados biológicos, funcionan aportando materia orgánica y agentes que atacan plagas y enfermedades en los cultivos.

      
      .bg--img_03.bloque-acordeon-tema1
        .row.justify-content-center.mb-4
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/img-acordeon-biopreparados.png", alt="alt").img400.m-auto
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-fondo-acordeon")
              .row(titulo="Control biológico")
                .col-12
                  p.mb-0 También se encuentran otros métodos de #[b control biológico] como los bioinsecticidas, sustancias naturales capaces de controlar o eliminar las plagas en un cultivo, ayudan a mejorar la calidad y el rendimiento de las cosechas y, por lo general, son extraídos de plantas, de insectos, de minerales o de microorganismos.

              .row(titulo="Bioinsecticidas")
                .col-12
                  p.mb-0 Los #[b bioinsecticidas] más utilizados en la agricultura tradicional, son aquellos que provienen de infusiones, macerados y algunos tipos de cocciones; aportan bastantes beneficios como la disminución del uso de insecticidas, no generan resistencia en las plagas, no afectan la salud humana, son económicos y se degradan con gran facilidad.

              .row(titulo="Sustancias naturales controlan plagas")
                .col-12
                  p.mb-0 Controlar las plagas de manera natural, se refiere a una forma de controlarlas en la que no se utilizan sustancias químicas, se producen diferentes tipos de recetas para las cuales se utilizan insectos, aves, animales, plantas, bioinsecticidas, técnicas manuales o sustancias naturales, capaces de controlarlas o eliminarlas.

              .row(titulo="Infusiones, macerados y cocciones")
                .col-12
                  p.mb-0 Los más utilizados en la agricultura tradicional provienen de infusiones, macerados y algunos tipos de cocciones, presentan beneficios como la disminución del uso de insecticidas, no generan resistencia en las plagas, no afectan a la salud humana, son económicos y se degradan con gran facilidad.

              .row(titulo="Biofungicidas")
                .col-12
                  p.mb-0 Se elaboran con elementos minerales, partes vegetales o cultivos de microorganismos, cuyas propiedades impiden o eliminan el crecimiento de hongos que provocan afectaciones en las plantas. Los biofungicidas se clasifican como ‘protectores’ a aquellos que forman una barrera contra el hongo, o como ‘sistémicos’ a aquellos que son absorbidos por las plantas, dotándolas de defensas en su interior.

              .row(titulo="Evitar propagación de hongos")
                .col-12
                  p.mb-0 Es fundamental evitar la propagación de enfermedades por hongos en sistemas agrícolas, así se protegen las plántulas, en sus primeros estados de desarrollo, de enfermedades, permitiendo un correcto desarrollo de sus raíces. 
      
    
    br
    br
    br

    .row.container.justify-content-around.align-items-center

      h4 Tipos de biopreparados
      p Los biopreparados se clasifican según el modo de acción sobre las plantas, y de acuerdo con la forma de preparación, como se muestra en la siguiente ilustración:

      .row 
        .col-lg-12.bloque-img-biopreparados
          figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/img-biopreparados.png", alt="alt")
      
      p.txt-biopreparados Algunas características, ventajas y desventajas del control biológico y los biopreparados, en lo relacionado con su aplicación, son:          

    br
    br
    br

    .row.container.justify-content-around.align-items-center

      .row.justify-content-around.align-items-center
        figure
            img(data-aos="fade-left")(src="@/assets/curso/temas/img-fondo-control-cultivos.png", alt="alt").img-fondo-control-cultivos
        
        .col-lg-7
          p.txt-control-cultivos Para el caso de ecosistemas estratégicos, como zonas de conservación o de producción forestal, el control biológico está recomendado como práctica que mantiene su aspecto natural. El control biológico consiste en la regulación de plagas por medio de la reproducción de sus enemigos naturales, lo que beneficia al suelo al disminuir la aplicación de insecticidas, herbicidas y fungicidas comerciales, mejorando, así, su calidad y evitando su contaminación. Además, esta estrategia controla plagas y enfermedades que podrían afectar el cultivo. 
          //p.texto-invisible Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quam dolorum harum. Error laborum eaque nobis ab sit consequuntur repudiandae repellendus culpa harum officiis nesciunt, sint rem impedit iure magnam!
        .col-lg-5
            figure
              img(data-aos="fade-left")(src="@/assets/curso/temas/img-control-cultivos.png", alt="alt").img-control-cultivos

    br
    br
    br

    .row.container.justify-content-around.align-items-center
      
        .row 
          .col-lg-12.bloque-img-biopreparados
            .titulo-sexto.color-primario.mb-3
              h5 Figura 2
              br 
              span
                <em>Control biológico</em>
            
            figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/img-control-biologico-tema1.png", alt="alt")
        
        
    br
    br
    br

    .row.container.justify-content-around.align-items-center.mb-5

      h4 Alelopatía
      
      p La alelopatía es otro de los métodos de control biológico más utilizados, consiste en incorporar a un cultivo plantas que tengan la capacidad de liberar compuestos químicos que generen un efecto sobre otras especies invasoras, ya sea animal, vegetal o microorganismos. 

      .row.justify-content-center.bloque-pasos-vert-tema1.mb-5

        .col-lg-7
          LineaTiempoD.color-secundario
            p(numero="1" titulo="Control alelopático") Para el control alelopático se utilizan cuatro tipos de plantas que brindan beneficios a los cultivos. 
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta.color-cuadro-text-tema1
                    span I)
                  | Plantas trampa, se siembran alrededor de la zona donde se encuentra el cultivo, cumplen con la función de atraer a los insectos y desviarlos. Igualmente, se pueden ubicar entre los surcos, concentrando, allí, la población de plagas, facilitando su captura manual.

            p(numero="2" titulo="Plantas repelentes") 
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.color-cuadro-text-tema1
                      span II)
                    | Plantas repelentes, su aroma fuerte mantiene alejados a los insectos por hasta 10 metros, se siembran bordeando los extremos de cada surco, lo que crea una barrera protectora.

            p(numero="3" titulo="Plantas acompañantes") 

                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.color-cuadro-text-tema1
                      span III)
                    | Plantas acompañantes, se siembran intercaladas en los cultivos. Generalmente, son plantas que producen aceites esenciales capaces de provocar efectos negativos en las plagas, expiden un olor desagradable para estas al combinar sus aceites esenciales con los de la planta de cultivo.

            p(numero="4" titulo="Plantas antagónicas") 

                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.color-cuadro-text-tema1
                      span IV)
                    | Plantas antagónicas, por medio de sus raíces, expulsan compuestos químicos causantes de efectos negativos en plantas vecinas.

        .col-8.col-lg-5
          figure
            img(src="@/assets/curso/temas/img-aleoquimicos-tema1.png", alt="alt")  

             
             
    

    h3 Diseños y estructuras

    p.mb-5 En el siguiente video se presenta la técnica de las estructuras, empleada para la conservación y manejo del suelo. Estas son utilizadas ante posibles pérdidas de suelo o del perfil de la montaña y también se usan cuando pueda estar en riesgo el talud de las áreas pendientes.


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/iPdYL26f51g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Recurso suelo',
        texto:
          'Manejar el suelo de manera sustentable es una prioridad, en especial, para la seguridad alimentaria y el futuro sostenible de la humanidad. La sostenibilidad, a grandes rasgos, se refiere a la capacidad de mantener un mismo estado, durante bastante cantidad de tiempo, aplicando esta noción al suelo como recurso; o sea, que la permanencia es la constante conferida al suelo, para conservar sus características biológicas, físicas y químicas, sin disminuir sus potenciales productivos, o su calidad, durante un largo periodo de tiempo.',
        imagen: require('@/assets/curso/temas/img1-slider2-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Manejo sostenible del suelo',
        texto:
          'Por lo tanto, el manejo sostenible del suelo implica conocer de cerca sus características, permitiendo mantenerlas en el tiempo o, incluso, mejorarlas. El uso de coberturas vegetales o residuos de cosecha, protege al suelo de los rayos del Sol y lo mantiene a una temperatura adecuada, para que sus microorganismos puedan cumplir todas las funciones imprescindibles.',
        imagen: require('@/assets/curso/temas/img2-slider2-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Aporte de materia orgánica',
        texto:
          'También, se debe tener en cuenta el aporte de materia orgánica. Esta, es la encargada de mejorar la estabilidad del suelo en el tiempo, porque le brinda una mayor adhesión. El aporte de materia orgánica, bien sea por residuos de cosecha, por estiércol de animales o por residuos de cocina, es vital para el suelo, porque sin este aporte se vería afectada la actividad biológica y, como consecuencia, sus características físicas, químicas y biológicas.',
        imagen: require('@/assets/curso/temas/img3-slider2-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Vocación de los suelos',
        texto:
          'Igualmente, es necesario conocer la vocación de los suelos, porque esto permite la toma de decisiones acertadas con respecto a los procedimientos que se llevarán a cabo, teniendo en cuenta, por supuesto, las actividades productivas ejecutadas, las cuales repercuten en varios aspectos como, por ejemplo, el calentamiento global, problemática que ocasiona el mayor deterioro de los suelos. ',
        imagen: require('@/assets/curso/temas/img4-slider2-tema1.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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

<style lang="sass">
.fondo-tema1_1
  background-image: url(../assets/curso/temas/img-fondo-texto-intro.png)
  background-position: top
  background-repeat: no-repeat
  background-size: 100%
.fondo-tema1_2
  background-image: url(../assets/curso/temas/img-fondo-slider1-tema1.png)
  background-position: top
  background-repeat: no-repeat
  background-size: 100%
.fondo-tema1_3
  background-image: url(../assets/curso/temas/img-fondo-conservacion-tema1.png)
  background-position: top
  background-repeat: no-repeat
  background-size: cover
</style>
