/* =========================================
   ROBOKIDS - SCRIPT INTERACTIVO PRINCIPAL
   ========================================= */

// --- ESTADO GLOBAL DE LA APLICACIÓN ---
let estadoApp = {
    puntos: 0,
    gradoActual: 'grado3',
    nivelSeleccionado: null,
    progreso: {
        grado3: Array(20).fill('pendiente'),
        grado4: Array(20).fill('pendiente'),
        grado5: Array(20).fill('pendiente')
    },
    partesRobot: {
        cabeza: 'cabeza_mech',
        cuerpo: 'cuerpo_base',
        brazos: 'brazos_metal',
        piernas: 'piernas_ruedas',
        accesorio: 'accesorio_luz'
    }
};

// --- BANCO DE PREGUNTAS ÚNICAS POR GRADO Y NIVEL ---
const preguntasBD = {
    grado3: [
        {
            id: 1,
            mision: "Descubriendo componentes (Fase 1)",
            pregunta: "¿Cuál es la función principal de un robot?",
            opciones: ["Ayudar a resolver tareas y automatizar procesos.", "Comer galletas con leche en el desayuno.", "Dormir todo el día en el sofá de la sala.", "Procesar datos en la nube sin hardware."],
            correcta: 0
        },
        {
            id: 2,
            mision: "Descubriendo componentes (Fase 2)",
            pregunta: "¿Qué es un algoritmo en la programación?",
            opciones: ["Un paso de baile muy famoso en internet.", "Una secuencia ordenada de instrucciones para resolver un problema.", "Una marca de videojuegos portátil.", "Un tipo de cable de corriente."],
            correcta: 1
        },
        {
            id: 3,
            mision: "Descubriendo componentes (Fase 3)",
            pregunta: "¿Qué lenguaje usamos principalmente para darle estilo y diseño a una página web?",
            opciones: ["CSS (Cascading Style Sheets)", "Un taladro eléctrico de banco", "Aceite de motor sintético", "Arduino C++ avanzado"],
            correcta: 0
        },
        {
            id: 4,
            mision: "Descubriendo componentes (Fase 4)",
            pregunta: "¿Qué elemento físico permite que un robot detecte obstáculos en su camino?",
            opciones: ["Un altavoz de música", "Un sensor de ultrasonido o infrarrojo", "Una taza de café caliente", "Un archivo de imagen PNG"],
            correcta: 1
        },
        {
            id: 5,
            mision: "Descubriendo componentes (Fase 5)",
            pregunta: "¿Cómo se le llama a la estructura física y mecánica de un robot que podemos tocar?",
            opciones: ["Hardware", "Software", "Red Wi-Fi", "Algoritmo lógico"],
            correcta: 0
        },
        {
            id: 6,
            mision: "Descubriendo componentes (Fase 6)",
            pregunta: "¿Qué término usamos cuando encontramos y corregimos un error en el código?",
            opciones: ["Formatear la pantalla", "Debugging (Depuración)", "Descargar archivos", "Apagar el monitor"],
            correcta: 1
        },
        {
            id: 7,
            mision: "Descubriendo componentes (Fase 7)",
            pregunta: "¿Qué estructura de código usamos para repetir una tarea varias veces sin escribirla de nuevo?",
            opciones: ["Un bucle o ciclo (Loop)", "Un botón de apagado general", "Una variable invisible", "Una hoja de cálculo"],
            correcta: 0
        },
        {
            id: 8,
            mision: "Descubriendo componentes (Fase 8)",
            pregunta: "¿Cuál es el componente que actúa como el 'cerebro' principal procesando datos en una computadora?",
            opciones: ["El ratón (Mouse)", "El procesador (CPU)", "El cable de corriente", "El teclado numérico"],
            correcta: 1
        },
        {
            id: 9,
            mision: "Descubriendo componentes (Fase 9)",
            pregunta: "¿Qué significan las siglas HTML en el desarrollo web?",
            opciones: ["HyperText Markup Language", "Hyper Tool Mega Logic", "Home Tech Modern Light", "Hardware Total Machine Logic"],
            correcta: 0
        },
        {
            id: 10,
            mision: "Descubriendo componentes (Fase 10)",
            pregunta: "¿Para qué sirve una 'variable' en programación?",
            opciones: ["Para guardar y almacenar datos o valores (como puntos o nombres).", "Para cambiar de color la pantalla aleatoriamente cada segundo.", "Para desconectar el internet de la casa.", "Para congelar el navegador web."],
            correcta: 0
        },
        {
            id: 11,
            mision: "Descubriendo componentes (Fase 11)",
            pregunta: "Si un bucle se repite mientras 'camino < 5 pasos', ¿cuántas veces avanza?",
            opciones: ["10 pasos exactos", "5 pasos (del 0 al 4)", "Ningún paso", "Infinitas veces"],
            correcta: 1
        },
        {
            id: 12,
            mision: "Descubriendo componentes (Fase 12)",
            pregunta: "En diseño web responsivo, ¿qué herramienta adaptamos para celulares y computadoras?",
            opciones: ["Las consultas de medios (Media Queries)", "Pegamento escolar blanco", "Una antena parabólica casera", "Un destornillador de estrella"],
            correcta: 0
        },
        {
            id: 13,
            mision: "Descubriendo componentes (Fase 13)",
            pregunta: "¿Qué operador lógico usamos si queremos que se cumplan ambas condiciones al mismo tiempo?",
            opciones: ["Operador O (OR)", "Operador Y (AND)", "Operador NO (NOT)", "Operador de suma simple"],
            correcta: 1
        },
        {
            id: 14,
            mision: "Descubriendo componentes (Fase 14)",
            pregunta: "¿Cuál es una buena práctica de ciberseguridad al crear tus claves de usuario?",
            opciones: ["Usar tu fecha de nacimiento o '12345'", "Combinar letras mayúsculas, minúsculas, números y símbolos", "Anotar la contraseña en un papel en la frente", "Compartirla con todo el mundo"],
            correcta: 1
        },
        {
            id: 15,
            mision: "Descubriendo componentes (Fase 15)",
            pregunta: "¿Qué tipo de lenguaje de programación se asemeja a armar fichas de colores o LEGOs?",
            opciones: ["Programación por bloques", "Ensamblador puro", "C++ avanzado", "Binario puro de 64 bits"],
            correcta: 0
        },
        {
            id: 16,
            mision: "Descubriendo componentes (Fase 16)",
            pregunta: "¿Qué plataforma en la nube utilizamos para guardar repositorios de código y proyectos?",
            opciones: ["GitHub", "Un horno microondas digital", "Una memoria USB de madera", "Un reproductor de CD"],
            correcta: 0
        },
        {
            id: 17,
            mision: "Descubriendo componentes (Fase 17)",
            pregunta: "¿Qué significa optimizar el código de un programa?",
            opciones: ["Hacer que corra más rápido y con un uso eficiente de recursos.", "Borrar todo el proyecto por accidente.", "Pintar el monitor de color verde.", "Aumentar los errores intencionalmente."],
            correcta: 0
        },
        {
            id: 18,
            mision: "Descubriendo componentes (Fase 18)",
            pregunta: "¿Qué es una función reutilizable en JavaScript?",
            opciones: ["Un bloque de código con nombre que podemos invocar cuantas veces queramos.", "Un error que congela la pestaña del navegador.", "Una imagen en formato PNG.", "Un componente de hardware externo."],
            correcta: 0
        },
        {
            id: 19,
            mision: "Descubriendo componentes (Fase 19)",
            pregunta: "¿Qué tecnología simula la inteligencia humana en máquinas y aplicaciones?",
            opciones: ["Inteligencia Artificial (IA)", "Un espejo retrovisor", "Electricidad estática", "Un circuito cerrado simple"],
            correcta: 0
        },
        {
            id: 20,
            mision: "Descubriendo componentes (Fase 20)",
            pregunta: "¡Último reto de Grado 3.°! ¿Cuál es el secreto de un gran programador y creador tecnológico?",
            opciones: ["Nunca rendirse ante un error y practicar todos los días con curiosidad.", "Saber apagar la computadora con una patada.", "Memorizarse todo internet en un segundo.", "No probar nunca sus propios programas."],
            correcta: 0
        }
    ],
    grado4: [
        {
            id: 1,
            mision: "Lógica de circuitos (Fase 1)",
            pregunta: "¿Qué componente electrónico almacena temporalmente carga eléctrica en un circuito?",
            opciones: ["El condensador (capacitor)", "Un cable de cobre plano", "Una resistencia de carbón", "Un interruptor manual"],
            correcta: 0
        },
        {
            id: 2,
            mision: "Lógica de circuitos (Fase 2)",
            pregunta: "¿Cómo se conecta correctamente este sensor o actuador en la protoboard?",
            opciones: ["En serie con resistencia", "Directo a VCC y GND", "A un pin analógico/digital", "Todas las anteriores"],
            correcta: 3
        },
        {
            id: 3,
            mision: "Lógica de circuitos (Fase 3)",
            pregunta: "¿Cuál es la unidad de medida de la resistencia eléctrica?",
            opciones: ["Ohmios (Ω)", "Voltios (V)", "Amperios (A)", "Watts (W)"],
            correcta: 0
        },
        {
            id: 4,
            mision: "Lógica de circuitos (Fase 4)",
            pregunta: "¿Qué función cumple un diodo LED dentro de un circuito básico?",
            opciones: ["Emitir luz al pasar corriente eléctrica en sentido correcto", "Almacenar datos binarios en la nube", "Bloquear totalmente el voltaje sin pasar nada", "Generar sonido de alerta agudo"],
            correcta: 0
        },
        {
            id: 5,
            mision: "Lógica de circuitos (Fase 5)",
            pregunta: "¿Qué instrumento medidor utilizamos para comprobar el voltaje y la continuidad eléctrica?",
            opciones: ["Un multímetro o tester", "Un compás de dibujo", "Un termómetro ambiental", "Una regla graduada"],
            correcta: 0
        },
        {
            id: 6,
            mision: "Lógica de circuitos (Fase 6)",
            pregunta: "¿Qué diferencia hay entre corriente continua (DC) y corriente alterna (AC)?",
            opciones: ["La DC fluye en un solo sentido; la AC cambia de dirección periódicamente", "La AC solo sirve para protoboards pequeñas", "No existe ninguna diferencia técnica", "La DC se usa exclusivamente en plantas nucleares"],
            correcta: 0
        },
        {
            id: 7,
            mision: "Lógica de circuitos (Fase 7)",
            pregunta: "¿Qué es un servomotor y en qué se diferencia de un motor de corriente directa normal?",
            opciones: ["Puede posicionarse con precisión en un ángulo específico (0 a 180 grados)", "Gira infinitamente sin control de velocidad", "Funciona únicamente con energía solar directa", "No requiere ningún tipo de conexión eléctrica"],
            correcta: 0
        },
        {
            id: 8,
            mision: "Lógica de circuitos (Fase 8)",
            pregunta: "¿Para qué sirve un protoboard o placa de pruebas sin soldadura?",
            opciones: ["Para armar y probar circuitos electrónicos de forma rápida y sin quemar componentes", "Para soldar permanentemente piezas metálicas pesadas", "Para almacenar programas escritos en Python", "Para conectar la computadora al internet satelital"],
            correcta: 0
        },
        {
            id: 9,
            mision: "Lógica de circuitos (Fase 9)",
            pregunta: "¿Qué ley fundamental de la electricidad relaciona el voltaje, la corriente y la resistencia?",
            opciones: ["La Ley de Ohm (V = I * R)", "La Ley de gravedad universal", "La Ley de termodinámica pura", "La Ley de los gases ideales"],
            correcta: 0
        },
        {
            id: 10,
            mision: "Lógica de circuitos (Fase 10)",
            pregunta: "¿Qué hace un sensor ultrasónico (como el HC-SR04)?",
            opciones: ["Mide distancias rebotando ondas sonoras de alta frecuencia", "Detecta la temperatura corporal de las personas", "Mide la humedad del suelo de una planta", "Captura fotografías en alta definición"],
            correcta: 0
        },
        {
            id: 11,
            mision: "Lógica de circuitos (Fase 11)",
            pregunta: "¿Qué es un circuito en serie?",
            opciones: ["Un circuito donde los componentes están conectados uno tras otro en una sola trayectoria", "Un circuito con múltiples caminos independientes para la corriente", "Un sistema que no tiene fuente de alimentación", "Un cable cortado por la mitad"],
            correcta: 0
        },
        {
            id: 12,
            mision: "Lógica de circuitos (Fase 12)",
            pregunta: "¿Qué es un circuito en paralelo?",
            opciones: ["Un circuito con múltiples caminos donde la corriente se divide entre las ramas", "Un circuito donde los componentes se queman al instante", "Una línea recta sin conexiones secundarias", "Un esquema dibujado en papel bond"],
            correcta: 0
        },
        {
            id: 13,
            mision: "Lógica de circuitos (Fase 13)",
            pregunta: "¿Qué función cumple una resistencia eléctrica en un circuito con LEDs?",
            opciones: ["Limitar el flujo de corriente para evitar que el LED se queme", "Aumentar el voltaje a niveles peligrosos", "Almacenar energía para emergencias", "Convertir la luz en sonido"],
            correcta: 0
        },
        {
            id: 14,
            mision: "Lógica de circuitos (Fase 14)",
            pregunta: "¿Qué es un pulsador (push button) normalmente abierto?",
            opciones: ["Un interruptor que cierra el circuito solo mientras lo mantenemos presionado", "Un componente que se rompe al primer toque", "Una batería recargable pequeña", "Un sensor de luz infrarroja"],
            correcta: 0
        },
        {
            id: 15,
            mision: "Lógica de circuitos (Fase 15)",
            pregunta: "¿Qué componente se utiliza para detectar luz ambiental en un robot seguidor?",
            opciones: ["Una fotorresistencia o sensor LDR", "Un motor paso a paso", "Un condensador electrolítico", "Un zumbador piezoeléctrico"],
            correcta: 0
        },
        {
            id: 16,
            mision: "Lógica de circuitos (Fase 16)",
            pregunta: "¿Qué es un zumbador (buzzer) activo en electrónica?",
            opciones: ["Un componente que emite un tono acústico al recibir corriente directa", "Un ventilador para enfriar el procesador", "Una pantalla LCD táctil", "Un sensor de movimiento magnético"],
            correcta: 0
        },
        {
            id: 17,
            mision: "Lógica de circuitos (Fase 17)",
            pregunta: "¿Qué precaución debemos tener siempre antes de alimentar un circuito en la protoboard?",
            opciones: ["Revisar las polaridades (positivo y negativo) para evitar cortocircuitos", "Tocar los cables con las manos mojadas", "Desconectar la pantalla de la computadora", "Pintar los componentes con marcador"],
            correcta: 0
        },
        {
            id: 18,
            mision: "Lógica de circuitos (Fase 18)",
            pregunta: "¿Qué es un circuito integrado (chip)?",
            opciones: ["Un conjunto de circuitos electrónicos miniaturizados en un pequeño encapsulado de silicio", "Un cable USB muy largo", "Una placa de madera pintada", "Un tipo de pila alcalina"],
            correcta: 0
        },
        {
            id: 19,
            mision: "Lógica de circuitos (Fase 19)",
            pregunta: "¿Qué componente permite modular la velocidad de un motor DC mediante una perilla giratoria?",
            opciones: ["Un potenciómetro (resistencia variable)", "Un diodo LED rojo", "Un cable de fibra óptica", "Una resistencia fija de carbón"],
            correcta: 0
        },
        {
            id: 20,
            mision: "Lógica de circuitos (Fase 20)",
            pregunta: "¡Excelente trabajo en Grado 4.°! ¿Qué habilidad clave consolida un experto en circuitos?",
            opciones: ["Diseñar, conectar y depurar sistemas electrónicos seguros y funcionales", "Dejar los cables sueltos al azar", "Ignorar las normas de voltaje", "Trabajar sin verificar conexiones"],
            correcta: 0
        }
    ],
    grado5: [
        {
            id: 1,
            mision: "Algoritmos y Mecatrónica (Fase 1)",
            pregunta: "¿Qué es un diagrama de flujo en programación?",
            opciones: ["Una representación gráfica y secuencial de un algoritmo usando símbolos estándar", "Un dibujo artístico libre sin reglas", "Un plano arquitectónico de una casa", "Una lista de compras del supermercado"],
            correcta: 0
        },
        {
            id: 2,
            mision: "Algoritmos y Mecatrónica (Fase 2)",
            pregunta: "¿Qué es una estructura condicional (como 'Si / If')?",
            opciones: ["Una instrucción que toma decisiones basadas en si se cumple o no una condición", "Un bucle infinito que nunca se detiene", "Una variable que guarda números enteros", "Un error de sintaxis en el código"],
            correcta: 0
        },
        {
            id: 3,
            mision: "Algoritmos y Mecatrónica (Fase 3)",
            pregunta: "¿Qué es un vector o arreglo (array) en programación?",
            opciones: ["Una estructura de datos que permite almacenar múltiples elementos bajo un mismo nombre", "Una sola variable que solo acepta una letra", "Un cable de conexión USB", "Un tipo de sensor de temperatura"],
            correcta: 0
        },
        {
            id: 4,
            mision: "Algoritmos y Mecatrónica (Fase 4)",
            pregunta: "¿Qué significa la programación orientada a eventos?",
            opciones: ["Un paradigma donde el flujo del programa responde a acciones del usuario o sensores", "Un programa que solo corre una vez al año", "Una forma de apagar la computadora con música", "Un código escrito en papel"],
            correcta: 0
        },
        {
            id: 5,
            mision: "Algoritmos y Mecatrónica (Fase 5)",
            pregunta: "¿Qué es un operador de comparación en código (ej. ==, >, <)?",
            opciones: ["Un símbolo para comparar dos valores y devolver verdadero o falso", "Un comando para sumar textos largos", "Una herramienta para borrar archivos", "Un tipo de bucle numérico"],
            correcta: 0
        },
        {
            id: 6,
            mision: "Algoritmos y Mecatrónica (Fase 6)",
            pregunta: "¿Qué diferencia hay entre un bucle For y un bucle While?",
            opciones: ["El For se usa cuando sabemos cuántas repeticiones habrá; el While depende de una condición", "No hay ninguna diferencia en la práctica", "El While solo sirve para sumar", "El For congela el navegador siempre"],
            correcta: 0
        },
        {
            id: 7,
            mision: "Algoritmos y Mecatrónica (Fase 7)",
            pregunta: "¿Qué es la mecatrónica como disciplina tecnológica?",
            opciones: ["La integración sinérgica de la mecánica, la electrónica, la informática y el control", "El estudio exclusivo de la química orgánica", "La reparación manual de bicicletas", "La creación de páginas web estáticas"],
            correcta: 0
        },
        {
            id: 8,
            mision: "Algoritmos y Mecatrónica (Fase 8)",
            pregunta: "¿Qué es una función con parámetros en programación?",
            opciones: ["Un bloque de código reutilizable que recibe datos de entrada para procesarlos", "Una variable global que nunca cambia", "Un error de compilación grave", "Un menú desplegable de HTML"],
            correcta: 0
        },
        {
            id: 9,
            mision: "Algoritmos y Mecatrónica (Fase 9)",
            pregunta: "¿Qué es un sistema embebido (embedded system)?",
            opciones: ["Un sistema informático diseñado para realizar funciones dedicadas en un dispositivo (ej. Arduino)", "Una aplicación móvil de redes sociales", "Un archivo de texto plano en el escritorio", "Una hoja de cálculo de Excel"],
            correcta: 0
        },
        {
            id: 10,
            mision: "Algoritmos y Mecatrónica (Fase 10)",
            pregunta: "¿Qué significa el concepto de modularidad en el desarrollo de software?",
            opciones: ["Dividir un programa grande en partes pequeñas, independientes y mantenibles", "Hacer todo el código en una sola línea larguísima", "Evitar el uso de funciones y variables", "Copiar códigos de internet sin revisar"],
            correcta: 0
        },
        {
            id: 11,
            mision: "Algoritmos y Mecatrónica (Fase 11)",
            pregunta: "¿Qué es una variable de tipo booleano (boolean)?",
            opciones: ["Una variable que solo almacena dos estados: verdadero (true) o falso (false)", "Una variable para textos largos", "Un número decimal con muchos decimales", "Una imagen comprimida"],
            correcta: 0
        },
        {
            id: 12,
            mision: "Algoritmos y Mecatrónica (Fase 12)",
            pregunta: "¿Qué es la depuración (debugging) algorítmica avanzada?",
            opciones: ["El proceso metódico de rastrear, aislar y corregir errores lógicos en el código", "Borrar todo el disco duro por si acaso", "Aumentar la velocidad del procesador", "Cambiar el fondo de pantalla"],
            correcta: 0
        },
        {
            id: 13,
            mision: "Algoritmos y Mecatrónica (Fase 13)",
            pregunta: "¿Qué es un sensor analógico frente a uno digital?",
            opciones: ["El analógico entrega valores continuos en un rango; el digital estados discretos (0 o 1)", "El digital no necesita cables", "El analógico solo funciona con baterías agotadas", "Son exactamente lo mismo"],
            correcta: 0
        },
        {
            id: 14,
            mision: "Algoritmos y Mecatrónica (Fase 14)",
            pregunta: "¿Qué es un actuador en un sistema mecatrónico?",
            opciones: ["Un dispositivo que transforma una señal eléctrica en una acción física o movimiento", "Un sensor que mide la luz ambiente", "Una línea de código en JavaScript", "Un conector USB dañado"],
            correcta: 0
        },
        {
            id: 15,
            mision: "Algoritmos y Mecatrónica (Fase 15)",
            pregunta: "¿Qué es un operador lógico AND (Y) en condiciones complejas?",
            opciones: ["Devuelve verdadero solo si todas las condiciones evaluadas son verdaderas", "Devuelve verdadero si al menos una condición se cumple", "Invierte el estado de la variable", "Borra el búfer de memoria"],
            correcta: 0
        },
        {
            id: 16,
            mision: "Algoritmos y Mecatrónica (Fase 16)",
            pregunta: "¿Qué es la persistencia de datos con localStorage?",
            opciones: ["Una herramienta para guardar información en el navegador del usuario localmente", "Un disco duro externo conectado por USB", "Una base de datos en la nube de pago mensual", "Un cable de red de alta velocidad"],
            correcta: 0
        },
        {
            id: 17,
            mision: "Algoritmos y Mecatrónica (Fase 17)",
            pregunta: "¿Qué es un algoritmo recursivo?",
            opciones: ["Una función que se llama a sí misma para resolver subproblemas hasta un caso base", "Un bucle infinito sin salida", "Un error de sintaxis imperdonable", "Una animación en CSS"],
            correcta: 0
        },
        {
            id: 18,
            mision: "Algoritmos y Mecatrónica (Fase 18)",
            pregunta: "¿Qué es el control PID (Proporcional, Integral, Derivativo) en robótica?",
            opciones: ["Un algoritmo de control realimentado para mantener una variable en su valor deseado", "Un juego de video en línea", "Un tipo de memoria RAM ultra rápida", "Un protocolo de internet inalámbrico"],
            correcta: 0
        },
        {
            id: 19,
            mision: "Algoritmos y Mecatrónica (Fase 19)",
            pregunta: "¿Qué es la programación asíncrona en JavaScript?",
            opciones: ["Un modelo que permite ejecutar tareas en segundo plano sin bloquear el hilo principal", "Un código que se ejecuta al revés", "Un error de conexión Wi-Fi", "Una función matemática compleja"],
            correcta: 0
        },
        {
            id: 20,
            mision: "Algoritmos y Mecatrónica (Fase 20)",
            pregunta: "¡Felicidades, llegaste al nivel máximo! ¿Cuál es el siguiente paso para un gran ingeniero mecatrónico?",
            opciones: ["Crear proyectos innovadores que combinen código, circuitos y creatividad para transformar el mundo", "Dejar de aprender y cerrar la computadora", "Borrar todos los repositorios de GitHub", "Trabajar únicamente con papel y lápiz"],
            correcta: 0
        }
    ]
};

