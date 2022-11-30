<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Seguridad y salud en el trabajo

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.col-12
        p El trabajo es uno de los aspectos de mayor relevancia para el ser humano ya que le permite desarrollar varias esferas de su ser, abarcando desde los componentes sociales (interacción con otros) hasta los económicos, ya que obtiene una remuneración para satisfacer sus necesidades y las de su familia. 
        p.mb-0 La relevancia de este tema, ha llevado a que se establezcan una serie de lineamientos y pautas que permitan que el trabajador pueda desempeñar su labor en las mejores condiciones de salud y seguridad. Es con base en eso que antes se hablaba de salud ocupacional y hoy en día se hace mención a la seguridad y salud en el trabajo. 
      .col-lg-5.col-10
        img.mb-0(src='@/assets/curso/tema5/img01.svg') 

    .bloque1.bloque-texto-g.color-secundario.p-lg-5.p-2.mb-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-4.p-2
            p.mb-0 La Seguridad y Salud en el Trabajo (conocido como SST por sus siglas), son todas las actividades que cualquier organización debe implementar y realizar para promocionar, prevenir y controlar, situaciones que puedan afectar o deteriorar tanto la salud mental como física de los colaboradores que trabajan en la organización. 

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-7.col-12
        p Es por ello, que, en la actualidad, todas las empresas deben establecer las políticas que vayan enfocadas en la SST de los trabajadores, no solo porque sea un requerimiento legal en Colombia, sino porque el velar y dar prioridad al bienestar de todos los empleados dentro una compañía, garantiza estándares altos de productividad y efectividad en todas las actividades que el trabajador realice.
        p.mb-0 En Colombia, el marco de actuación básico para los temas de seguridad y salud en el trabajo, los da la Resolución 0312 de 2019 en la cual se definen los estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo - SGSST aplicable tanto a los empleadores públicos como privados, estableciendo según el número de trabajadores de la empresa las acciones mínimas que deben diseñar e implementar, para dar cumplimiento a la Ley.
      .col-lg-5.col-10
        img.mb-0(src='@/assets/curso/tema5/img03.svg') 

    Separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Enfermedades profesionales con posible impacto en encuestadores

    .d-none.d-lg-block
      br
      br
    .fondo1.p-lg-0.p-3.mb-5
      .row.justify-content-center.align-items-center.mb-0.position-relative(data-aos="fade-right")         
        .col-lg-8.col-12
          p.mb-lg-0.mb-3 Consecuencia de la realización de una actividad repetitiva, como lo es realizar encuestas, un encuestador en caso de no realizar adecuadamente actividades de seguridad y salud en el trabajo se puede ver impactado por algunas enfermedades profesionales. Es por ello, que a continuación se mencionan algunas de ellas, que se pueden derivar de las funciones desempeñadas, así mismo, se enuncian algunos síntomas y la forma como se pueden prevenir. 
        .col-lg-4.col-8.position-relative         
          img.mb-0.d-none.d-lg-block(src="@/assets/curso/tema2/img22.png") 
          .p-0.position-absolute.d-none.d-lg-block(style="bottom:0px")              
            img.mb-0( src="@/assets/curso/tema5/img04.png")   
          .d-block.d-lg-none
            img.mb-0( src="@/assets/curso/tema5/img04.png")  

    TabsA.color-acento-contenido.mb-0(data-aos="fade-left")    
      .tarjeta.p-lg-4.p-3(style="background-color:#eaf3fe" titulo="Tenosinovitis de estiloides radial")
        h4.mb-4 Tenosinovitis de estiloides radial
        .row.justify-content-center.align-items-center
          .col-lg-7.col-12   
            p Esta enfermedad también conocida como tenosinovitis de Quervain, afecta principalmente las manos, produciendo una inflamación en los dedos pulgares. Se genera debido a los movimientos repetitivos que se realizan al momento de la digitación en equipos de cómputo. El síntoma principal es dolor permanente en los dedos y en la muñeca, adicionalmente se disminuye el movimiento en la falange.
            p.mb-lg-0.mb-3 Prevención: la forma de prevenir la enfermedad es realizando ejercicios de estiramiento tanto en las manos como en los dedos, con intervalos de 15 repeticiones por cada dedo.
          .col-lg-5.col-10       
            img.mb-0( src="@/assets/curso/tema5/img06.png")   

      .tarjeta.p-lg-4.p-3(style="background-color:#eaf3fe" titulo="Bursitis del olécranon")
        h4.mb-4 Bursitis del olécranon
        .row.justify-content-center.align-items-center
          .col-lg-7.col-12   
            p Más conocida como codo de Popeye. Son inflamaciones generadas en órganos de las manos y brazos denominados bursas, que también limitan la movilidad de las extremidades. Se generan debido a tiempos prolongados en actividades como digitación y actividades realizadas desde dispositivos móviles. 
            p.mb-lg-0.mb-3 Prevención: es importante mantener un plan de ejercicios diarios de estiramiento y masajes realizados ya sea en las manos o en los brazos que permitan distensiones en los músculos. De igual forma, se recomienda la implementación de recesos cortos durante las jornadas de trabajo que permitan realizar movimientos diferentes a los ejecutados durante la función laboral.     
          .col-lg-5.col-10       
            img.mb-0( src="@/assets/curso/tema5/img05.png")   
      .tarjeta.p-lg-4.p-3(style="background-color:#eaf3fe" titulo="Síndrome del túnel carpiano")
        h4.mb-4 Síndrome del túnel carpiano
        .row.justify-content-center.align-items-center
          .col-lg-7.col-12   
            p Es un padecimiento que generalmente causa dolor, entumecimiento e inflamación en zonas de las muñecas, las manos y los brazos. Tiene la particularidad de que, si no se cuenta con un tratamiento a tiempo, los síntomas podrían empeorar al punto de no mejorar. Generalmente, este síndrome se presenta debido a la realización de movimientos repetitivos por tiempos prolongados y frecuentes, como, por ejemplo: digitación tanto en dispositivos móviles como en computadoras, tocar algún instrumento musical, etc., afectando en su gran mayoría a personas entre los 30 y 60 años adicionalmente es más común en las mujeres que en los hombres. 
            p.mb-lg-0.mb-3 Prevención: se recomienda adoptar posturas correctas de las manos y las muñecas durante las jornadas de trabajo y al dormir. También, es muy importante asegurar puestos de trabajo ergonómicos que garanticen la correcta postura principalmente durante el desarrollo de las jornadas laborales, programar espacios de descanso no muy prolongados (2 a 3 min.) dentro del horario laboral que permitan descansar las muñecas, las manos y los brazos y, por último, implementar un plan de ejercicios diarios enfocados a ejercitación y relajación de los miembros que pueda afectar el síndrome.
          .col-lg-5.col-10       
            img.mb-0( src="@/assets/curso/tema5/img07.png")   
      .tarjeta.p-lg-4.p-3(style="background-color:#eaf3fe" titulo="Fatiga ocular digital ")
        h4.mb-4 Fatiga ocular digital 
        .row.justify-content-center.align-items-center
          .col-lg-12.col-12   
            p El padecimiento de la fatiga ocular digital o síndrome de la vista cansada no es más que el resultado del uso excesivo de la vista y los esfuerzos adicionales que se realizan con ella, como por ejemplo: pasar mucho tiempo leyendo o mirando la pantalla de un celular o computador o al conducir. Este tipo de actividades requieren que los ojos estén haciendo cambios constantes como pasar de vista de lejos a vista de cerca cuando se conduce, lo que hace que se genere esta fatiga visual. 
            p En la mayoría de los casos, este síndrome afecta con mayor agresividad a las personas que tienen antecedentes de mala visión, ya que al sumar esta condición con la exposición por tiempos prolongados a actividades que generan la fatiga visual, los síntomas son mucho más marcados y el no tratarse a tiempo puede generar la pérdida de la visión de manera más rápida. De acuerdo con lo anterior, es muy importante estar alertas a los síntomas de la fatiga visual digital, que en la mayoría de los casos se relacionan con hinchazón, irritación y enrojecimiento en los ojos, vista borrosa, dolor de cabeza y lagrimeo constante. 
            p.mb-0 Prevención: en cuanto a su prevención los expertos recomiendan en primera instancia adecuar puestos de trabajo ergonómicos, establecer tiempos de descanso dentro de la jornada de trabajo (2 a 3 min.) que permitan alejarse de la pantalla, realizar trabajos de visión cercana a una distancia no mayor a 50 cm, aumentar el número de parpadeos, mantener una buena postura, si se requiere la utilización de lentes, estos deben estar adaptados de acuerdo con la formulación médica y en lo posible realizar la lectura de textos impresos.            
      .tarjeta.p-lg-4.p-3(style="background-color:#eaf3fe" titulo="Afonías y disfonías")
        h4.mb-4 Afonías y disfonías
        .row.justify-content-center.align-items-center
          .col-lg-7.col-12   
            p Comúnmente se conocen como la pérdida total (afonía) o parcial (disfonía) de la voz y se pueden presentar debido a la utilización de volúmenes muy altos al momento de hablar y al uso de malos hábitos vocales. 
            p.mb-lg-0.mb-3 Prevención: se recomienda evitar posturas forzadas en la cabeza y cuello, evitar la ingesta de comidas o bebidas excesivamente frías o calientes, tener cuidado con los cambios bruscos de temperatura, realizar las funciones en lugares abiertos y ventilados, dar <i>períodos</i> de descanso a la voz y lubricar la garganta constantemente con el consumo de agua a temperatura ambiente.
          .col-lg-5.col-10       
            img.mb-0( src="@/assets/curso/tema5/img08.png")   
      .tarjeta.p-lg-4.p-3(style="background-color:#eaf3fe" titulo="Lumbalgias")
        h4.mb-4 Lumbalgias
        .row.justify-content-center.align-items-center
          .col-lg-7.col-12   
            p Son afectaciones (dolores) en la espalda y su origen tiene que ver con la estructura musculoesquelética de la columna vertebral. Casi siempre se debe a malas posturas, falta de flexibilidad, degeneración muscular y exceso de peso. Esta patología afecta tanto a personas jóvenes, como adultas, aparece tanto en trabajos sedentarios, como en aquellos que implican un gran esfuerzo físico. 
            p.mb-lg-0.mb-3 Prevención: adoptar posturas correctas durante las jornadas de trabajo, utilizando puestos de trabajo ergonómicos y cumpliendo con rutinas diarias de ejercicios que permitan distensiones en los músculos que comprenden la espalda y el cuello. El tiempo y durabilidad de la rutina de ejercicio puede variar, de acuerdo con la intensidad del dolor o de la sensación de cansancio.
          .col-lg-5.col-10       
            img.mb-0( src="@/assets/curso/tema5/img09.png")   
      .tarjeta.p-lg-4.p-3(style="background-color:#eaf3fe" titulo="Síndrome Burnout o desgaste<br>profesional")
        h4.mb-4 Síndrome Burnout o desgaste profesional
        .row.justify-content-center.align-items-center
          .col-lg-12.col-12   
            p Este síndrome es un tipo de estrés prolongado que en la mayoría de los casos, se genera cuando el profesional o colaborador empieza a experimentar la sensación de realización de muchos esfuerzos laborales que no resultan ser compensados. 
            p El síndrome de Burnout, también conocido como el síndrome del aniquilamiento, es considerado como una enfermedad laboral que afecta tanto físicamente como emocional o psicológicamente. En cuanto a los síntomas que genera este síndrome, se hace necesario clasificarlos desde los siguientes aspectos:
            ul.lista-ul--color.mb-4
              li.mb-3       
                i.fas.fa-check
                .p-0 Síntomas emocionales: el individuo puede experimentar irritabilidad, ansiedad, depresión, frustración, aburrimiento, aislamiento, enfado frecuente y cambios bruscos de humor, etc.
              li.mb-0         
                i.fas.fa-check
                .p-0 Síntomas físicos: fatiga muscular, dolor muscular, insomnio, pérdida de peso, dolor de cabeza, aparición de alergias y resfriados frecuentes.
            p.mb-0    Prevención: se recomienda destinar tiempos para desarrollar actividades diferentes a las laborales, para ello se sugiere determinar realizar actividades de mayor agrado       

    Separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Pausas activas

    p.mb-5 Como su nombre lo indica, las pausas activas son breves descanso que se deben realizar durante las jornadas laborales, con el ánimo de descansar las diferentes partes del cuerpo que se encuentran inmersas en alguna actividad laboral. 

    .bloque2.p-0
      .bloque-texto-g.color-primario.p-lg-5.p-2.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img10.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-4.p-2
            p.mb-0 El principal objetivo de las pausas activas es el de prevenir enfermedades que se puedan generar debido a la realización de alguna actividad laboral, al mismo tiempo que busca mantener y mejorar el buen desempeño de todos los individuos laboralmente activos. 

    .fondo2.p-lg-4.p-3.mb-5
      .row.justify-content-center.align-items-center.position-relative
        .col-lg-4.col-8   
          img.mb-lg-0.mb-3( src="@/assets/curso/tema5/img11.svg")   
        .col-lg-8.col-12   
          p Es muy importante realizar a diario las pausas activas programadas dentro de la jornada de trabajo, ya que, a través de ellas es posible reactivar energía, mejorar la postura y mantener descansados y relajados los órganos del cuerpo. De igual forma, estimula el funcionamiento de los diferentes sistemas internos del cuerpo y lo más importante, permite desarrollar el hábito del autocuidado y la conciencia de velar por un buen estado de salud tanto mental como físico. 
          p.mb-0 En las empresas, las pausas activas, suelen ser realizadas por fisioterapeutas, practicantes de áreas deportivas o deportólogos, cuando al interior de ella se cuenta con este personal; en otros casos, son gestionadas por las áreas de gestión humana con las administradoras de riesgos laborales, más conocidas como ARL. Algunos ejemplos de ejercicios se presentan en el siguiente ejemplo.

    div.d-flex.align-items-center.mb-0.position-relative(style="z-index:1000 !important")    
          div.py-2.px-3.pe-5(style="background-color:#ff3c00")  
            h4.mb-0.text-white Ejemplos de ejercicios de pausas activas
          div.p-0.position-relative   
            img.mb-0.position-relative(style="width:66px; left:-35px" src="@/assets/curso/tema1/img17.svg")       

    .fondo3.p-lg-4.p-3.mb-5 
      img.mb-lg-0.mb-3.position-relative( src="@/assets/curso/tema5/img12.svg")   

    .px-lg-5.py-lg-4.p-3(style="background-color: #ffeed9" data-aos="fade-left")
      .row.align-items-center.justify-content-center
        .col-lg-10.col-12
          p.mb-lg-0.mb-3 Con todo lo visto anteriormente, se evidencia la importancia de aplicar la seguridad y la salud en el trabajo en el desempeño de un Encuestador, por lo que se hace muy necesario entonces la incorporación de las pausas activas en el quehacer diario de su labor, contribuyendo a evitar en el mediano plazo enfermedades profesionales.
        .col-lg-2.col-6
          img.mb-0(src='@/assets/curso/tema5/img13.svg') 
</template>

<script>
export default {
  name: 'Tema5',
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
