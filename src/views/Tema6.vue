<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 La encuesta

    .fondo1.p-0.mb-5
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-8.col-12.p-lg-4.p-2
          p Desde el punto de vista técnico, todas las investigaciones de mercado tienen tres componentes: la metodología, que define cómo se hará la investigación y cómo se espera que se muestran los resultados; la técnica que es aquella que define cómo se recopiló la información; y el instrumento que es aquella herramienta que formaliza/ documenta a través de qué elemento se hará el levantamiento de la información. 
          p.mb-lg-0.mb-3 En este sentido, la encuesta (survey en inglés) es por excelencia la técnica de investigación más utilizada dentro de la metodología cuantitativa, ya que permite recopilar de manera específica a través de preguntas gran cantidad de información. El siguiente esquema, permite mostrar más clara la relación entre los conceptos referenciados previamente:
        .col-lg-4.col-8
          img.mb-0(src='@/assets/curso/tema6/img01.svg') 
          
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo <b>Figura 8</b> <i>Relación aplicada entre metodología, técnica e instrumento</i> 

    .d-none.d-lg-block(data-aos="fade-left")
      img.mb-5(src='@/assets/curso/tema6/img02.svg') 

    .d-lg-none.d-block(data-aos="fade-left")
      img.mb-5(src='@/assets/curso/tema6/img03.svg') 

    p.mb-5 No hay una regla única para referenciar cuáles son los campos (elementos) que debe tener un buen cuestionario, sin embargo, desde la experiencia se podría hacer alusión a ciertos componentes que deben estar presentes en la estructura de una encuesta.

    SlyderF.mb-5(columnas="col-12 col-lg-4" data-aos="fade-right")
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/tema6/img04.svg")   
        .tarjeta.p-4(style="background:#ffeed9")
          h4.text-center Encabezado:
          p.mb-0.text-center Hace relación a la información que referencia el título del estudio, la versión del cuestionario y el nombre de la firma de investigación de mercados.
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/tema6/img05.svg")   
        .tarjeta.p-4(style="background:#ffeed9")
          h4.text-center Presentación y solicitud de colaboración: 
          p.mb-0.text-center este es un párrafo en donde se saluda, se hace la presentación tanto de la empresa que realiza el estudio como del encuestador, se da a conocer al encuestado cuál es el objetivo del estudio, se le pregunta si está de acuerdo en participar y se propende por dar un tiempo estimado de duración de la encuesta.
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/tema6/img06.svg")   
        .tarjeta.p-4(style="background:#ffeed9")
          h4.text-center Validación del perfil del encuestado
          p.mb-0.text-center se denomina pregunta filtro, y tiene por fin validar que la persona a la cual se le va a aplicar el cuestionario si está dentro del público objetivo definido en la planeación de la investigación.
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/tema6/img07.svg")   
        .tarjeta.p-4(style="background:#ffeed9")
          h4.text-center Preguntas:
          p.mb-0.text-center Es denominado también el “cuerpo” de la encuesta, comprende todas las preguntas que se realizan al encuestado.
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/tema6/img08.svg")   
        .tarjeta.p-4(style="background:#ffeed9")
          h4.text-center Datos del encuestado:
          p.mb-0.text-center En Colombia, en caso que se vaya a solicitar los datos del encuestado, antes de pedirlos, se debe solicitar la autorización para el tratamiento de datos de acuerdo con la Ley 1580. En caso de que el encuestado decida dar esa información, se debe garantizar que al menos haya un dato que permita segmentarlo, y que ojalá sea de índole geográfica y/o demográfica.
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/tema6/img09.svg")   
        .tarjeta.p-4(style="background:#ffeed9")
          h4.text-center Datos del encuestador o del canal por el cual se realiza: 
          p.mb-0.text-center con fines administrativos, las encuestas que son realizadas por encuestadores siempre deben indicar el código o nombre y apellido de la persona que realizó la encuesta, agregando la fecha y la hora, esto permitirá tener control y realizar posteriores auditorías. Cuando la encuesta se realiza de forma digital deberá garantizarse también que quede la trazabilidad del canal a través del cual se realizó.
      .tarjeta-avatar
        img(style="width: 169px;top:-28px" src="@/assets/curso/tema6/img10.svg")   
        .tarjeta.p-4(style="background:#ffeed9")
          h4.text-center Despedida y agradecimiento: 
          p.mb-0.text-center El protocolo es un tema relevante para un encuestador, es por ello que agradecer la participación del encuestado en la investigación, representa el cierre formal de la aplicación de la encuesta.

    .px-lg-5.py-lg-4.p-3.mb-5(style="background-color: #ffeed9" data-aos="fade-left")
      .row.align-items-center.justify-content-center
        .col-lg-10.col-12
          p.mb-lg-0.mb-3 Cabe mencionar, que una buena encuesta debe cumplir dos características fundamentales la fiabilidad: se evalúa si este, en igualdad de condiciones proporciona iguales resultados, es decir, es preciso, o sea, se entiende lo mismo cada vez que se aplica, y la validez, la cual consiste en que mida lo que tiene que medir.
        .col-lg-2.col-6
          img.mb-0(src='@/assets/curso/tema6/img11.svg') 

    div.d-flex.align-items-center.mb-0.position-relative(style="z-index:1000 !important")    
          div.py-2.px-3.pe-5(style="background-color:#ff3c00")  
            h4.mb-0.text-white La encuesta y sus elementos
          div.p-0.position-relative   
            img.mb-0.position-relative(style="width:66px; left:-35px" src="@/assets/curso/tema1/img17.svg")       

    p.mb-5 Para mayor profundización, se sugiere visualizar este contenido en el que se da un contexto de esta técnica de investigación y la estructura de su cuestionario con ejemplos que permiten comprender mejor esta temática.
    
    figure.mb-0
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Herramientas para encuestas presenciales

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Herramientas para encuestas virtuales

    Separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Tipos de preguntas

    Separador
    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4 Realización de encuestas
    
</template>

<script>
export default {
  name: 'Tema6',
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