const catalogoTiendaData = [
    { id: 'cabeza_mech', tipo: 'cabeza', nombre: 'Cabeza Mech', icono: '🤖', costo: 50 },
    { id: 'cabeza_alien', tipo: 'cabeza', nombre: 'Cabeza Alien', icono: '👽', costo: 100 },
    { id: 'cuerpo_base', tipo: 'cuerpo', nombre: 'Cuerpo Base', icono: '📦', costo: 50 },
    { id: 'cuerpo_nucleo', tipo: 'cuerpo', nombre: 'Cuerpo Núcleo', icono: '🔋', costo: 125 },
    { id: 'brazos_metal', tipo: 'brazos', nombre: 'Brazos Metal', icono: '🦾', costo: 75 },
    { id: 'brazos_garra', tipo: 'brazos', nombre: 'Brazos Garra', icono: '🦀', costo: 140 },
    { id: 'piernas_ruedas', tipo: 'piernas', nombre: 'Ruedas Turbo', icono: '🛞', costo: 80 },
    { id: 'piernas_oruga', tipo: 'piernas', nombre: 'Pies Oruga', icono: '⛓️', costo: 120 },
    { id: 'accesorio_luz', tipo: 'accesorio', nombre: 'Luz de Energía', icono: '✨', costo: 60 },
    { id: 'accesorio_rayo', tipo: 'accesorio', nombre: 'Accesorio Rayo', icono: '⚡', costo: 150 }
];

