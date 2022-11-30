<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa: protección de datos en Colombia

    .d-none.d-xl-block
      br
      br
      br
      br
      
    .d-block.d-lg-none(data-aos="fade-right")
      .row.justify-content-center.mb-3
        .col-8
          img.mb-0(src='@/assets/curso/tema3/img01.png')      
    .p-0.position-relative.px-2.mb-5(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-2.d-flex
        .col-lg-3.d-flex.p-0.ps-5
          .p-0.w-100(style="background-color:#ffeeda")
        .col-lg-7.col-12.d-flex.py-4(style="background-color:#ffeeda")
          .p-0
            p En la mayoría de los países del mundo, la gestión sobre la información de las personas es un tema fundamental, que incluso ha cobrado más relevancia con el auge de la digitalización y por el creciente uso de la Tecnologías de la Información y las Comunicaciones (TIC). Es allí donde adquiere relevancia el concepto de protección de datos, entendido como el derecho que tiene un ciudadano a que a sus datos se les dé un buen uso.
            p.mb-0 Dado que la legislación es propia de cada país, ya que cada nación establece su marco de actuación legal para el tema, el manejo de los datos en Colombia, se regula mediante el derecho de Habeas Data que posibilita a las personas que puedan actualizar, autorizar, conocer, y rectificar toda la información que tengan las distintas entidades y bases de datos del territorio nacional. Nació como parte importante de los artículos 15 y 20 de la Constitución Política de Colombia de 1991 y, posteriormente, fue desarrollado a través de leyes y decretos complementarios. 

      .row.justify-content-right.position-absolute.w-100.d-none.d-lg-block(style="bottom: 0px")
        .col-lg-5
          img.mb-0(src='@/assets/curso/tema3/img01.png')  

    p.mb-5 A continuación, se muestra la base normativa para la aplicación de la protección de datos en Colombia, lo cual no solo es un tema de interés general, sino que, además, es una temática delicada porque el no cumplimiento de estas leyes/ decretos puede ocasionar grandes multas para las entidades.

    .row.justify-content-end.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo <b>Figura 5.</b> <i>Marco normativo de protección de datos en Colombia</i> 
        .row.justify-content-center.align-items-center
          .col-lg-5.col-12
            .tarjeta-avatar-b.mb-4(@click="figura1 = 1")
              .tarjeta-avatar-b__img
                img(style="width:114px !important" src='@/assets/curso/tema3/img02.svg')
              .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9;  border-radius:20px")
                .p-3.mb-0 Artículos 15 y 20  de la Constitución Política de Colombia de 1991

            .tarjeta-avatar-b.mb-4(@click="figura1 = 2")
              .tarjeta-avatar-b__img
                img(style="width:114px !important" src='@/assets/curso/tema3/img02.svg')
              .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9;  border-radius:20px")
                .p-3.mb-0 Ley 1266 de 2008

            .tarjeta-avatar-b.mb-4(@click="figura1 = 3")
              .tarjeta-avatar-b__img
                img(style="width:114px !important" src='@/assets/curso/tema3/img02.svg')
              .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9;  border-radius:20px")
                .p-3.mb-0 Ley 1581 de 2012
            
            .tarjeta-avatar-b.mb-4(@click="figura1 = 4")
              .tarjeta-avatar-b__img
                img(style="width:114px !important" src='@/assets/curso/tema3/img02.svg')
              .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9;  border-radius:20px")
                .p-3.mb-0 Decreto 1377 de 2013

            .tarjeta-avatar-b.mb-lg-0.mb-3(@click="figura1 = 5")
              .tarjeta-avatar-b__img
                img(style="width:114px !important" src='@/assets/curso/tema3/img02.svg')
              .tarjeta.d-flex.align-items-center(style="background-color:#ffe2d9;  border-radius:20px")
                .p-3.mb-0 Ley 2157 de 2021
          .col-lg-7.col-12
            .px-lg-5.p-lg-4.p-4(style="background-color:#ffeeda; border-radius: 22px ")
              .row.justify-content-center.align-items-center               
                //.p-0.mb-3(v-if="figura1==1")
                .p-0.mb-3
                  p <b>Artículo 15</b>. Establece que todas las personas tienen derecho a su intimidad personal, familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. 
                  p De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas.
                  p <b>Artículo 20</b>. Define que se garantiza a toda persona la libertad de expresar y difundir su pensamiento y opiniones, la de informar y recibir información veraz e imparcial,  y la de fundar medios masivos de comunicación.
                //- .p-0.mb-3(v-if="figura1==2")
                //-   h1 DOS
                //- .p-0.mb-3(v-if="figura1==3")
                //-   h1 TRES
                //- .p-0.mb-3(v-if="figura1==4")
                //-   h1 CUATRO
                //- .p-0.mb-3(v-if="figura1==5")
                //-   h1 CINCO
                
                .col-8
                  img.mb-0(src='@/assets/curso/tema3/img03.svg')  

    .row.justify-content-center.align-items-center.mb-5(style="background-color:#e1eefe" data-aos="fade-right")
      .col-lg-2.col-4.p-lg-5.py-lg-4.p-2
        img.mb-lg-0.mb-3(src='@/assets/curso/tema3/img04.svg')  
      .col-lg-10.col-12
        p.mb-0 Antes de hacer referencia al objetivo de las leyes, es importante que una persona que interactúe con los clientes de una empresa comprenda los conceptos básicos asociados al tratamiento de datos personales, ya que entender la dimensión de cada concepto dará las bases necesarias para aplicar de manera correcta las leyes asociadas. A continuación, se resumen los principales términos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo <b>Figura 6.</b> <i>Conceptos básicos asociados a la Ley 1581 de 2012</i> 
    .p-0.mb-5(data-aos="fade-left")
      img.mb-0.d-none.d-lg-block(src='@/assets/curso/tema3/img05.svg')  
      ImagenInfografica.color-acento-botones.mb-0.d-block.d-lg-none.info1
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema3/img06.svg')                

        .tarjeta.p-3(style="background-color: #ffe2d9; width: 300px" x="77%" y="8%" numero=" ")
          p.mb-2 <b>Responsable del tratamiento</b>
          p.mb-0 Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el tratamiento de los datos.

        .tarjeta.p-3(style="background-color: #ffeed9; width: 300px" x="100%" y="50%" numero=" ")
          p.mb-2 <b>Titular</b>
          p.mb-0 Persona natural cuyos datos personales sean objeto de tratamiento.
        .tarjeta.p-3(style="background-color: #e1eefe; width: 300px" x="77%" y="92%" numero=" ")
          p.mb-2 <b>Tratamiento</b>
          p.mb-0 Persona natural cuyos datos personales sean objeto de tratamiento.
        .tarjeta.p-3(style="background-color: #b9cee6; width: 300px" x="23%" y="92%" numero=" ")
          p.mb-2 <b>Encargado del tratamiento</b>
          p.mb-0 Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el tratamiento de datos personales por cuenta del responsable del tratamiento.
        .tarjeta.p-3(style="background-color: #ffbba6; width: 300px" x="0%" y="50%" numero=" ")
          p.mb-2 <b>Dato personal</b>
          p.mb-0 Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.
        .tarjeta.p-3(style="background-color: #b9cee6; width: 300px" x="23%" y="8%" numero=" ")
          p.mb-2 <b>Autorización</b>
          p.mb-0 Consentimiento previo, expreso e informado del titular para llevar a cabo el tratamiento de datos personales.

    p.mb-5 En la siguiente situación, se expone el uso de estos conceptos.
    
    .fondo1.p-3.mb-5
      .row.justify-content-center.align-items-center.mb-5.my-lg-4.my-0.position-relative
        .col-lg-8.col-12
          p.mb-0 Unos encuestadores identifican que en la parte final de una encuesta, que están aplicando, se solicita permiso al encuestado para que la empresa que contrata la investigación utilice sus datos de contacto para llamar a ofrecerle un nuevo producto. 
      .row.justify-content-center.align-items-center.mb-0.my-lg-4.my-0(data-aos="fade-left")  
        .col-lg-10.col-12          
          ImagenInfografica.color-acento-botones.mb-0.info2
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/img07.svg')                

            .tarjeta.p-3(style="background-color: #eaf3fe; width: 261px" x="81.7%" y="9%" numero=" ")
              p.mb-0 <b>El tratamiento</b>, es el uso que se le daría a esta información, es decir, contactar al encuestado para suministrarle información sobre el portafolio de la empresa.

            .tarjeta.p-3(style="background-color: #eaf3fe; width: 261px" x="23.5%" y="24.5%" numero=" ")
              p.mb-0 <b>El Titular</b>, es el encuestado
              
            .tarjeta.p-3(style="background-color: #eaf3fe; width: 261px" x="15.5%" y="49.5%" numero=" ")
              p.mb-0 <b>Los datos personales</b>, son el nombre y número telefónico

            .tarjeta.p-3(style="background-color: #eaf3fe; width: 261px" x="56.5%" y="31%" numero=" ")
              p.mb-0 <b>La autorización</b>, es la posibilidad que tiene el titular (encuestado) de decirle a la agencia de investigación si permite o no que sea contactado con ese fin.

            .tarjeta.p-3(style="background-color: #eaf3fe; width: 261px" x="86%" y="50%" numero=" ")
              p.mb-0 <b>El responsable</b> del tratamiento, es la empresa que contrató la investigación y, en este caso, el encargado es la firma de investigación de mercados.

    p.mb-5 Teniendo estos conceptos claros, ahora sí, se explicará de una forma sencilla, cuál es el alcance de cada una de las principales leyes y decreto que fundamentan la protección de datos en Colombia.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")  
      .col-lg-8.col-12
        LineaTiempoD.mb-lg-0.mb-3
          .p-3.px-0(numero="1" titulo="Ley 1266 de 2008")
            p Se considera pionera en este tema, dado que establece los lineamientos para el manejo de la información reflejada en bases de datos personales, especialmente en lo orientado a los datos financieros, comerciales y crediticios. 
            p Esta ley es importante porque define las tipologías de datos: 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                p.mb-0 <b>Dato privado</b>: aquel que por su naturaleza íntima o reservada solo es relevante para el titular, por ejemplo: dirección de residencia, número telefónico fijo y número telefónico celular.
              li 
                i.lista-ul__vineta
                p.mb-0 <b>Dato semiprivado</b>:  es el que no tiene connotación íntima, ni pública, cuyo conocimiento puede interesar no solo a su titular sino a cierto sector o grupo de personas, tales como: datos financieros o datos crediticios
              li 
                i.lista-ul__vineta
                p.mb-0 <b>Datos públicos</b>: son accesibles a través de sentencias judiciales, boletines y registros oficiales, por ejemplo: profesión, calidad de comerciante o si la persona es servidora pública. 

            p.mb-0 Asimismo, la ley establece los derechos de los titulares de la información, los deberes de los operadores, las fuentes y los usuarios de la información. 

          .p-3.px-0(numero="2" titulo="Ley 1581 de 2012")
            p Es considerada la ley de leyes para el tratamiento de datos en el país, tanto para entidades públicas como para empresas privadas y comúnmente se denomina “Ley de Habeas Data General”.
            p.mb-0 Reconoce y protege el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos que sean susceptibles de tratamiento.
          .p-3.px-0(numero="3" titulo="Decreto 1377 de 2013")
            p Es el Decreto que reglamenta la Ley 1581 de 2012, en ella se define en el artículo 5°: 
            p “El responsable del tratamiento deberá adoptar procedimientos para solicitar, a más tardar en el momento de la recolección de sus datos, la autorización del titular para el tratamiento de los mismos e informarle los datos personales que serán recolectados así como todas las finalidades específicas del Tratamiento para las cuales se obtiene el consentimiento”.
            p.mb-0 Acá es muy importante precisar que lo anterior, implica que los datos de la persona no quedan inscritos asociados a una marca o empresa sino a un fin determinado. Ejemplo: si la persona autorizó que los datos fueran utilizados por la Empresa Mati Shoes para enviar notificaciones de tipo legal, la empresa no puede enviar información comercial a dicho titular, por lo que las empresas deben ser muy cuidadosas en referenciar claramente cuál es la finalidad con la que la persona autorizó que sus datos fueren tratados.

          .p-3.px-0(numero="4" titulo="Ley 2157 de 2021")
            p.mb-0 También conocida como la ley de cuenta nueva y modificó la Ley 1266 de 2008. Tiene por objetivo otorgar una serie de beneficios a las personas que por diversas razones incumplieron el pago de sus obligaciones, creando posibilidades para organizar su historial crediticio, bajo el condicional que se pongan al día con sus obligaciones; ello implica que las personas que se acojan y cumplan con los pagos saldrán de las bases de datos negativas de las centrales de riesgo. 

      .col-lg-4.col-8
        img(src='@/assets/curso/tema3/img08.png')  

    p.mb-5 La Ley 1581 de 2012, además, pone de manifiesto unos principios que deben ser conocidos e implementados por las empresas, en el marco de su aplicación de la ley de protección de datos, estos son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo <b>Figura 7.</b> <i>Principios en el tratamiento y protección de datos.</i>

    TabsA.color-acento-contenido.mb-5(data-aos="fade-left")    
      .tarjeta.p-lg-5.p-3(style="background-color:#ffeed9" titulo="Principio de confidencialidad")
        h4.mb-4 Principio de confidencialidad
        p.mb-0 Todas las personas que intervengan en el tratamiento de datos personales están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el tratamiento. También da lineamientos sobre cómo deben ser tratados especialmente los datos de niños, niñas y adolescentes.
      .tarjeta.p-lg-5.p-3(style="background-color:#ffeed9" titulo="Principio de seguridad")
        h4.mb-4 Principio de seguridad
        p.mb-0 La información sujeta a tratamiento por el responsable del tratamiento o encargado del tratamiento, se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros.
      .tarjeta.p-lg-5.p-3(style="background-color:#ffeed9" titulo="Principio de acceso y<br>circulación restringida")
        h4.mb-4 Principio de acceso y  circulación restringida
        p.mb-0 El tratamiento se sujeta a los límites que se derivan de la naturaleza de los datos personales, de las disposiciones de la Ley 1581 y de la Constitución de 1991, por ello, el tratamiento solo podrá hacerse por personas autorizadas por el titular y/o por las personas previstas en dicha ley.
      .tarjeta.p-lg-5.p-3(style="background-color:#ffeed9" titulo="Principio de transparencia")
        h4.mb-4 Principio de transparencia
        p.mb-0 Se debe garantizar el derecho del titular a obtener por parte del responsable del tratamiento o del encargado del tratamiento, la información acerca de la existencia de datos que le conciernen.
      .tarjeta.p-lg-5.p-3(style="background-color:#ffeed9" titulo="Principio de legalidad")
        h4.mb-4 Principio de legalidad
        p.mb-0 El tratamiento debe realizarse con base en lo contemplado en la Ley 1581.
      .tarjeta.p-lg-5.p-3(style="background-color:#ffeed9" titulo="Principio de finalidad")
        h4.mb-4 Principio de finalidad
        p.mb-0 El tratamiento debe obedecer a una finalidad legítima acorde con lo establecido en la Constitución; además, el fin debe ser informado al titular.
      .tarjeta.p-lg-5.p-3(style="background-color:#ffeed9" titulo="Principio de libertad")
        h4.mb-4 Principio de libertad
        p.mb-0 El tratamiento solo puede ejercerse con el consentimiento, previo, expreso e informado del titular. Los datos personales no podrán ser obtenidos o divulgados sin previa autorización.
      .tarjeta.p-lg-5.p-3(style="background-color:#ffeed9" titulo="Principio de veracidad")
        h4.mb-4 Principio de veracidad
        p.mb-0 La información sujeta a tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible, por tanto, no es posible realizar tratamiento de datos parciales, incompletos, fraccionados o que induzcan al error.


    .d-block.d-lg-none(data-aos="fade-right")
      .row.justify-content-center.mb-3
        .col-8
          img.mb-0(src='@/assets/curso/tema3/img09.png')      
    .p-0.position-relative.px-2.mb-5(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-2.d-flex
        .col-lg-3.d-flex.p-0.ps-5
          .p-0.w-100
            .p-0(style="height:50% !important; background-color:#ffeeda")
            .p-0(style="height:50% !important; background-color:#ffffff")
        .col-lg-7.col-12.d-flex.p-0
          .p-0.w-100
            .p-0.mb-lg-0.mb-3.px-lg-0.p-3.d-flex.align-items-center(style="height:50% !important; background-color:#ffeeda") 
              p.mb-0 En Colombia, la entidad responsable de vigilar que las empresas e instituciones actúen correctamente respecto a los datos personales es la Superintendencia de Industria y Comercio (más conocida como SIC), quien tiene la facultad de adelantar investigaciones, solicitar información a las instituciones e impartir instrucciones sobre las medidas y procedimientos. 
            .p-0.mb-0.px-lg-0.p-4.d-flex.align-items-center(style="height:50% !important; background-color:#ffffff")           
              p.mb-0 Teniendo presente lo anterior, todas las anteriores leyes y decretos confirman porque el tema de protección de datos en Colombia es una temática que deben aplicar las empresas y conocer los colaboradores que tengan algún tipo de actividad con los datos de las personas. Razón por la cual, específicamente las firmas de investigación de mercado y los encuestadores en general, deben ser cuidadosos en la forma cómo recopilan los datos personales de los participantes en los diferentes estudios.
      .row.justify-content-right.position-absolute.w-100.d-none.d-lg-block(style="bottom: 0px")
        .col-lg-5
          img.mb-0(src='@/assets/curso/tema3/img09.png')  
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    figura1: 1,
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
