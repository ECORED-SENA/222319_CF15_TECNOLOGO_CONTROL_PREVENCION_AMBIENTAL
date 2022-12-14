<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.justify-content-center.mb-5  
      .col-lg-12(data-aos="fade-left") 
        img(src='@/assets/curso/images/tema1/img_intro.png')

    p.mb-0 Es Importante reconocer que la educación ambiental en nuestro país se convierte en un baluarte de la conservación y preservación de los recursos naturales que son vitales para nuestra economía y población, sobre todo en sectores vulnerables, golpeados por la desigualdad económica y social, la cual lleva a terminar con los recursos ecosistémicos que sostienen holísticamente a las diversas poblaciones, desde sus necesidades básicas, como el agua, el suelo, el aire, entre otros, hasta las culturales, que van ligadas con la identidad de los territorios y su propia conservación.

  


       
    


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