// --- INICIALIZACIÓN AL CARGAR LA PÁGINA ---
document.addEventListener('DOMContentLoaded', () => {
    restaurarSesion();
    cargarEstado();
    renderizarTodo();
    actualizarBotonSesion();
    sincronizarGradoUI();
});

function renderizarTodo() {
    actualizarPuntosUI();
    renderizarMapaNiveles();
    renderizarTaller();
    renderizarLogros();
}

function actualizarPuntosUI() {
    document.getElementById('puntos-navbar').innerText = estadoApp.puntos;
    document.getElementById('puntos-taller-display').innerText = estadoApp.puntos;
}

function seleccionarGrado(gradoKey) {
    estadoApp.gradoActual = gradoKey;
    
    document.querySelectorAll('.card-level').forEach(card => card.classList.remove('active-grado'));
    const cardActiva = document.getElementById(`card-${gradoKey}`);
    if(cardActiva) cardActiva.classList.add('active-grado');

    const nombres = { grado3: '3.°', grado4: '4.°', grado5: '5.°' };
    document.getElementById('titulo-grado-actual').innerText = `🎮 NIVELES: GRADO ${nombres[gradoKey]}`;

    renderizarMapaNiveles();
    guardarEstado();

    // Lleva directamente al mapa de niveles del grado elegido
    const mapa = document.getElementById('mapa-programacion');
    if (mapa) {
        const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        mapa.scrollIntoView({ behavior: reducido ? 'auto' : 'smooth', block: 'start' });
    }
}

