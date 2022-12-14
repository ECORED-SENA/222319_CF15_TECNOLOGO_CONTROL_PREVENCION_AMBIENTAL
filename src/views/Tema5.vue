<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Promotoría ambiental

    .row.align-items-star.justify-content-center.mb-5  
      .col-12.col-lg-6(data-aos="fade-right") 
        img(src='@/assets/curso/images/tema5/img_1.png').mb-3
      .col-lg-6.lg-0(data-aos="fade-left") 
        .jumbotron-8.h-100.p-5
          p.mb-3 La promotoría ambiental se convierte en la herramienta básica e inclusiva para fortalecer la transferencia del conocimiento y la aplicación de las estrategias de comunicación y educación en el ámbito ambiental. 

          p.mb-0 Es, desde luego, un recurso de promoción social y comunitaria que potencia las oportunidades, tanto de crecimiento de las comunidades como de los entornos naturales donde estas habitan y se desarrollan.



    Separador

    #t_5_1.titulo-segundo
      .h2 5.1 Importancia de la promotoría ambiental 

    p.mb-3 La promotoría ambiental se convierte en un aspecto básico y fundamental de participación de sociedad para interactuar con el medio ambiente, la sociedad y la cultura, así lo define la Dirección General de Educación, Ciudadanía e Información Ambiental.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-5.col-auto.mb-3.mb-lg-0
        .tarjeta.tarjeta-up
          img(src="@/assets/curso/images/tema5/img_2_1.png", alt= "")
          .tarjeta-up__content.bg-2
            h4.mg-top-4 Participación ciudadana
            p.mb-0 “Es un mecanismo formal de participación ciudadana que las municipalidades promueven a nivel nacional para canalizar la intervención de las personas interesadas en el mejoramiento ambiental efectivo de sus localidades, fortaleciendo así el liderazgo comunitario para que las municipalidades puedan cumplir mejor con sus funciones ambientales, entre ellas, las de difundir información y educar a los vecinos, ejecutar actividades puntuales o pequeños proyectos de mejoramiento ambiental, participar en campañas preventivas o promocionales o, en general, hacer que las políticas o instrumentos de gestión municipales sean accesibles y aplicables a escala de los barrios, las familias y las personas”. 
             
      .col-lg-5.col-auto.mb-3.mb-lg-0
        .tarjeta.tarjeta-up
          img(src="@/assets/curso/images/tema5/img_3_1.png", alt= "")
          .tarjeta-up__content.bg-3
            h4.mg-top-4 Liderazgo comunitario
            p.mb-0 El liderazgo que abandera el Ministerio de Ambiente y Desarrollo Sostenible (MADS) desarrolla activamente el programa de promotores ambientales comunitarios, y define la promotoría ambiental como “una herramienta para el cumplimiento de la estrategia contenida en la Política Nacional de Educación Ambiental denominada ‘Formación de Educadores y Dinamizadores Ambientales’”, convirtiéndose en el procedimiento que permite implementar programas de capacitación y formación.

    Separador

    #t_5_2.titulo-segundo
      .h2 5.2 La promotoría ambiental en Colombia

    .row.justify-content-center.align-items-star.mb-3
      .col-lg-12
        .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
          .bloque-texto-g__img(data-aos="fade-right")(
            :style="{'background-image': `url(${require('@/assets/curso/images/tema5/img_4.png')})`}")
          .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
            p.mb-0  El liderazgo que abandera el Ministerio de Ambiente y Desarrollo Sostenible (MADS) desarrolla activamente el programa de promotores ambientales comunitarios, y define la promotoría ambiental como “una herramienta para el cumplimiento de la estrategia contenida en la Política Nacional de Educación Ambiental denominada ‘Formación de Educadores y Dinamizadores Ambientales’”, convirtiéndose en el procedimiento que permite implementar programas de capacitación y formación.

    .bloque-texto-a.color-custom-2.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p.mb-0  La organización comunitaria “es cuando un grupo de personas se unen para ver los problemas que les afectan en su comunidad y les buscan soluciones. Los problemas pueden ser de carácter social, cultural, económico, político y productivo”. Por ende, esta organización es la estructura que se da en un grupo de personas para funcionar de acuerdo con un método y con un objetivo común. Cuando varias personas deciden organizarse, lo hacen porque tienen intereses o problemas comunes, que les exigen su unión para poder enfrentarlos. Por ende, son dos las características que identifican a estas organizaciones: un mismo objetivo y los mismos intereses.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
            figure
              img(src='@/assets/curso/images/tema5/img_4.png' alt='', style="width:400px; display:block; margin:-2rem 0rem ;").mb-3

    .row.align-items-center.align-items-center.my-5
      .col-lg-12
        TabsA.color-acento-contenido(data-aos="fade")
          .tarjeta.back-tab.px-5.py-4(titulo="Desarrollo sostenible")
            .row.px-2.py-2.justify-content-center
              .col-lg-10
                h4 Desarrollo sostenible
                p.mb-0 El objetivo principal de este procedimiento es promover y cualificar la participación ciudadana en los procesos de planificación, gestión y seguimiento de las políticas, planes, programas y proyectos que orientan el desarrollo sostenible y la educación ambiental, tanto en lo local como en lo regional, dentro de los lineamientos del Desarrollo Sostenible.
          .tarjeta.back-tab.px-5.py-4(titulo="Sensibilización de comunidades")
            .row.px-2.py-2.justify-content-center
              .col-lg-10
                h4 Sensibilización de comunidades
                p.mb-0 Para el Ministerio de Ambiente y Desarrollo Sostenible, los promotores ambientales comunitarios se convierten en ejes articuladores de las estrategias de educación ambiental, son líderes comunitarios y desarrollan proyectos y programas de apoyo a sus comunidades, generalmente, enmarcados por procesos de sensibilización y educación a sus comunidades.
          .tarjeta.back-tab.px-5.py-4(titulo="Participación ciudadana")
            .row.px-2.py-2.justify-content-center
              .col-lg-10
                h4 Participación ciudadana
                p.mb-0 “Su quehacer se enmarca en la participación ciudadana, el control social a la gestión ambiental, la organización de sus comunidades en torno a la solución de las problemáticas ambientales, la preservación de las tradiciones culturales, la formulación de proyectos ciudadanos de educación ambiental, socio ambientales y de Educación Ambiental”.

    Separador

    #t_5_3.titulo-segundo
      .h2 5.3 Perfil del promotor

    p.mb-3 El Programa Nacional de Promotoría Ambiental Comunitaria (MADS, 2020) establece el perfil del promotor como un líder con gran sensibilidad y responsabilidad social frente al desarrollo sostenible de su localidad y su región.       

    .row.align-items-star.justify-content-center.mb-5  
      .col-lg-6.lg-0(data-aos="fade-right") 
        .jumbotron-8.h-100.p-5
          p.mb-3 Es una persona cuyo interés por la comunidad y por la solución de sus problemas sociales lo han constituido en un sujeto respetado y reconocido por la localidad en la que habita. Se destaca por su vocación de servicio, por su saber y conocimiento espontáneo, que le permiten dar respuestas y proponer fórmulas de encuentro para conciliar los intereses de distintos actores sociales.
        
      .col-12.col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema5/img_8.png')
      
    Separador

    #t_5_4.titulo-segundo
      .h2 5.4 Funciones

    p.mb-3 Dentro de las funciones que se establecen para quienes van a desempeñar como promotores ambientales, se destacan las siguientes características:

    .jumbotron-6.p-4 
      .row.align-items-center.justify-content-center.mb-0
        .col-12.col-lg-5(data-aos="fade-right").mb-3
          img(src='@/assets/curso/images/tema5/img_9.png')
        .col-lg-7(data-aos="fade-left")  
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 1
              | Conocer y difundir la Política Nacional de Educación Ambiental y sus estrategias.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 2
              | Desarrollar procesos de gestión para la sensibilización, educación y capacitación comunitaria.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 3
              | Articulación de organizaciones sociales a los procesos ambientales locales y regionales.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 4
              | Estimular el fortalecimiento de la participación ciudadana y la capacidad organizativa de la comunidad
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 5
              | Ser intermediario de la comunidad ante las instituciones.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 6
              | Participar en los procesos de planeación de la gestión ambiental (PGAR, PGIR, PAT, SIGAM).
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 7
              | Participar en las diferentes instancias de participación ciudadana generadas por las entidades municipales.
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 8
              | El Ministerio de Ambiente en Colombia posee una Red Nacional de Promotores Ambientales Comunitarios, la cual está integrada por todos los ciudadanos y ciudadanas que se han capacitado como promotores ambientales comunitarios en todo el país. 
            li 
              .lista-ol--cuadro__vineta
                span(style='color:black') 9
              | Pueden hacer parte, igualmente, los directores y coordinadores de Educación Ambiental y Promotoría Ambiental Comunitaria de las Corporaciones Autónomas Regionales, de las Autoridades Ambientales Urbanas y del Sistema Nacional de Parques Nacionales Naturales, los líderes comunitarios que se inscriban, las organizaciones que se han gestado como producto de los procesos de trabajo y desarrollo de las funciones de los promotores ambientales comunitarios. (MADS 2020).

    Separador

    #t_5_5.titulo-segundo
      .h2 5.5 Promotor comunitario

    p.mb-3 Según la formación de promotores y promotoras comunitarios en la cuenca del río Tabasará, la importancia del promotor o promotora ambiental radica, primordialmente, en el compromiso y la interacción que el líder ambiental genera intrínsecamente con la comunidad o población objetivo. 

    
    .row.align-items-star.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-12
        TabsC.color-primario
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Significado")
            .row
              .col-md-6
                figure
                    img(src='@/assets/curso/images/tema5/img_10.png', alt='Texto que describa la imagen').mb-3
          
              .col-md-6.mb-4.mb-md-0
                h4 Significado
                p.mb-3 La guía para la promotoría y promotor comunitario ambiental establece el significado del promotor ambiental: “es aquella persona que acompaña a un grupo, a una comunidad, a una organización comunitaria, facilitando procesos de desarrollo integral individual y colectivo. 
        
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Individuo capacitado")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema5/img_11.png', alt='Texto que describa la imagen').mb-3
              .col-md-6.mb-4.mb-md-0
                h4 Individuo capacitado
                p.mb-3 “El promotor tiene relaciones establecidas dentro de la comunidad y comprende a la gente de la comunidad y la situación en la que viven, porque es uno de ellos. Esto facilita la comunicación con la gente de la comunidad”, principio fundamental del proceso de transferencia en la formación ambiental en comunidad. (ODESCA, 2012, p. 6)
              
          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Soporte y complemento")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema5/img_12.png', alt='Texto que describa la imagen').mb-3
              .col-md-6.mb-4.mb-md-0
                h4 Soporte y complemento
                p.mb-0 El promotor ambiental es un soporte o complemento del papel técnico que realizan profesionales en el área ambiental.
              

          .py-3.py-md-4.color-tab.p-4.m-top-4.m-top-5(titulo="Es uno de ellos")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema5/img_13.png', alt='Texto que describa la imagen').mb-3
              .col-md-6.mb-4.mb-md-0
                h4 Es uno de ellos
                p.mb-3 “El promotor tiene relaciones establecidas dentro de la comunidad y comprende a la gente de la comunidad y la situación en la que viven, porque es uno de ellos. Esto facilita la comunicación con la gente de la comunidad”, principio fundamental del proceso de transferencia en la formación ambiental en comunidad. (ODESCA, 2012, p. 6)
        

    Separador

    #t_5_6.titulo-segundo
      .h2 5.6. Los roles del promotor ambiental

    p.mb-3 Para tener un compromiso con la formación que se imparte, acerca de los conocimientos ambientales que ejecuta el promotor ambiental, se inicia principalmente en su núcleo familiar, trascendiendo en la comunidad cercana y en la sociedad. La guía para la promotoría y promotor comunitario ambiental establece definidas responsabilidades que incorpora en su quehacer:


    .row.justify-content-center.align-items-center.my-3
      .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-star
            .col-lg-6
              h3.mb-5 Ser consejero del grupo
              p.mb-3 “Deberá fortalecer el espíritu de iniciativa, las capacidades de organización y de planificación de su comunidad; gestionar acciones que permitan el mejoramiento socioeconómico de los miembros de la comunidad; promover que las organizaciones acuerden acciones de apoyo para la ejecución de obras de beneficio comunal; exponer y difundir opciones tecnológicas social y ambientalmente acordes con las necesidades y problemas de sus comunidades”. (ODESCA, 2012, p. 6-7).
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema5/img_14.png").mb-3

          .row.justify-content-center.align-items-star
            .col-lg-6
              h3.mb-5 Formador participativo: 

              p.mb-3 Es un proceso por el cual se orienta el desarrollo del territorio y se encuentra “Deberá transferir los conocimientos y experiencias a las personas de las comunidades (de forma tal) que les permita ir ampliando sus conocimientos; propiciar la formación de los grupos que sean necesarios para la formulación y ejecución de proyectos; impulsar procesos de participación y capacitación comunitaria a partir de la difusión y promoción en sus comunidades”. (ODESCA, 2012, p. 6-7).fundamentado en tres principios, de acuerdo con la Ley 388 de 1997, así:

 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema5/img_15.png").mb-3

          .row.justify-content-center.align-items-star
            .col-lg-6
              h3.mb-5 Agente de enlace: 
              p.mb-3 “Deberá facilitar la comunicación entre los grupos y los servicios de desarrollo del Gobierno o de las organizaciones no gubernamentales (ONG), servicios de extensión y las agencias que suministran insumos; coordinar con líderes y autoridades locales, así como instituciones públicas, para motivar su participación y colaboración en los proyectos; manejar conflictos; velar por el buen uso y mantenimiento del ambiente donde se desempeña; mantenerse informado y compartir información relevante con la comunidad, directivas de organizaciones comunitarias y autoridades locales”. (ODESCA, 2012, p. 6-7).

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema5/img_16.png").mb-3

    

              








































































































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
<style lang="sass">
.tarjeta-up
  overflow: hidden
  position: relative
  .tarjeta-up__content
    position: absolute
    bottom: -200%
    width: 100%
    height: 100%
    padding: 2rem
    transition: bottom 0.7s ease-in-out
    @media (max-width: 412px)
      font-size: 12px
    &.bg-1
        background:  rgb(56,125,184)
        h1, h2, h3, h4, h5, p
          color: $white
    &.bg-2
        background-color: #A7BCE6
        h1, h2, h3, h4, h5, p
          color: $black
    &.bg-3
        background-color:  #D9E2F4
        h1, h2, h3, h4, h5, p
          color: $black

  &:hover
    .tarjeta-up__content
      bottom: 0%
</style>
