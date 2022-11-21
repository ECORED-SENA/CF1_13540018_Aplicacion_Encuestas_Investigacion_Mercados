<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .fondo1.p-0.mb-5.py-3
      .row.justify-content-center.align-items-center.py-0(data-aos="fade-left")
        .col-lg-8.col-12
          p Las empresas enfrentan actualmente grandes oportunidades, generadas por la cada vez mayor competencia, la llegada de empresas multinacionales, nuevas start-up (emprendimientos) y el auge de las Tecnologías de la Información y las Comunicaciones (TIC) que propicien cada vez consumidores más informados; en este escenario surgen las investigaciones de mercado como un potente insumo que tienen las organizaciones para “conocer de primera mano” los intereses, gustos y expectativas de sus grupos de interés (clientes, proveedores, distribuidores e incluso colaboradores).
          p.mb-lg-0.mb-3 Teniendo presente todos esos retos que enfrentan las empresas y el rol de la investigación de mercados, este componente formativo, denominado “Estructuración y realización de encuestas” tiene por fin suministrar de forma teórica- práctica conocimientos que permitan apropiar herramientas para diseñar y aplicar encuestas, teniendo en cuenta el canal (medio) a través del cual se realizan y el objetivo que persiguen.
        .col-lg-4.col-8
          img.mb-lg-0.mb-3(src="@/assets/curso/img01.svg")

    .row.justify-content-center.align-items-center.py-0.mb-5(data-aos="fade-right")
      .col-lg-10.col-12
        .bloque-texto-g.color-primario.p-lg-5.py-lg-4.p-2.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img02.png')})`}"
          )
          .bloque-texto-g__texto.px-lg-5.py-lg-4.p-2
            p.mb-0 Tener estos conocimientos claros es tan importante que, de hecho, se ha evidenciado cómo una incorrecta elaboración o realización de estas, puede ocasionar la generación de información errónea o imprecisa que lleven a malas interpretaciones por parte de los tomadores de decisión o usuarios de los datos.
    
    p.mb-5 Para hacer lo anterior posible, el video a continuación expone cómo se desarrollará cada uno de los contenidos y su importancia en la estructuración y realización de encuestas.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
    SlyderF.mb-5(columnas="col-12 col-lg-4" data-aos="fade-left")
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/img03.svg")   
        .tarjeta.p-5.px-4(style="background:#e1eefe")
          h4.text-center Investigación de mercados 
          p.mb-0.text-center Se comenzará detallando qué es la investigación de mercados, conociendo sus metodologías y técnicas.
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/img04.svg")   
        .tarjeta.p-5.px-4(style="background:#b9d6fc")
          h4.text-center Clientes
          p.mb-0.text-center Se suministrarán algunos conceptos asociados a la segmentación, un tema fundamental para comprender cómo se clasifican los clientes y cómo, dependiendo del tipo de cliente, se deben abordar de manera diferenciada.
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/img05.svg")   
        .tarjeta.p-5.px-4(style="background:#e1eefe")
          h4.text-center Normatividad 
          p.mb-0.text-center Luego, se tratará el tema de protección de datos, una temática muy sensible dentro de la investigación de mercados, dado que en Colombia este tema normativo requiere un tratamiento especial, en el cual el mundo de las encuestas es bastante impactado, dada la interacción constante con los clientes y sus datos personales. 
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/img06.svg")   
        .tarjeta.p-5.px-4(style="background:#b9d6fc")
          h4.text-center Ofimática
          p.mb-0.text-center Se abordarán conceptos básicos asociados al tema de la ofimática como herramienta de apoyo en la realización de procesos de investigación de mercados.
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/img07.svg")   
        .tarjeta.p-5.px-4(style="background:#e1eefe")
          h4.text-center Seguridad y salud en el trabajo 
          p.mb-0.text-center Se trabajará de una manera general un tema que, si bien pareciera no tener mucho alcance, realmente tiene gran importancia en el desempeño del encuestador como lo es, la buena práctica de pautas de seguridad y salud en el trabajo. 
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/img08.svg")   
        .tarjeta.p-5.px-4(style="background:#b9d6fc")
          h4.text-center Encuesta
          p.mb-0.text-center En la última parte se mirará en detalle el proceso para elaborar y aplicar una encuesta, detallando desde el concepto mismo hasta las formas en las cuales puede realizarse y cuáles son sus partes.


    p.mb-0 Con este abrebocas, se espera que este documento sea útil para aprendices y lectores en general, que estén interesados en acercarse al maravilloso y retador mundo de la realización de encuestas.
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