// --- RENDERIZAR MAPA DE NIVELES ---
function renderizarMapaNiveles() {
    const contenedor = document.getElementById('grid-niveles-juego');
    if(!contenedor) return;
    contenedor.innerHTML = '';

    const estados = estadoApp.progreso[estadoApp.gradoActual];

    estados.forEach((est, idx) => {
        const btn = document.createElement('button');
        btn.className = `casilla-nivel estado-${est}`;
        
        let icono = idx + 1;
        if(est === 'correcto') icono = '✅';
        if(est === 'incorrecto') icono = '❌';

        btn.innerHTML = `<span>${icono}</span>`;
        btn.onclick = () => abrirNivel(idx);

        // Un nivel solo se puede responder una vez
        if (est !== 'pendiente') {
            btn.disabled = true;
            btn.title = 'Este nivel ya fue respondido';
        }

        contenedor.appendChild(btn);
    });
}

function abrirNivel(index) {
    if (estadoApp.progreso[estadoApp.gradoActual][index] !== 'pendiente') return; // ya respondido
    estadoApp.nivelSeleccionado = index;
    const datosNivel = preguntasBD[estadoApp.gradoActual][index];

    document.getElementById('nivel-titulo-modal').innerText = `Nivel ${index + 1}`;
    document.getElementById('nivel-objetivo-text').innerText = datosNivel.mision;
    document.getElementById('nivel-pregunta-text').innerText = datosNivel.pregunta;

    const feedback = document.getElementById('mensaje-feedback');
    feedback.style.display = 'none';

    const opcionesContenedor = document.getElementById('opciones-respuesta');
    opcionesContenedor.innerHTML = '';

    datosNivel.opciones.forEach((opc, opcIdx) => {
        const btnOpc = document.createElement('button');
        btnOpc.className = 'btn-opcion-respuesta';
        btnOpc.innerText = opc;
        btnOpc.onclick = () => verificarRespuesta(opcIdx, datosNivel.correcta);
        opcionesContenedor.appendChild(btnOpc);
    });

    document.getElementById('modal-pantalla-nivel').classList.add('active');
}

