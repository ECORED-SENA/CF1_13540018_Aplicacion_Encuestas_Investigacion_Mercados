export default {
  global: {
    componenteFormativo: 'Estructuración y realización de encuestas',
    descripcionCurso:
      'Cuando se hace referencia a las investigaciones de mercado, las encuestas son hoy en día el principal instrumento de recopilación de datos; por eso, quienes trabajan con ellas requieren conocer cómo es su estructura y aplicación, temas que en profundidad se abordarán en este componente formativo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
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
        titulo: 'Investigación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Metodologías',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de investigación de mercados',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clientes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Segmentación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ubicación geográfica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa: protección de datos en Colombia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ofimática básica para investigaciones de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Herramientas ofimáticas para encuestas presenciales y telefónicas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Herramientas ofimáticas para encuestas virtuales',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo:
              'Enfermedades profesionales con posible impacto en encuestadores',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Pausas activas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'La encuesta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Herramientas para encuestas presenciales',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Herramientas para encuestas virtuales',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Tipos de preguntas',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Realización de encuestas',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Constitución Política de Colombia de 1991. (1991). Art. 15 y Art. 20. 7 de julio de 1991.',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2013).Decreto 1377 de 2013. Por el cual se reglamenta parcialmente la Ley 1581 de 2012. 27 de junio de 2012.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=53646',
    },
    {
      referencia:
        'Kinnear, T., y  Taylor, J. (1998). Investigación de mercados. Editorial McGraw Hill.',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (1996). Mercadotecnia. Editorial Prentice Hall Hispanoamérica. ',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2007). Marketing, versión para Latinoamérica. Pearson Educación.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2157 de 2021. Modifica y adiciona elementos a la Ley 1266 de 2008 y se dictan disposiciones adicionales asociadas al Habeas Data.',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/LEY%202157%20DEL%2029%20DE%20OCTUBRE%20DE%202021.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). Ley 1581 de 2012. Ley de Protección de Datos. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
    },
    {
      referencia:
        'Martínez, F. D., y Arranza, E. C. (2012). Georreferenciación de documentos cartográficos para la gestión de archivos. Revista Catalana de Geografía.',
    },
    {
      referencia:
        'Ministerio del Trabajo de Colombia. (2019). Resolución 0312 de 2019. Por la cual se definen los estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actitud',
      significado:
        'valoraciones favorables o desfavorables, opiniones y tendencias que sistemáticamente, presenta una persona respecto de un objeto o idea.',
    },
    {
      termino: 'Cliente',
      significado:
        'centro de la estrategia de la empresa. Representa a la persona o empresa que adquiere los bienes y servicios.',
    },
    {
      termino: 'Empatía',
      significado:
        'principio básico necesario para la interacción con clientes. Consiste en ponerse en el lugar del otro, sin perder la objetividad.',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'conjunto de elementos físicos que conforman o apoyan el funcionamiento de una computadora.',
    },
    {
      termino: 'Protección de datos',
      significado:
        'derecho que tiene un ciudadano a que a sus datos se les dé buen uso.',
    },
    {
      termino: 'Salud ocupacional',
      significado:
        'actividad que promueve la salud de personas laboralmente activas.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'grado en el que el desempeño percibido de un producto o servicio coincide con las expectativas del comprador.',
    },
    {
      termino: 'Servicio',
      significado:
        'la combinación de varias cualidades (intangibles) como desempeño, esfuerzo, atención y otros tangibles como un trato amable, un obsequio, los muebles de la sala de recibo entre otros',
    },
    {
      termino: 'Software',
      significado:
        'conjunto de programas que permiten a la computadora realizar algunas tareas.',
    },
  ],
  complementario: [
    {
      tema: '1. Investigación de mercados',
      referencia:
        'Kotler, P., y Armstrong, G. (2007). Marketing, versión para Latinoamérica. Pearson Educación.',
      tipo: 'Libro',
      link:
        'https://docplayer.es/2214749-Marketing-version-para-latinoamerica.html',
    },
    {
      tema: '1. Investigación de mercados',
      referencia:
        'Moncayo, L. (1988). Investigación de mercados. Servicio Nacional de Aprendizaje.',
      tipo: 'Cartilla',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/991/no_3m_investigacion_mercados.pdf?sequence=12&isAllowed=y',
    },
    {
      tema: '5. Seguridad y Salud en el Trabajo',
      referencia:
        'Asturias Corporación Universitaria. (2017). Marco legal y formativo sobre Seguridad y Salud en el trabajo. Asturias Corporación Universitaria.',
      tipo: 'Cartilla',
      link:
        'https://www.centro-virtual.com/recursos/2019a07m06dc@v3p@r@1v3st1g@c10n/gesti@nss.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
