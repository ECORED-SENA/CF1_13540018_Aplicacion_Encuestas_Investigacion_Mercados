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
          p.titulo <b>Figura 8.</b> <i>Relación aplicada entre metodología, técnica e instrumento</i> 

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

    .px-lg-5.py-lg-3.p-3.mb-5(style="background-color: #ffeed9" data-aos="fade-left")
      .row.align-items-center.justify-content-center
        .col-lg-10.col-12
          p.mb-lg-0.mb-3 Cabe mencionar, que una buena encuesta debe cumplir dos características fundamentales la fiabilidad: se evalúa si este, en igualdad de condiciones proporciona iguales resultados, es decir, es preciso, o sea, se entiende lo mismo cada vez que se aplica, y la validez, la cual consiste en que mida lo que tiene que medir.
        .col-lg-2.col-6
          img.mb-0(src='@/assets/curso/tema6/img11.svg') 

    div.d-flex.align-items-center.mb-4.position-relative(style="z-index:1000 !important" data-aos="fade-right")    
          div.py-2.px-3.pe-5(style="background-color:#ff3c00")  
            h4.mb-0.text-white La encuesta y sus elementos
          div.p-0.position-relative   
            img.mb-0.position-relative(style="width:66px; left:-35px" src="@/assets/curso/tema1/img17.svg")       

    p.mb-5 Para mayor profundización, se sugiere visualizar este contenido en el que se da un contexto de esta técnica de investigación y la estructura de su cuestionario con ejemplos que permiten comprender mejor esta temática.    
    figure.mb-0(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    
    Separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Herramientas para encuestas presenciales

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-7.col-12
        p.mb-4 Como se indicó antes, las encuestas presenciales llamadas también “encuestas personales” son aquellas que son realizadas por encuestadores de campo, es decir, en ellas hay contacto físico entre el encuestador (quien realiza la encuesta) y el encuestado (a quien se le realiza) y se recomienda que su duración no exceda los sesenta minutos (una hora). Este tipo de aplicación del instrumento representa la forma más tradicional de realizarlas, las cuales pueden ser administradas, es decir, donde un encuestador orienta cada pregunta, o autoadministradas, donde se le entrega la encuesta al encuestado para que el mismo la diligencia.
        .p-3(style="background-color:#fffbf6")
          p Las ventajas de este tipo de encuestas son que de cara al encuestado generan más confianza comparado con otro tipo de canales y se tiene la posibilidad de percibir comportamientos y actitudes por parte del encuestado frente a las preguntas. 
          p.mb-lg-0.mb-3 Las desventajas están orientadas en: que puede representar mayores costos y que el trabajo de campo se puede ver impactado negativamente ante situaciones adversas del clima.
      .col-lg-5.col-10  
        img.mb-0(src='@/assets/curso/tema6/img12.png') 

    .fondo2.p-3.px-lg-5.mb-0(data-aos="fade-left")
      .row.align-items-center.justify-content-center
        .col-lg-12.col-12
          LineaTiempoC.color-acento-contenido(text-small)
            .row.align-items-center.justify-content-center(titulo="Encuestador") 
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema6/img13.png')                               
              .col-lg-8.col-12
                p.h4 <b>Encuestador:</b>
                p.mb-0 persona que cuenta con la capacitación en la investigación, en caso de que aplique también en el uso de las herramientas tecnológicas.              
            .row.align-items-center.justify-content-center(titulo="Elementos del encuestador") 
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema6/img14.png')                               
              .col-lg-8.col-12
                p.h4 <b>Elementos del encuestador: </b>
                p.mb-0 mínimamente el encuestador debe disponer de una gorra y un morral para llevar consigo la papelería y los implementos que requiere para realizar las encuestas.
            .row.align-items-center.justify-content-center(titulo="Identificación del encuestado") 
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema6/img15.png')                               
              .col-lg-8.col-12
                p.h4 <b>Identificación del encuestado: </b>
                p.mb-0 dependiendo de la empresa y de los recursos disponibles, la identificación puede estar representada en un carné, un chaleco o incluso en camisas con los logos de la empresa que se está representando.
            .row.align-items-center.justify-content-center(titulo="Dispositivo móvil de<br>captura o encuestas impresas") 
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema6/img16.png')                               
              .col-lg-8.col-12
                p.h4 <b>Dispositivo móvil de captura o encuestas impresas: </b>
                p.mb-0 indistinto si la encuesta se realiza utilizando medios tecnológicos (DMC) o material impreso, el encuestador debe validar antes de iniciar cada recorrido que se cuenta o con la aplicación disponible en el caso de la herramienta ofimática o con la cantidad suficiente de encuestas.                 

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Herramientas para encuestas virtuales

    .p-3.pb-lg-0.mb-5(style="background-color:#ffeeda" data-aos="fade-right")
      .row.align-items-center.justify-content-center
        .col-lg-7.col-12
          p Como se mencionó  en el capítulo de herramientas ofimáticas, cuando se hace alusión a las encuestas virtuales, se hace referencia a aquel tipo de encuestas que son implementadas utilizando la tecnología e internet. Suelen ser encuestas más cortas que las presenciales, de hecho, se sugiere que al momento de responderse no se requiera más de cinco minutos porque cuando requieren de mucho tiempo para contestar, se corre el riesgo que el encuestado abandone la encuesta. 
          p.mb-lg-0.mb-3 Asociado a las encuestas virtuales, deben tenerse en cuenta dos elementos: el primero, sobre cuál herramienta se crean las encuestas y el segundo, sobre cuál canal se gestionarán (enviarán) las mismas.
        .col-lg-5.col-8.position-relative.p-0
          img.d-none.d-lg-block.mb-lg-0.mb-3(src='@/assets/curso/tema6/img17.png')
          img.d-none.d-lg-block.position-absolute(style="bottom:0px" src='@/assets/curso/tema6/img18.png')
          img.d-lg-none.d-block(src='@/assets/curso/tema6/img18.png')


    TabsC.color-acento-contenido.mb-5(data-aos="fade-left")
      py-3.py-md-4(titulo="Herramientas para crear encuestas virtuales")
        .row.justify-content-between.align-items-center.tarjeta--azul.mb-0.p-4.py-5
          .col-lg-6.col-12
            h4 Herramientas para crear encuestas virtuales
            p Actualmente, se tienen disponibles muchas aplicaciones para crear encuestas virtuales, unas con cobro, otras con versión demo (prueba) u otras gratis (free), basta con digitar en un buscador la frase “herramientas para encuestas online” y allí se encontrarán muchas opciones. No obstante, muchos recomiendan para encuestas sencillas o con poco alcance, trabajar con Google Forms, la cual es una aplicación disponible en la suite de Google habilitada para la creación de encuestas en línea, o ya de una forma más técnica utilizar SurveyMonkey, Hubspot, SurveySparrow o QuestionPro. 
            p.mb-lg-0.mb-3 Ahora bien, específicamente para el alcance de la gratuidad, se debe tener presente que estas al ser herramientas sin cobro, van a tener restricciones, ya sea en cantidad de envíos, cantidad de preguntas que se pueden agregar o en la forma cómo se extraen los resultados, no obstante, la mayoría de aplicaciones que tienen versiones free también disponen de planes: a demanda (por envío) que pueden ser adquiridos para cada estudio, o por paquetes de envíos para quienes trabajan en el tema de encuestas de forma recurrente.            
          .col-lg-4.col-8
            img(src='@/assets/curso/tema6/img19.png')                

      py-3.py-md-4(titulo="Herramientas para enviar las encuestas virtuales")
        .row.justify-content-between.align-items-center.tarjeta--azul.mb-0.p-4.py-5
          .col-lg-6.col-12
            h4 Herramientas para enviar las encuestas virtuales            
            p.mb-lg-0.mb-3 Desde esta segunda perspectiva, se tienen dos consideraciones: la primera, es que la mayoría de herramientas de creación de encuestas virtuales permiten simultáneamente el envío por correo electrónico, es decir, que una vez se crean se cargue una base de datos con emails para enviarla; sin embargo, dependiendo de la estrategia de la empresa se puede acudir a otros canales para gestionar dicho envío, ya que en ocasiones el envío de una encuesta por correo no tiene tanta efectividad en la respuesta, por lo que se ha optado por realizar el envío de las mismas a través de mensajes de texto (SMS) o por aplicaciones de mensajería instantánea, tales como WhatsApp, Facebook Messenger, Wechat, QQMobile o Telegram, y si bien esta segunda alternativa de envío más personalizada puede tener indicadores más altos de efectividad, se debe tener presente que para poder realizar estos envíos, en Colombia se debe contar con la autorización de datos personales del encuestado, porque en caso contrario se estaría incumpliendo la Ley de Protección de Datos
          .col-lg-4.col-8
            img(src='@/assets/curso/tema6/img20.png')  
    p.mb-5.text-center Para analizar las encuestas presenciales frente a las encuestas virtuales, a continuación, se muestra un comparativo entre ambos tipos de encuestas.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo <b>Tabla 1.</b> <i>Paralelo entre encuestas presenciales y virtuales</i> 

    .tabla-b.color-acento-contenido.mb-5(data-aos="fade-right")            
      table
        tr
          th(style="background-color: #ff3c00; border-right: 0px")
            h4.mb-0.text-center(style="color: white") Ventajas 
          th(style="background-color: #ff3c00;")
            h4.mb-0.text-center(style="color: white") Desventajas       
        tr
          td.br Tienen costos más altos frente a las encuestas virtuales.<br>En conjunto, suelen tener indicadores de efectividad más altos por la confianza que inspiran al encuestado.
          td Tienen costos más bajos frente a las encuestas presenciales.<br>En el corto plazo, tienen tasas de efectividad más bajas, por lo que se requieren varios envíos para completar el número de encuestas requerido. 
        tr
          td.br El trabajo de campo requiere mayor cantidad de tiempo, es decir, se requiere de mayor tiempo para lograr una sola encuesta efectiva.
          td Sin embargo, es creciente la participación de este tipo de medios en la aplicación de encuestas.

        tr
          td.br Se requiere digitar cada encuesta (ingresar la información de las encuestas) en una base de datos.
          td Es posible con un solo envío, enviar la encuesta a un grupo grande de personas, en poco tiempo se logra una encuesta efectiva.
        tr
          td.br Pueden tener un margen de error más alto ya que se requiere la intervención humana para marcar (seleccionar) la respuesta correcta.
          td Los datos se almacenan inmediatamente en una base de datos.
        tr
          td.br Suelen tener plena concentración por parte del encuestado, ya que está dedicando el tiempo a responder la encuesta.
          td Se plantea que tienen menor error, ya que los encuestados registran sus respuestas a través de botones.
        tr
          td.br Puede presentar limitante para acceder a ciertos sitios a aplicar las encuestas.
          td No garantizan la plena atención del encuestado, ya que puede estar disperso realizando otras actividades.<br>Es posible que permitan mayor accesibilidad, es decir, llegar a lugares donde el acceso físico es complicado.

    .px-lg-5.py-lg-3.p-3.mb-0(style="background-color: #ffeed9" data-aos="fade-left")
      .row.align-items-center.justify-content-center
        .col-lg-2.col-6
          img.mb-lg-0.mb-3(src='@/assets/curso/tema6/img21.svg') 
        .col-lg-10.col-12
          p.mb-0 De lo anterior, se puede inferir, que no hay una mejor que otra, ya que, dependiendo de los recursos, el perfil del público objetivo y las condiciones del entorno, se puede establecer cuál de estas dos formas de aplicación es más funcional. 
        

    Separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Tipos de preguntas

    p.mb-5 Las preguntas constituyen la parte central del cuestionario y, por ende, de la encuesta, y si bien un encuestador no las define, sí es necesario que conozca su tipología, para que en el momento de realizarlas al encuestado sepa cómo manipular el instrumento de investigación y cómo dar a conocer al encuestado la pregunta frente a su forma de responder. Principalmente, se trabajan con dos clasificaciones: preguntas de calidad y preguntas según el tipo de respuesta; en el siguiente esquema se detalla dicha clasificación:
    .row.align-items-center.justify-content-center
      .col-lg-10.col-12
        ImagenInfografica.color-acento-botones.mb-0(data-aos="fade-left")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema6/img22.svg')                

            .tarjeta.p-3(style="background-color: #eaf3fe; width: 320px" x="18.2%" y="7%" numero=" ")
              p.mb-1 <b>Filtro:</b>  
              p De este tipo de preguntas, solo puede existir una dentro del cuestionario, dado que a partir de ella se establece si la persona cumple con la característica de interés para el estudio. 
              p.mb-0 Por ejemplo, si se va a realizar un estudio de marcas de cigarrillo la pregunta filtro, debe ser: ¿usted fuma?, la persona que responda que sí, aplicaría, sin embargo, aquella que indique que “no”, no podría participar dado que no tendría como suministrar información de relevancia. Segundo, se procede con el diseño que consiste en definir qué tipo de metodología se aplicará y a través de qué instrumento de recopilación de datos se realizará.
            .tarjeta.p-3(style="background-color: #eaf3fe; width: 320px" x="81.8%" y="7%" numero=" ")
              p.mb-1 <b>Abierta:</b>                
              p.mb-0 Cuando se hace mención a una pregunta abierta, se refiere a aquella donde el encuestado es libre de responder lo que considere sin tener predefinidas opciones, por ejemplo, ¿por qué le gusta fumar?, allí la persona expondrá las razones que considera tiene para realizar dicha acción. 

            .tarjeta.p-3(style="background-color: #eaf3fe; width: 320px" x="12.5%" y="41.3%" numero=" ")
              p.mb-1 <b>Control:</b>                
              p.mb-0 La pregunta de control representa una o máximo dos preguntas, que se realizan a lo largo del cuestionario, para validar la coherencia entre las respuestas, ejemplo: si la persona indicó que sí fumaba, una pregunta de control, puede ser: mencione cuántos cigarrillos en promedio fuma a la semana. Si la persona realmente tiene este hábito responderá sin dudar, si por el contrario no tiene claro el dato o no entrega la información, se percibe que se tendrá dificultades en el levantamiento de la información con dicha persona.
            .tarjeta.p-3(style="background-color: #eaf3fe; width: 320px" x="87.6%" y="41.3%" numero=" ")
              p.mb-1 <b>Cerrada:</b>                
              p.mb-0 Son aquellas en donde se le da al encuestado algunas posibles opciones y este se deberá acomodar a la(s) que considere más se acerca(n) a su postura. Continuando con el caso, ¿por qué le gusta fumar?, opción 1: por placer, opción 2: por costumbre, opción 3: por temas sociales, opción 4: por estrés; en este caso, se le entregaron cuatro opciones para que la persona eligiera, la que escoja más se acomoda a su comportamiento.
    
            .tarjeta.p-3(style="background-color: #eaf3fe; width: 320px" x="18.2%" y="76.5%" numero=" ")
              p.mb-1 <b>Pase:</b>  
              p Es aquella que se convierte en un paso previo, antes de otra pregunta, es decir, permite garantizar que las preguntas que se realizarán de allí en adelante sí aplican para el encuestado. 
              p.mb-0 Continuando con el ejemplo, una pregunta pase, podría ser: ¿fuma usted la marca Bermot?, si la persona dice que sí, se le preguntarían temas específicos de esta marca; si dice que no, se “pasa” o brinca hasta otra pregunta que no tenga relación con la marca Bermot.              
            .tarjeta.p-3(style="background-color: #eaf3fe; width: 320px" x="81.8%" y="76.5%" numero=" ")
              p.mb-1 <b>Escala:</b>                
              p.mb-0 Son aquellas en donde las opciones están preconfiguradas y estandarizadas para que siempre las opciones de respuesta sean las mismas. En ella la escala de Likert es la más conocida, ya que a través de ella, se miden las actitudes basadas en un nivel de aprobación o desaprobación respecto a un tema específico. Cuando se hace mención a Likert, las opciones de respuesta serán: muy de acuerdo, de acuerdo, ni acuerdo / ni en desacuerdo, en desacuerdo y muy en desacuerdo; si se detalla en esta escala, se tienen extremos y un término medio de elección.
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