function verificarRespuesta(seleccionada, correcta) {
    // Solo cuenta la primera respuesta de cada nivel (evita clics repetidos)
    const nivel = estadoApp.nivelSeleccionado;
    if (nivel === null || estadoApp.progreso[estadoApp.gradoActual][nivel] !== 'pendiente') return;
    document.querySelectorAll('#opciones-respuesta button').forEach(b => { b.disabled = true; });

    const feedback = document.getElementById('mensaje-feedback');
    feedback.style.display = 'block';

    if (seleccionada === correcta) {
        estadoApp.puntos += 100;
        estadoApp.progreso[estadoApp.gradoActual][estadoApp.nivelSeleccionado] = 'correcto';
        feedback.className = 'feedback-box fb-exito';
        feedback.innerText = '¡Correcto! 🎉 Ganaste +100 RoboPuntos.';
    } else {
        estadoApp.puntos = Math.max(0, estadoApp.puntos - 25);
        estadoApp.progreso[estadoApp.gradoActual][estadoApp.nivelSeleccionado] = 'incorrecto';
        feedback.className = 'feedback-box fb-error';
        feedback.innerText = '¡Oops! ❌ Perdiste 25 RoboPuntos. ¡Sigue intentando!';
    }

    actualizarPuntosUI();
    renderizarMapaNiveles();
    renderizarTaller();
    renderizarLogros();
    guardarEstado();

    setTimeout(() => {
        cerrarNivel();
    }, 1500);
}

function cerrarNivel() {
    document.getElementById('modal-pantalla-nivel').classList.remove('active');
}

function reiniciarProgresoGradoActual() {
    // Los puntos ganados en este grado se restan al reiniciar, para no repetir niveles y ganar puntos otra vez
    const estados = estadoApp.progreso[estadoApp.gradoActual];
    const balance = estados.filter(e => e === 'correcto').length * 100 - estados.filter(e => e === 'incorrecto').length * 25;
    const descuento = Math.max(0, balance);

    let aviso = '¿Seguro que quieres reiniciar el progreso de este grado?';
    if (descuento > 0) aviso += `\n\nTambién se restarán ${descuento} RoboPuntos, que son los que ganaste en este grado.`;

    if (confirm(aviso)) {
        estadoApp.puntos = Math.max(0, estadoApp.puntos - descuento);
        estadoApp.progreso[estadoApp.gradoActual] = Array(20).fill('pendiente');
        actualizarPuntosUI();
        renderizarMapaNiveles();
        renderizarTaller();
        renderizarLogros();
        guardarEstado();
    }
}

