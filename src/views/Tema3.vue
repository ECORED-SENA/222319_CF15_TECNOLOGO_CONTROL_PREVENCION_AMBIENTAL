<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Caracterización de la población

    .row.align-items-center.justify-content-center.mb-5  
      .col-lg-12(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema3/img_1.png')

    p.mb-3 La identificación de la población y, de manera simultánea, la identificación de necesidades de capacitación por tipo de población, para la aplicación de las estrategias educativas ambientales, se convierte en objetivo fundamental de trabajo, porque depende, específicamente, de la comunidad, de las formas organizativas y del territorio. 

    p.mb-0 Es así como, en este punto del componente formativo, usted podrá hacer refuerzo de los conceptos vistos hasta ahora, con énfasis en la población a trabajar.


    Separador

    #t_3_1.titulo-segundo
      .h2 3.1 Comunidad y formas organizativas

    p.mb-3 <b>Máxima (2020) establece el concepto de comunidad como “un conjunto de seres humanos que tiene algún tipo de rasgos comunes (como el idioma, las costumbres, los valores, etc.), o algún tipo de contexto de encuentro. </b>Por otro lado, en biología y ecología, alude a un conjunto de seres vivos de distintas especies que interactúan en un área determinada.”

    .jumbotron-8.p-4.mb-5
      .row.align-items-center.justify-content-center.mb-0
        .col-lg-6
          h3.mb-3 Desde otras miradas   
          p.mb-3 Sin embargo, la comunidad también depende del sector que aplique un área específica, por ejemplo:
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 1
              p <b>Ecología.</b> Una comunidad es un conjunto de seres vivientes vinculados entre sí en un área determinada, a través de cadenas tróficas o alimentarias.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 2
              p  <b>Política</b>. Es un conjunto humano organizado, como los países, en torno a la realización de un objetivo común.

            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 3
              p <b>Administración.</b> Es un sinónimo de empresa o compañía.
            p.mb-0 Todos estos conceptos tienen, no obstante, el denominador común de la conjunción de individuos en una unidad mayor organizada, en la que sus partes tienen siempre relación mutua.
        .col-12.col-lg-4(data-aos="fade-left").mb-3
          img(src='@/assets/curso/images/tema3/img_2.png')

    .row.align-items-center.justify-content-center.mb-5  
      .col-lg-10
        h3.mb-3 Tipos de comunidades

        p.mb-5 Las comunidades se pueden clasificar en diferentes tipos, de acuerdo con su naturaleza y ubicación, así lo define Máxima (2020). Dentro las principales comunidades están:

        .row.justify-content-center.my-3
          .col-lg-12
            SlyderF.slyder-color.mb-5(columnas="col-lg-4 col-xl-6")(data-aos="zoom-in-down")
              .tarjeta.tarjeta_grey-1.p-4.h-100  
                .tarjeta
                  .row.justify-content-center
                    img(src='@/assets/curso/images/tema3/ico_1.svg' alt='imagen relacionada' style='width:150px')
                  .p-4 
                    p.mb-0 <b>Comunidad local.</b> Un conjunto de seres humanos que habitan en un área común y se relacionan los unos con los otros.

              .tarjeta.tarjeta_grey-1.p-4.h-100  
                .tarjeta
                  .row.justify-content-center
                    img(src='@/assets/curso/images/tema3/ico_1.svg' alt='imagen relacionada' style='width:150px')
                  .p-4
                    p.mb-0  <b>Comunidad internacional.</b> El concierto de los países del mundo y de las relaciones entre sí.

              .tarjeta.tarjeta_grey-1.p-4.h-100  
                .tarjeta
                  .row.justify-content-center
                    img(src='@/assets/curso/images/tema3/ico_1.svg' alt='imagen relacionada' style='width:150px')
                  .p-4
                    p.mb-0  <b>Comunidad ecológica.</b> El conjunto de seres vivos de distintas especies que se vinculan entre sí mediante relaciones alimentarias.

              .tarjeta.tarjeta_grey-1.p-4.h-100  
                .tarjeta 
                  .row.justify-content-center
                    img(src='@/assets/curso/images/tema3/ico_1.svg' alt='imagen relacionada' style='width:150px')
                  .p-4  
                    p.mb-0 <b>Comunidad de intereses.</b>  Un tipo de asociaciones de personas que se juntan para compartir en torno a un interés o una pasión común.

              .tarjeta.tarjeta_grey-1.p-4.h-100  
                .tarjeta
                  .row.justify-content-center 
                    img(src='@/assets/curso/images/tema3/ico_1.svg' alt='imagen relacionada' style='width:150px')
                  .p-4
                    p.mb-0 <b>Comunidad científica.</b> Se llama así al conjunto de las voces y opiniones del ámbito científico de un país, una región o del mundo.

    Separador

    #t_3_2.titulo-segundo
      .h2 3.2 La organización comunitaria

    p.mb-3 Las organizaciones comunitarias responden a las comunidades que se reúnen con un mismo propósito, para darle respuesta a las diferentes necesidades que se presentan en su territorio, así lo define Esteli (2018, p. 10). 

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_3.png')})`}")
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0  La organización comunitaria “es cuando un grupo de personas se unen para ver los problemas que les afectan en su comunidad y les buscan soluciones. Los problemas pueden ser de carácter social, cultural, económico, político y productivo”. Por ende, esta organización es la estructura que se da en un grupo de personas para funcionar de acuerdo con un método y con un objetivo común. Cuando varias personas deciden organizarse, lo hacen porque tienen intereses o problemas comunes, que les exigen su unión para poder enfrentarlos. Por ende, son dos las características que identifican a estas organizaciones: un mismo objetivo y los mismos intereses.

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0  La organización comunitaria “es cuando un grupo de personas se unen para ver los problemas que les afectan en su comunidad y les buscan soluciones. Los problemas pueden ser de carácter social, cultural, económico, político y productivo”. Por ende, esta organización es la estructura que se da en un grupo de personas para funcionar de acuerdo con un método y con un objetivo común. Cuando varias personas deciden organizarse, lo hacen porque tienen intereses o problemas comunes, que les exigen su unión para poder enfrentarlos. Por ende, son dos las características que identifican a estas organizaciones: un mismo objetivo y los mismos intereses.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema3/img_3.png' alt='', style="width:400px; display:block; margin:-2rem 0rem ;").mb-3

    Separador

    #t_3_3.titulo-segundo
      .h2 3.3 El territorio y su ordenamiento

    p.mb-3 Se habla de territorio como un espacio geográfico limitado por fronteras físicas, biológicas, sociales, culturales, cuyo interior está integrado por comunidades y diversos sectores sociales que influyen en la comunidad; sin embargo, Cazzuffi (2019) establece que “El concepto de ‘territorio’ nos permite superar la falsa dicotomía de lo urbano y lo rural. El territorio es un espacio vivo y socialmente construido, que no refleja necesariamente límites geográficos o administrativos, sino que es el producto de las interacciones sociales entre personas, instituciones, empresas y organizaciones, que expresan una identidad y un propósito compartido”.

    .row.justify-content-center.align-items-center.my-3
      .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Enfoque territorial
              p.mb-3 La descripción del concepto de territorio nos muestra otra visión, según Cazzuffi (2019). El enfoque territorial del desarrollo es intersectorial e interdisciplinario, y busca comprender la realidad a partir del análisis de la diversidad de formas que ella adquiere a escala de los territorios, y diseñar políticas públicas que promuevan que los territorios expresen su potencial y que se reduzcan las desigualdades territoriales.

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema3/img_4.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Ordenamiento del territorio

              p.mb-3 Es un proceso por el cual se orienta el desarrollo del territorio y se encuentra fundamentado en tres principios, de acuerdo con la Ley 388 de 1997, así:

              p.mb-3 <b>a.</b> La función social y ecológica del territorio.

              p.mb-3 <b>b.</b> La prevalencia del interés general sobre el particular.

              p.mb-3 <b>c.</b> La distribución equitativa de las cargas y los beneficios, con base en estrategias de desarrollo socioeconómico y en armonía con el medio ambiente, que se ajustan a una imagen objetivo que es fijada previamente con el consenso de la comunidad.
 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema3/img_5.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 POT
              p.mb-3 Es importante conocer el Plan de Ordenamiento Territorial (POT) del municipio donde se realice el proyecto de educación ambiental, para ello se requiere acudir a este documento que se puede encontrar en las alcaldías municipales y páginas web de los municipios.

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema3/img_6.png").mb-3

    Separador

    #t_3_4.titulo-segundo
      .h2 3.4 Igualdad de género

    
    .row.align-items-center.justify-content-center.mb-0
      .col-lg-6
        p.mb-3 Teniendo en cuenta lo establecido, las relaciones entre las mujeres y los hombres desempeñan un papel importante, tanto en la plasmación como en la evolución y transformación de los valores, las normas y las prácticas culturales de una sociedad, los cuales, a su vez, determinan dichas relaciones. De hecho, son relaciones que evolucionan con el tiempo y en las que influye una matriz de factores socioeconómicos, políticos y culturales.
        .jumbotron-8.p-4
            p.mb-3 Es importante definir el concepto, por ende, “género” se entiende como las construcciones socioculturales que diferencian y configuran los roles, las percepciones y los estatus de las mujeres y de los hombres en una sociedad. Por “igualdad de género” se entiende la existencia de una igualdad de oportunidades y de derechos entre las mujeres y los hombres en las esferas privada y pública, que les brinde y garantice la posibilidad de realizar la vida que deseen. Actualmente, se reconoce a nivel internacional que la igualdad de género es una pieza clave del desarrollo sostenible. (UNESCO, 2014, p. 104).      
      .col-12.col-lg-6(data-aos="fade-left").mb-3
        img(src='@/assets/curso/images/tema3/img_7.svg')


    Separador

    #t_3_5.titulo-segundo
      .h2 3.5 Equidad de género

    p.mb-3 Según el Manual Metodológico (UNESCO, 2014, p. 106), se define la equidad de género como “la imparcialidad en el trato que reciben mujeres y hombres de acuerdo con sus necesidades respectivas, ya sea con un trato igualitario o con uno diferenciado pero que se considera equivalente en lo que se refiere a los derechos, los beneficios, las obligaciones y las posibilidades”. 

    .row.align-items-center.justify-content-center.mb-0
      .col-lg-5
        .jumbotron-5.p-4
          .bloque-texto-d.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h3.text-regular “En el ámbito del desarrollo, un objetivo de equidad de género a menudo requiere incorporar medidas encaminadas a compensar las desventajas históricas y sociales que arrastran las mujeres”.
              i.fas.fa-quote-right
            .bloque-texto-d__autor
              .h5.mb-0 (UNESCO, 2014)    
      .col-12.col-lg-5(data-aos="fade-left").mb-3
        img(src='@/assets/curso/images/tema3/img_8.png')

    Separador

    #t_3_6.titulo-segundo
      .h2 3.6 Inclusión social

    p.mb-3 José Ricardo Stok, profesor del PAD, Universidad de Piura, establece en su columna del diario Gestión cuál es la real dimensión del concepto inclusión social:

    .row.align-items-star.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-12
        TabsC.color-primario
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Integrar")
            .row
              .col-md-6
                figure
                    img(src='@/assets/curso/images/tema3/img_10.png', alt='Texto que describa la imagen').mb-3
          
              .col-md-6.mb-4.mb-md-0
                h4 Integrar
                p.mb-3 “La inclusión social significa integrar a la vida comunitaria a todos los miembros de la sociedad, independientemente de su origen, condición social o actividad. En definitiva, acercarlo a una vida más digna, donde pueda tener los servicios básicos para un desarrollo personal y familiar adecuado y sostenible” (pqs.pe, 2019)
        
        
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="A los marginados")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema3/img_11.png', alt='Texto que describa la imagen').mb-3
              .col-md-6.mb-4.mb-md-0
                h4 A los marginados
                p.mb-3 La construcción de carreteras es la mejor base para una efectiva inclusión social, ya que permite que los ciudadanos se vinculen, comercien, vayan a escuelas o institutos técnicos y los enfermos puedan ser llevados a centros de salud.
    
              
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="A los desposeídos")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema3/img_12.png', alt='Texto que describa la imagen').mb-3
              .col-md-6.mb-4.mb-md-0
                h4 A los desposeídos
                p.mb-0 A los que no tienen agua ni desagüe. Hay ciudades donde el sistema de desagües está colapsado, con serios riesgos para la salud; hay zonas que no cuentan con agua potable. Poder disponer de agua y tratar los desagües de manera adecuada es de alta prioridad.
              

          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="A los informales")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema3/img_13.png', alt='Texto que describa la imagen').mb-3
              .col-md-6.mb-4.mb-md-0
                h4 A los informales
                p.mb-3 Una legislación laboral tan generosa solo beneficia a una parte reducida de la población y ahuyenta mayor formalidad. Hay que dejar de alabar el emprendimiento cuando solo disfraza la informalidad.
            
              
    Separador

    #t_3_7.titulo-segundo
      .h2 3.7 Tipos y necesidades de capacitación en las organizaciones

    p.mb-3 Uno de los factores a ser tomados en cuenta cuando las empresas escogen sus programas de capacitación es el tipo de esta. Según Chiavenato (2004), la educación o capacitación puede ser:

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema3/ico_2.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom.m-left
            .p-4
              p.mb-0.text-center   a) Formación profesional.

      .col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema3/ico_3.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")

          .tarjeta.color-custom.m-left
            .p-4
              p.mb-0.text-center   b) Perfeccionamiento.

      .col-md-4.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/images/tema3/ico_4.svg' alt='', style="width:120px; display:block; margin:auto 0 ;")
          .tarjeta.color-custom.m-left
            .p-4
              p.mb-0.text-center  c) Capacitación.
            
    AcordionA(data-aos="fade-down-right").mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.align-items-star.justify-content-center(titulo="Niveles de preparación")
        .col-3.col-lg-1.lg-0
          img(src='@/assets/curso/images/tema3/ico_5.svg'  alt='').mb-3
        .col-md-9.mb-4.mb-md-0.ps-3
          p.mb-0 Los niveles de preparación que las empresas demandan deben utilizar métodos de enseñanza que también deben ser considerados al momento de elegir un programa de capacitación. Para Dalmau et al.(2001), la educación puede ser presencial, semipresencial o a distancia, siendo el primero el más popular y el tercero el de mayor crecimiento en demanda (Dalmau et al., 2001).  
      .row.align-items-star.justify-content-center(titulo="Determinar el tipo de capacitación")
        .col-3.col-lg-1.lg-0
          img(src='@/assets/curso/images/tema3/ico_5.svg'  alt='').mb-3
        .col-md-9.mb-4.mb-md-0.ps-3
          p.mb-0 Para Dalmau et al. (2001), los factores que determinan la toma de decisiones frente al tipo de capacitación son el tiempo que dure la capacitación, el costo, el tamaño de la demanda del curso, la metodología y el elemento humano participante. Para Harris (2006), los criterios que los individuos miembros de la empresa priorizan para capacitarse son: si el tema es de su interés, cuándo y dónde será impartido, y si lo costos serán o no pagados por el empleador.

      .row.align-items-star.justify-content-center(titulo="Necesidades de capacitación")
        .col-3.col-lg-1.lg-0
          img(src='@/assets/curso/images/tema3/ico_5.svg'  alt='').mb-3
        .col-md-9.mb-4.mb-md-0.ps-3
          p.mb-0  Las necesidades de capacitación son las carencias profesionales de información, conocimientos, habilidades y actitudes detectadas en las personas cuando no alcanzan los niveles de competencias mínimos exigidos para el desempeño eficiente en una ocupación o puesto de trabajo (SERPE, 2006). Por otro lado, las necesidades de capacitación tienen en consideración a los equipos y maquinaria disponibles, el nivel de tecnología empleada, el tipo de organización y la actividad en la que se desarrollan en la empresa (Barros, 2009). 
          
      .row.align-items-star.justify-content-center(titulo="Causa y consecuencia")
        .col-3.col-lg-1.lg-0
          img(src='@/assets/curso/images/tema3/ico_5.svg'  alt='').mb-3
        .col-md-9.mb-4.mb-md-0.ps-3
          p.mb-0 Se puede concluir entonces que las necesidades de capacitación del personal de una empresa son causa, en tanto el conocimiento se encuentra incorporado en las personas, y son consecuencia de la mayor complejidad tecnológica, que a su vez demanda recursos humanos calificados (Mejía et al., 2004). 










































































































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
