(function(e){function a(a){for(var i,o,c=a[0],l=a[1],s=a[2],d=0,u=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&u.push(t[o][0]),t[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,o=1;o<n.length;o++){var c=n[o];0!==t[c]&&(i=!1)}i&&(r.splice(a--,1),e=l(l.s=n[0]))}return e}var i={},o={app:0},t={app:0},r=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"3ce8eb96","chunk-0206bfa0":"4a79315c","chunk-0c047e41":"4fd3a321","chunk-13a6037e":"5573678f","chunk-18f95272":"12017d0d","chunk-25b302c8":"1b34e4c2","chunk-26fc7596":"37d7d8ac","chunk-2c06842c":"32ae0a73","chunk-2d0e96ec":"ae491afd","chunk-2d208d90":"2a0e5724","chunk-2d21d0e2":"8a0fc40b","chunk-2d22c123":"5060311f","chunk-2d2747e2":"7ef6a077","chunk-2e80bb9a":"4fe7454e","chunk-319206de":"b0f488f5","chunk-32334cb6":"75ba9ada","chunk-3c57cd7b":"fbf4b1c6","chunk-3d6834f6":"171ba961","chunk-4cdd78c0":"199dc62d","chunk-4f2d402a":"278fc267","chunk-4fde0a08":"fdee7464","chunk-515a8379":"2a2e7eb7","chunk-53ccb27e":"6f9beb29","chunk-55d286b8":"9e71834f","chunk-59974754":"85d82cba","chunk-6e1e538a":"a7b83e14","chunk-766a929b":"82cdb3d1","chunk-c796899c":"69ccb7de","chunk-e8a7823a":"9fa38ef0","chunk-f2df7d2c":"6572ae72","chunk-fde47172":"bb4fe0e2",comple:"1dc41590",creditos:"5319443e",glosario:"766ff966",intro:"08c81d2f",referencias:"94471ee4",sintesis:"5fd06c36",tema1:"47731f9a",tema2:"97cc866d",tema3:"afdffe8b",tema4:"211fbdd2",tema5:"0d8206d4",tema6:"bd4d88c2"}[e]+".js"}function l(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema5:1};o[e]?a.push(o[e]):0!==o[e]&&n[e]&&a.push(o[e]=new Promise((function(a,n){for(var i="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"9551c685","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"ed6791b5","chunk-6e1e538a":"5eb299c6","chunk-766a929b":"02fc0649","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"57475a09",creditos:"c1ecb0e2",glosario:"d6559528",intro:"31d6cfe0",referencias:"788ed23e",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"b6f29d1f",tema6:"31d6cfe0"}[e]+".css",t=l.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===i||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],d=s.getAttribute("data-href");if(d===i||d===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var i=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var i=t[e];if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(a,n){i=t[e]=[a,n]}));a.push(i[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var u=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=i,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)l.d(n,i,function(a){return e[a]}.bind(null,i));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var m=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"35ec":function(e,a,n){e.exports=n.p+"img/5.1fa494d7.svg"},"3eec":function(e,a,n){e.exports=n.p+"img/banner-principal_2.f784b7ba.png"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("68f3"),o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=n("2877"),s=Object(l["a"])(c,o,t,!1,null,null,null),d=s.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Planificación de la campaña ambiental",descripcionCurso:"Mediante este componente, se estudian elementos de la educación ambiental, política nacional de educación ambiental, estrategias de acción en promotorías ambientales y fortalecimiento comunitario y social, en el marco del desarrollo medioambiental. Se insta, además, a la adopción de una mirada efectiva de inclusión, equidad y promoción de los individuos y colectivos, como protagonistas de estos procesos.",fondoBannerPrincipal:n("9924"),imagenBannerPrincipal:n("3eec"),fondoBannerInterno:n("9d2e"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("c1f0")},{clases:["banner-principal-decorativo-2"],imagen:n("a78a")},{clases:["banner-principal-decorativo-3"],imagen:n("aa13")},{clases:["banner-principal-decorativo-4"],imagen:n("5972")},{clases:["banner-principal-decorativo-5"],imagen:n("35ec")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Conceptos Generales",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Educación ambiental",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Principios de la educación ambiental",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Objetivos de la educación ambiental",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Normativa asociada y Política Nacional de Educación Ambiental",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Caracterización de la población",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Comunidad y formas organizativas",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"La organización comunitaria",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"El territorio y su ordenamiento",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Igualdad de género",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Equidad de género",hash:"t_3_5"},{icono:"far fa-file-alt",numero:"3.6",titulo:"Inclusión social",hash:"t_3_6"},{icono:"far fa-file-alt",numero:"3.7",titulo:"Tipos y necesidades de capacitación en las organizaciones",hash:"t_3_7"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Técnicas LNC: tipos, recursos y materiales",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Promotoría ambiental",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"5.1",titulo:"5.1 Importancia de la promotoría ambiental ",hash:"t_5_1"},{icono:"far fa-file-alt",numero:"5.2",titulo:"La promotoría ambiental en Colombia",hash:"t_5_2"},{icono:"far fa-file-alt",numero:"5.3",titulo:"5.3 Perfil del promotor",hash:"t_5_3"},{icono:"far fa-file-alt",numero:"5.4",titulo:"Funciones",hash:"t_5_4"},{icono:"far fa-file-alt",numero:"5.5",titulo:"Promotor comunitario",hash:"t_5_5"},{icono:"far fa-file-alt",numero:"5.6",titulo:"Los roles del promotor ambiental",hash:"t_5_6"}]},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Diseño de un plan de promotoría ambientalbiental",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"6.1",titulo:"Planificación de la promotoría ",hash:"t_6_1"},{icono:"far fa-file-alt",numero:"6.2",titulo:"Diseño del plan",hash:"t_6_2"},{icono:"far fa-file-alt",numero:"6.3",titulo:"Recolección de la información",hash:"t_6_3"},{icono:"far fa-file-alt",numero:"6.4",titulo:"Las metas",hash:"t_6_4"},{icono:"far fa-file-alt",numero:"6.5",titulo:"Plan de acción",hash:"t_6_5"},{icono:"far fa-file-alt",numero:"6.6",titulo:"Seguimiento y evaluación",hash:"t_6_6"},{icono:"far fa-file-alt",numero:"6.7",titulo:"Finalidad del plan de gestión ambiental",hash:"t_6_7"},{icono:"far fa-file-alt",numero:"6.8",titulo:"Ejes de investigación de la promotoría ambiental",hash:"t_6_8"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Aguilar, J. (2010). Análisis de modos de falla, efectos y criticidad (AMFEC) para la planeación del mantenimiento empleando criterios de riesgo y confiabilidad. Tecnología, Ciencia, Educación, 25(1), p. 15-26.",link:"https://www.redalyc.org/pdf/482/48215094003.pdf"},{referencia:"Barros, G. (2009). El ser humano y la biodiversidad en el ecosistema: validación de una experiencia de aula. Enseñanza de las ciencias. Revista de investigación y experiencias didácticas. ",link:"https://raco.cat/index.php/Ensenanza/article/view/294036/382567"},{referencia:"Cazzuffi, C. (2019). Una nueva política para el desarrollo rural en América Latina. México social. ",link:"https://www.mexicosocial.org/una-nueva-politica-para-el-desarrollo-rural-en-america-latina/"},{referencia:"Cerda, H. (1991). Los elementos de la investigación: Cómo reconocerlos, diseñarlos y construirlos. Editorial El Búho."},{referencia:"Chiavenato, I. (2004). Comportamiento organizacional. La dinámica del éxito en las comunicaciones. McGraw-Hill Educación. ",link:"https://www.academia.edu/29923149/Comportamiento_Organizacional_Idalberto_Chiavenato_McGrawhill_2da_Edicion_pdf"},{referencia:"García, J. (1997). Los contenidos de la Educación Ambiental: una reflexión desde la perspectiva de la complejidad. Investigación en la escuela, (53), p. 31-51.  ",link:"https://revistascientificas.us.es/index.php/IE/article/view/7531"},{referencia:"Ley 1549 de 2012. Por medio de la cual se fortalece la institucionalización de la política nacional de educación ambiental y su incorporación efectiva en el desarrollo territorial. Julio 05 de 2012."},{referencia:"Maldonado, T. (2013). Promotoría Ambiental. Centro de educación y capacitación para el desarrollo sustentable.",link:" http://189.208.102.74/u094/m-sitios/academicos/teresita/articulos/Promotoria_ambiental.pdf"},{referencia:"Máxima, J. (2020). Comunidad. Características.",link:"https://www.caracteristicas.co/comunidad/#ixzz6d9dpC3wQ"},{referencia:"Martínez, R. (2010). La importancia de la educación ambiental ante la problemática actual. Revista Electrónica Educare, 14(1), p. 97-111. ",link:"https://www.redalyc.org/pdf/1941/194114419010.pdf."},{referencia:"Ministerio del Medio Ambiente. (2020). Programa Nacional de promotoría ambiental comunitaria. Minambiente."},{referencia:"Ministerio del Medio Ambiente y Ministerio de Educación Nacional. (2002). Política Nacional de Educación Ambiental SINA. ",link:"https://drive.google.com/file/d/1kg0rLJhOf_1GI4fgfnT76OLT8dsb3Syy/view?usp=sharing"},{referencia:"Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura [UNESCO]. (2014). Manual metodológico. Indicadores de cultura para el desarrollo. ",link:"https://es.unesco.org/creativity/sites/creativity/files/iucd_manual_metodologico_1.pdf"},{referencia:"ODESCA. (2012). Guía para la promotora y el promotor comunitario ambiental. Gobierno Nacional República de Panamá. ",link:"https://www.sdgfund.org/sites/default/files/ENV_GUIA_Panam_Promotor%20Comunitario%20Ambiental.pdf"},{referencia:"Penzo, W. (2015). Diseño y elaboración de actividades de aprendizaje. Universitat de Barcelona. ",link:"https://core.ac.uk/download/pdf/16200477.pdf."},{referencia:"Pomachagua, J. (2010). Educación para el desarrollo sostenible. Universidad Nacional del Centro del Perú. Redacción PQS. (2012). ¿Qué debemos entender por inclusión social?. PQS.",link:"https://www.pqs.pe/actualidad/noticias/que-debemos-entender-por-inclusion-social."},{referencia:"Rengifo, B. (2012). La educación ambiental una estrategia pedagógica Que contribuye a la solución de la problemática Ambiental en Colombia. XII Coloquio Internacional de Geocrítica.",link:"http://www.ub.edu/geocrit/coloquio2012/actas/06-B-Rengifo.pdf"},{referencia:"Resolución 444 de 2013. [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]. Por la cual se establecen los términos de referencia para la elaboración del Estudio Ambiental de Formulación (EAF), de los Macroproyectos de Interés Social Nacional y se adoptan otras disposiciones. Mayo 15 de 2013."},{referencia:"Ruiz, C. (2017). Diseño de proyectos de educación ambiental. Junta de Andalucía."},{referencia:"Pareja, D. (2019). Lo que necesitas saber sobre planes de acción. Pirani. ",link:"https://www.piranirisk.com/es/blog/que-es-un-plan-de-accion"},{referencia:"Zamalloa, E. y Diaz, J. (2005). Guías Metodológicas para la Gestión Ambiental. Foro Ciudades para la vida.",link:"https://www.academia.edu/25938537/Gu%C3%ADas_Metodol%C3%B3gicas_para_la_Gesti%C3%B3n_Ambiental"}],glosario:[{termino:"Ambiente:",significado:"Región, alrededores y circunstancias en las que se encuentra un ser u objeto. El ambiente de un individuo comprende dos tipos de constituyentes: 1. El medio puramente físico o abiótico, en el cual él existe (aire, agua) y 2. El componente biótico, que comprende la materia orgánica no viviente y todos los organismos, plantas y animales de la región, incluida la población específica a la que pertenece el organismo (CRQ, s. f.)."},{termino:"Calidad ambiental:",significado:"Los atributos mensurables de un producto o proceso que indican su contribución a la salud e integridad ecológica. Estado físico, biológico y ecológico de un área o zona determinada de la biosfera, en términos relativos a su unidad y a la salud presente y futura del hombre y las demás especies animales y vegetales (CRQ, s. f.)."},{termino:"Comunidad:",significado:"Conjunto de seres vivos que pueblan un territorio determinado caracterizado por las interrelaciones que estos organismos tienen entre sí y con su entorno. Grupo integrado de especies que habitan en determinada zona; los organismos de determinada comunidad se influyen mutuamente en materia de distribución, abundancia y evolución. (Una comunidad humana es un grupo social de cualquier tamaño cuyos miembros viven en determinada localidad.) (CRQ, s. f.). "},{termino:"Contaminación:",significado:"Liberación de sustancias que, de manera directa o indirecta, causan efectos adversos sobre el medio ambiente y los seres vivos. Existencia en el ambiente de contaminantes o agentes tóxicos o infecciosos que entorpecen o perjudican la vida, la salud y el bienestar del hombre, la fauna y la flora; que degradan la calidad del ambiente y, en general, el equilibrio ecológico y los bienes particulares y públicos. (CRQ, s. f.)."},{termino:"Población:",significado:"Grupo de individuos con un ancestro común, que tienden en mucho mayor medida a formar parejas entre sí, más que con individuos de otro grupo del mismo género (CRQ, s. f.)."}],complementario:[{tema:"1. Conceptos generales",referencia:"CENEAM OAPN. (2019). La Educación Ambiental explicada en cinco minutos (2019) [Video]. YouTube",tipo:"Video",link:"https://www.youtube.com/watch?v=hYOy6grpqoY."},{tema:"2. Normatividad asociada a la promotoría y política de educación ambiental",referencia:"Correa, E. (2020). Introducción a la Normatividad ambiental en Colombia [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=C8WJtf3JspU."},{tema:"2. Normatividad asociada a la promotoría y política de educación ambiental ",referencia:"Ministerio del Medio Ambiente y Ministerio de Educación Nacional. (2002). Política Nacional de Educación Ambiental SINA.",tipo:"Manual",link:"https://drive.google.com/file/d/1kg0rLJhOf_1GI4fgfnT76OLT8dsb3Syy/view?usp=sharing"},{tema:"4. Técnicas LNC: tipos, recursos y materiales",referencia:"Compartir Palabra Maestra. (2015). ¿Qué es un recurso didáctico? [Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=10_0nVuXZqo. "},{tema:"5. Promotoría ambiental",referencia:"Jardín Botánico de Bogotá. (2014). Formación en Promotoría Ambiental  [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=0w7JELc6ccg. "},{tema:"5. Promotoría ambiental",referencia:'Brigadas Verdes. (2013). Tutorial 3 "El Rol del promotor ambiental" [Video]. YouTube. ',tipo:"Video",link:"https://www.youtube.com/watch?v=Sm_ISgLI0l4."}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Diana Carolina Triana Guarnizo",cargo:"Instructor",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Juan Carlos Cárdenas Sánchez",cargo:"Asesor metodológico y pedagógico",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Fabián Leonardo Correa Díaz",cargo:"Diseñador instruccional",centro:"Centro agropecuario La Granja - Regional Tolima"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Evaluadora Instruccional",centro:"Centro de Gestión Industrial - Regional Tolima"},{nombre:"Gloria Esperanza Ortiz Russi",cargo:"Diseñador y evaluador instruccional",centro:"Centro de diseño y metrología - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Diana Carolina Acevedo Barón ",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gustavo Adolfo Marún Suárez",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Maria Eugenia Mejía López",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});i["a"].prototype.$config=v;var y=n("9224");i["a"].prototype.$package=y,new i["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},5972:function(e,a,n){e.exports=n.p+"img/4.49ff0648.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},9924:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.a12783ff.png"},"9d2e":function(e,a,n){e.exports=n.p+"img/interno.51239599.svg"},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},a78a:function(e,a,n){e.exports=n.p+"img/2.5833d851.svg"},aa13:function(e,a,n){e.exports=n.p+"img/3.189d9432.svg"},c1f0:function(e,a,n){e.exports=n.p+"img/1.8af19cbc.svg"}});
//# sourceMappingURL=app.963810be.js.map