// --- RENDERIZAR TALLER Y TIENDA ---
function renderizarTaller() {
    const piezas = estadoApp.partesRobot;
    const piezasVisuales = {
        cabeza: document.getElementById('part-cabeza'),
        cuerpo: document.getElementById('part-cuerpo'),
        brazos: document.getElementById('part-brazos'),
        piernas: document.getElementById('part-piernas'),
        accesorio: document.getElementById('part-accesorio')
    };

    Object.entries(piezasVisuales).forEach(([tipo, elemento]) => {
        if (elemento) {
            elemento.dataset.variant = piezas[tipo];
        }
    });

    const robot = document.getElementById('robot-2d');
    if (robot) {
        robot.classList.remove('robot-avanzando', 'robot-girando', 'robot-saludando', 'robot-bailando');
    }

    const catalogo = document.getElementById('catalogo-piezas');
    if (!catalogo) return;
    catalogo.innerHTML = '';

    catalogoTiendaData.forEach(p => {
        const equipado = piezas[p.tipo] === p.id;
        const puedeComprar = estadoApp.puntos >= p.costo || equipado;
        const itemDiv = document.createElement('div');
        itemDiv.className = `item-tienda${equipado ? ' item-equipado' : ''}`;
        itemDiv.innerHTML = `
            <div class="item-info">
                <span class="item-icon">${p.icono}</span>
                <div>
                    <div class="item-nombre">${p.nombre}</div>
                    <div class="item-precio">🪙 ${p.costo} pts</div>
                </div>
            </div>
            <button class="btn-comprar" type="button" ${puedeComprar ? '' : 'disabled'} onclick="comprarParte('${p.tipo}', '${p.id}', ${p.costo})">
                ${equipado ? 'Equipado' : 'Equipar'}
            </button>
        `;
        catalogo.appendChild(itemDiv);
    });
}

function comprarParte(tipo, idPieza, costo) {
    const yaEquipado = estadoApp.partesRobot[tipo] === idPieza;
    if (yaEquipado) {
        mostrarEstadoRobot('¡Esa pieza ya está equipada! 🤖');
        return;
    }

    if (estadoApp.puntos >= costo) {
        estadoApp.puntos -= costo;
        estadoApp.partesRobot[tipo] = idPieza;
        actualizarPuntosUI();
        renderizarTaller();
        renderizarLogros();
        guardarEstado();
        mostrarEstadoRobot('¡Pieza equipada con éxito! 🛠️');
    } else {
        mostrarEstadoRobot('¡Necesitas más RoboPuntos! Sigue resolviendo niveles. 🚀');
    }
}

function mostrarEstadoRobot(mensaje) {
    const estado = document.getElementById('robot-status');
    if (estado) estado.innerText = mensaje;
}

function controlarRobot(accion) {
    const robot = document.getElementById('robot-2d');
    if (!robot) return;

    const acciones = {
        avanzar: { clase: 'robot-avanzando', texto: '¡Avanzando! Bip bip... ⬆️' },
        girar: { clase: 'robot-girando', texto: '¡Girando para explorar! ↪️' },
        saludar: { clase: 'robot-saludando', texto: '¡Hola, constructor! 👋' },
        bailar: { clase: 'robot-bailando', texto: '¡Modo baile activado! 🎵' }
    };
    const seleccion = acciones[accion];
    if (!seleccion) return;

    robot.classList.remove('robot-avanzando', 'robot-girando', 'robot-saludando', 'robot-bailando');
    void robot.offsetWidth;
    robot.classList.add(seleccion.clase);
    mostrarEstadoRobot(seleccion.texto);

    window.clearTimeout(window.robotAnimacionTimer);
    window.robotAnimacionTimer = window.setTimeout(() => {
        robot.classList.remove(seleccion.clase);
        mostrarEstadoRobot('¡Robot listo! Elige una acción.');
    }, 1200);
}

function renderizarLogros() {
    const cont = document.getElementById('contenedor-logros');
    if(!cont) return;
    cont.innerHTML = `
        <div class="card-logro">🥇 <b>Iniciado:</b> ${estadoApp.puntos >= 100 ? 'Desbloqueado' : 'Bloqueado'}</div>
        <div class="card-logro">🏆 <b>Experto:</b> ${estadoApp.puntos >= 500 ? 'Desbloqueado' : 'Bloqueado'}</div>
        <div class="card-logro">👑 <b>Maestro Robótico:</b> ${estadoApp.puntos >= 1000 ? 'Desbloqueado' : 'Bloqueado'}</div>
    `;
}

// --- MODAL DE CONTACTO Y ASISTENTE ---
function abrirContacto() {
    document.getElementById('modal-contacto').classList.add('active');
}

function cerrarContacto() {
    document.getElementById('modal-contacto').classList.remove('active');
}

function enviarMensajeContacto(e) {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto. 🚀');
    cerrarContacto();
}

function alternarBocadillo() {
    const b = document.getElementById('bocadillo-asistente');
    if(b) b.style.display = (b.style.display === 'none' || b.style.display === '') ? 'block' : 'none';
}

function cerrarBocadillo() {
    const b = document.getElementById('bocadillo-asistente');
    if(b) b.style.display = 'none';
}

// --- PERSISTENCIA LOCAL ---
function guardarEstado() {
    localStorage.setItem(claveEstado(), JSON.stringify(estadoApp));
}

