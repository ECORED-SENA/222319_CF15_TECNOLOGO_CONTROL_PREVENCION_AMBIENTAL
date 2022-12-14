<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Diseño de un plan de promotoría ambientalbiental


    p.mb-5 Para una capacitación y educación ambiental dentro de los contextos comunitarios locales y regionales, se requiere, sin duda, todo un plan estratégico que tenga en cuenta las generalidades del contexto y las necesidades de cambio, desarrollo, superación, mejora, conservación, entre otras, de la comunidad y su entorno ambiental natural.


    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema6/img_1.png')})`}")
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0  Es importante tener trazado un plan, un norte hacia dónde dirigir todas las estrategias y conceptos de educación que se quieren transmitir a la población o comunidad específica, es así como se mostrará la manera en que ha de diseñarse un plan de promotoría ambiental. 

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0  Es importante tener trazado un plan, un norte hacia dónde dirigir todas las estrategias y conceptos de educación que se quieren transmitir a la población o comunidad específica, es así como se mostrará la manera en que ha de diseñarse un plan de promotoría ambiental. 
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema6/img_1.png' alt='', style="width:400px; display:block; margin:-2rem 0rem ;").mb-3

    Separador

    #t_6_1.titulo-segundo
      .h2 6.1 Planificación de la promotoría 

    .row.justify-content-center.align-items-star
      .col-lg-6(data-aos="fade-right")
        p.mb-3 Teniendo en cuenta lo que plantea la formación de promotores y promotoras comunitarios en la cuenca del río Tabasará sobre el concepto de la educación ambiental y el rol que ejecuta el promotor en la comunidad, es importante establecer la planificación del proceso educativo. Así lo contempla la guía para la promotoría y promotor comunitario ambiental, donde:
        .jumbotron-8.p-4
          p.mb-3 …” El primer paso en la búsqueda de opciones para la solución de los problemas es conocerlos…

          p.mb-3 …Existe una herramienta llamada diagnóstico, la cual se define como un instrumento empleado por las comunidades para la construcción, en conjunto, del conocimiento de su realidad…

          p.mb-3 …Por medio de este diagnóstico, se identifican los problemas que las afectan, los recursos con los que cuentan y las potencialidades propias de la comunidad que puedan ser aprovechadas en beneficio de todos”. (ODESCA, 2012, p. 11).
      .col-10.col-lg-6(data-aos="fade-left")
        img(src="@/assets/curso/images/tema6/img_2.png").mb-3

    p.mb-3 Se habla de territorio como un espacio geográfico limitado por fronteras físicas, biológicas, sociales, culturales, cuyo interior está integrado por comunidades y diversos sectores sociales que influyen en la comunidad; sin embargo, Cazzuffi (2019) establece que “El concepto de ‘territorio’ nos permite superar la falsa dicotomía de lo urbano y lo rural. El territorio es un espacio vivo y socialmente construido, que no refleja necesariamente límites geográficos o administrativos, sino que es el producto de las interacciones sociales entre personas, instituciones, empresas y organizaciones, que expresan una identidad y un propósito compartido”.

    Separador

    #t_6_2.titulo-segundo
      .h2 6.2 Diseño del plan

    p.mb-3 Interpretar las realidades de una comunidad es un proceso interactivo, donde la persona o promotor ambiental se relaciona con las personas objeto de estudio de una manera colaborativa bidireccional, esto quiere decir que ambas partes se involucran y aprenden en conjunto. Para que esto sea posible, se deben llevar a cabo diferentes acciones, de manera organizada y planificada. Cuando se plantea el diseño de cualquier actividad o programa de EA, lo primero que se debe hacer es planificar.

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Desarrollo racional")
            .row.px-2.py-2.justify-content-center
              .col-6.col-lg-2 
                img(src="@/assets/curso/images/tema6/img_3.svg").mb-3
              .col-lg-10
                h4 Desarrollo racional
                p.mb-0 En este sentido, planificar se refiere al desarrollo racional y estructurado de lo que se va a hacer, determinando qué se quiere conseguir, qué se pretende transmitir, cómo se va a hacer, cómo reaccionar en caso de que surja algún imprevisto, qué recursos se necesitarán, y cómo se evaluará la actividad. 
          .tarjeta.back-tab.px-5.py-4(titulo="Ordenar ideas")
            .row.px-2.py-2.justify-content-center
              .col-6.col-lg-2 
                img(src="@/assets/curso/images/tema6/img_3.svg").mb-3
              .col-lg-10
                h4 Ordenar ideas
                p.mb-0 En definitiva, al planificar se están ordenando las ideas que surgen y acercándose a la meta que se haya propuesto. 
          .tarjeta.back-tab.px-5.py-4(titulo="Rentabilizar ideas")
            .row.px-2.py-2.justify-content-center
              .col-6.col-lg-2 
                img(src="@/assets/curso/images/tema6/img_3.svg").mb-3
              .col-lg-10
                h4 Rentabilizar ideas
                p.mb-0 Planear es un paso imprescindible, ya que ayuda a rentabilizar las ideas, y no desde un punto de vista económico, sino desde el punto de vista de la eficacia. 

          .tarjeta.back-tab.px-5.py-4(titulo="Evitar olvidos")
            .row.px-2.py-2.justify-content-center
              .col-6.col-lg-2 
                img(src="@/assets/curso/images/tema6/img_3.svg").mb-3
              .col-lg-10
                h4 Evitar olvidos
                p.mb-0 Planificando con anterioridad se evita olvidar cualquiera de los elementos necesarios para que un proyecto de EA sea exitoso.

    h3.mb-3 Modelo de programación

    p.mb-3 Existen numerosos modelos de programación, por lo que el que aquí se ofrece no es absoluto, simplemente puede servir como orientación a la hora de enfrentarse al diseño de un programa de EA.

    .row.align-items-star.mb-3
      .col-lg-3
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.text-center.mb-0 Cuestiones previas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg.order-2.order-lg-1
        .custom_box_right    
          p.mb-0 Antes de realizar la acción educativa, hay que plantear algunas preguntas o cuestionamientos, cuyas respuestas no son más que cada uno de los elementos de programación, la reflexión sobre cómo y qué se quiere conseguir.
      .col-auto.onTop.order-1.order-lg-2
        img(src="@/assets/curso/images/tema6/img_4.svg" alt='AvatarTop', style="width:250px;").mb-3
    
        
    .jumbotron-6.p-4.mb-5
      .row.align-items-center.justify-content-center.mb-0
        .col-12.col-lg-5(data-aos="fade-right").mb-3   
          img(src='@/assets/curso/images/tema6/img_new.png')
        .col-lg-7(data-aos="fade-left")
          ul.lista-ul
            li 
              i.fas.fa-check.c-check
              | ¿Sobre qué problemática ambiental específica va a actuar el programa a diseñar?

            li 
              i.fas.fa-check.c-check
              | ¿Quiénes van a ser los destinatarios y las destinatarias?

            li 
              i.fas.fa-check.c-check
              | ¿Por qué creemos que es necesario este proyecto?

            li 
              i.fas.fa-check.c-check
              | ¿Qué queremos conseguir?

            li 
              i.fas.fa-check.c-check
              | ¿Qué queremos transmitir?

            li 
              i.fas.fa-check.c-check
              | ¿Cómo lo vamos a hacer?

            li 
              i.fas.fa-check.c-check
              | ¿Qué vamos a necesitar?

            li 
              i.fas.fa-check.c-check
              | ¿Cuándo vamos a llevar a cabo el programa? ¿Cuánto tiempo necesitaremos para su desarrollo?

            li 
              i.fas.fa-check.c-check
              | ¿Cómo lo vamos a difundir?

            li 
              i.fas.fa-check.c-check
              | ¿Cuánto nos va a costar?

            li 
              i.fas.fa-check.c-check
              | ¿Se han conseguido nuestras metas? ¿Cómo podemos mejorarlo? 

    .row.align-items-star.mb-3
      .col-lg-3
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.text-center.mb-0 Evaluación de la realidad.

    p.mb-3 Este paso previo a cualquier diseño es totalmente necesario. La evaluación de la realidad permitirá conocer en profundidad el tema sobre el que se va a basar el programa y, lo más importante, las necesidades, intereses, y demás características del grupo al que va dirigido.

    p.mb-3 Debe contener:


    .row.justify-content-center.align-items-star
      .col-lg-6(data-aos="fade-right")
        AcordionA(data-aos="fade-down-right").mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.align-items-star.justify-content-center(titulo="Identificación del problema ambiental")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_1.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Hay que fijar las prioridades según las necesidades de la comunidad. En algún momento, ciertos temas tendrán que escogerse por encima de otros.
          .row.align-items-star.justify-content-center(titulo="Identificación de necesidades")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_1.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Identificación de necesidades, intereses, recursos y posibilidades de los destinatarios y las destinatarias.

          .row.align-items-star.justify-content-center(titulo="Análisis de la realidad")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_1.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 La detección de necesidades implica analizar la realidad donde se va a actuar, con el fin de elaborar los programas de acción en función de las características propias del ámbito en el que se aplican. Este punto es esencial para no plantearse metas inalcanzables.
              
          .row.align-items-star.justify-content-center(titulo="Recursos")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_1.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Se debe investigar sobre aquellos recursos (servicios, instituciones, medios materiales, personas con capacidades desarrolladas en determinadas áreas) que nos indican la riqueza de los destinatarios y las destinatarias y, por tanto, nos ayudan a entender su realidad, pero además nos proporcionan datos importantes sobre qué medios humanos y materiales existen para poner en marcha el programa.

          .row.align-items-star.justify-content-center(titulo="Posibilidades")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_1.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Por último, hay que analizar las posibilidades, es decir, las potencialidades que tiene ese grupo o colectivo.
      .col-10.col-lg-6(data-aos="fade-left")
        img(src="@/assets/curso/images/tema6/img_6.png").mb-3


    .row.align-items-star.mb-3
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Justificación.

    p.mb-3 Se trata de establecer por qué se ha de desarrollar este programa, en qué datos se está basando la estrategia para pensar que se debe iniciar una acción y qué ventajas supondría sobre la situación actual (Herrera, 1998).

    p.mb-3 La justificación deberá contener datos sintéticos acerca de:

    .row.justify-content-center.my-3
      .col-lg-6(data-aos="fade-left")
        SlyderF.slyder-color.mb-5(columnas="col-lg-4 col-xl-12")(data-aos="zoom-in-down")
          .tarjeta.tarjeta_grey-1.p-4.h-100  
            .tarjeta
              .row.justify-content-center
                img(src='@/assets/curso/images/tema6/ico_2.svg' alt='imagen relacionada' style='width:150px')
              .p-4 
                p.mb-0.text-center <b>Descripción de la situación de partida.</b> 

          .tarjeta.tarjeta_grey-1.p-4.h-100  
            .tarjeta
              .row.justify-content-center
                img(src='@/assets/curso/images/tema6/ico_3.svg' alt='imagen relacionada' style='width:150px')
              .p-4
                p.mb-0.text-center  <b>Las bases del proyecto: recursos y posibilidades de este.</b> 

          .tarjeta.tarjeta_grey-1.p-4.h-100  
            .tarjeta
              .row.justify-content-center
                img(src='@/assets/curso/images/tema6/ico_4.svg' alt='imagen relacionada' style='width:150px')
              .p-4
                p.mb-0.text-center  <b>Descripción de la situación de partida.</b> 

          .tarjeta.tarjeta_grey-1.p-4.h-100  
            .tarjeta 
              .row.justify-content-center
                img(src='@/assets/curso/images/tema6/ico_5.svg' alt='imagen relacionada' style='width:150px')
              .p-4  
                p.mb-0.text-center  <b>Las limitaciones con las que puede encontrarse.</b>  

          .tarjeta.tarjeta_grey-1.p-4.h-100  
            .tarjeta
              .row.justify-content-center 
                img(src='@/assets/curso/images/tema6/ico_6.svg' alt='imagen relacionada' style='width:150px')
              .p-4
                p.mb-0.text-center  <b>El punto de vista del personal técnico, de la comunidad y del grupo político.</b> 

          .tarjeta.tarjeta_grey-1.p-4.h-100  
            .tarjeta
              .row.justify-content-center 
                img(src='@/assets/curso/images/tema6/ico_7.svg' alt='imagen relacionada' style='width:150px')
              .p-4
                p.mb-3.text-center  <b>Y si la situación lo requiere</b> 
                p.mb-0 b) Marco teórico (participación, solidaridad, intercambio, etc.).


      .col-10.col-lg-6(data-aos="fade-right")
        img(src="@/assets/curso/images/tema6/img_7.png").mb-3

    .row.align-items-star.mb-3
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-5
          h3.text-white.mb-0 Objetivos.

    p.mb-3 Los objetivos deben entenderse como guías que orientan el proceso de enseñanza y aprendizaje y hacia los cuales hay que orientar la marcha de este proceso (García et al., 1997).

    p.mb-3 Para ahondar en los objetivos del plan de promotoría ambiental, se le invita a explorar el siguiente recurso. ¡Adelante!


    h3.text-center.mb-3 Objetivos del plan de promotoría ambiental

    p.mb-5 Con los objetivos, se concreta qué se quiere hacer, qué cambios se espera lograr respecto a la situación de partida, a dónde se pretende llegar, y cuál situación nueva se desea (sobre el colectivo con el que se va a trabajar) cuando el proyecto haya llegado a su fin.


    .row.align-items-center.justify-content-center.fondo-1.mb-4
      .col-12.col-lg-10(data-aos="zoom-in-up")
          ImagenInfografica.color-acento-contenido.mb-3
            template(v-slot:imagen)
              figure
              img(src="@/assets/curso/images/tema6/info.svg").mb-3
                
            .tarjeta-blanca.p-3(x="16%" y="15%" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-12.col-sm-8.mb-lg-0
                  h4.mb-2 Objetivos generales:
                  p.mb-0 Indican qué se quiere conseguir con este programa o proyecto. Se necesitarán varias acciones para conseguirlos.

            .tarjeta-blanca.p-3(x="38.5%" y="84%" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-12.mb-4.col-sm-8.mb-lg-0
                  h4.mb-2 Objetivos específicos: 
                  p.mt-2 Indican qué se va a conseguir a pequeña escala con las actividades propuestas, o con el grupo en cuestión. Deben ser medibles, y conviene que no sean muy ambiciosos para que se puedan alcanzar. Son concretos y vendrán determinados por la actividad propuesta. 

              
            .tarjeta-blanca.p-3(x="83.5%" y="84%" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-12.mb-4.col-sm-8.mb-lg-0      
                  h4.mb-2 A la hora de definirlos, se debe tener en cuenta: 
                  ul.lista-ul
                    li.mb-0  
                      i.fas.fa-check.c-check
                      p.mb-0 Qué es lo que se quiere conseguir (quizás lo más importante).

                    li.mb-0  
                      i.fas.fa-check.c-check
                      p.mb-0  A quiénes va dirigido.

                    li.mb-0  
                      i.fas.fa-check.c-check
                      p.mb-0  Su nivel de conocimientos.

                    li.mb-0  
                      i.fas.fa-check.c-check
                      p.mb-0  Si conocen o no el lugar (sobre todo en el caso de que el programa se desarrolle en un área natural).

            .tarjeta-blanca.p-3(x="61.5%" y="15%" numero="+")
              .row.justify-content-center.align-items-center
                .col-lg-12.mb-4.col-sm-8.mb-lg-0
                  h4.mb-2 Otros elementos fundamentales a tener en cuenta cuando se definen los objetivos del plan de promotoría son:
                  ul.lista-ul
                    li.mb-0  
                      i.fas.fa-check.c-check
                      p.text-small  Qué tipo de programa y en cuánto tiempo.

                    li.mb-0  
                      i.fas.fa-check.c-check
                      p.text-small  Las posibilidades que ofrece el medio.

                    li.mb-0  
                      i.fas.fa-check.c-check
                      p.text-small  Los deseos e intereses de los y las participantes.

                    li.mb-0  
                      i.fas.fa-check.c-check
                      p.text-small A qué grupo social pertenecen (entendiendo como grupo social a la actividad común que realizan o una característica que les une a la hora de participar en una actividad de EA, como, por ejemplo, escolares, cazadores, tercera edad, disminuidos/as físicos/as o psíquicos, etc.). 



    .row.align-items-star.mb-3
        .col-lg-2
          .jumbotron-1.p-2.pe-2.ps-5
            h3.text-white.mb-0 Contenidos

    p.mb-3 Los contenidos constituyen el eje sobre el que se centrará la programación, entendiendo como contenidos no sólo lo referente a conceptos, sino también a procedimientos y actitudes. 

    .row.justify-content-center.align-items-center.my-3
      .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 De la información a la apropiación
              p.mb-3 El sistema educativo se ha centrado tradicionalmente en la transmisión de conceptos. En escasas ocasiones se transmitían contenidos procedimentales, es decir, cómo se hace, y casi nunca valores (contenidos actitudinales).

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema6/img_8.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Tipos de contenidos

              p.mb-3 <b>Conceptuales: </b>referentes a conceptos, qué son las cosas.

              p.mb-3 <b>Procedimentales:</b>  referente a procedimientos, cómo se hace.

              p.mb-3 <b>Actitudinales:</b>  referentes a actitudes, valores.
 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema6/img_9.png").mb-3
              
          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Integralidad de los contenidos

              p.mb-3 En los programas de EA, han de tenerse en cuenta los tres tipos de contenidos (conceptuales, procedimentales y actitudinales), primando los actitudinales y procedimentales sobre los conceptuales.
 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema6/img_10.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Factores de importancia

              p.mb-3 El contexto en el que se van a desarrollar los contenidos, es decir, dónde, de qué tiempo se dispone, los recursos, el tema, etc.

              p.mb-3 Los objetivos que se hayan propuesto (por aquello de la coherencia).

              p.mb-3 Se debe tender a la promoción de los valores mediante la educación ambiental, con tendencia a la formación de un espíritu crítico, responsable, tolerante, coherente, participativo y solidario, con respeto por todas las formas de vida.
 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema6/img_11.png").mb-3

          
          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Otros elementos de importancia

              p.mb-3 Aspectos de los destinatarios y las destinatarias: su edad, su motivación, nivel cultural, sus emociones y sus experiencias, su localidad y sus posibilidades de participación y responsabilidad en los problemas o valores ambientales analizados.

              p.mb-3 Las ideas previas que los y las participantes tengan del tema, y este es un apartado en el que se profundizará más adelante.

              p.mb-3 La profundidad en que se vayan a tratar y, por supuesto, el orden que se va a llevar.

              p.mb-3 “El nivel de relevancia de los conocimientos”, es decir, cómo son esos conocimientos de importantes en la vida de las destinatarias y los destinatarios.

 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema6/img_12.png").mb-3

    .row.align-items-star.mb-3
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Metodología

    p.mb-3 En este apartado, se tendrá que determinar, por un lado, el tipo de actividades que deben realizarse y, por otro, las técnicas de dinámica que se utilizarán a lo largo del proceso formativo. La metodología no es más que el modus operandi, por tanto, lo primero que ha de hacerse es definirla. Hoy por hoy, existen nuevas tendencias que apuntan hacia una autoconstrucción del conocimiento, partiendo siempre de las ideas previas que se tienen, bien sea reforzándolas, si están en lo cierto, o bien desmontándolas, si son erróneas.

    .row.justify-content-center.align-items-star
      .col-lg-12(data-aos="fade-right")
        AcordionA(data-aos="fade-down-right").mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.align-items-star.justify-content-center(titulo="¿Educación aburrida?")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_9.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 También hay que romper el tema de la “educación aburrida”, con numerosos recursos y técnicas didácticas en las que los participantes se divierten, a la vez que están recibiendo y asimilando información. Hay que tener en cuenta que estamos transmitiendo mensajes, pero de forma ACTIVA y PARTICIPATIVA.
          .row.align-items-star.justify-content-center(titulo="Potenciando capacidades")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_9.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-3 La Educación Ambiental es una educación para la acción. La metodología deberá ir enfocada a la participación. Mediante una metodología adecuada, se completarán todos los pasos necesarios para lograr un proceso formativo completo:
              p.mb-3 ➢	Información
              p.mb-3 ➢	Sensibilización / concienciación
              p.mb-3 ➢	Capacitar para la acción

          .row.align-items-star.justify-content-center(titulo="¿Qué promover?")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_9.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Fomentar los procesos de aprendizaje grupales, ya que, además de ampliar el horizonte conceptual, permiten el desarrollo y ejercitación de valores, hábitos, actitudes de comunicación, cooperación y trabajo en equipo. En esa misma medida, exigir coherencia entre los principios de la acción y la actitud de el/la monitor/a o el/la guía intérprete. Hay que evitar contradicciones entre la actuación y los objetivos, ya que los rasgos que caracterizan a este/a profesional y su intervención son elementos de referencia para el/la destinatario/a.

          .row.align-items-star.justify-content-center(titulo="¿A quiénes involucrar y cómo?")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_9.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Plantear estudios y análisis de las interacciones de los elementos aprovechando el método científico para interpretar y conocer las dinámicas y el funcionamiento global del entorno. Asimismo, realizar enfoques interdisciplinares para integrar los distintos aspectos del medio, y, en consecuencia, utilizar como recurso didáctico fundamental el entorno inmediato del destinatario para ilustrar conceptos, procesos y problemáticas reales y no abstractas. El aprendizaje debe partir del conocimiento y el análisis de la propia realidad de las destinatarias y los destinatarios, vinculando los contenidos con la propia experiencia.
              
          .row.align-items-star.justify-content-center(titulo="Secuencia lógica de las acciones")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/ico_9.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Una vez definida la metodología que vamos a seguir, se deberá concretar qué actividades se van a desarrollar. Las actividades son las acciones que se van a llevar a cabo para conseguir los objetivos. Deberán estar estructuradas y secuenciadas, es decir, llevar un orden lógico coherente con los objetivos que se hayan propuesto y los contenidos que se hayan decidido para el programa.

      p.mb-5 Para ampliar su conocimiento acerca de la metodología en un plan de promotoría ambiental, y para profundizar en lo dicho hasta este punto, reconozca en el siguiente recurso los tipos de actividades que se requiere implementar para la consecución de los objetivos planteados en proyectos de educación ambiental.

    .row.justify-content-center.align-items-star.mb-5
      .col-lg-10(data-aos="fade-right")
        .jumbotron-6.p-4
          h3.text-center.mb-3 Metodología y actividades del plan de Educación Ambiental
          .col-lg-12
            p.mb-3 Estos son algunos tipos de actividades que se requiere implementar para la consecución de los objetivos planteados en proyectos de educación ambiental (EA):

          .row.justify-content-center.align-items-star
            .col-12.col-lg-8(data-aos="fade-left")
              ImagenInfografica.color-acento-botones.mb-3
                template(v-slot:imagen)
                  figure
                  img(src="@/assets/curso/images/tema6/info_1.svg").mb-3
                    
                .tarjeta-blanca.p-3(x="36.5%" y="23%" numero="+")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.col-sm-8.mb-lg-0
                      h4.mb-2 Acciones específicas
                      ul.lista-ul
                        li.mb-0  
                          i.fas.fa-check.c-check
                          p.mb-0 Interpretación del patrimonio.

                        li.mb-0  
                          i.fas.fa-check.c-check
                          p.mb-0  Encuentros y congresos.

                        li.mb-0  
                          i.fas.fa-check.c-check
                          p.mb-0  Charlas, conferencias y exposiciones orales.

                        li.mb-0  
                          i.fas.fa-check.c-check
                          p.mb-0  Mesas redondas, debates y coloquios.

                        li.mb-0  
                          i.fas.fa-check.c-check
                          p.mb-0 Excursiones y visitas. Itinerarios.

                        li.mb-0  
                          i.fas.fa-check.c-check
                          p.mb-0  Uso de instrumentos.

                        li.mb-0  
                          i.fas.fa-check.c-check
                          p.mb-0  Expresiones artísticas.

                        li.mb-0  
                          i.fas.fa-check.c-check
                          p.mb-0  Exposiciones y exhibiciones.

                        li.mb-0  
                          i.fas.fa-check.c-check
                          p.mb-0  Técnicas de dinámica de grupos y juegos.


                .tarjeta-blanca.p-3(x="76%" y="42.5%" numero="+")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-4.col-sm-8.mb-lg-0
                      h4.mb-2 Acciones sistematizadas
                      p.mt-2 Son maneras sistematizadas de organizar y desarrollar la actividad de un grupo y se basan en la “Teoría de la Dinámica de Grupos”. Dentro de éstas, se encuentran diferentes tipos de técnicas:
                        ul.lista-ul
                          li.mb-0  
                            i.fas.fa-check.c-check
                            p.mb-0 Presentación.

                          li.mb-0  
                            i.fas.fa-check.c-check
                            p.mb-0  Desinhibición.

                          li.mb-0  
                            i.fas.fa-check.c-check
                            p.mb-0  Conocimiento del medio.

                          li.mb-0  
                            i.fas.fa-check.c-check
                            p.mb-0  Sensibilización

                          li.mb-0  
                            i.fas.fa-check.c-check
                            p.mb-0 Simulación.

                          li.mb-0  
                            i.fas.fa-check.c-check
                            p.mb-0  Evaluación.

                  
                .tarjeta-blanca.p-3(x="36.5%" y="80.5%" numero="+")
                  .row.justify-content-center.align-items-center
                    .col-lg-12.mb-4.col-sm-8.mb-lg-0      
                      h4.mb-2 Pertinencia de las acciones 
                      p.mb-3 Todas las herramientas que se han citado no son exclusivas de la educación ambiental, ya que provienen de otras muchas disciplinas dedicadas al estudio de procesos de comunicación, enseñanza, aprendizaje. La EA tan sólo toma las más apropiadas y pertinentes para cada momento y situación.

    .row.align-items-star.mb-3
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Temporización.

    p.mb-3 Se trata de establecer el tiempo que se va a emplear en el desarrollo de cada programa o actividad y la fecha o época en la que se llevará a cabo. Es muy importante estimar la duración y las fechas en las que se realizarán las actividades propuestas.

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema6/img_13.png')})`}")
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0  Si el desarrollo del proyecto depende al 100 % de la concesión de una subvención, se indicará que el plazo de realización será posterior (señalando un plazo de tiempo) a la concesión del proyecto. Ejemplo: dos meses a contar desde la concesión del proyecto. También se deberá especificar si el periodo de realización abarca parte del año siguiente a aquel en el que se presenta el proyecto.

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0  Si el desarrollo del proyecto depende al 100 % de la concesión de una subvención, se indicará que el plazo de realización será posterior (señalando un plazo de tiempo) a la concesión del proyecto. Ejemplo: dos meses a contar desde la concesión del proyecto. También se deberá especificar si el periodo de realización abarca parte del año siguiente a aquel en el que se presenta el proyecto. 
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema6/img_13.png' alt='', style="width:400px; display:block; margin:-2rem 0rem ;").mb-3

    .row.align-items-star.mb-3
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Recursos.

    p.mb-3 Una vez decidido todo lo anterior, hay que concretar qué recursos se necesitarán. Es un momento importante, ya que una mala previsión puede provocar que el proyecto fracase. Se deberán tener en cuenta:


    .row.justify-content-center.align-items-star
      .col-12.col-lg-10(data-aos="fade-left")
        ImagenInfografica.color-acento-contenido.mb-3
          template(v-slot:imagen)
            figure
            img(src="@/assets/curso/images/tema6/info_2.svg").mb-3
              
          .tarjeta-blanca.p-3(x="16.5%" y="23%" numero="1")
            .row.justify-content-center.align-items-center
              .col-lg-12.col-sm-8.mb-lg-0
                p.mb-2 <b>Recursos humanos:</b>Se trata del equipo técnico. Este variará en función de las necesidades del programa, y hay que tener en cuenta todos los aspectos: coordinador-a, monitores-as, personal sanitario, cocineros-as, conductores-as, etc.


          .tarjeta-blanca.p-3(x="46%" y="64.5%" numero="2")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.col-sm-8.mb-lg-0
                p.mb-2 <b>Recursos materiales:</b> Infraestructuras: aulas, alojamiento, etc. 
               

            
          .tarjeta-blanca.p-3(x="82.5%" y="64.5%" numero="3")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.col-sm-8.mb-lg-0      
                p.mb-3 <b>Material inventariable:</b> Hace referencia a todo lo que se necesita para el desarrollo del proyecto y que no es perecedero, al menos a corto plazo. Ejemplos: sillas, mesas, ordenadores, prismáticos, etc.

          .tarjeta-blanca.p-3(x="65.5%" y="40.5%" numero="4")
            .row.justify-content-center.align-items-center
              .col-lg-12.mb-4.col-sm-8.mb-lg-0      
                p.mb-3 <b>Material fungible:</b> Se refiere a todo el material que se va a consumir durante el proyecto. Conviene que esté bien calculado; un proyecto no es mejor porque use más material, lo que importa es que el uso del material sea optimizado. La coherencia es un aspecto fundamental cuando se está desarrollando un programa de EA.

    .row.align-items-star.mb-3
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Evaluación

    p.mb-3 Se entiende por evaluación toda aquella acción sistemática y continuada encaminada a recoger información acerca del éxito de un programa, la satisfacción de los y las visitantes al hacer una ruta, la adecuación de los recursos a los tiempos, así como la valoración del papel desempeñado por el/la monitor/a lo largo de la actividad (Gutiérrez, 2000).

    p.mb-3 La evaluación es una parte fundamental en el proceso y una herramienta muy valiosa para el buen funcionamiento del programa, para lo cual, lo más adecuado es una evaluación continuada. Por esto, se podrían distinguir tres momentos diferentes en la aplicación de la evaluación:

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Evaluación inicial")
            .row.px-2.py-2.justify-content-center
              .col-8.col-lg-2 
                img(src="@/assets/curso/images/tema6/ico_10.svg").mb-3
              .col-lg-10
                h4  Evaluación inicial 
                p.mb-0 Es previa al comienzo de la actividad o el programa a realizar. De esta forma, se asegura una evaluación de las necesidades, demandas e intereses, permitiendo así adecuar el programa lo más posible a los intereses de los y las participantes. Para ello, es necesario un contacto previo con el grupo, o bien el análisis de evaluaciones anteriores. 
          .tarjeta.back-tab.px-5.py-4(titulo="Evaluación de proceso")
            .row.px-2.py-2.justify-content-center
              .col-8.col-lg-2 
                img(src="@/assets/curso/images/tema6/ico_11.svg").mb-3
              .col-lg-10
                h4 Evaluación de proceso
                p.mb-0 Se realiza durante el desarrollo de la actividad. Para ello, conviene tantear un poco las expectativas del grupo en las primeras tomas de contacto, y también es conveniente realizar actividades de evaluación intermedias e ir tanteando el grado de satisfacción de las y los participantes. En esta fase, la observación también nos puede servir como una herramienta muy eficaz de evaluación.
          .tarjeta.back-tab.px-5.py-4(titulo="Evaluación posterior a la actividad ")
            .row.px-2.py-2.justify-content-center
              .col-8.col-lg-2 
                img(src="@/assets/curso/images/tema6/ico_12.svg").mb-3
              .col-lg-10
                h4 Evaluación posterior a la actividad 
                p.mb-0 Llegado este punto, es el momento de verificar si se han cumplido los objetivos, si se han cumplido las actividades y, por supuesto, la posibilidad de incorporar mejoras e introducir cambios. El soporte que se suele utilizar para esto es la realización de encuestas o entrevistas, pero se debe tener en cuenta que los cuestionarios conviene que sean sencillos y directos, buscando la máxima objetividad en las respuestas. De esta forma, procesando los datos y analizando los resultados, se verá qué elementos del programa o la actividad conviene reforzar o potenciar y cuáles conviene descartar.

    .row.align-items-star.mb-3
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Difusión.

    .row.align-items-star.justify-content-center.mb-5
      .col-12.col-lg-6(data-aos="fade-left").mb-3
          img(src='@/assets/curso/images/tema6/img_14.png')
      .col-lg-6
        .jumbotron-8.h-100.p-4
            p.mb-3 La difusión es una parte de todo programa educativo que no debe ser olvidada. Se trata de dar a conocer lo que se hace, más allá de las personas a las que va enfocado directamente el programa. La difusión permite el intercambio de información y experiencias, la mejora de programas, la captación de nuevas personas dispuestas a colaborar o, incluso, nuevos encargos de trabajo.

            p.mb-0 Explore el Anexo Difusión de un proyecto de educación ambiental y estudie atentamente todos los elementos que allí se presentan. 
    
    .row.align-items-star.mb-3
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Presupuesto.

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-6(data-aos="fade-right")
        p.mb-3 Conviene realizar un presupuesto ajustado a los intereses del programa y recordar que no es mejor proyecto el que tenga más presupuesto. 

        p.mb-3 Muchas veces, se realizan proyectos con muy poco presupuesto que son muy ingeniosos y efectivos. A continuación, se ofrece un modelo de presupuesto que puede servir como guía.
        .jumbotron-5.p-4
            p.mb-3 Amplíe su comprensión sobre “Presupuesto” en un proyecto de educación ambiental, visualizando el contenido del Anexo Tabla. 3 modelo de presupuesto.      
      .col-12.col-lg-6(data-aos="fade-left").mb-3
        img(src='@/assets/curso/images/tema6/img_15.png')

    Separador

    #t_6_3.titulo-segundo
      .h2 6.3 Recolección de la información

    p.mb-3 La selección y elaboración de instrumentos de recolección de información es fundamental en el proceso de trabajo comunitario, es el elemento que reúne toda la información previa de una investigación, dando directrices y siendo el marco de referencia para el planteamiento de acciones con la comunidad.

    p.mb-3 Dentro de los instrumentos básicos para la recolección de información, se encuentran, según Cerda (1991), que es uno de los investigadores más reconocidos a nivel mundial y cuyas premisas siguen vigentes, los siguientes:

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema6/ico_13.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom.m-left
            .p-4
              p.mb-0.text-center   Observación 

      .col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema6/ico_14.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")

          .tarjeta.color-custom.m-left
            .p-3
              p.mb-0.text-center   Entrevista

      .col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema6/ico_15.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom.m-left
            .p-4
              p.mb-0.text-center  Encuesta

    .row.align-items-star.mb-5
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Observación

    
    .row.align-items-star.justify-content-center.mb-3
      .col-12.col-lg-6(data-aos="fade-left").mb-3
        img(src='@/assets/curso/images/tema6/img_16.png')
      .col-lg-6(data-aos="fade-right")
        p.mb-3 Es el medio preferido de los investigadores sociales, es un método muy fácil de aplicar, directo, y que exige una tabulación muy sencilla. El observador fija su atención en una finalidad de la que se tiene clara conciencia, la cual le proporciona la justa postura frente al objeto de observación. El proceso de observación exige tener un plan o por lo menos algunas directrices determinadas en relación con lo que se quiere o espera observar. 
        .jumbotron-5.p-4
            p.mb-3 Uno de los problemas más complejos y difíciles de resolver es, sin lugar a duda, el registro de las observaciones, frente al cual existen posiciones muy encontradas. Se han sugerido las técnicas y los métodos más dispares para alcanzar un “óptimo registro" de las observaciones, los cuales van desde rígidos protocolos, utilizados en los experimentos y en las observaciones clínicas, hasta las modalidades más libres y asistemáticas (p. 239).

    .row.align-items-star.mb-5
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Entrevista.

    p.mb-5 Es la más utilizada en investigaciones cualitativas. Se puede encontrar bajo la denominación de interrogatorio o de cuestionarios (siendo este último la misma modalidad, pero escrita), se basa en la realización de preguntas orientadas hacia la búsqueda de información de un objetivo específico. 

    .row.justify-content-center.mb-5
      .col-lg-3.lg-0
        .tarjeta.tarjeta_grey-2.p-4.h-100  
          .tarjeta
            .row.justify-content-center
              img(src='@/assets/curso/images/tema6/ico_16.svg' alt='imagen relacionada' style='width:150px')
            .p-4 
              h3.text-center Complemento de la observación
              p.mb-0 Se afirma que, por medio de la entrevista, se obtiene toda aquella información que no se logra por la observación.
      .col-lg-3.lg-0
        .tarjeta.tarjeta_grey-3.p-4.h-100  
          .tarjeta
            .row.justify-content-center
              img(src='@/assets/curso/images/tema6/ico_17.svg' alt='imagen relacionada' style='width:150px')
            .p-4
              h3 Complemento de la observación
              p.mb-0 De ello se deduce que la entrevista no es otra cosa que una conversación entre dos personas, una de las cuales se denomina entrevistador y la otra entrevistado. 

      .col-lg-3.lg-0
        .tarjeta.tarjeta_grey-4.p-4.h-100  
          .tarjeta
            .row.justify-content-center
              img(src='@/assets/curso/images/tema6/ico_18.svg' alt='imagen relacionada' style='width:150px')
            .p-4
              h3 Complemento de la observación
              p.mb-0  Estas dos personas dialogan y conversan de acuerdo con pautas acordadas previamente, o sea, se presupone que para realizar una entrevista debe existir una interacción verbal entre dos personas dentro de un proceso de acción recíproca (Cerda, 1991, p. 259).
      .col-lg-3.lg-0
        .tarjeta.tarjeta_grey-5.p-4.h-100  
          .tarjeta 
            .row.justify-content-center
              img(src='@/assets/curso/images/tema6/ico_19.svg' alt='imagen relacionada' style='width:150px')
            .p-4  
              h3 Complemento de la observación
              p.mb-0 Dentro las subclasificaciones de este método, se encuentran: 
              ul.lista-ul
                li.mb-0  
                  i.fas.fa-check.c-check
                  p.mb-0 Entrevistas focalizadas

                li.mb-0  
                  i.fas.fa-check.c-check
                  p.mb-0  Entrevistas clínicas

                li.mb-0  
                  i.fas.fa-check.c-check
                  p.mb-0  Entrevistas no dirigidas
        
    .row.align-items-star.mb-5
      .col-lg-2
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Encuesta.

    p.mb-3 En la actualidad, este es uno de los más usados por empresas de diferentes índoles o por entidades públicas. Se define, de acuerdo con Cerda (1991), como la recolección sistemática de datos en una población o en una muestra de la población, mediante el uso de entrevistas personales y otros instrumentos para obtener datos. Habitualmente, a este tipo de estudio se le denomina así cuando se ocupa de grupos de personas numerosos y dispersos (p. 277).

    .row.justify-content-center.align-items-star
      .col-lg-7(data-aos="fade-right")
        AcordionA(data-aos="fade-down-right").mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.align-items-star.justify-content-center(titulo="Encuestas abiertas")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/img_new.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Existen encuestas abiertas o no restringidas, en las cuales se propician respuestas que se califican como espontáneas y libres. La dificultad de este medio es la tabulación y el análisis de las respuestas; al ser tan abierto, deja a libre interpretación también las respuestas y, según algunos investigadores, pierde la rigurosidad científica.
          .row.align-items-star.justify-content-center(titulo="Encuestas cerradas")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/img_new.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Por otro lado, también existen las encuestas cerradas o restringidas, ya que, como su nombre lo indica, se trata de encuestas que incitan a responder en forma breve y específica las respuestas formuladas, luego, permite la tabulación y posterior evaluación de las respuestas formuladas.

          .row.align-items-star.justify-content-center(titulo="Encuestas descriptivas")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/img_new.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Son las más comunes entre las encuestas, y al igual que las investigaciones descriptivas, su propósito es caracterizar un fenómeno o situación para una determinada población en el momento en que se realiza la encuesta. (Cerda, 1991, p.278)
          
          .row.align-items-star.justify-content-center(titulo="Encuestas explicativas")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/img_new.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Son muy semejantes a las anteriores, pero tienen un alcance más masivo, enfocadas más hacia la búsqueda de explicar las causas de un fenómeno o saber por qué ocurren las cosas y sus factores determinantes.
              
          .row.align-items-star.justify-content-center(titulo="Sondeos y encuestas de opinión pública")
            .col-3.col-lg-2.lg-0
              img(src='@/assets/curso/images/tema6/img_new.svg'  alt='').mb-3
            .col-md-9.mb-4.mb-md-0.ps-3
              p.mb-0 Tradicionalmente, se habla de la "opinión pública" como la manera de pensar o la estimación de asuntos de interés común en la que coincide la mayoría de la población; sin embargo, su grado de veracidad y de error no reflejan confianza en este tipo de sondeos. 

          
      .col-10.col-lg-5(data-aos="fade-left")
        img(src="@/assets/curso/images/tema6/img_17.png").mb-3

    .row.align-items-star.mb-5
      .col-lg-4
        .jumbotron-1.p-2.pe-2.ps-4
          h3.text-white.mb-0 Etapas y desarrollo de encuestas.

    p.mb-3 No existe una metodología estándar para la aplicación de las encuestas, por el contrario, cada entidad o las diferentes investigaciones sugieren su propio procedimiento para realizar la recolección de información de acuerdo con sus necesidades.

    p.mb-3 Sin embargo, es relevante tomar en consideración las siguientes acciones secuenciales y elementos para la elaboración de un proceso de recolección de información, de acuerdo con Cerda (1991):

    .row.align-items-star.justify-content-center.mb-5
      .col-12.col-lg-6(data-aos="fade-left").mb-3
          img(src='@/assets/curso/images/tema6/img_18.png')
      .col-lg-6
        .jumbotron-6.h-100.p-4
            p.mb-3 La difusión es una parte de todo programa educativo que no debe ser olvidada. Se trata de dar a conocer lo que se hace, más allá de las personas a las que va enfocado directamente el programa. La difusión permite el intercambio de información y experiencias, la mejora de programas, la captación de nuevas personas dispuestas a colaborar o, incluso, nuevos encargos de trabajo.

            ul.lista-ul
              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0 Familiarización con el problema general.

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0  Trabajos exploratorios complementarios.

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0  Definición de objetivos generales y específicos.

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0 Selección de métodos. 

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0  Planeación y plan operativo de la muestra. 

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0  Cronograma de trabajo. 

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0 Población y muestra. 

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0  Análisis y caracterización de la población y de la muestra.

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0  Elaboración de los cuestionarios o guías de las encuestas.

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0 Trabajo de campo. 

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0  Tabulación de datos.

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0  Análisis e interpretación de datos.

              li.mb-0  
                i.fas.fa-check.c-check
                p.mb-0  Redacción del informe.

    Separador

    #t_6_4.titulo-segundo
      .h2 6.4 Las metas

    p.mb-3 Las metas se constituyen en puntos de referencia para lograr un objetivo; en la mayoría de las ocasiones, este es holístico, transversal e impacta en la comunidad.

  .container.bg-white.px-md-5.px-3.py-2.container-top.m-top.fondo-1.mb-0.cs
    .row.align-items-star.justify-content-center.mb-5(data-aos="zoom-in-down")
        .col-lg-12
          TabsC.color-primario
            .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Carta de navegación")
              .row
                .col-md-6
                  figure
                      img(src='@/assets/curso/images/tema6/img_19.png', alt='Texto que describa la imagen').mb-3
            
                .col-md-6.mb-4.mb-md-0
                  h4 Carta de navegación
                  p.mb-3 Establecer metas dentro del proceso de planificación del programa de promotoría es la carta de navegación que le da norte a la ejecución de cada proyecto. 
          
          
            .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Destino final")
              .row
                .col-md-6
                  figure
                    img(src='@/assets/curso/images/tema6/img_20.png', alt='Texto que describa la imagen').mb-3
                .col-md-6.mb-4.mb-md-0
                  h4 Destino final
                  p.mb-3 “La meta es el destino final del éxito. Dan dirección y claridad a nuestras vidas. Ellas ayudan a decidir qué es importante y qué es una distracción”. (ODESCA, 2012, p. 13)
      
                
            .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Liderazgos efectivos")
              .row
                .col-md-6
                  figure
                    img(src='@/assets/curso/images/tema6/img_21.png', alt='Texto que describa la imagen').mb-3
                .col-md-6.mb-4.mb-md-0
                  h4 Liderazgos efectivos
                  p.mb-0 “El proceso para que las personas se conviertan en líderes efectivos requiere que se fijen metas, se anoten, y se prosiga con ellas con entusiasmo, pasión, compromiso y persistencia”. (ODESCA, 2012, p. 13).
                

            .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Ideal de las metas")
              .row
                .col-md-6
                  figure
                    img(src='@/assets/curso/images/tema6/img_22.png', alt='Texto que describa la imagen').mb-3
                .col-md-6.mb-4.mb-md-0
                  h4 Ideal de las metas
                  p.mb-3 Para identificar una meta que permita que el proceso de promotoría se lleve a buen término, se debe tener en cuenta que estas deben estar bien definidas; por ende, las metas deben ser:
                  ul.lista-ul
                    li.mb-0  
                      i.fas.fa-circle.c-check-1
                      p.mb-0 Específica: Clara y precisa.

                    li.mb-0  
                      i.fas.fa-circle.c-check-1
                      p.mb-0  Medible: Que tenga criterios por los cuales se pueda medir el éxito.

                    li.mb-0  
                      i.fas.fa-circle.c-check-1
                      p.mb-0  Alcanzable: Enfocada en las cosas dentro de nuestro control. 

                    li.mb-0  
                      i.fas.fa-circle.c-check-1
                      p.mb-0  Relevante: Que contribuya a la realización de nuestros valores. 


                    li.mb-0  
                      i.fas.fa-circle.c-check-1
                      p.mb-0  Tiempo: Que tenga un calendario y una fecha límite. (ODESCA, 2012, p. 13)

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5

    Separador

    #t_6_5.titulo-segundo
      .h2 6.5 Plan de acción

    p.mb-3 Los planes de acción representan la ejecución de las actividades que propenden por la realización de las decisiones que se han tomado para ejecutar las metas. Sin embargo, es importante definir el concepto. Según Pareja, del portal @cero, “Un plan de acción es una hoja de ruta que traza la planificación de una organización para gestionar y controlar tareas, con el fin de cumplir con los objetivos de un proyecto o negocio. Es una guía para definir las metas, fijar plazos y calcular recursos para planificar de forma correcta, optimizar la gestión y mejorar el rendimiento”.

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema6/img_23.png')})`}")
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0  Es importante tener en cuenta el qué, cómo, cuándo, dónde y con quién se realizarán las acciones que se implementarán en la organización para cumplir con los objetivos de una manera ordenada y comprometida, asignando responsables, tiempo y recursos. El plan de acción incluye un análisis de la situación actual de la organización o el proyecto, define los objetivos, traza una ruta de actividades para alcanzarlos, lo que incluye acciones, tareas y estrategias.

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0  Es importante tener en cuenta el qué, cómo, cuándo, dónde y con quién se realizarán las acciones que se implementarán en la organización para cumplir con los objetivos de una manera ordenada y comprometida, asignando responsables, tiempo y recursos. El plan de acción incluye un análisis de la situación actual de la organización o el proyecto, define los objetivos, traza una ruta de actividades para alcanzarlos, lo que incluye acciones, tareas y estrategias.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema6/img_23.png' alt='', style="width:400px; display:block; margin:-2rem 0rem ;").mb-3

    Separador

    #t_6_6.titulo-segundo
      .h2 6.6 Seguimiento y evaluación

    .row.align-items-star.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-left").mb-3
        .jumbotron-6.h-100.p-4
            p.mb-3 Realizar control de los procesos en ejecución relacionados con el plan de promotoría ambiental se convierte en la herramienta más eficaz para establecer lo que se conoce como el seguimiento y la evaluación, la guía para la promotoría y para el promotor comunitario ambiental. El “seguimiento significa llevar regularmente registros de las decisiones del grupo, acciones y evolución de sus finanzas, para asegurar que las acciones sean ejecutadas conforme a un plan.

            p.mb-3 Evaluación significa analizar los registros del grupo con miras a juzgar si el grupo está logrando sus objetivos y a identificar posibles mejoras, o si el grupo se rezaga”. (ODESCA, 2012, p. 15-16)

      .col-12.col-lg-6(data-aos="fade-right")
          img(src='@/assets/curso/images/tema6/img_24.png')
    
    p.mb-3 Algunos puntos prácticos para el seguimiento y evaluación se relacionan teniendo en cuenta cada proyecto.

    .jumbotron-6.ps-5.py-4
      .row.align-items-center.justify-content-center.mb-0
        .col-lg-7(data-aos="fade-left").mb-3   
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 1
              | Escriba el nombre del grupo y la fecha en una gran hoja.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 2
              | Haga una lista de planes de los miembros, en un periodo de tiempo dado, en la primera columna. Reúnase con los miembros al final del periodo. 
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 3
              | Escriba la fecha de la reunión siguiente al comienzo de la segunda columna.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 4
              | Pregunte a los miembros del grupo si están satisfechos con los resultados de cada una de las tareas previstas. 
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 5
              | Discuta los problemas y logros enfrentados.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 6
              | Una vez que los miembros del grupo han logrado un acuerdo sobre los resultados, pídales escribir en la tercera columna un símbolo (por ejemplo, una cara) que represente su opinión.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 7
              | Utilice una escala para representar los niveles: bueno, regular y malo. Pida a los miembros del grupo hacer nuevos planes para el próximo periodo de tiempo en otra hoja. 
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 7
              | Repita el ejercicio regularmente.
        .col-12.col-lg-5(data-aos="fade-right").mb-3
          img(src='@/assets/curso/images/tema6/img_25.png')
        

    Separador

    #t_6_7.titulo-segundo
      .h2 6.7 Finalidad del plan de gestión ambiental

    p.mb-3 Según Zamalloa y Diaz (2005), en el tomo 5 de sus guías metodológicas para la gestión ambiental, el Plan de Acción Ambiental (PAA) es el siguiente paso que se debe realizar después del Diagnóstico Ambiental Participativo (DAP), ya que la calidad y consistencia del plan depende de los resultados del diagnóstico.

    p.mb-3 Para afianzar los elementos más importantes del plan de gestión ambiental, se le invita a explorar el siguiente recurso. ¡Adelante!

    .row.align-items-center.justify-content-center
      .col-lg-10
        .jumbotron-6.p-5.mb-4
          .row.align-items-center.justify-content-center.mb-0
            .col-lg-10
              h3.text-center Plan de Acción Ambiental
              p.mb-3-text-center El objetivo principal del Plan de Acción Ambiental es mejorar las condiciones de desarrollo y la calidad de vida de los seres humanos, en armonía con su entorno.
              ImagenInfografica.color-acento-contenido.mb-3
                template(v-slot:imagen)
                  figure
                  img(src="@/assets/curso/images/tema6/info_3.svg").mb-3
                    
                .tarjeta-blanca-1.p-3(x="4%" y="54%" numero="1")
                  .row.justify-content-center.align-items-center
                    .col-6.col-lg-2 
                      img(src="@/assets/curso/images/tema6/ico_new.svg").mb-3
                    .col-lg-10.col-sm-8.mb-lg-0
                      p.mb-0 Integrar el medio ambiente con otras políticas sectoriales.
                      p.mb-0 Reducir las emisiones contaminantes hacia el entorno natural.
                      p.mb-0 Disminuir la dependencia sobre recursos no renovables.
                      p.mb-0 Fomentar cambios de hábitos y actitudes por parte de la población.


                .tarjeta-blanca-1.p-3(x="38%" y="54%" numero="2")
                  .row.justify-content-center.align-items-center
                    .col-6.col-lg-2 
                        img(src="@/assets/curso/images/tema6/ico_new.svg").mb-3
                    .col-lg-10.col-sm-8.mb-lg-0
                      p.mb-3 Fortalecimiento del proceso de participación ciudadana a través de los acuerdos concertados entre los actores locales comprometidos.
                      p.mb-3 Una visión de futuro sobre la situación ambiental de la zona. 
                      p.mb-3 Una agenda para la acción que contenga los problemas a enfrentar, los objetivos y metas a lograr.
                      p.mb-3 Una línea de base con indicadores de la situación ambiental, que permita evaluar los logros de las metas propuestas.

                  
                .tarjeta-blanca-1.p-3(x="71.5%" y="54%" numero="3")
                  .row.justify-content-center.align-items-center  
                    .col-6.col-lg-2 
                        img(src="@/assets/curso/images/tema6/ico_new.svg").mb-3
                    .col-lg-10.col-sm-8.mb-lg-0
                      p.mb-3 Definir una correcta política ambiental enfocada en la sostenibilidad de los recursos.
                      p.mb-3 Definir las acciones necesarias para subsanar todas las incidencias ambientales.
                      p.mb-3 Enfrentar los efectos negativos identificados.
                      p.mb-3 Contribuir al fortalecimiento de la institucionalidad. 
                      p.mb-3 Poner en marcha los espacios y mecanismos de participación ciudadana.

    .row.align-items-center.justify-content-center
      .col-lg-10(data-aos="fade-right")  
        .jumbotron-7.p-4
          .row.align-items-center.justify-content-center
            .col-10.col-lg-2
              img(src='@/assets/curso/images/tema2/ico_1.svg' alt='', style="width:100px; display:block; margin:auto 0;").mb-3
            .col-lg-10
              p.mb-3 El Plan de Acción Ambiental (PAA) debe incluir todo el territorio y, en los casos que sea necesario, se pueden incluir propuestas que vinculen a otras comunidades.
              
    Separador

    #t_6_8.titulo-segundo
      .h2 6.8 Ejes de investigación de la promotoría ambiental

    p.mb-5 Aunque existe una gran variedad de temáticas para tratar dentro de las comunidades y para llevar a cabo diagnósticos y planes de acción, de acuerdo con Maldonado (2013), en su artículo promotoría ambiental, algunos de los temas más abordados son:

    .row.justify-content-center.mb-4
      .col-lg-3.mb-3
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_new_1.svg'  alt='', style="width:120px; display:block; margin:auto 0rem ;")
          .tarjeta.color-custom-5
            .p-4
              p.text-center.mt-5 Estilos de vida y modelos de desarrollo.

      .col-lg-3.mb-3
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_new_2.svg' alt='AvatarTop')
          .tarjeta.color-custom-5
            .p-4
              p.text-center.mt-5  Impacto ambiental originado por prácticas sociales.

      .col-lg-3.mb-3
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_new_3.svg' alt='AvatarTop')
          .tarjeta.color-custom-5
            .p-4
              p.text-center.mt-5  Procesos productivos y uso de los recursos.

      .col-lg-3.mb-3
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_new_4.svg' alt='AvatarTop')
          .tarjeta.color-custom-5
            .p-4
              p.text-center.mt-5  Manejo de residuos.

    .row.justify-content-center
      .col-lg-3.mb-3
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_new_5.svg' alt='AvatarTop')
          .tarjeta.color-custom-5
            .p-4
              p.text-center.mt-5  Hábitos de consumo.

      .col-lg-3.mb-3
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_new_6.svg' alt='AvatarTop')
          .tarjeta.color-custom-5
            .p-4
              p.text-center.mt-5  Hábitos de convivencia respecto al ambiente.

      .col-lg-3.mb-3
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_new_7.svg' alt='AvatarTop')
          .tarjeta.color-custom-5
            .p-4
              p.text-center.mt-5  Niveles de responsabilidad y posibilidad de acción.

      .col-lg-3.mb-3
        .tarjeta-avatar-b.h-100.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/images/tema6/ico_new_8.svg' alt='AvatarTop')
          .tarjeta.color-custom-5
            .p-4
              p.text-center.mt-5  Manejo del recurso hídrico.






 

































 
























































</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
