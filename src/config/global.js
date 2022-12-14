export default {
  global: {
    componenteFormativo: 'Planificación de la campaña ambiental',
    descripcionCurso:
      'Mediante este componente, se estudian elementos de la educación ambiental, política nacional de educación ambiental, estrategias de acción en promotorías ambientales y fortalecimiento comunitario y social, en el marco del desarrollo medioambiental. Se insta, además, a la adopción de una mirada efectiva de inclusión, equidad y promoción de los individuos y colectivos, como protagonistas de estos procesos.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal_2.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/images/header/5.svg'),
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
        titulo: 'Conceptos Generales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Educación ambiental',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios de la educación ambiental',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Objetivos de la educación ambiental',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normativa asociada y Política Nacional de Educación Ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Caracterización de la población',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Comunidad y formas organizativas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'La organización comunitaria',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'El territorio y su ordenamiento',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Igualdad de género',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Equidad de género',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Inclusión social',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Tipos y necesidades de capacitación en las organizaciones',
            hash: 't_3_7',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas LNC: tipos, recursos y materiales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Promotoría ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: '5.1 Importancia de la promotoría ambiental ',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'La promotoría ambiental en Colombia',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: '5.3 Perfil del promotor',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Funciones',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Promotor comunitario',
            hash: 't_5_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.6',
            titulo: 'Los roles del promotor ambiental',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Diseño de un plan de promotoría ambientalbiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Planificación de la promotoría ',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Diseño del plan',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Recolección de la información',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Las metas',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Plan de acción',
            hash: 't_6_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.6',
            titulo: 'Seguimiento y evaluación',
            hash: 't_6_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.7',
            titulo: 'Finalidad del plan de gestión ambiental',
            hash: 't_6_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.8',
            titulo: 'Ejes de investigación de la promotoría ambiental',
            hash: 't_6_8',
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
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      // desarrolloContenidos: true,
      //},
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
        'Aguilar, J. (2010). Análisis de modos de falla, efectos y criticidad (AMFEC) para la planeación del mantenimiento empleando criterios de riesgo y confiabilidad. Tecnología, Ciencia, Educación, 25(1), p. 15-26.',
      link: 'https://www.redalyc.org/pdf/482/48215094003.pdf',
    },
    {
      referencia:
        'Barros, G. (2009). El ser humano y la biodiversidad en el ecosistema: validación de una experiencia de aula. Enseñanza de las ciencias. Revista de investigación y experiencias didácticas. ',
      link: 'https://raco.cat/index.php/Ensenanza/article/view/294036/382567',
    },
    {
      referencia:
        'Cazzuffi, C. (2019). Una nueva política para el desarrollo rural en América Latina. México social. ',
      link:
        'https://www.mexicosocial.org/una-nueva-politica-para-el-desarrollo-rural-en-america-latina/',
    },
    {
      referencia:
        'Cerda, H. (1991). Los elementos de la investigación: Cómo reconocerlos, diseñarlos y construirlos. Editorial El Búho.',
    },
    {
      referencia:
        'Chiavenato, I. (2004). Comportamiento organizacional. La dinámica del éxito en las comunicaciones. McGraw-Hill Educación. ',
      link:
        'https://www.academia.edu/29923149/Comportamiento_Organizacional_Idalberto_Chiavenato_McGrawhill_2da_Edicion_pdf',
    },
    {
      referencia:
        'García, J. (1997). Los contenidos de la Educación Ambiental: una reflexión desde la perspectiva de la complejidad. Investigación en la escuela, (53), p. 31-51.  ',
      link: 'https://revistascientificas.us.es/index.php/IE/article/view/7531',
    },
    {
      referencia:
        'Ley 1549 de 2012. Por medio de la cual se fortalece la institucionalización de la política nacional de educación ambiental y su incorporación efectiva en el desarrollo territorial. Julio 05 de 2012.',
    },
    {
      referencia:
        'Maldonado, T. (2013). Promotoría Ambiental. Centro de educación y capacitación para el desarrollo sustentable.',
      link:
        ' http://189.208.102.74/u094/m-sitios/academicos/teresita/articulos/Promotoria_ambiental.pdf',
    },
    {
      referencia: 'Máxima, J. (2020). Comunidad. Características.',
      link: 'https://www.caracteristicas.co/comunidad/#ixzz6d9dpC3wQ',
    },
    {
      referencia:
        'Martínez, R. (2010). La importancia de la educación ambiental ante la problemática actual. Revista Electrónica Educare, 14(1), p. 97-111. ',
      link: 'https://www.redalyc.org/pdf/1941/194114419010.pdf.',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente. (2020). Programa Nacional de promotoría ambiental comunitaria. Minambiente.',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente y Ministerio de Educación Nacional. (2002). Política Nacional de Educación Ambiental SINA. ',
      link:
        'https://drive.google.com/file/d/1kg0rLJhOf_1GI4fgfnT76OLT8dsb3Syy/view?usp=sharing',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura [UNESCO]. (2014). Manual metodológico. Indicadores de cultura para el desarrollo. ',
      link:
        'https://es.unesco.org/creativity/sites/creativity/files/iucd_manual_metodologico_1.pdf',
    },
    {
      referencia:
        'ODESCA. (2012). Guía para la promotora y el promotor comunitario ambiental. Gobierno Nacional República de Panamá. ',
      link:
        'https://www.sdgfund.org/sites/default/files/ENV_GUIA_Panam_Promotor%20Comunitario%20Ambiental.pdf',
    },
    {
      referencia:
        'Penzo, W. (2015). Diseño y elaboración de actividades de aprendizaje. Universitat de Barcelona. ',
      link: 'https://core.ac.uk/download/pdf/16200477.pdf.',
    },
    {
      referencia:
        'Pomachagua, J. (2010). Educación para el desarrollo sostenible. Universidad Nacional del Centro del Perú. Redacción PQS. (2012). ¿Qué debemos entender por inclusión social?. PQS.',
      link:
        'https://www.pqs.pe/actualidad/noticias/que-debemos-entender-por-inclusion-social.',
    },
    {
      referencia:
        'Rengifo, B. (2012). La educación ambiental una estrategia pedagógica Que contribuye a la solución de la problemática Ambiental en Colombia. XII Coloquio Internacional de Geocrítica.',
      link: 'http://www.ub.edu/geocrit/coloquio2012/actas/06-B-Rengifo.pdf',
    },
    {
      referencia:
        'Resolución 444 de 2013. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se establecen los términos de referencia para la elaboración del Estudio Ambiental de Formulación (EAF), de los Macroproyectos de Interés Social Nacional y se adoptan otras disposiciones. Mayo 15 de 2013.',
    },
    {
      referencia:
        'Ruiz, C. (2017). Diseño de proyectos de educación ambiental. Junta de Andalucía.',
    },
    {
      referencia:
        'Pareja, D. (2019). Lo que necesitas saber sobre planes de acción. Pirani. ',
      link: 'https://www.piranirisk.com/es/blog/que-es-un-plan-de-accion',
    },
    {
      referencia:
        'Zamalloa, E. y Diaz, J. (2005). Guías Metodológicas para la Gestión Ambiental. Foro Ciudades para la vida.',
      link:
        'https://www.academia.edu/25938537/Gu%C3%ADas_Metodol%C3%B3gicas_para_la_Gesti%C3%B3n_Ambiental',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente:',
      significado:
        'Región, alrededores y circunstancias en las que se encuentra un ser u objeto. El ambiente de un individuo comprende dos tipos de constituyentes: 1. El medio puramente físico o abiótico, en el cual él existe (aire, agua) y 2. El componente biótico, que comprende la materia orgánica no viviente y todos los organismos, plantas y animales de la región, incluida la población específica a la que pertenece el organismo (CRQ, s. f.).',
    },
    {
      termino: 'Calidad ambiental:',
      significado:
        'Los atributos mensurables de un producto o proceso que indican su contribución a la salud e integridad ecológica. Estado físico, biológico y ecológico de un área o zona determinada de la biosfera, en términos relativos a su unidad y a la salud presente y futura del hombre y las demás especies animales y vegetales (CRQ, s. f.).',
    },
    {
      termino: 'Comunidad:',
      significado:
        'Conjunto de seres vivos que pueblan un territorio determinado caracterizado por las interrelaciones que estos organismos tienen entre sí y con su entorno. Grupo integrado de especies que habitan en determinada zona; los organismos de determinada comunidad se influyen mutuamente en materia de distribución, abundancia y evolución. (Una comunidad humana es un grupo social de cualquier tamaño cuyos miembros viven en determinada localidad.) (CRQ, s. f.). ',
    },
    {
      termino: 'Contaminación:',
      significado:
        'Liberación de sustancias que, de manera directa o indirecta, causan efectos adversos sobre el medio ambiente y los seres vivos. Existencia en el ambiente de contaminantes o agentes tóxicos o infecciosos que entorpecen o perjudican la vida, la salud y el bienestar del hombre, la fauna y la flora; que degradan la calidad del ambiente y, en general, el equilibrio ecológico y los bienes particulares y públicos. (CRQ, s. f.).',
    },
    {
      termino: 'Población:',
      significado:
        'Grupo de individuos con un ancestro común, que tienden en mucho mayor medida a formar parejas entre sí, más que con individuos de otro grupo del mismo género (CRQ, s. f.).',
    },
  ],
  complementario: [
    {
      tema: '1. Conceptos generales',
      referencia:
        'CENEAM OAPN. (2019). La Educación Ambiental explicada en cinco minutos (2019) [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hYOy6grpqoY.',
    },

    {
      tema:
        '2. Normatividad asociada a la promotoría y política de educación ambiental',
      referencia:
        'Correa, E. (2020). Introducción a la Normatividad ambiental en Colombia [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=C8WJtf3JspU.',
    },
    {
      tema:
        '2. Normatividad asociada a la promotoría y política de educación ambiental ',
      referencia:
        'Ministerio del Medio Ambiente y Ministerio de Educación Nacional. (2002). Política Nacional de Educación Ambiental SINA.',
      tipo: 'Manual',
      link:
        'https://drive.google.com/file/d/1kg0rLJhOf_1GI4fgfnT76OLT8dsb3Syy/view?usp=sharing',
    },
    {
      tema: '4. Técnicas LNC: tipos, recursos y materiales',
      referencia:
        'Compartir Palabra Maestra. (2015). ¿Qué es un recurso didáctico? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=10_0nVuXZqo. ',
    },

    {
      tema: '5. Promotoría ambiental',
      referencia:
        'Jardín Botánico de Bogotá. (2014). Formación en Promotoría Ambiental  [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0w7JELc6ccg. ',
    },
    {
      tema: '5. Promotoría ambiental',
      referencia:
        'Brigadas Verdes. (2013). Tutorial 3 "El Rol del promotor ambiental" [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Sm_ISgLI0l4.',
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
      {
        nombre: 'Diana Carolina Triana Guarnizo',
        cargo: 'Instructor',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Juan Carlos Cárdenas Sánchez',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Tolima',
      },
      {
        nombre: 'Gloria Esperanza Ortiz Russi',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de diseño y metrología - Regional Distrito Capital',
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
        nombre: 'Diana Carolina Acevedo Barón ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
