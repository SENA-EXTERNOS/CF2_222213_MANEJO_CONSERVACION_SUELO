export default {
  global: {
    componenteFormativo: 'Manejo y conservación del suelo',
    descripcionCurso:
      'Es fundamental contar con los conocimientos básicos para intervenir el suelo, procurando su sostenibilidad. En este sentido, el componente abordará temáticas como las formas de uso y conservación del suelo, las estrategias de diseño de recursos de apoyo estructural, la implementación del plan de manejo ambiental, las herramientas de monitoreo, tanto técnico como participativo, y el manejo de los registros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      //  {
      //    clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
      //    imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      //  },
      //  {
      //    clases: ['banner-principal-decorativo-2'],
      //    imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      //  },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conservación del suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Manejo y uso sostenible',
            hash: 'manejo-y-uso-sostenible',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de conservación',
            hash: 'tecnicas-de-conservacion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diseños y estructuras',
            hash: 'disenos-y-estructuras',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan de manejo ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Monitoreo técnico y participativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Parámetros de monitoreo',
            hash: 'parametros-de-monitoreo',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Instrumentos y elementos de monitoreo',
            hash: 'instrumentos-y-elementos-de-monitoreo',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Manejo de registros',
            hash: 'manejo-de-registros',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Impacto de la labranza mecanizada',
      referencia:
        'Gómez, N., Solorzano, M. & Villagra, K. (2017). La labranza mecanizada y su impacto en la conservación del suelo. <em>Tecnología en Marcha</em>, 31(1), p.170-180',
      tipo: 'Revisión literaria.',
      link: 'https://www.doi.org/10.18845/tm.v31i1.3506',
    },
    {
      tema: 'Manejo y conservación de suelos',
      referencia:
        'TvAgro. (2021). <em>Manejo y conservación de suelos en agroecología</em> [Video]. YouTube',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=iQ19VpVJ5Pg',
    },
    {
      tema: 'Cómo se hace el compostaje',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2018). <em>Guía de buenas prácticas para la gestión y uso sostenible de los suelos en áreas rurales.</em>',
      tipo: 'Guía ',
      link: 'https://www.fao.org/3/i8864es/I8864ES.pdf',
    },
    {
      tema: 'Tarjeta para observación de suelos',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura [FAO]. (2018). <em>Guía de buenas prácticas para la gestión y uso sostenible de los suelos en áreas rurales.</em>',
      tipo: 'Guía',
      link: 'https://www.fao.org/3/i8864es/I8864ES.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cárcava',
      significado:
        'hendidura que se forma, particularmente, sobre suelos por la acción del agua de lluvia. ',
    },
    {
      termino: 'Ciclo biogeoquímico',
      significado:
        'se refiere al intercambio de elementos como nitrógeno, oxígeno, hidrógeno, azufre, fósforo, potasio o carbono, entre los seres vivos y el ambiente presente en el suelo.',
    },
    {
      termino: 'Degradación',
      significado:
        'pérdida de la capacidad del suelo para producir bienes o prestar servicios.',
    },
    {
      termino: 'Diversificación',
      significado:
        'cambio generado en un suelo por la incorporación de nuevas especies vegetales.',
    },
    {
      termino: 'Erosión',
      significado:
        'pérdida de la capa superficial del suelo por acción del agua o el viento, lo que se traduce en la reducción de su capacidad productiva.',
    },
    {
      termino: 'Fertirrigación',
      significado:
        'fertilización a partir de residuos de estiércol de animales o de fertilizantes químicos diluidos en agua. Se usa para el mantenimiento de cultivos y pastos.',
    },
    {
      termino: 'Fitoquímicas',
      significado:
        'compuestos o sustancias químicas producidas por las plantas que, de manera natural, se encuentran en los vegetales (Fito=Planta).',
    },
    {
      termino: 'Mapa social',
      significado:
        'instrumento de intervención construido con la comunidad para comprender el contexto sociocultural, lo que permite poder plantear estrategias de trabajo en medio de un plan de manejo ambiental.',
    },
    {
      termino: 'Sedimentos',
      significado:
        'restos de suelo, tipo arcilla, que se encuentran en las superficies, son resultado de procesos como la purificación del agua. ',
    },
    {
      termino: 'Servicios ecosistémicos',
      significado:
        'son todos los procesos y funciones asociados a los ecosistemas que representan un beneficio para la especie humana, bien sea de provisión de alimentos, de tipo económico, turístico, cultural, etc.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acevedo, A., Jiménez, N. (Comp.) (2019). <em> Agroecología, experiencias comunitarias para la agricultura familiar en Colombia.</em> Universidad del Rosario. ',
      link:
        'https://library.oapen.org/bitstream/id/17dad682-77eb-4162-b9c4-3d1ef520ad97/external_content.pdf',
    },
    {
      referencia:
        'Cassma Consultores. (2018, abril 3). <em>Plan de Manejo Ambiental (PMA).</em> Cassma Consultores.',
      link: 'http://www.cassmaconsultores.com/plan-de-manejo-ambiental-pma/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
