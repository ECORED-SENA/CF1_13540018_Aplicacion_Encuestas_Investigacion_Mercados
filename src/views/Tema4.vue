<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ofimática básica para investigaciones de mercado

    .row.justify-content-center.align-items-center.py-0.mb-3(data-aos="fade-right")
      .col-lg-12.col-12
        .bloque-texto-g.color-primario.p-lg-5.py-lg-4.p-3.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}"
          )
          .bloque-texto-g__texto.px-lg-5.py-lg-4.p-3
            p.mb-0 La ofimática viene de “ofi”, oficina, y “mática”, informática, por lo que representa el conjunto de todas las herramientas y aplicaciones informáticas que son utilizadas en el contexto empresarial con el fin de mejorar la productividad de las personas, a través de un uso más eficiente del tiempo; propendiendo a minimizar los errores derivados de la interacción humana, dado que este tipo de herramientas tienen incorporados algunos parámetros para apoyar la realización eficiente de la actividad que se está ejecutando. 

    .px-lg-5.py-lg-4.p-3(style="background-color: #ffeed9" data-aos="fade-left")
      .row.align-items-center.justify-content-center
        .col-lg-10.col-12
          p.mb-lg-0.mb-3 Desde esta perspectiva, el manejo de este tipo de herramienta se convierte en prerrequisito en algunos casos o valor agregado en otros para el desempeño de una ocupación. Ahora bien, teniendo en cuenta el enfoque de este componente, se clasificaron las herramientas para encuestas presenciales y telefónicas y para encuestas virtuales.
        .col-sm-3.col-lg-2.col-6.px-lg-5.px-2
          img.mb-0(src='@/assets/curso/tema4/img02.svg') 
        
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Herramientas ofimáticas para encuestas presenciales y telefónicas

    p.mb-5 Cabe mencionar entonces, que cuando se menciona la ofimática, se considera tanto el componente de <i>hardware</i> (equipos), como <i>software</i> (programas o aplicaciones), cuya usabilidad está orientada a las actividades propias del entorno productivo. A continuación, se mostrarán cuáles son las principales herramientas ofimáticas que son susceptibles de uso en el contexto de la investigación de mercados presencial, a través de la siguiente agrupación:
    .row.justify-content-center.p-lg-4.p-2.mb-5(style="background-color:#eaf3fe" data-aos="fade-right")
      .col-sm-4.col-lg-2.col-8
        img.mb-lg-0.mb-3(src='@/assets/curso/tema4/img03.svg') 
      .col-lg-10.col-12
        p.mb-4 <b>Herramientas ofimáticas para la aplicación de encuestas en canales telefónicos</b>
        p.mb-4 Las encuestas telefónicas son aquellas que se realizan a través de una llamada que es generada desde un <i>call center</i> (centro de llamadas). Para realizar esta actividad los encuestadores telefónicos, suelen contar con algunos elementos generales.
        .p-lg-4.p-3(style="background-color:#ffeed9")
          p <b>Elementos generales</b>
          p.mb-0 El componente de <i>hardware</i> (equipos físicos) es fundamental para poder disponer del puesto de trabajo en un <i>call center</i>; en este sentido, se debe garantizar que el encuestador cuente con computador/ monitor, procesador, <i>call center</i>, teléfono, diadema o dispositivos manos libres. Asociado al <i>software</i> (programas o aplicaciones), las funcionalidades básicas que se deben cumplir para realizar encuestas a través de medio telefónico son: enrutamiento de llamadas, distribución de llamadas a los agentes en la operación, marcación predictiva y automática, respuesta de voz interactiva, monitoreo, gestión, administración de contactos y grabación de interacciones con clientes.

    .row.justify-content-center.p-lg-4.p-2.mb-5(style="background-color:#b9d6fc" data-aos="fade-left")
      .col-sm-4.col-lg-2.col-8
        img.mb-lg-0.mb-3(src='@/assets/curso/tema4/img04.svg') 
      .col-lg-10.col-12
        p.mb-4 <b>Herramientas para el desarrollo de la investigación de mercados</b>
        p Una investigación de mercados tiene varios pasos que se deben surtir. A nivel transversal, se trabajan con las herramientas de Office para generar los documentos; en este sentido, las encuestas se diseñan sobre procesadores de texto, ejemplo: Word. 
        p Luego, la información se procesa en paquetes estadísticos tipo IBM SPSS, RStudio, SAS Business Intelligence o en Tableau Server, MATLAB Software, si se cuenta con los recursos (en inversión y conocimiento); sin embargo, muchas empresas que no cuentan con el dinero para adquirir estas herramientas suelen utilizar Excel para procesar la información y realizar análisis estadísticos básicos. 
        p.mb-0 En lo asociado al informe de investigación tradicionalmente se elaboran en aplicaciones para presentación de informes, como PowerPoint.
    
    .row.justify-content-center.p-lg-4.p-2.mb-0(style="background-color:#ffeed9" data-aos="fade-right")
      .col-sm-4.col-lg-2.col-8
        img.mb-lg-0.mb-3(src='@/assets/curso/tema4/img05.svg') 
      .col-lg-10.col-12
        p.mb-4 <b>Herramientas ofimáticas para la aplicación de encuestas presenciales</b>
        p.mb-4 Las encuestas presenciales pueden realizarse de forma manual, es decir, basadas en encuestas impresas. También, pueden realizarse de forma más productiva incorporando algunas herramientas informáticas. Se detallan dos de las herramientas tecnológicas usadas con mayor frecuencia en este tipo de encuestas: dispositivos móviles y aplicaciones con sistemas de información geográfica.
        .p-lg-4.p-3.mb-4(style="background-color:#ffd7a6")
          p <b>Aplicaciones con sistemas de información geográfica</b>
          p.mb-0 Los Sistemas de Información Geográfica, llamados SIG, posibilitan relacionar los datos con una ubicación específica, lo que se convierte en una gran herramienta para los encuestadores, ya que, en caso de contar con aplicaciones de SIG, pueden acceder fácilmente a la consulta de la ubicación de los lugares que requieren visitar o, en otros casos, relacionar cuál es la ubicación exacta de un predio o establecimiento.
        .p-lg-4.p-3(style="background-color:#ffe2d9")
          p <b>Dispositivos móviles de captura</b>
          p.mb-4 Los dispositivos móviles de captura más conocidos como DMC son computadores de bolsillo que permiten capturar, almacenar, organizar y, en un nivel básico, procesar la información que se recopila en las investigaciones de mercado, permitiendo tener almacenada la información en tiempo real y generar integralidad en su uso. 
          p Las principales ventajas de un DMC son: 
          ul.lista-ul--color.mb-4
            li.mb-1         
              i.fas.fa-check
              .p-0 Captura de datos instantánea en el lugar de la aplicación de la técnica de investigación.
            li.mb-1         
              i.fas.fa-check
              .p-0 Evita reprocesos, ya que permite validar la entrada de los datos.
            li.mb-1         
              i.fas.fa-check
              .p-0 Optimiza los tiempos para el procesamiento de la información dado que permite extraer al finalizar el trabajo de campo la base de datos con la información, lo que evita tener que digitar los datos recopilados.
            li.mb-0    
              i.fas.fa-check
              .p-0 Facilita la supervisión de los encuestadores porque muestra en tiempo real la gestión que cada uno de ellos está realizando.

          p Como desventajas a factores a considerar están: 

          ul.lista-ul--color
            li.mb-1         
              i.fas.fa-check
              .p-0 Los costos que puede representar para una compañía aprovisionarse de este tipo de equipos.
            li.mb-1         
              i.fas.fa-check
              .p-0 El nivel de capacitación especializado que requiere realizarle a los encuestadores.
            li.mb-1         
              i.fas.fa-check
              .p-0 Riesgo de pérdida del equipo por robo o mal uso.
            li.mb-0         
              i.fas.fa-check
              .p-0 Necesidad de contar con soporte informático ante fallos o dificultades con la terminal.
    
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Herramientas ofimáticas para encuestas virtuales

    .fondo1.p-lg-0.p-2.mb-5
      .row.justify-content-center.align-items-center.position-relative(data-aos="fade-left")
        .col-lg-8.col-12
          p.mb-0 Cuando las encuestas se realizan de forma virtual u <i>online</i> se está haciendo relación a la gestión de estas a través de medios digitales, es decir, utilizando las bondades del internet. Con este panorama, el componente de <i>hardware</i> se limita a contar con un dispositivo (computador, tableta o similar) y el foco se centra en el <i>software</i>, y desde este panorama, existen muchas aplicaciones en el mercado para realizar las encuestas, algunas de las más utilizadas en el mercado son las siguientes:
        .col-lg-4.col-8
          img.mb-lg-0.mb-3(src='@/assets/curso/tema4/img06.svg') 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-3.col-12.d-flex
        .p-3.w-100.mb-lg-0.mb-3(style="background-color:#e1eefe; border-radius:21px")
          img.mb-3(src='@/assets/curso/tema4/img07.png') 
          h4.mb-4.text-center SurveyMonkey
          p.mb-0.text-center Es una de las plataformas más utilizadas. Permite realizar encuestas personalizadas y que el cuestionario pueda ser enviado directamente a los clientes desde la aplicación o a través de un <i>call center</i>.
      .col-lg-3.col-12.d-flex
        .p-3.w-100.mb-lg-0.mb-3(style="background-color:#e1eefe; border-radius:21px")
          img.mb-3(src='@/assets/curso/tema4/img08.png') 
          h4.mb-4.text-center Hubspot
          p.mb-0.text-center Es uno de los Sistemas de Administración con los Clientes (llamados por sus siglas en Inglés CRM) con más atributos. Eso ha llevado a que desarrollen un <i>software</i> llamado “<i>feedback</i> de clientes” que tiene por fin el diseño y envío de encuestas.
      .col-lg-3.col-12.d-flex
        .p-3.w-100.mb-lg-0.mb-3(style="background-color:#e1eefe; border-radius:21px")
          img.mb-3(src='@/assets/curso/tema4/img09.png') 
          h4.mb-4.text-center SurveySparrow 
          p.mb-0.text-center Se define como una plataforma de gestión de la experiencia omnicanal, por lo que tienen habilitado formularios clásicos, encuestas por chat y evaluaciones preconfiguradas de satisfacción de clientes.
      .col-lg-3.col-12.d-flex
        .p-3.w-100.mb-lg-0.mb-3(style="background-color:#e1eefe; border-radius:21px")
          img.mb-3(src='@/assets/curso/tema4/img10.png') 
          h4.mb-4.text-center QuestionPro
          p.mb-0.text-center Permite crear formularios personalizados e incluso exportar los resultados en <i>software</i> estadísticos.

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.col-10
        img.mb-lg-0.mb-3(src='@/assets/curso/tema4/img11.png') 
      .col-lg-7.col-12
        .p-3.py-4.mb-4(style="background-color:#ffe3da") Es relevante clarificar que acá solo se mencionaron algunas, en el medio hay disponibles numerosas herramientas para realizar las encuestas, por lo que la elección de cuál utilizar, es una decisión que dependerá del presupuesto y de las competencias técnicas o experiencia de quien va a interactuar con la plataforma.
        p.mb-0 Con todo lo anterior, se hace evidente que, si bien es posible realizar encuestas de forma manual, la tecnología hoy en día se convierte en un gran habilitador para gestionar de manera más eficiente el tiempo y los recursos, por lo que para un encuestador conocer sobre la existencia y funcionamiento de estas herramientas será un factor diferencial positivo en el mercado laboral.
</template>

<script>
export default {
  name: 'Tema4',
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