function cargarEstado() {
    const guardado = localStorage.getItem(claveEstado());
    if (!guardado) return;

    try {
        const datosGuardados = JSON.parse(guardado);
        estadoApp = {
            ...estadoApp,
            ...datosGuardados,
            progreso: {
                ...estadoApp.progreso,
                ...(datosGuardados.progreso || {})
            },
            partesRobot: {
                ...estadoApp.partesRobot,
                ...(datosGuardados.partesRobot || {})
            }
        };

        const equivalenciasAntiguas = {
            '🤖': 'cabeza_para_robot_mech',
            '👽': 'cabeza_para_robot_alien',
            '📦': 'cuerpo_para_robot_base',
            '🔋': 'cuerpo_para_robot_nucleo',
            '💪': 'brazos_para_robot_metal',
            '🦾': 'brazos_para_robot_metal',
            '🦀': 'brazos_para_robot_garra',
            '🛞': 'piernas_para_robot_ruedas',
            '⛓️': 'piernas_para_robot_oruga',
            '✨': 'accesorio_para_robot_luz',
            '⚡': 'accesorio_para_robot_rayo'
        };

        Object.keys(estadoApp.partesRobot).forEach(tipo => {
            const valor = estadoApp.partesRobot[tipo];
            if (equivalenciasAntiguas[valor]) {
                estadoApp.partesRobot[tipo] = equivalenciasAntiguas[valor];
            }
        });
    } catch (error) {
        console.warn('No se pudo cargar el progreso guardado. Se iniciará un progreso nuevo.', error);
    }
}

/* =========================================
   SISTEMA DE INICIO DE SESIÓN
   - Las cuentas y la sesión se guardan en este navegador (localStorage).
   - Las contraseñas nunca se guardan en texto plano: se guarda un hash con sal.
   - Cada cuenta tiene su propio progreso, puntos y robot.
   ========================================= */
const CLAVE_USUARIOS = 'robokids_users';
const CLAVE_SESION = 'robokids_session';
const CLAVE_INVITADO = 'robokids_state';

let sesionActual = null;      // { id, nombre } o null si es invitado
let modoAuth = 'login';       // 'login' | 'registro'

function claveEstado() {
    return sesionActual ? `${CLAVE_INVITADO}_${sesionActual.id}` : CLAVE_INVITADO;
}

function leerUsuarios() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_USUARIOS)) || {};
    } catch (e) {
        return {};
    }
}

function guardarUsuarios(usuarios) {
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
}

function generarSal() {
    const bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
}

async function hashClave(clave, sal) {
    const texto = `${sal}:${clave}`;
    if (window.crypto && window.crypto.subtle) {
        const datos = new TextEncoder().encode(texto);
        const buf = await window.crypto.subtle.digest('SHA-256', datos);
        return Array.from(new Uint8Array(buf), b => b.toString(16).padStart(2, '0')).join('');
    }
    // Respaldo para navegadores sin crypto.subtle (p. ej. páginas sin HTTPS)
    let h = 5381;
    for (let i = 0; i < texto.length; i++) h = ((h << 5) + h + texto.charCodeAt(i)) | 0;
    return `fb${(h >>> 0).toString(16)}`;
}

function restaurarSesion() {
    try {
        const guardada = JSON.parse(localStorage.getItem(CLAVE_SESION));
        if (guardada && leerUsuarios()[guardada.id]) sesionActual = guardada;
    } catch (e) {
        sesionActual = null;
    }
}

function estadoBaseVacio() {
    return {
        puntos: 0,
        gradoActual: 'grado3',
        nivelSeleccionado: null,
        progreso: {
            grado3: Array(20).fill('pendiente'),
            grado4: Array(20).fill('pendiente'),
            grado5: Array(20).fill('pendiente')
        },
        partesRobot: {
            cabeza: 'cabeza_mech',
            cuerpo: 'cuerpo_base',
            brazos: 'brazos_metal',
            piernas: 'piernas_ruedas',
            accesorio: 'accesorio_luz'
        }
    };
}

function sincronizarGradoUI() {
    const nombres = { grado3: '3.°', grado4: '4.°', grado5: '5.°' };
    document.querySelectorAll('.card-level').forEach(card => card.classList.remove('active-grado'));
    const cardActiva = document.getElementById(`card-${estadoApp.gradoActual}`);
    if (cardActiva) cardActiva.classList.add('active-grado');
    const titulo = document.getElementById('titulo-grado-actual');
    if (titulo) titulo.innerText = `🎮 NIVELES: GRADO ${nombres[estadoApp.gradoActual] || '3.°'}`;
}

function recargarEstadoDeCuenta() {
    estadoApp = estadoBaseVacio();
    cargarEstado();
    renderizarTodo();
    sincronizarGradoUI();
    actualizarBotonSesion();
}

function actualizarBotonSesion() {
    const btn = document.getElementById('btn-sesion');
    if (!btn) return;
    btn.textContent = sesionActual ? '👤' : '🔑';
    const etiqueta = sesionActual ? `Sesión de ${sesionActual.nombre}` : 'Iniciar sesión';
    btn.title = etiqueta;
    btn.setAttribute('aria-label', etiqueta);
}

// --- MODAL ---
function abrirLogin() {
    const vistaAuth = document.getElementById('vista-auth');
    const vistaCuenta = document.getElementById('vista-cuenta');
    if (sesionActual) {
        document.getElementById('cuenta-nombre').textContent = sesionActual.nombre;
        vistaAuth.style.display = 'none';
        vistaCuenta.style.display = 'block';
    } else {
        vistaCuenta.style.display = 'none';
        vistaAuth.style.display = 'block';
        establecerModoAuth('login');
    }
    document.getElementById('modal-login').classList.add('active');
}

function cerrarLogin() {
    document.getElementById('modal-login').classList.remove('active');
}

function mostrarMensajeAuth(texto, tipo) {
    const caja = document.getElementById('auth-mensaje');
    if (!texto) {
        caja.style.display = 'none';
        return;
    }
    caja.className = `feedback-box ${tipo === 'exito' ? 'fb-exito' : 'fb-error'}`;
    caja.textContent = texto;
    caja.style.display = 'block';
}

function establecerModoAuth(modo) {
    modoAuth = modo;
    const registro = modo === 'registro';
    document.getElementById('auth-titulo').textContent = registro ? '🎉 ¡Crea tu cuenta RoboKids!' : '🔑 ¡Entra a RoboKids!';
    document.getElementById('auth-enviar').textContent = registro ? '🚀 ¡Crear cuenta!' : '🚀 ¡Entrar!';
    document.getElementById('auth-cambio-texto').textContent = registro ? '¿Ya tienes cuenta?' : '¿Aún no tienes cuenta?';
    document.getElementById('auth-cambio').textContent = registro ? 'Iniciar sesión' : 'Crear cuenta';

    const clave2 = document.getElementById('auth-clave2');
    clave2.style.display = registro ? 'block' : 'none';
    clave2.required = registro;
    document.getElementById('auth-clave').autocomplete = registro ? 'new-password' : 'current-password';

    document.getElementById('form-auth').reset();
    mostrarMensajeAuth('');
}

