<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas LNC: tipos, recursos y materiales

    p.mb-3 Reconocido el hecho de que la estrategia empresarial exige el planteamiento de un programa de capacitación, el primer paso a seguir es identificar las necesidades de capacitación, para elaborar programas de entrenamiento y formación profesional, es decir, identificar las discrepancias entre lo que es y lo que debería ser (Aguilar, 2010). El LCN, Levantamiento de Necesidades de Capacitación, constituye la primera fase del ciclo de formación y determina todas las fases subsecuentes del proceso de capacitación (Barros, 2009). 

    .row.align-items-center.justify-content-center.mb-5  
      .col-lg-12(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema4/img_1.png')

    p.mb-3 Para conocer a profundidad este tema y sus especificidades, se le invita a explorar el anexo Técnicas LNC: tipos, recursos y materiales. El estudio de este apartado es de suma importancia para la asimilación de los elementos vistos con anterioridad y los que vienen a continuación en este componente formativo.



    




























































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
