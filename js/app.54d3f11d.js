(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"07d706d8","chunk-0206bfa0":"57dbf7a6","chunk-04b93936":"3c14a627","chunk-13a6037e":"1b59f382","chunk-16015154":"ea93c497","chunk-17977988":"963a5fdf","chunk-2c06842c":"f1bc62da","chunk-2d208d90":"b730f45e","chunk-2d21d0e2":"28a7b655","chunk-2d22c123":"29f50275","chunk-2e80bb9a":"4cfc8056","chunk-3145fe0f":"ff4a8116","chunk-328f70dd":"221b3462","chunk-3807499c":"8ced69b1","chunk-3dc647fd":"ee092220","chunk-4cdd78c0":"0e1dab42","chunk-4fde0a08":"c9ce3937","chunk-515a8379":"6c969eed","chunk-53ccb27e":"6112d9aa","chunk-59974754":"a9a1d6a0","chunk-766a929b":"7a61dadf","chunk-839300a6":"4491a515","chunk-c19cf7be":"6e7aa5e2","chunk-dbb9869e":"11aaf142",comple:"91897b40",creditos:"6d56e6b1",glosario:"dc942c20",intro:"63d42adf",referencias:"7a85e13e",tema1:"e841e7e7",tema2:"9f57f90c",tema3:"a29e666e"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema1:1,tema3:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"7af23af2","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"f34ec0c1","chunk-766a929b":"239be14b","chunk-839300a6":"b67dc245","chunk-c19cf7be":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"722ecece",creditos:"7e0000ba",glosario:"0261aeeb",intro:"0e433876",referencias:"2ae25b6b",tema1:"40e63c99",tema2:"31d6cfe0",tema3:"b91d122e"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===r)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],p.parentNode.removeChild(p),n(t)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var p=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"230f":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.3a9a71b2.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,i,r,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),p=n("8c4f"),m=n("ae58"),f=n("7e58");u["a"].use(p["a"]);var g=new p["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema3").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema3").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=g,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Riesgos asociados al uso prolongado de las nuevas tecnologías",descripcionCurso:"El mundo digital brinda herramientas y servicios para el desarrollo personal y profesional de las personas, pero es indispensable conocer los riesgos asociados del uso de tecnologías que están en tendencia; este componente busca identificar y establecer los riesgos asociados al uso prolongado de la tecnología, su uso responsable, las repercusiones en la salud y los delitos, fraudes y amenazas.",imagenBannerPrincipal:n("9370"),fondoBannerPrincipal:n("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Riesgos o amenazas asociados al uso de las nuevas tecnologías",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Uso prolongado de dispositivos",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Riesgos y recomendaciones de buen uso",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Uso prolongado de redes sociales",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Fraude electrónico",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Delitos contra la propiedad intelectual",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Amenazas a la privacidad",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Ciberbullying o ciberacoso",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil. (2017) <i>Cartillas de seguridad para internet.</i>",link:"https://cartilla.cert.br"},{referencia:"Díaz y García Conlledo, M. (s.f.). Delitos contra la propiedad intelectual e industrial especial atención a la aplicación práctica en España. <i>Derecho Penal y Criminología</i>, 30(88), 93-134.",link:"https://revistas.uexternado.edu.co/index.php/derpen/article/view/612"},{referencia:"Edusalta. (2015). <i>Cyberbullying - Guía práctica para adultos.</i>",link:"http://www.edusalta.gov.ar/index.php/docman/secretaria-de-planeamiento-educativo/buenas-practicas-de-convivencia-institucional/2728-cyberbullying-guia-practica-para-adultos"},{referencia:"Eset. (2014). <i>Top 5 de riesgos para la privacidad que debes conocer.</i>",link:"https://www.welivesecurity.com/la-es/2014/08/29/top-5-riesgos-privacidad-debes-conocer/"},{referencia:"Fernández, J. (2018). <i>Ciberbullying. Guía rápida para la prevención del acoso</i>",link:"https://www.ararteko.eus/RecursosWeb/DOCUMENTOS/1/1_1218_3.pdf"},{referencia:"Iniseg. (2018). <i>Ciberseguridad al día, qué es oversharing, la sobreexposición en redes que nos persigue.</i>",link:"https://www.iniseg.es/blog/ciberseguridad/oversharing-conocelo-y-frenalo/"},{referencia:"Molina, M., Furnari, A., y Hagelstrom, I. (2017). <i>Guía de sensibilización sobre convivencia digital.</i>",link:"https://www.unicef.org/argentina/sites/unicef.org.argentina/files/2018-04/COM-Guia_ConvivenciaDigital_ABRIL2017.pdf"},{referencia:"OMPI, Organización Mundial de la Privacidad. (2021). <i>¿Qué es la propiedad intelectual?</i>",link:"https://www.wipo.int/about-ip/es/"},{referencia:"Portafolio. (28 de octubre de 2015). <i>Amenazas que afectan la privacidad en Internet.</i>",link:"https://www.portafolio.co/negocios/empresas/amenazas-afectan-privacidad-internet-36348"},{referencia:"Sánchez, G. (2012). Delitos en internet: clases de fraudes y estafas y las medidas para prevenirlos. <i>Boletín de Información</i>, 324, 67-88.",link:"https://dialnet.unirioja.es/descarga/articulo/4198948.pdf"}],glosario:[{termino:"Amenaza",significado:"peligro latente de que un evento físico de origen natural, o causado, o inducido por la acción humana de manera accidental, se presente con una severidad suficiente para causar pérdida de vidas, lesiones u otros impactos en la salud, así como también daños y pérdidas en los bienes, la infraestructura, los medios de sustento, la prestación de servicios y los recursos ambientales (Ley 1523 de 2012)."},{termino:"Amenaza tecnológica",significado:"amenaza relacionada con accidentes tecnológicos o industriales, procedimientos peligrosos, fallos de infraestructura o de ciertas actividades humanas, que pueden causar muerte o lesiones, daños materiales, interrupción de la actividad social y económica o degradación ambiental. Algunas veces llamadas amenazas antropogénicas. Ejemplos incluyen contaminación industrial, descargas nucleares y radioactividad, desechos tóxicos, ruptura de presas, explosiones e incendios (Lavell, 2007, en UNGRD, 2017)."},{termino:"Bloquear",significado:"impedir o restringir el acceso de una persona o usuario concreto a un entorno digital determinado. Este puede ser un videojuego, un canal de chat, o una red social. Cualquier contexto en el que el acoso pueda tener lugar. Para entenderlo en el contexto del ciberacoso, “será importante bloquear a los acosadores” para que no ejerzan el hostigamiento."},{termino:"Ingeniería social",significado:"tácticas utilizadas para obtener información y datos sensibles de la víctima. Muchas veces son claves o códigos de una persona. Estas técnicas de persuasión suelen valerse de la buena voluntad y la falta de precaución de la víctima."},{termino:"Peligro",significado:"fuente o situación con capacidad de producir daño en términos de lesiones, daños a la propiedad, daños al medio ambiente o una combinación de ellos (ARL Sura, 2017)."},{termino:"Phishing",terminoHtml:"<em>Phishing</em>",significado:"tipo de estafa que combina <i>e-mails</i> falsos supuestamente enviados desde instituciones de confianza (bancos, empresas de internet, tiendas, entre otras), y que enlazan con sitios web ficticios. Esto, con el fin de engañar a los consumidores y convencerlos de entregar sus datos financieros como números de tarjeta de crédito, de cuenta bancaria, nombres de usuario y passwords, entre otros (SERNAC, 2021)."},{termino:"Privacidad",significado:"es el tratamiento que se debe brindar a la información sensible que se comparte en Internet. Esta información debe protegerse, a través de configuraciones y canales que permitan  preservar la integridad de los datos que la constituyen."},{termino:"Riesgo",significado:"combinación de la probabilidad de que ocurra una o más exposiciones o eventos peligrosos y la severidad del daño que puede ser causada por estos (ARL Sura, 2017)."},{termino:"Sextorsión",significado:"una vez alguien posee material sexual sobre otra persona, puede utilizarlo para realizar algún tipo de chantaje bajo la amenaza de publicar ese contenido sexual y privado de la otra persona."}],complementario:[{texto:"Riesgos y Amenazas, redes sociales: Centro de Estudos, Resposta e Tratamento de Incidentes de Segurança no Brasil. (2017). <i>Cartillas de Seguridad para Internet.</i>",tipo:"Cartilla",link:"https://cartilla.cert.br"},{texto:"Fraudes electrónicos: Sánchez, G. (2012). Delitos en internet: clases de fraudes y estafas y las medidas para prevenirlos. <i>Boletín de Información, 324, 67-88.</i>",tipo:"Artículo",link:"https://dialnet.unirioja.es/descarga/articulo/4198948.pdf"},{texto:"Ciberbullying: Molina, M., Furnari, A., y Hagelstrom, I. (2017). <i>Guía de sensibilización sobre convivencia digital.</i>",tipo:"Cartilla",link:"https://www.unicef.org/argentina/sites/unicef.org.argentina/files/2018-04/COM-Guia_ConvivenciaDigital_ABRIL2017.pdf"},{texto:"Ciberbullying: Edusalta. (2015).  <i>Cyberbullying - Guía práctica para adultos.</i>",tipo:"Cartilla",link:"http://www.edusalta.gov.ar/index.php/docman/secretaria-de-planeamiento-educativo/buenas-practicas-de-convivencia-institucional/2728-cyberbullying-guia-practica-para-adultos"},{texto:"Ciberbullying: Fernández, J. (2018). <i>CiberBullying. Guía rápida para la prevención del acoso.</i>",tipo:"Cartilla",link:"https://www.ararteko.eus/RecursosWeb/DOCUMENTOS/1/1_1218_3.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Pedro Javier Lozada Villota",cargo:"Experto temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Santander"},{nombre:"Paula Andrea Taborda Ortiz",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología - Regional distrito capital"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora metodológica y pedagógica",centro:"Centro para la Industria de la Comunicación Gráfica - Regional distrito capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional distrito capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Jorge Armando Villamizar Moreno",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Luis Fabian Robles Méndez",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Daniela Muñoz Bedoya",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Adriana Marcela Suárez Eljure",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Lina Marcela Pérez Manchego",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Villamizar Lizcano",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ángela María Maldonado Jaime",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ludwyng Corzo García",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ricardo Vásquez Arroyave",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Veimar Celis Melendez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var y=n("9224");o["a"].prototype.$package=y,new o["a"]({router:b,store:h["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.1","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.1","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},9370:function(e,a,n){e.exports=n.p+"img/banner-princiapal.3d184539.png"},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.54d3f11d.js.map