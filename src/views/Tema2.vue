<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clientes
    
    .row.align-items-center.justify-content-center.mb-5.p-3(style="background-color: #ffe2d9" data-aos="fade-right")
      .col-md-4.col-lg-2.col-6.d-flex.justify-content-center
        img.mb-lg-0.mb-3.w-75(src='@/assets/curso/tema2/img01.svg')                  
      .col-lg-10.col-12
        p.mb-0 El cliente es la razón de ser de la empresa, del mercadeo y de las ventas y, aunque es falso que el cliente siempre tiene la razón, sí es importante conocer cómo se comportan, qué necesitan y qué esperan de la empresa y sus productos. Existen numerosas clasificaciones de clientes, según cómo se comportan, según su volumen de compra, según su tipo de compra, según su personalidad, según su frecuencia, entre otras. Sin embargo, para una persona que se desempeñará como encuestador, es importante conocer que según el rol que ejercen en la compra, existen tres posibles clasificaciones de clientes:

    TabsB.color-acento-contenido.mb-0(data-aos="fade-left")
      .py-lg-5.py-3.p-3(style="background-color:#ffe2d9" titulo="Cliente actual" :icono="require('@/assets/curso/tema2/img02.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-10.col-12
            .row.align-items-center.justify-content-start
              .col-lg-11.col-12
                .tarjeta-avatar-b.mb-0.align-items-center.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')
                  .tarjeta.d-flex.align-items-center(style="background-color:#ffffff; height: 50%; border-radius:20px")
                      .p-4.mb-0 <b>Cliente actual</b>: es aquel quien tiene actualmente la relación comercial con la empresa, adquiere los productos y paga por ellos.
                      
                .row.align-items-center.justify-content-center
                  .col-lg-8.col-12
                    p.mb-4.ms-2 <b>Ejemplo</b>
                    p Una empresa va a realizar una encuesta con sus clientes, para conocer el nivel de satisfacción que tienen con la marca, sus productos y su personal. 
                    p.mb-lg-0.mb-3 En este caso, el tipo de clientes son los clientes actuales, ya que para poder evaluar la compañía requieren tener vínculo actual con ella.
                  .col-lg-4.col-8
                    img(src='@/assets/curso/tema2/img04.svg')

      .py-lg-5.py-3.p-3(style="background-color:#ffe2d9" titulo="Cliente potencial" :icono="require('@/assets/curso/tema2/img02.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-10.col-12
            .row.align-items-center.justify-content-start
              .col-lg-11.col-12
                .tarjeta-avatar-b.mb-0.align-items-center.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
                  .tarjeta.d-flex.align-items-center(style="background-color:#ffffff; height: 50%; border-radius:20px")
                      .p-4.py-2.mb-0 <b>Cliente potencial</b>: es aquella persona o empresa que cumple las características de interés para la empresa porque requiere el producto y tiene capacidad adquisitiva (recursos o fuentes de financiación) para adquirirlo, pero aún no lo ha hecho.
                      
                .row.align-items-center.justify-content-center
                  .col-lg-8.col-12
                    p.mb-4.ms-2 <b>Ejemplo</b>
                    p Una empresa experta en venta de ropa, desea conocer por parte de sus no clientes, que es lo que haría que compraran ropa de dicha marca.
                    p.mb-lg-0.mb-3 En esta situación, la encuesta se aplicaría a clientes potenciales, ya que son aquellos que actualmente no son clientes de la empresa, aunque cumplen las condiciones para realizarlo.
                  .col-lg-4.col-6
                    img(src='@/assets/curso/tema2/img06.svg')
      .py-lg-5.py-3.p-3(style="background-color:#ffe2d9" titulo="Usuario" :icono="require('@/assets/curso/tema2/img02.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-10.col-12
            .row.align-items-center.justify-content-start
              .col-lg-11.col-12
                .tarjeta-avatar-b.mb-0.align-items-center.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/img07.svg' alt='AvatarTop')
                  .tarjeta.d-flex.align-items-center(style="background-color:#ffffff; height: 50%; border-radius:20px")
                      .p-4.mb-0 <b>Usuario</b>: es el agente que utiliza los productos intangibles de la empresa.
                      
                .row.align-items-center.justify-content-center
                  .col-lg-8.col-12
                    p.mb-4.ms-2 <b>Ejemplo</b>
                    p Jorge es el mensajero de una empresa y acude con frecuencia al banco a realizar los depósitos de dinero del recaudo de los puntos de venta. 
                    p.mb-lg-0.mb-3 Al aplicarle la encuesta sobre su percepción de la oficina, sus respuestas serán tomadas como las de un usuario, ya que aunque no es cliente directo de la entidad financiera, si es usuario al visitarla por motivos laborales.
                  .col-lg-4.col-6
                    img(src='@/assets/curso/tema2/img08.svg')
      .py-lg-5.py-3.p-3(style="background-color:#ffe2d9" titulo="Consumidor" :icono="require('@/assets/curso/tema2/img02.svg')")
        .row.align-items-center.justify-content-center
          .col-lg-10.col-12
            .row.align-items-center.justify-content-start
              .col-lg-11.col-12
                .tarjeta-avatar-b.mb-0.align-items-center.mb-5
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema2/img09.svg' alt='AvatarTop')
                  .tarjeta.d-flex.align-items-center(style="background-color:#ffffff; height: 50%; border-radius:20px")
                      .p-4.mb-0 <b>Consumidor</b>: es aquel agente que utiliza los productos tangibles de la empresa.
                      
                .row.align-items-center.justify-content-center
                  .col-lg-8.col-12
                    p.mb-4.ms-2 <b>Ejemplo</b>
                    p Claudia va a un supermercado y adquiere una bebida para su almuerzo. 
                    p.mb-lg-0.mb-3 En este caso, ella es consumidora, porque está utilizando para su propio consumo un bien tangible.
                  .col-lg-4.col-6
                    img(src='@/assets/curso/tema2/img10.svg')

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Segmentación

    p.mb-5 La segmentación es un proceso que está ligado a los clientes. Segmentar es el proceso de dividir un mercado en grupos homogéneos (similares entre sí) con la condición de ser heterogéneos (distintos) unos de otros. 
    .bloque-texto-g.color-secundario.p-lg-5.py-lg-4.p-sm-5.p-2.mb-4(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img11.png')})`}"
          )
          .bloque-texto-g__texto.px-lg-5.py-lg-4.p-3
            p.mb-0 Las empresas orientadas al cliente y que entienden que los clientes tienen características diferentes, implementan procesos de segmentación muy estructurados. Una vez surtido, el proceso de segmentación, se establecen los segmentos o grupos de clientes a los cuales la empresa orientará sus esfuerzos de mercadeo.
    
    p.mb-5 Teniendo claro qué es la segmentación, a continuación, se listan algunas razones del porqué las empresas deberían segmentar.
    
    .titulo-sexto.color-acento-contenido
      p.titulo <b>Figura 3.</b> <i>Razones para segmentar</i> 
    .row.align-items-end.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-6.col-12.mb-lg-0.mb-3
        .tarjeta-avatar-b.mb-0.align-items-center.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9; height: 100%; border-radius:20px")
            .p-4.mb-0 Permite focalizar los esfuerzos de mercadeo de una manera óptima, es decir, permite hacer campañas diferenciadas según las necesidades de cada segmento.
        .tarjeta-avatar-b.mb-0.align-items-center.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
          .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9; height: 100%; border-radius:20px")
            .p-4.mb-0 Organiza los procesos comerciales acordes con el tipo de cliente, lo que genera mayor asertividad en los procesos comerciales.
        .tarjeta-avatar-b.mb-0.align-items-center.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img15.svg' alt='AvatarTop')
          .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9; height: 100%; border-radius:20px")
            .p-4.mb-0 Afianza las relaciones con los clientes, ya que los modelos de servicio al cliente se definen con base en la segmentación.
        .tarjeta-avatar-b.mb-0.align-items-center.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
          .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9; height: 100%; border-radius:20px")
            .p-4.mb-0 Posibilita la creación de productos enfocados en las necesidades propias de cada grupo de clientes.
        .tarjeta-avatar-b.mb-0.align-items-center.mb-0
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
          .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9; height: 100%; border-radius:20px")
            .p-4.mb-0 Un proceso de segmentación bien realizado, definirá cuáles son los criterios para prospectar, es decir para seleccionar sus posibles clientes.
      .col-lg-6.col-8
        img(src='@/assets/curso/tema2/img12.png')
    
    p.mb-4 Ahora se detalla el ejemplo de cómo una empresa define sus segmentos de mercado y a partir de esto, aplica sus estrategias comerciales y de mercadeo. En este caso, se tomó a Empresas Públicas de Medellín (EPM) como referente para mostrar el concepto de segmentos.
    
    .titulo-sexto.color-acento-contenido
      p.titulo <b>Figura 4.</b> <i> Ejemplo, variables de segmentación para EPM</i>
    .row.justify-content-center.mb-1(data-aos="fade-left")
      .col-lg-3.col-12.d-flex.mb-lg-0.mb-5
        .tarjeta-avatar.w-100
          img(style="width: 164px;top:-25px" src="@/assets/curso/tema2/img18.svg")   
          .tarjeta.p-4.py-3.w-100(style="background:#e1eefe")
            br
            h4.text-center Hogares
            p.mb-0 Clientes rurales y clientes estratos 1 al 6 ubicados en Antioquia.
      .col-lg-3.col-12.d-flex.mb-lg-0.mb-5
        .tarjeta-avatar.w-100
          img(style="width: 164px;top:-25px" src="@/assets/curso/tema2/img19.svg")   
          .tarjeta.p-4.py-3.w-100(style="background:#b9d6fc")
            br
            h4.text-center Empresas
            p.mb-0 Microempresa, pequeña empresa y mediana empresa, ubicadas en Antioquia.
      .col-lg-3.col-12.d-flex.mb-lg-0.mb-5
        .tarjeta-avatar.w-100
          img(style="width: 164px;top:-25px" src="@/assets/curso/tema2/img20.svg")   
          .tarjeta.p-4.py-3.w-100(style="background:#e1eefe")
            br
            h4.text-center Grandes clientes
            p.mb-0 Corporativos, multilatinas, multinacionales con presencia en Antioquia.
      .col-lg-3.col-12.d-flex
        .tarjeta-avatar.w-100
          img(style="width: 164px;top:-25px" src="@/assets/curso/tema2/img21.svg")   
          .tarjeta.p-4.py-3.w-100(style="background:#b9d6fc")
            br
            h4.text-center Gobierno
            p.mb-0 Entidades públicas con presencia en Antioquia.
    figcaption.mb-4 Nota. Elaborada con base en la información disponible en: http://www.epm.com.co/site/

    

    .d-none.d-lg-block
      br
      br
    .fondo1.p-0 
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
        .col-lg-4.col-8.position-relative         
          img.mb-0.d-none.d-lg-block(src="@/assets/curso/tema2/img22.png") 
          .p-2.position-absolute.d-none.d-lg-block(style="bottom:0px")              
            img.mb-0( src="@/assets/curso/tema2/img23.png")   
          .d-block.d-lg-none
            img.mb-3( src="@/assets/curso/tema2/img23.png")   
        .col-lg-8.col-12
          p.mb-0 Los procesos de segmentación son realizados usualmente en las áreas de mercadeo de las empresas, y aun teniendo claro que realizar esta actividad no es responsabilidad de un encuestador, sí es importante que las personas que trabajan con encuestas, conozcan cuáles son las variables (características) que se tienen en cuenta para definir y caracterizar los segmentos de la empresa. El siguiente interactivo muestra las variables de segmentación, las cuales son complementarias y no excluyentes.
    
    .p-lg-4.px-lg-5.p-2.mb-5(style="background-color: #ffe2d9; border-radius:10px" data-aos="fade-left")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.align-items-center.justify-content-center.p-3(titulo="Variables<br>demográficas")                               
          .col-lg-7.col-12               
            p Hacen alusión a cómo se caracteriza la población a partir de criterios fácilmente medibles. 
            p.mb-lg-0.mb-3 Los principales aspectos que se asocian a este tipo de segmentación son: la edad, el sexo, el nivel de ingresos, el estado civil, la ocupación y el nivel de educación.          
          .col-lg-4.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema2/img24.svg') 
        .row.align-items-center.justify-content-center.p-3(titulo="Variables<br>geográficas")                               
          .col-lg-7.col-12                           
            p.mb-lg-0.mb-3 Identifican dónde se encuentran los clientes, se suelen relacionar: el país, la región, el tamaño de la ciudad e incluso la densidad (cantidad de población que habita sobre un mismo espacio).
          .col-lg-4.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema2/img25.png') 
        .row.align-items-center.justify-content-center.p-3(titulo="Variables<br>psicológicas")                               
          .col-lg-7.col-12                           
            p.mb-lg-0.mb-3 Hacen referencia al comportamiento humano, los aspectos que se consideran acá son: motivaciones, personalidad, percepciones, intereses.
          .col-lg-4.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema2/img26.png') 
        .row.align-items-center.justify-content-center.p-3(titulo="Variables<br>conductuales")                               
          .col-lg-7.col-12                           
            p.mb-lg-0.mb-3 Son las conductas propias respecto a los bienes y servicios que satisfacen la necesidad, específicamente se analiza: la ocasión de uso (para qué), la lealtad o no a la marca (es decir, si se tiene preferencia por una marca u otra), los beneficios esperados (cuáles son las expectativas que se esperan sean resueltas).
          .col-lg-4.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema2/img27.png') 
        .row.align-items-center.justify-content-center.p-3(titulo="Variables<br>socioculturales")                               
          .col-lg-7.col-12                           
            p.mb-lg-0.mb-3 Son los factores que se han arraigado a la persona a lo largo de su vida, se consideran: la cultura, la religión, la clase social y el ciclo de vida familiar.
          .col-lg-4.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema2/img28.png') 
    
    .px-lg-5.py-lg-4.p-3(style="background-color: #ffeed9" data-aos="fade-right")
      .row.align-items-center.justify-content-center
        .col-lg-9.col-12
          p.mb-lg-0.mb-3 Como se vio en la segmentación anterior, la variable geográfica hace relación a la ubicación de las personas en un contexto espacial, es decir, poder conocer donde están asentadas. Datos como región del mundo, país, ciudad, barrio, manzana, entre otros, por lo general son usadas para conocer dónde está el conjunto de personas que son de interés en una investigación de mercados, por ello, la variable geográfica tiene tanta relevancia, específicamente cuando se van a realizar encuestas presenciales.  
        .col-lg-2.col-6
          img.mb-0(src='@/assets/curso/tema2/img29.svg') 
        .col-1.d-none.d-lg-block    
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Ubicación geográfica

    .fondo2.p-3.mb-5(data-aos="fade-left")
      .row.align-items-center.justify-content-center
        .col-lg-8.col-12
          p A partir de la variable geográfica, surge el concepto de georreferenciación (Martínez y Arranza, 2012) que se define como un proceso que permite determinar la posición de un elemento en un sistema de coordenadas espaciales diferente al que se encuentra. En términos más coloquiales es entendida como una forma técnica de conocer a partir de un mapa dónde está ubicado un grupo o persona de interés. 
          p.mb-lg-0.mb-3 Para que la georreferenciación sea una realidad debe ligarse a los conceptos de sistema de coordenadas y coordenadas. 
        .col-lg-4.col-8
          img.mb-0(src='@/assets/curso/tema2/img30.svg')  

    .fondo3.p-3
      .p-0.position-relative.mb-5(data-aos="fade-right")
        div.d-flex.align-items-center.mb-0.position-relative(style="z-index:1000 !important")    
          div.py-2.px-3.pe-5(style="background-color:#ff3c00")  
            h4.mb-0.text-white La georreferenciación
          div.p-0.position-relative   
            img.mb-0.position-relative(style="width:66px; left:-35px" src="@/assets/curso/tema1/img17.svg")       

      .row.justify-content-center.mb-5
        .col-lg-6.col-12.d-flex.mb-lg-0.mb-5
          .sombra.p-4(style="background-color:#ffe2d9")
            p.mb-4 <b>Sistema de coordenadas</b>
            p.mb-4 Hace relación a un sistema que codifica cada una de las posiciones sobre la superficie, de tal modo que se asigne un punto específico a cada objeto.
            .row.justify-content-center
              .col-lg-6.col-8
                img.mb-0(src='@/assets/curso/tema2/img31.svg')  
        .col-lg-6.col-12.d-flex
          .sombra.p-4(style="background-color:#eaf3fe")
            p.mb-4 <b>Coordenadas</b>
            p.mb-4 Hace alusión a la representación específica de la ubicación a partir de la latitud y la longitud, una medida en la tierra.
            .row.justify-content-center
              .col-lg-10.col-8
                img.mb-0(src='@/assets/curso/tema2/img32.svg')  

      br
      br
      .row.justify-content-center.mb-5
        .col-lg-8.col-12
          p.mb-0 Para que sea más claro, se puede interpretar que el sistema tiene almacenadas todas las coordenadas, es decir, el sistema es el todo y la coordenada es cada una de las partes que integran el sistema. 
      br
      br
    .row.justify-content-center.mb-5
      .col-lg-7.col-12
        p La georreferenciación, desde la perspectiva de los encuestadores puede tener dos alcances: 1) cuando la empresa le indica las coordenadas para que tenga claridad en donde debe realizar las encuestas o 2) donde con fines de validación o recepción de datos, se solicita al encuestador que cargue la coordenada en algún tipo de dispositivo, en este segundo caso, los encuestadores deben capturar las coordenadas geográficas del objeto de interés (establecimiento o predio).
        .p-3.mb-lg-0.mb-3(style="background-color: #cde2fd")
          p.mb-0 De acuerdo con lo visto en este capítulo, se observa cómo los clientes son usualmente el foco de las investigaciones de mercado y por ende, en la aplicación de encuestas, por lo que se requiere que un encuestador tenga presente que los clientes son la razón de ser de la empresa y que no todos son iguales. Es aquí donde surge la segmentación como un concepto clave para entender esta diferencia y poder clasificarlos para tener mayor enfoque. 
      .col-lg-5.col-8
        img.mb-0(src='@/assets/curso/tema2/img33.png')  

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
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
