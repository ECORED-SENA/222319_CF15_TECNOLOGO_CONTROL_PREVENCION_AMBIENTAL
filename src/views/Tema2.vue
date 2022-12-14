<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normativa asociada y Política Nacional de Educación Ambiental

    p.mb-3 La normatividad en Colombia establece la regulación y las condiciones en las que se presentan los principales conceptos y programas de educación ambiental. 

    p.mb-3 A continuación, se relacionan las principales normas asociadas. Preste atención a cada elemento y registre en su libreta de apuntes personal todos los recursos que considere importantes para su aprendizaje.

    .jumbotron-6.p-4.mb-3
      .row.align-items-center.justify-content-center.mb-0
        .col-12.col-lg-4(data-aos="fade-left").mb-3
          img(src='@/assets/curso/images/tema2/img_1.svg')
        .col-lg-6  
          h3 Empresas gestoras de residuos sólidos
          p.mb-3 Tenga muy en cuenta la información que se le presenta, de ella dependen las directrices y condiciones para el desarrollo de programas y proyectos enfocados en la educación ambiental.
          .row
            .col-lg-10
              a.anexo.mb-4(:href="obtenerLink('downloads/politica_educacion_ambiental 2002.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Empresas gestoras de residuos sólidos

    p.mb-3 Continúe profundizando en los elementos normativos y legales que orientan la Educación Ambiental en Colombia.

    .row.justify-content-center.align-items-center.my-3
      .tarjeta.bg_grad-02.p-4.mb-5(data-aos="zoom-in-up")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Política Nacional de Educación Ambiental
              p.mb-3 <b>De acuerdo con los entonces Ministerio del Medio Ambiente (MMA) y Ministerio de Educación Nacional (MEN), en la Política Nacional de Educación Ambiental SINA, se establece que, desde 1991, Colombia ha venido desarrollando una propuesta nacional de Educación Ambiental,</b> cuyos esfuerzos fundamentales han estado orientados a la inclusión de la temática, tanto en el sector ambiental como en el sector educativo, específicamente. 

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_2.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 En el sector educativo
              p.mb-3 <b>La educación ambiental se ha venido incluyendo como una de las estrategias importantes de las políticas, en el marco de la reforma educativa nacional y desde los conceptos de autonomía y descentralización.</b> En el contexto anterior, se han logrado avances significativos en lo que tiene que ver con el proceso de institucionalización, tanto a nivel nacional como a nivel regional o local. 
 
            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_3.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Creación de la Política Nacional de Educación Ambiental
              p.mb-3 <b>Nace en el mandato constitucional de 1995 dentro del Plan Nacional de Desarrollo (PND) “salto social”. </b> Allí se estableció que debe existir una política ubicando el desarrollo sostenible como una de las metas del desarrollo del país, y la educación ambiental como una de las estrategias primordiales para disminuir el deterioro del ambiente y contribuir al alcance de las metas del mencionado desarrollo.

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_4.png").mb-3

          .row.justify-content-center.align-items-center
            .col-lg-6
              h3.mb-5 Institucionalización de la educación ambiental
              p.mb-3 <b>En 1996, resultado del proceso de institucionalización de la educación ambiental impulsado por el programa, el Plan Decenal de Educación (1996 - 2005),</b> en su Proyección Número 11, incorpora la educación ambiental como una perspectiva necesaria para contribuir en el mejoramiento de la calidad de vida del país. 

            .col-10.col-lg-6
              img(src="@/assets/curso/images/tema2/img_5.png").mb-3

    p.mb-5 Para conocer cómo se estructura la política nacional de educación ambiental, se le invita a explorar el siguiente recurso:

    h3.text-center ¿Cómo se estructura la Política de Educación Ambiental?
    
    .row.align-items-center.justify-content-center.mb-5  
      .col-lg-10(data-aos="fade-left") 
        p.mb-3 La Política Nacional de Educación Ambiental se estructura y configura a partir de las temáticas y ejes que se presentan en la gráfica. Descúbralas y haga comprensión y análisis de ellas.


    .row.justify-content-center.align-items-star.mb-5
      .col-lg-5(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .row(titulo= 'Presentación' numero='1')
              .col-lg-12
                p.mb-0 Se establecen las instituciones que se hicieron presentes en la elaboración del documento y las fechas correspondientes.
          .row.color-custom-10(titulo='Antecedentes y justificación' numero='2')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Se hace un desarrollo de las políticas a nivel internacional, así como a nivel nacional, para poder desarrollar un diagnóstico de la situación normativa del país.

          .row.color-custom-10(titulo='Objetivos' numero='3')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Se establecen los diferentes objetivos, tanto generales como específicos, para el desarrollo ambiental en el país.


          .row.color-custom-10(titulo='Lineamientos conceptuales básicos y visión' numero='4')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Se identifica la situación y la educación ambiental del país, se tienen en cuenta diferentes actores como las escuelas, las universidades, los investigadores y el Sistema Nacional Ambiental (SINA).

      .col-lg-5(data-aos="fade-right")
        img.mt-3(src='@/assets/curso/images/tema2/img_6.png').mb-3

    .row.justify-content-center.align-items-star.mb-5
      .col-12.col-lg-6.mb-4.md-5(data-aos="fade-left")
        img.mt-3(src='@/assets/curso/images/tema2/img_7.png').mb-3
      .col-lg-5(data-aos="fade-right")
        LineaTiempoD.color-secundario.especial
          .row(titulo='Principios que orientan la educación ambiental' numero='5')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Se tienen en cuenta los individuos, sociedades, culturas y entornos a los cuales debe llegar la educación ambiental en el país y se establecen los principios para orientarla.

          .row(titulo='Estrategias y retos' numero='6')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Se establecen las relaciones interinstitucionales con el fin de llevar a cabo las políticas planteadas, aquí se tienen en cuenta las relaciones, desde el individuo en su participación ciudadana hasta los ministerios con las políticas nacionales.

          .row(titulo='Financiación' numero='7')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Se establecen las estrategias económicas para llevar a cabo las políticas con instituciones locales, regionales, nacionales e internacionales.


          .row(titulo='Lineamientos conceptuales básicos y visión' numero='8')
            .row.align-items-center
              .col-lg-12
                p.mb-0 Todas las acciones necesarias para poder cumplir con las políticas establecidas.a.

    .row.align-items-center.justify-content-center
      .col-lg-12(data-aos="fade-right")  
        .jumbotron-7.p-4
          .row.align-items-center.justify-content-center
            .col-10.col-lg-2
              img(src='@/assets/curso/images/tema2/ico_1.svg' alt='', style="width:100px; display:block; margin:auto 0;").mb-3
            .col-lg-10
              p.mb-3 Para conocer e identificar los componentes de la Política Nacional de Educación Ambiental (PNEA) le invitamos a conocerla ingresando al siguiente enlace:
              .row.align-items-center.justify-content-center
                .col-lg-6
                  a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace web. Ministerio del Medio Ambiente [MMA] y Ministerio de Educación Nacional [MEN]. (2002). Política Nacional de Educación Ambiental SINA.     








































































































































</template>

<script>
export default {
  name: 'Tema2',
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