function cambiarModoAuth(e) {
    e.preventDefault();
    establecerModoAuth(modoAuth === 'login' ? 'registro' : 'login');
}

async function enviarAuth(e) {
    e.preventDefault();
    const nombre = document.getElementById('auth-usuario').value.trim();
    const clave = document.getElementById('auth-clave').value;
    const id = nombre.toLowerCase();
    const usuarios = leerUsuarios();

    if (nombre.length < 3) {
        mostrarMensajeAuth('El nombre de usuario debe tener al menos 3 caracteres. ✏️');
        return;
    }
    if (clave.length < 6) {
        mostrarMensajeAuth('La contraseña debe tener al menos 6 caracteres. 🔒');
        return;
    }

    if (modoAuth === 'registro') {
        const clave2 = document.getElementById('auth-clave2').value;
        if (clave !== clave2) {
            mostrarMensajeAuth('Las contraseñas no coinciden. ¡Inténtalo otra vez! 🔁');
            return;
        }
        if (usuarios[id]) {
            mostrarMensajeAuth('Ese nombre de usuario ya existe. ¡Prueba con otro! 🤖');
            return;
        }
        const sal = generarSal();
        usuarios[id] = { nombre, sal, hash: await hashClave(clave, sal) };
        guardarUsuarios(usuarios);

        // La cuenta nueva conserva el progreso que ya llevabas como invitado
        sesionActual = { id, nombre };
        localStorage.setItem(CLAVE_SESION, JSON.stringify(sesionActual));
        guardarEstado();
        actualizarBotonSesion();
        mostrarMensajeAuth(`¡Cuenta creada! Bienvenido, ${nombre} 🎉`, 'exito');
        setTimeout(cerrarLogin, 1200);
        return;
    }

    // Inicio de sesión
    const usuario = usuarios[id];
    if (!usuario || (await hashClave(clave, usuario.sal)) !== usuario.hash) {
        mostrarMensajeAuth('Usuario o contraseña incorrectos. ❌');
        return;
    }

    guardarEstado(); // el progreso en curso del invitado no se pierde
    sesionActual = { id, nombre: usuario.nombre };
    localStorage.setItem(CLAVE_SESION, JSON.stringify(sesionActual));
    recargarEstadoDeCuenta();
    mostrarMensajeAuth(`¡Hola de nuevo, ${usuario.nombre}! 🚀`, 'exito');
    setTimeout(cerrarLogin, 1000);
}

function cerrarSesion() {
    guardarEstado();
    sesionActual = null;
    localStorage.removeItem(CLAVE_SESION);
    recargarEstadoDeCuenta();
    cerrarLogin();
}

/* =========================================
   ANIMACIONES AL HACER SCROLL
   (no modifica la lógica del juego)
   ========================================= */
(function () {
    'use strict';

    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const sinObservador = !('IntersectionObserver' in window);

    // 1) Los elementos .rv aparecen cuando entran en pantalla
    const elementos = document.querySelectorAll('.rv');
    if (sinObservador || reducido) {
        elementos.forEach(el => el.classList.add('is-visible'));
    } else {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (!entrada.isIntersecting) return;
                entrada.target.classList.add('is-visible');
                observador.unobserve(entrada.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
        elementos.forEach(el => observador.observe(el));
    }

    // 2) Contenedores que se rellenan por JS (niveles, piezas, medallas): cascada una sola vez
    document.querySelectorAll('[data-stagger]').forEach(cont => {
        const numerar = () => Array.from(cont.children).forEach((hijo, i) => hijo.style.setProperty('--i', i));
        numerar();
        new MutationObserver(numerar).observe(cont, { childList: true });

        const iniciar = () => {
            cont.classList.add('stagger-on');
            setTimeout(() => cont.classList.add('stagger-done'), 1800);
        };

        if (sinObservador || reducido) {
            iniciar();
            return;
        }
        const vigia = new IntersectionObserver((entradas) => {
            if (entradas.some(e => e.isIntersecting)) {
                iniciar();
                vigia.disconnect();
            }
        }, { threshold: 0.15 });
        vigia.observe(cont);
    });

    // 3) Efectos ligados al scroll: progreso, barra superior, parallax del robot y sección activa
    const barra = document.querySelector('.scroll-progress');
    const navbar = document.querySelector('.navbar');
    const cabezas = Array.from(document.querySelectorAll('.robot-head'));
    const pares = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'))
        .map(a => ({ enlace: a, seccion: document.querySelector(a.getAttribute('href')) }))
        .filter(p => p.seccion)
        .sort((a, b) => a.seccion.offsetTop - b.seccion.offsetTop);

    let pendiente = false;
    let hizoScroll = false;
    let activo = null;

    function actualizar() {
        pendiente = false;
        const y = window.scrollY || document.documentElement.scrollTop;
        const maximo = document.documentElement.scrollHeight - window.innerHeight;

        if (barra) barra.style.transform = 'scaleX(' + (maximo > 0 ? Math.min(y / maximo, 1) : 0).toFixed(4) + ')';
        if (navbar) navbar.classList.toggle('scrolled', y > 20);

        if (!reducido) {
            const mitad = window.innerHeight / 2;
            cabezas.forEach(cabeza => {
                const caja = cabeza.parentElement.getBoundingClientRect();
                if (caja.bottom < -120 || caja.top > window.innerHeight + 120) return;
                const d = Math.max(-1, Math.min(1, (caja.top + caja.height / 2 - mitad) / mitad));
                cabeza.style.setProperty('--py', (d * -22).toFixed(1) + 'px');
            });
        }

        // Resalta en el menú la sección que se está viendo (solo después de que la persona haga scroll)
        if (hizoScroll) {
            const linea = window.innerHeight * 0.35;
            let actual = null;
            pares.forEach(p => { if (p.seccion.getBoundingClientRect().top <= linea) actual = p; });
            if (actual && actual !== activo) {
                pares.forEach(p => p.enlace.classList.remove('active'));
                actual.enlace.classList.add('active');
                activo = actual;
            }
        }
    }

    function programar() {
        if (pendiente) return;
        pendiente = true;
        window.requestAnimationFrame(actualizar);
    }

    window.addEventListener('scroll', () => { hizoScroll = true; programar(); }, { passive: true });
    window.addEventListener('resize', programar);
    actualizar();

    window.__rvListo = true;
})();