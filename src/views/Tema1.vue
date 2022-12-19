<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Investigación de mercados

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-7.col-12
        p No puede mencionarse la investigación de mercados. sin antes conocer el concepto de mercadeo, mercadotecnia o <i>marketing</i> en inglés. Kotler y Armstrong (2007) definen el mercadeo como “el proceso mediante el cual las compañías crean valor para los clientes y establecen relaciones estrechas con ellos, para recibir a cambio valor de los clientes” (p. 4)
        .p-4.mb-lg-0.mb-3(style="background-color: #cde2fd") El mercadeo, por tanto, es el proceso responsable de generar las estrategias necesarias para garantizar la venta de los productos apuntando a la sostenibilidad de la compañía; por ende, es el área a cuyo cargo se encuentra el diseño e implementación de las acciones necesarias para satisfacer las necesidades de los clientes de la forma más asertiva y rentable.

      .col-lg-5.col-10
        img.mb-0(src="@/assets/curso/tema1/img01.png")

    p.mb-5 Teniendo presente lo anterior, es un proceso que cada vez cobra más relevancia dentro de las organizaciones, ya que toda empresa sin importar su actividad económica o tamaño (micro, pequeña, mediana o grande) necesita que su portafolio sea adquirido por los clientes y generar relaciones de largo plazo con ellos. Se podrían, entonces, definir algunos aspectos por los cuales el mercadeo es importante en las organizaciones:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo <b>Figura 1.</b> <i>Aspectos importantes del mercadeo</i> 
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-3.col-12.d-flex.mb-lg-0.mb-5
        .tarjeta-avatar
          img(style="width: 165.64px;top:-45px" src="@/assets/curso/tema1/img02.svg")   
          .tarjeta.p-4.py-3(style="background:#ffd7a6")
            p.mb-0 Cumple un rol estratégico al plantear acciones que propendan por la sostenibilidad de la empresa en el mediano y largo plazo
      .col-lg-3.col-12.d-flex.mb-lg-0.mb-5
        .tarjeta-avatar
          img(style="width: 165.64px;top:-45px" src="@/assets/curso/tema1/img03.svg")   
          .tarjeta.p-4.py-3(style="background:#ffd7a6")
            p.mb-0 Ejerce un rol operativo, porque entregan al proceso comercial las herramientas necesarias para asegurar la colocación (venta) del portafolio.
      .col-lg-3.col-12.d-flex.mb-lg-0.mb-5
        .tarjeta-avatar
          img(style="width: 165.64px;top:-45px" src="@/assets/curso/tema1/img04.svg")   
          .tarjeta.p-4.py-3(style="background:#ffd7a6")
            p.mb-0 Tiene la capacidad de identificar nuevos gustos o expectativas en los clientes y, con base en ello, plantear mejoras a los productos existentes o incluso llegar a pensar en la posibilidad de crear nuevos bienes o servicios.
      .col-lg-3.col-12.d-flex
        .tarjeta-avatar
          img(style="width: 165.64px;top:-45px" src="@/assets/curso/tema1/img05.svg")   
          .tarjeta.p-4.py-3(style="background:#ffd7a6")
            p.mb-0 Comunica la marca y los productos de la empresa, a través de las acciones de mercadeo, se puede hacer que el producto sea conocido en diferentes lugares de forma simultánea.

    .fondo1.p-0.mb-5.py-3
      .row.justify-content-center.align-items-center.py-0(data-aos="fade-left")
        .col-lg-8.col-12.px-lg-5.px-3          
          p.mb-lg-0.mb-3 Es en este contexto del mercadeo donde surge la <b>investigación de mercados</b> como una de sus herramientas más poderosas. Kotler (1996), define la investigación de mercados como “la planeación, recopilación y análisis de la información relevante para la toma de decisiones en las estrategias de <i>marketing</i> de las organizaciones”, por su parte, Kinnear y Taylor (1998) la interpretan como “un enfoque sistemático y objetivo del desarrollo y la provisión de información aplicable al proceso de toma de decisiones en la gerencia de mercadeo”. Complementando estas definiciones, podría decirse que <b>las investigaciones tienen por fin la entrega de información que permita conocer sobre un tema de interés de forma oportuna</b>, es decir, en el momento en que se requiere.
        .col-lg-4.col-8
          img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img06.svg")

    p.mb-4 Particularmente, los beneficios de una investigación de mercados son múltiples, entre los que se pueden mencionar los siguientes: 

    .fondo2.p-0.mb-5.py-3
      .row.justify-content-center.align-items-center.py-0(data-aos="fade-right")
        .col-lg-10.col-12
          ImagenInfografica.color-acento-botones.mb-0
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img07.svg')                

            .tarjeta.p-3(style="background-color: #eaf3fe; width: 320px" x="55.5%" y="9%" numero="+")
              p.mb-4 <b>Reaccionar rápidamente ante los cambios del mercado</b>
              p.mb-0 Las compañías requieren estar muy atentas a los cambios que se presentan en el entorno y en el comportamiento de sus clientes, ya que ello permite generar acciones de mercadeo y comercialización oportunas y en este sentido la investigación de mercados entrega información que permita generar este tipo de reacción. 
            .tarjeta.p-3(style="background-color: #eaf3fe; width: 320px" x="76%" y="61.5%" numero="+")
              p.mb-4 <b>Desarrollo de estrategias pertinentes </b>
              p.mb-0 La investigación de mercados proporciona información clave para desarrollar estrategias acordes con las necesidades y expectativas de los clientes, suministrando adicionalmente, la posibilidad de detectar áreas de fallo o donde se evidencien acciones de mejora.
            .tarjeta.p-3(style="background-color: #eaf3fe; width: 320px" x="24%" y="44.7%" numero="+")
              p.mb-4 <b>Optimización de recursos </b>
              p.mb-0 En ocasiones, acciones como la inversión en el lanzamiento de un nuevo producto o una campaña promocional suelen ser muy costosas si no se enfocan bien porque no se conocen a fondo las necesidades del mercado. Por ejemplo, no se deberían destinar altos recursos en publicidad creyendo que es la mejor estrategia sin nisiquiera conocer y analizar antes qué es lo que nuestros clientes opinan, desean, quieren y necesitan. Es por esto fundamental conocer su forma de pensar, para así poder cumplir con sus expectativas, obteniendo con ello mejores resultados.
    
    p.mb-5 Para comprender el proceso de la investigación de mercados, podría resumirse en los siguientes pasos: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo <b>Figura 2.</b> <i>Proceso de realización de una investigación de mercados</i> 

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-left")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img08.svg')                

            .tarjeta.p-3(style="background-color: #ffe2d9; width: 320px" x="30.5%" y="20%" numero="+")
              p.mb-4.text-center <b>Diseño</b>  
              ul.lista-ul--color.mb-lg-0.mb-4
                li.mb-1         
                  i.fas.fa-check
                  .p-0 Selección de metodología e instrumento.
              p.mb-0 Segundo, se procede con el diseño que consiste en definir qué tipo de metodología se aplicará y a través de qué instrumento de recopilación de datos se realizará.
            .tarjeta.p-3(style="background-color: #ffe2d9; width: 320px" x="64.5%" y="20%" numero="+")
              p.mb-4.text-center <b>Procesamiento y análisis</b>  
              ul.lista-ul--color.mb-lg-0.mb-4
                li.mb-1         
                  i.fas.fa-check
                  .p-0 Tabulación y transformación de datos en información.
              p.mb-0 El cuarto paso, procesamiento y análisis, consiste en convertir todos los datos recogidos en información, para lo cual se utilizan aplicaciones informáticas que pueden ser tan sencillas como Excel, o tan especializadas como los paquetes estadísticos.
            .tarjeta.p-3(style="background-color: #ffe2d9; width: 320px" x="98.3%" y="20%" numero="+")
              p.mb-4.text-center <b>Presentación del informe</b>  
              ul.lista-ul--color.mb-lg-0.mb-4
                li.mb-1         
                  i.fas.fa-check
                  .p-0 Entrega a satisfacción del informe de investigación.
              p.mb-0 La presentación de resultados constituye el momento de verdad entre quien presenta la investigación y quien la solicitó. 
            .tarjeta.p-3(style="background-color: #ffe2d9; width: 320px" x="13%" y="78.5%" numero="+")
              p.mb-4.text-center <b>Planeación</b>  
              ul.lista-ul--color.mb-lg-0.mb-4
                li.mb-1         
                  i.fas.fa-check
                  .p-0 Definición de elementos
              p.mb-0 La planeación es el momento en el que se define el objetivo de investigación, alcance, tiempo estimado y presupuesto.
            .tarjeta.p-3(style="background-color: #ffe2d9; width: 320px" x="47.4%" y="79%" numero="+")
              p.mb-4.text-center <b>Trabajo de campo</b>  
              ul.lista-ul--color.mb-lg-0.mb-4
                li.mb-1         
                  i.fas.fa-check
                  .p-0 Recopilación de información
              p.mb-0 Se procede a realizar el trabajo de campo, es decir, el levantamiento de información con el público objetivo del estudio.
            .tarjeta.p-3(style="background-color: #ffe2d9; width: 320px" x="81.3%" y="79.3%" numero="+")
              p.mb-4.text-center <b>Elaboración del informe</b>  
              ul.lista-ul--color.mb-lg-0.mb-4
                li.mb-1         
                  i.fas.fa-check
                  .p-0 Consolidación de la información de forma técnica y visualmente agradable.
              p.mb-0 En el quinto paso se procede a dar estructura a todo, es decir, elaborar el informe, el cual contendrá imágenes, gráficos, tablas y texto que permitan mostrar de forma clara lo recopilado y sexto, aunque no menos importante.
    p.mb-5  Con un ejemplo se detalla el proceso para la realización de una investigación de mercados, así:
    
    figure.mb-0(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Metodologías

    p.mb-5 La metodología se refiere al conjunto de métodos con los cuales se realiza determinada actividad o proceso. En la investigación de mercados se tienen definidos dos tipos de metodologías la cuantitativa y cualitativa; cabe mencionar que la elección de ellas depende del objetivo que persigue el estudio. 

    TabsC.color-acento-contenido.mb-5(data-aos="fade-left")
      py-0.py-md-4(titulo="Metodología cuantitativa")
        .row.justify-content-between.align-items-center.tarjeta--azul.mb-0.p-4.py-5
          .col-lg-6.col-12
            h4 Metodología cuantitativa
            p Se basa en cálculos estadísticos, matemáticos y, por tanto, numéricos. Se utiliza principalmente cuando se requiere conocer la respuesta al cuánto o qué cantidad; es decir, siempre que se trabaje con esta metodología los resultados deberán expresarse en números. 
            p Está medición es controlada, ya que las preguntas están enfocadas en obtener respuestas específicas, por tanto, se tiene un alcance objetivo y se tiene claro, que al momento de ver los resultados, deberán encontrarse porcentajes a lo largo de la presentación. 
            p.mb-lg-0.mb-3 Es importante mencionar que, al partir de ejercicios estadísticos, los resultados que se obtienen van más allá de los datos, es decir, es posible extraer conclusiones no solo para los encuestados, sino para la población que cumple con las características del estudio (esto se denomina técnicamente inferencias), por lo que en muchos casos este tipo de investigaciones son confirmatorias.
          .col-lg-4.col-8
            img(src='@/assets/curso/tema1/img09.png')                

      py-0.py-md-4(titulo="Metodología cualitativa")
        .row.justify-content-between.align-items-center.tarjeta--azul.mb-0.p-4.py-5
          .col-lg-6.col-12
            h4 Metodología cualitativa
            p A diferencia de la metodología cuantitativa, se basa en la cualificación y caracterización. Suele tener un carácter exploratorio y descriptivo y dar respuestas a preguntas como: cuáles, cómo, en dónde, para qué, por qué y quiénes; por lo que en algunos casos se suele entender como centrada en la fenomenología y comprensión, lo que conlleva a volúmenes de información considerables, aunque como consecuencia de esto, también puede generar información subjetiva.
            p Los resultados de la aplicación de esta metodología son funcionales solo para los participantes en el estudio, por tanto, no pueden generalizarse para la población (a diferencia de la metodología cuantitativa). 
            p.mb-lg-0.mb-3 No obstante, tiene como ventaja que tiene un alto nivel de detalle y profundidad la información, por lo que permite entender fenómenos o situaciones que a simple vista no se detectan.
          .col-lg-4.col-8
            img(src='@/assets/curso/tema1/img10.png')  
    br
    .fondo3.p-0(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-5.position-relative
        .col-lg-4.col-8.position-relative
          img.position-relative.mb-lg-0.mb-3(style="top:-40px" src='@/assets/curso/tema1/img11.svg')  
        .col-lg-8.col-12
          p.mb-0 En resumen, no se puede afirmar que una metodología sea mejor que otra, la aplicabilidad de cada una de ellas dependerá de cuál es el objetivo de la investigación y los recursos disponibles. De hecho, los investigadores de mercados sugieren que el “mundo ideal” es realizar estudios mixtos, es decir, donde se apliquen ambas metodologías (cualitativa y cuantitativa); en algunos casos, comenzar con la cualitativa para entender y acotar y continuar con la cuantitativa para tener resultados globales, en otros, por el contrario, se recomienda comenzar con un estudio cuantitativo y continuar con la metodología cualitativa para profundizar en los temas de interés.

    p.mb-5 En las siguientes tres situaciones se demuestra cómo ambas metodologías son válidas y aplicables dependiendo del contexto.
    
    .fondo4.p-0.mb-0(data-aos="fade-left")
      .row.justify-content-center.align-items-center.position-relative
        .col-lg-10.col-12.position-relative
          PasosA.color-acento-contenido.mb-5(tipo="n")
            .row.justify-content-center.align-items-center
              .col-lg-7.col-12
                h4.mb-4 Situación uno
                p.mb-lg-0.mb-3 La empresa Pasteliando Ltda. desea conocer por qué sus ventas han disminuido en los últimos meses, en este sentido, la pregunta a resolver es <font style="color:#388AF5">“por qué”</font>, por tanto, la recomendación se orientaría un estudio con metodología cualitativa.
              .col-lg-3.col-sm-4.col-8
                  img(src='@/assets/curso/tema1/img12.svg')                  
              .col-lg-2
            .row.justify-content-center.align-items-center
              .col-lg-2            
              .col-lg-3.col-sm-4.col-8
                  img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img13.svg')  
              .col-lg-7.col-12
                h4.mb-4 Situación dos
                p.mb-0 La empresa Running S.A.S. va a lanzar un nuevo producto y desea conocer cuál sería la intención de compra por parte de su público objetivo, en este orden de ideas, el interrogante al cual se le espera dar respuesta es “cuántos”, por ello, la orientación de la investigación debe ser cuantitativa.
            .row.justify-content-center.align-items-center
              .col-lg-7.col-12
                h4.mb-4 Situación tres
                p.mb-lg-0.mb-3 La empresa Mati Shoes desea evaluar <font style="color:#388AF5">cuál es el nivel de satisfacción</font> por parte de sus clientes, por ello, realiza <b>un estudio con metodología cuantitativa</b>. Sin embargo, cuando ven los resultados evidencian una disminución del 10% en la evaluación general de los clientes, por ello, desde el Departamento de Mercadeo, se solicita realizar <b>un estudio cualitativo</b> para entender <b style="color:#388AF5">cuáles son las causas</b>, que han llevado a ese deterioro del indicador.
              .col-lg-3.col-sm-4.col-8
                  img(src='@/assets/curso/tema1/img14.svg')                  
              .col-lg-2
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Técnicas de investigación de mercados

    p.mb-5 Estas representan el conjunto de herramientas, procedimientos e instrumentos que se utilizan para recopilar los datos en un estudio; de hecho, las técnicas tienen asociación con la metodología. 

    .row.justify-content-center.align-items-even.mb-5(data-aos="fade-right")
      .col-md-6.col-xl-4.col-12
        .TFcontainer.mb-lg-0.mb-3.p-0
          img.TFimage(src='@/assets/curso/tema1/img15.png')
          .TFoverlay.d-flex.align-items-top
            .p-4.w-100
              div.w-100.mt-2
                h4.mb-lg-4.mb-3.text-center.w-100.text-white Metodología cuantitativa
              p.mb-0.contenidooculto.text-white Tradicionalmente la técnica utilizada son las encuestas, ya que han sido por excelencia la herramienta usada para recopilar la información cuando el fin es la obtención de cifras; generalmente son aplicadas por perfiles técnicos u operativos.
      .col-md-6.col-xl-4.col-12
        .TFcontainer.mb-0.p-0
          img.TFimage(src='@/assets/curso/tema1/img16.png')
          .TFoverlay.d-flex.align-items-top
            .p-lg-4.py-4.px-2.w-100.mt-2
              div.w-100
                h4.mb-lg-4.mb-3.text-center.w-100.text-white Metodología cualitativa
              p.mb-0.contenidooculto.text-white Se tienen muchas técnicas a disposición, pues el mercadeo ha tomado de la Antropología y la Psicología varias de ellas para aplicarlas con fines de estudios de mercados. Este tipo de técnicas requieren un alto nivel de formación y capacitación, por lo que comúnmente son realizadas por personal profesional/licenciado.

    p.mb-5 A continuación se presenta una asociación entre las metodologías y técnicas de investigación y se dará un contexto general de estas, excluyendo las encuestas, dado que es un tema que se abordará en profundidad en la última parte de este componente formativo.

    .p-0.position-relative(data-aos="fade-left")
      div.d-flex.align-items-center.mb-0.position-relative(style="z-index:1000 !important")    
        div.py-2.px-3.pe-5(style="background-color:#ff3c00")  
          h4.mb-0.text-white Metodología cuantitativa
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:66px; left:-35px" src="@/assets/curso/tema1/img17.svg")
      .p-0.d-block.d-lg-none
        br
        
      .fondo5.mb-0.position-relative(style="top:-33px !important")
        .row.justify-content-center.align-items-center.position-relative.mb-0.py-3 
          .col-lg-8.col-12
            ul.lista-ul--color.mb-2
              li.mb-1         
                i.fas.fa-check
                b.p-0 Encuestas.
              li.mb-1         
                i.fas.fa-check
                b.p-0 Paneles de investigación <i>online</i>.
            p Los paneles son comunidades que son perfiladas y validadas, ya que cumplen una condición de interés para determinada marca o producto específico. Se crean en una base de datos y son contactadas con cierta frecuencia ya sea para responder encuestas de manera <i>online</i> o para participar de algún estudio cualitativo <i>online</i>, por ello se dice que los paneles dependiendo de la forma como se enfoquen aplican en ambas metodologías. 
            p.mb-lg-0.mb-3 La permanencia de las personas en el panel se motiva a través de los incentivos que reciben por parte de las marcas o con pagos directos por cada participación.
          .col-lg-4.col-8
            img.mb-0(src='@/assets/curso/tema1/img18.svg')                  

    .p-0.position-relative.mb-4(data-aos="fade-right")
      div.d-flex.align-items-center.mb-0.position-relative(style="z-index:1000 !important")    
        div.py-2.px-3.pe-5(style="background-color:#ff3c00")  
          h4.mb-0.text-white Metodología cualitativa
        div.p-0.position-relative   
          img.mb-0.position-relative(style="width:66px; left:-35px" src="@/assets/curso/tema1/img17.svg")
    
    .fondo6.p-3.px-lg-5.mb-5(data-aos="fade-left")
      .row.align-items-center.justify-content-center
        .col-lg-12.col-12
          LineaTiempoC.color-acento-contenido(text-small)
            .row.align-items-center.justify-content-center(titulo="Observación")
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img19.svg')                  
              .col-lg-8.col-12
                p.h4 <b>Observación</b>
                p.mb-0 Es la técnica más básica, aunque no por ello menos potente. Consiste en mirar con la perspectiva de un investigador, como reaccionan las personas ante determinada situación, marca o producto. Por ejemplo, es muy frecuente en los centros comerciales, puntos de venta, sucursales de entidades prestadoras de servicio, la aplicación de esta técnica para comprender cómo es el nivel de interacción de los clientes.
            .row.align-items-center.justify-content-center(titulo="Cliente misterioso<br>(<i>Mistery Shopper</i>)")
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img20.svg')                  
              .col-lg-8.col-12
                p.h4 <b>Cliente misterioso (<i>Mistery Shopper</i>)</b>
                p.mb-0 Denominado también cliente incógnito o <i>Mistery Shopper</i>. Es un proceso de observación con ciertas especificaciones. Aquí el investigador no solo observa, sino que simula ser un comprador y estar interesado en adquirir determinado bien/ servicio, lo anterior se realiza para evidenciar cómo es el comportamiento del vendedor o del canal de venta. Suele utilizarse con frecuencia para comprender cómo se comportan los vendedores con los clientes.
            .row.align-items-center.justify-content-center(titulo="Entrevista en<br>profundidad")
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img21.svg')                  
              .col-lg-8.col-12
                p.h4 <b>Entrevista en profundidad</b>
                p.mb-0 Es una técnica de investigación donde se selecciona determinado grupo de interés con el fin de conocer en detalle, sus opiniones, sentimientos, experiencias, gustos y/o expectativas respecto a determinado tema, producto o marca. Allí el investigador se denomina “entrevistador”, ya que lo que realiza es una entrevista personalizada a cada persona a partir de unas preguntas específicas previamente definidas, dichos resultados luego son analizados a nivel individual y agregado (es decir, para todas las personas a las que se les aplicó la entrevista) para extraer conclusiones.
            .row.align-items-center.justify-content-center(titulo="Técnicas proyectivas")
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img22.svg')                  
              .col-lg-8.col-12
                p.h4 <b>Técnicas proyectivas</b>
                p Son técnicas provenientes de la Psicología. De hecho, son usadas con mayor frecuencia en procesos de selección de personal que incluso en mercadeo, sin embargo, son interesantes ya que posibilitan la obtención de información de una manera indirecta, ya que la persona participante en el estudio realiza varios <i>test</i> o pruebas a través de las cuales el experto en dichas técnicas podrá identificar su forma de pensar o sentir. 
                p.mb-0 De acuerdo con lo anterior, se diferencian de las entrevistas y el cliente misterioso, dado que la persona no es plenamente consciente ni de lo que se le está preguntando, ni menos de lo que está respondiendo. A modo de referente, son usadas con bastante frecuencia, con los niños y los adultos mayores.
            .row.align-items-center.justify-content-center(titulo="Grupos focales<br>(<i>Focus Group</i>)")
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img23.png')                  
              .col-lg-8.col-12
                p.h4 <b>Grupos focales (<i>Focus Group</i>)</b>
                p.mb-0 Llamados también “<i>Focus Group</i>”, sesiones de grupo o grupos de enfoque; consiste en citar simultáneamente a un espacio a determinado grupo de personas (generalmente entre seis a doce personas) las cuales son de interés para la marca o producto que se pretende estudiar, y a través de un moderador se van realizando a los asistentes una serie de preguntas para mirar percepciones y puntos de acuerdo/ desacuerdo.

            .row.align-items-center.justify-content-center(titulo="Estudios etnográficos")
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img24.svg')                  
              .col-lg-8.col-12
                p.h4 <b>Estudios etnográficos</b>
                p.mb-0 Vienen de la Antropología y la Sociología y tienen por finalidad que el investigador realice un proceso de inmersión en una comunidad, familia o contexto específico, para ver desde el entorno propio del grupo, cómo se comportan, cuáles son sus intereses y necesidades. Se utilizan mucho por parte de las empresas sociales para entender mejor qué requiere la población y por parte de empresas de consumo masivo para la creación de nuevos productos.
            .row.align-items-center.justify-content-center(titulo="Pruebas de mercado (experimentación)")
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img25.svg')                  
              .col-lg-8.col-12
                p.h4 <b>Pruebas de mercado <br>(experimentación)</b>
                p Esta técnica tiene por finalidad probar o generar experimentos con clientes que cumplen el perfil objetivo de la empresa, para detectar su nivel de agrado con lo que se está mostrando. 
                p.mb-0 Estas pruebas son utilizadas con frecuencia para testear cómo perciben un producto que será lanzado al mercado si son empresas de tangibles o una experiencia si se hace mención a empresas de servicios.
            .row.align-items-center.justify-content-center(titulo="Método Delphi")
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img26.svg')                  
              .col-lg-8.col-12
                p.h4 <b>Método Delphi</b>
                p.mb-0 Consiste en reunir a un grupo de expertos en determinada temática, donde el fin es a partir de una pregunta específica obtener un consenso entre cuál debería ser la respuesta que aplica. Por ejemplo, el método Delphi suele utilizarse para definir la meta de inflación en un país, varios expertos en materia económica dan su posición y al final se llega a cuál debería ser la cifra propuesta.
            .row.align-items-center.justify-content-center(titulo="Paneles de<br>investigación <i>online</i>")
              .col-lg-3.col-8
                img.mb-lg-0.mb-3(src='@/assets/curso/tema1/img27.svg')                  
              .col-lg-8.col-12
                p.h4 <b>Paneles de investigación <i>online</i></b>
                p Los paneles son comunidades que son perfiladas y validadas, ya que cumplen una condición de interés para determinada marca o producto específico. Se crean en una base de datos y son contactadas con cierta frecuencia ya sea para responder encuestas de manera online o para participar de algún estudio cualitativo <i>online</i>, por ello se dice que los paneles dependiendo de la forma como se enfoquen aplican en ambas metodologías. 
                p.mb-0 La permanencia de las personas en el panel se motiva a través de los incentivos que reciben por parte de las marcas o con pagos directos por cada participación.


    .d-none.d-xl-block
      br
      br
      br
      br
      
    .d-block.d-lg-none(data-aos="fade-right")
      .row.justify-content-center.mb-3
        .col-8
          img.mb-0(src='@/assets/curso/tema1/img28.png')      
    .p-0.position-relative.px-2(data-aos="fade-right")
      .row.justify-content-center
        .col-lg-2.d-flex
        .col-lg-3.d-flex(style="background-color:#ffeeda")
        .col-lg-7.col-12.d-flex.py-5(style="background-color:#ffeeda")
          p.mb-0 Hasta aquí se ha mostrado cómo, para el mercadeo, las investigaciones de mercado son una gran herramienta para apoyar la generación de estrategias y tácticas con más enfoque a los clientes, y cómo en este escenario se cuentan con dos metodologías (cualitativa y cuantitativa) que van a permitir dar alcance a la forma en la que se recopila la información y se mostrarán los resultados. Asimismo, se evidenció que las encuestas son la técnica más usada dentro de la perspectiva cuantitativa y cómo en el panorama cualitativo se tienen gran cantidad de opciones disponibles.

      .row.justify-content-right.position-absolute.w-100.d-none.d-lg-block(style="bottom: 0px")
        .col-lg-5
          img.mb-0(src='@/assets/curso/tema1/img28.png')      

</template>

<script>
export default {
  name: 'Tema1',
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
