export default {
  global: {
    componenteFormativo:
      'Riesgos asociados al uso prolongado de las nuevas tecnologías',
    descripcionCurso:
      'El mundo digital brinda herramientas y servicios para el desarrollo personal y profesional de las personas, pero es indispensable conocer los riesgos asociados del uso de tecnologías que están en tendencia; este componente busca identificar y establecer los riesgos asociados al uso prolongado de la tecnología, su uso responsable, las repercusiones en la salud y los delitos, fraudes y amenazas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Riesgos o amenazas asociados al uso de las nuevas tecnologías',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Uso prolongado de dispositivos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Riesgos y recomendaciones de buen uso',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Uso prolongado de redes sociales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Fraude electrónico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Delitos contra la propiedad intelectual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Amenazas a la privacidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Ciberbullying o ciberacoso',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        'Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil. (2017) <i>Cartillas de seguridad para internet.</i>',
      link: 'https://cartilla.cert.br',
    },
    {
      referencia:
        'Díaz y García Conlledo, M. (s.f.). Delitos contra la propiedad intelectual e industrial especial atención a la aplicación práctica en España. <i>Derecho Penal y Criminología</i>, 30(88), 93-134.',
      link:
        'https://revistas.uexternado.edu.co/index.php/derpen/article/view/612',
    },
    {
      referencia:
        'Edusalta. (2015). <i>Cyberbullying - Guía práctica para adultos.</i>',
      link:
        'http://www.edusalta.gov.ar/index.php/docman/secretaria-de-planeamiento-educativo/buenas-practicas-de-convivencia-institucional/2728-cyberbullying-guia-practica-para-adultos',
    },
    {
      referencia:
        'Eset. (2014). <i>Top 5 de riesgos para la privacidad que debes conocer.</i>',
      link:
        'https://www.welivesecurity.com/la-es/2014/08/29/top-5-riesgos-privacidad-debes-conocer/',
    },
    {
      referencia:
        'Fernández, J. (2018). <i>Ciberbullying. Guía rápida para la prevención del acoso</i>',
      link: 'https://www.ararteko.eus/RecursosWeb/DOCUMENTOS/1/1_1218_3.pdf',
    },
    {
      referencia:
        'Gallego, H. (2021). <i>¿Sabes en que consiste la tecnotoxicopatología?</i>',
      link:
        'https://clinicalasamericas.lasamericas.com.co/Promoción-y-prevención/Blog/191sabes-en-qu233-consiste-la-tecnotoxicopatolog237a',
    },
    {
      referencia:
        'Iniseg. (2018). <i>Ciberseguridad al día, qué es oversharing, la sobreexposición en redes que nos persigue.</i>',
      link:
        'https://www.iniseg.es/blog/ciberseguridad/oversharing-conocelo-y-frenalo/',
    },
    {
      referencia:
        'Molina, M., Furnari, A., y Hagelstrom, I. (2017). <i>Guía de sensibilización sobre convivencia digital.</i>',
      link:
        'https://www.unicef.org/argentina/sites/unicef.org.argentina/files/2018-04/COM-Guia_ConvivenciaDigital_ABRIL2017.pdf',
    },
    {
      referencia:
        'OMPI, Organización Mundial de la Privacidad. (2021). <i>¿Qué es la propiedad intelectual?</i>',
      link: 'https://www.wipo.int/about-ip/es/',
    },
    {
      referencia:
        'Portafolio. (28 de octubre de 2015). <i>Amenazas que afectan la privacidad en Internet.</i>',
      link:
        'https://www.portafolio.co/negocios/empresas/amenazas-afectan-privacidad-internet-36348',
    },
    {
      referencia:
        'Sánchez, G. (2012). Delitos en internet: clases de fraudes y estafas y las medidas para prevenirlos. <i>Boletín de Información</i>, 324, 67-88.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/4198948.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'peligro latente de que un evento físico de origen natural, o causado, o inducido por la acción humana de manera accidental, se presente con una severidad suficiente para causar pérdida de vidas, lesiones u otros impactos en la salud, así como también daños y pérdidas en los bienes, la infraestructura, los medios de sustento, la prestación de servicios y los recursos ambientales (Ley 1523 de 2012).',
    },
    {
      termino: 'Amenaza tecnológica',
      significado:
        'amenaza relacionada con accidentes tecnológicos o industriales, procedimientos peligrosos, fallos de infraestructura o de ciertas actividades humanas, que pueden causar muerte o lesiones, daños materiales, interrupción de la actividad social y económica o degradación ambiental. Algunas veces llamadas amenazas antropogénicas. Ejemplos incluyen contaminación industrial, descargas nucleares y radioactividad, desechos tóxicos, ruptura de presas, explosiones e incendios (Lavell, 2007, en UNGRD, 2017).',
    },
    {
      termino: 'Bloquear',
      significado:
        'impedir o restringir el acceso de una persona o usuario concreto a un entorno digital determinado. Este puede ser un videojuego, un canal de chat, o una red social. Cualquier contexto en el que el acoso pueda tener lugar. Para entenderlo en el contexto del ciberacoso, “será importante bloquear a los acosadores” para que no ejerzan el hostigamiento.',
    },
    {
      termino: 'Ingeniería social',
      significado:
        'tácticas utilizadas para obtener información y datos sensibles de la víctima. Muchas veces son claves o códigos de una persona. Estas técnicas de persuasión suelen valerse de la buena voluntad y la falta de precaución de la víctima.',
    },
    {
      termino: 'Peligro',
      significado:
        'fuente o situación con capacidad de producir daño en términos de lesiones, daños a la propiedad, daños al medio ambiente o una combinación de ellos (ARL Sura, 2017).',
    },
    {
      termino: 'Phishing',
      terminoHtml: '<em>Phishing</em>',
      significado:
        'tipo de estafa que combina <i>e-mails</i> falsos supuestamente enviados desde instituciones de confianza (bancos, empresas de internet, tiendas, entre otras), y que enlazan con sitios web ficticios. Esto, con el fin de engañar a los consumidores y convencerlos de entregar sus datos financieros como números de tarjeta de crédito, de cuenta bancaria, nombres de usuario y passwords, entre otros (SERNAC, 2021).',
    },
    {
      termino: 'Privacidad',
      significado:
        'información sensible y privada que se comparte en internet para preservar la integridad de los datos y la información esta debe ser protegida a través de configuraciones y canales de privacidad de la información.',
    },
    {
      termino: 'Riesgo',
      significado:
        'combinación de la probabilidad de que ocurra una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por éstos (ARL Sura, 2017).',
    },
    {
      termino: 'Sextorsión',
      significado:
        'una vez alguien posee material sexual sobre otra persona, puede utilizarlo para realizar algún tipo de chantaje bajo la amenaza de publicar ese contenido sexual y privado de la otra persona.',
    },
  ],
  complementario: [
    {
      texto:
        'Riesgos y Amenazas, redes sociales: Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil. (2017). <i>Cartillas de Seguridad para Internet.</i>',
      tipo: 'Cartilla',
      link: 'https://cartilla.cert.br',
    },
    {
      texto:
        'Fraudes electrónicos: Sánchez, G. (2012). Delitos en internet: clases de fraudes y estafas y las medidas para prevenirlos. <i>Boletín de Información, 324, 67-88.</i>',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/descarga/articulo/4198948.pdf',
    },
    {
      texto:
        'Ciberbullying: Molina, M., Furnari, A., y Hagelstrom, I. (2017). <i>Guía de sensibilización sobre convivencia digital.</i>',
      tipo: 'Cartilla',
      link:
        'https://www.unicef.org/argentina/sites/unicef.org.argentina/files/2018-04/COM-Guia_ConvivenciaDigital_ABRIL2017.pdf',
    },
    {
      texto:
        'Ciberbullying: Edusalta. (2015).  <i>Cyberbullying - Guía práctica para adultos.</i>',
      tipo: 'Cartilla',
      link:
        'http://www.edusalta.gov.ar/index.php/docman/secretaria-de-planeamiento-educativo/buenas-practicas-de-convivencia-institucional/2728-cyberbullying-guia-practica-para-adultos',
    },
    {
      texto:
        'Ciberbullying: Fernández, J. (2018). <i>CiberBullying. Guía rápida para la prevención del acoso.</i>',
      tipo: 'Cartilla',
      link: 'https://www.ararteko.eus/RecursosWeb/DOCUMENTOS/1/1_1218_3.pdf',
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
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'CCentro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
