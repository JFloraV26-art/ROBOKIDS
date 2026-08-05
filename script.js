// =======================================================
// 1. LÓGICA DE NIVELES POR GRADOS (ROBOKIDS ORIGINAL)
// =======================================================

const datosNiveles = {
    grado3: [
        { id: 1, titulo: "Nivel 1: ¿Qué es un Robot?", objetivo: "Identificar la definición de robot.", pregunta: "¿Qué es un robot?", opciones: ["Un juguete de cuerda sin energía.", "Una máquina programable que realiza acciones automáticas.", "Una pantalla para ver videos."], correcta: 1 },
        { id: 2, titulo: "Nivel 2: El Cerebro del Robot", objetivo: "Reconocer qué componente procesa la información.", pregunta: "¿Cuál es el 'cerebro' que ejecuta el código en un robot?", opciones: ["Las ruedas", "La batería", "El microcontrolador / procesador"], correcta: 2 },
        { id: 3, titulo: "Nivel 3: El Sentido de la Vista", objetivo: "Identificar el sensor que detecta distancia.", pregunta: "¿Qué componente le ayuda al robot a medir la distancia a un obstáculo?", opciones: ["Sensor Ultrasonido", "Un foco LED", "Un motor"], correcta: 0 },
        { id: 4, titulo: "Nivel 4: Moviendo al Robot", objetivo: "Saber qué componente genera el movimiento.", pregunta: "¿Qué componente necesita el robot para girar sus ruedas?", opciones: ["Sensor de luz", "Servomotor / Motor DC", "Cable USB"], correcta: 1 },
        { id: 5, titulo: "Nivel 5: Primer Comando", objetivo: "Elegir el código correcto para avanzar.", pregunta: "Queremos que el robot vaya hacia adelante. ¿Qué bloque de código usamos?", opciones: ["AVANZAR(1)", "DETENER()", "GIRAR_IZQUIERDA()"], correcta: 0 },
        { id: 6, titulo: "Nivel 6: Detección de Obstáculos", objetivo: "Usar condicional simple.", pregunta: "Si el robot encuentra una pared enfrente, ¿qué comando debe ejecutar?", opciones: ["AVANZAR(5)", "GIRAR_DERECHA()", "APAGAR()"], correcta: 1 },
        { id: 7, titulo: "Nivel 7: La Energía del Robot", objetivo: "Reconocer la fuente de energía.", pregunta: "¿De dónde obtiene energía un robot móvil para funcionar?", opciones: ["De la batería", "Del motor", "Del sensor"], correcta: 0 },
        { id: 8, titulo: "Nivel 8: Secuencia de Pasos", objetivo: "Ordenar comandos para formar una ruta.", pregunta: "Para hacer un cuadrado, el robot avanza y luego debe...", opciones: ["Apagarse", "Girar 90°", "Dar reversa"], correcta: 1 },
        { id: 9, titulo: "Nivel 9: El Sensor de Tacto", objetivo: "Reconocer un botón o pulsador.", pregunta: "¿Qué componente detecta cuando el robot choca directamente contra un objeto?", opciones: ["Sensor de colisión / Pulsador", "LED brillante", "Bocina"], correcta: 0 },
        { id: 10, titulo: "Nivel 10: Algoritmo Completo", objetivo: "Completar la secuencia para llegar a la meta.", pregunta: "¿Cuál secuencia hace que el robot dé 2 pasos y gire?", opciones: ["AVANZAR(1) -> GIRAR()", "AVANZAR(1) -> AVANZAR(1) -> GIRAR()", "GIRAR() -> DETENER()"], correcta: 1 }
    ],
    grado4: [
        { id: 1, titulo: "Nivel 1: Circuitos Eléctricos", objetivo: "Comprender la ruta de la corriente.", pregunta: "¿Qué es un circuito eléctrico cerrado?", opciones: ["Un camino continuo por donde fluye la electricidad.", "Un cable cortado por la mitad.", "Una batería apagada."], correcta: 0 },
        { id: 2, titulo: "Nivel 2: Luces Indicadoras", objetivo: "Aprender sobre LEDs.", pregunta: "¿Qué componente se usa para que el robot emita luz cuando encuentra algo?", opciones: ["Buzzer", "Diodo LED", "Resistencia"], correcta: 1 },
        { id: 3, titulo: "Nivel 3: Protegiendo Componentes", objetivo: "Identificar la función de la resistencia.", pregunta: "¿Para qué sirve una resistencia en un circuito?", opciones: ["Para dar más energía al robot.", "Para limitar la corriente y no quemar el LED.", "Para mover las ruedas."], correcta: 1 },
        { id: 4, titulo: "Nivel 4: Sensor de Luz (LDR)", objetivo: "Detectar cambios de iluminación.", pregunta: "¿Qué sensor usamos si queremos que el robot siga una línea negra en el suelo?", opciones: ["Sensor de luz / LDR / Infrarrojo", "Sensor de sonido", "Termómetro"], correcta: 0 },
        { id: 5, titulo: "Nivel 5: Bucles Repetir", objetivo: "Usar estructuras de repetición.", pregunta: "En código, si queremos repetir 'AVANZAR' 4 veces, ¿qué estructura usamos?", opciones: ["BUCLE REPETIR 4 VECES", "SI... ENTONCES", "DETENER"], correcta: 0 },
        { id: 6, titulo: "Nivel 6: Interruptores", objetivo: "Comprender el control manual.", pregunta: "¿Qué componente abre o cierra el paso de corriente al presionarlo?", opciones: ["Un switch / interruptor", "Un motor", "Una rueda"], correcta: 0 },
        { id: 7, titulo: "Nivel 7: Código de Luces Intermitentes", objetivo: "Programar un LED parapadeante.", pregunta: "¿Qué secuencia hace titilar una luz LED?", opciones: ["ENCENDER -> ESPERAR(1s) -> APAGAR -> ESPERAR(1s)", "ENCENDER -> ENCENDER", "APAGAR -> DETENER"], correcta: 0 },
        { id: 8, titulo: "Nivel 8: Motores con Reductor", objetivo: "Entender el torque y fuerza.", pregunta: "¿Para qué se usa una caja reductora junto al motor del robot?", opciones: ["Para ganar fuerza (torque) y controlar la velocidad.", "Para consumir más batería.", "Para cambiar el color del robot."], correcta: 0 },
        { id: 9, titulo: "Nivel 9: Variables de Velocidad", objetivo: "Aprender sobre variables.", pregunta: "Si creamos la variable `int velocidad = 100;`, ¿qué pasa si cambiamos a `velocidad = 50;`?", opciones: ["El robot irá más rápido.", "El robot irá a la mitad de velocidad.", "El robot se apaga."], correcta: 1 },
        { id: 10, titulo: "Nivel 10: Reto de Circuito y Código", objetivo: "Integrar sensores y motores.", pregunta: "Si `sensor_luz < 30` (está oscuro), ¿qué instrucción debe ejecutar el robot?", opciones: ["ENCENDER_FAROS()", "APAGAR_TODO()", "GIRAR_EN_CIRCULOS()"], correcta: 0 }
    ],
    grado5: [
        { id: 1, titulo: "Nivel 1: Condicionales IF", objetivo: "Evaluar decisiones lógicas en código.", pregunta: "¿Qué hace la instrucción `IF (distancia < 10)`?", opciones: ["Verifica si hay un objeto a menos de 10 cm.", "Suma 10 a la distancia.", "Repite el código 10 veces."], correcta: 0 },
        { id: 2, titulo: "Nivel 2: Condicionales IF / ELSE", objetivo: "Usar caminos alternativos.", pregunta: "En `IF (obstaculo) { DETENER() } ELSE { AVANZAR() }`, ¿qué hace el robot si NO hay obstáculo?", opciones: ["Se detiene", "Avanza", "Gira sin parar"], correcta: 1 },
        { id: 3, titulo: "Nivel 3: El Microcontrolador Arduino", objetivo: "Identificar pines de entrada y salida.", pregunta: "¿Qué tipo de pin usas para leer los datos de un sensor?", opciones: ["Pin de Entrada (INPUT)", "Pin de Salida (OUTPUT)", "Pin de Tierra (GND)"], correcta: 0 },
        { id: 4, titulo: "Nivel 4: Servomotor de Precisión", objetivo: "Controlar ángulos exactos.", pregunta: "A diferencia de un motor normal, ¿qué nos permite hacer un servomotor?", opciones: ["Moverse a ángulos precisos (ej: girar a 90°).", "Dar vueltas infinitas sin parar.", "Generar luz."], correcta: 0 },
        { id: 5, titulo: "Nivel 5: Bucles WHILE", objetivo: "Repetir mientras una condición sea verdadera.", pregunta: "¿Cuándo se detiene un bucle `WHILE (bateria > 0)`?", opciones: ["Cuando la batería llega a 0.", "Inmediatamente después del primer paso.", "Nunca se detiene."], correcta: 0 },
        { id: 6, titulo: "Nivel 6: Puentes H (Controlador de Motores)", objetivo: "Control de dirección de motores.", pregunta: "¿Qué componente nos permite cambiar la dirección de giro de los motores en robótica?", opciones: ["Módulo Driver / Puente H (L298N)", "Sensor de humedad", "Pantalla LCD"], correcta: 0 },
        { id: 7, titulo: "Nivel 7: Lectura de Señales Analógicas vs Digitales", objetivo: "Diferenciar tipos de señales.", pregunta: "¿Cuál es una señal digital pura?", opciones: ["Una lectura de temperatura de 24.5 °C.", "Un estado de Encendido (1) o Apagado (0).", "El nivel de brillo gradual de una lámpara."], correcta: 1 },
        { id: 8, titulo: "Nivel 8: Protocolo de Comunicación", objetivo: "Módulos de comunicación inalámbrica.", pregunta: "¿Qué componente le permite al robot recibir órdenes desde un teléfono celular?", opciones: ["Módulo Bluetooth / Wi-Fi", "Sensor infrarrojo", "Potenciómetro"], correcta: 0 },
        { id: 9, titulo: "Nivel 9: Depuración (Debugging)", objetivo: "Encontrar errores en el código.", pregunta: "Si el robot gira en sentido contrario al programado, ¿cuál es el diagnóstico correcto?", opciones: ["El código está perfecto.", "Los cables del motor o los valores de salida están invertidos.", "Falta poner un LED."], correcta: 1 },
        { id: 10, titulo: "Nivel 10: Gran Misión Mecatrónica", objetivo: "Integrar sensores, actuadores y lógica avanzada.", pregunta: "Diseña la lógica: 'Si detecta fuego (bool) Y la distancia (float) es menor a 20.0cm, apagar con la bomba de agua'. ¿Qué operadores usamos?", opciones: ["Operador Lógico AND (Y)", "Operador Lógico OR (O)", "Operador de Suma"], correcta: 0 }
    ]
};

let progresoTotal = JSON.parse(localStorage.getItem('roboKidsProgresoGrados')) || {
    grado3: { nivelMaximo: 1, completados: [] },
    grado4: { nivelMaximo: 1, completados: [] },
    grado5: { nivelMaximo: 1, completados: [] }
};

let gradoSeleccionado = 'grado3';
let nivelActualId = null;

document.addEventListener('DOMContentLoaded', () => {
    renderizarMapaNiveles();
    rkInit();
});

function seleccionarGrado(grado) {
    gradoSeleccionado = grado;

    document.querySelectorAll('.card-level').forEach(card => card.classList.remove('active-grado'));
    const tarjetaActiva = document.getElementById(`card-${grado}`);
    if (tarjetaActiva) tarjetaActiva.classList.add('active-grado');

    const titulos = {
        grado3: "🎮 NIVELES: GRADO 3.° (Exploración y Componentes)",
        grado4: "🎮 NIVELES: GRADO 4.° (Circuitos y Sensores)",
        grado5: "🎮 NIVELES: GRADO 5.° (Algoritmos y Mecatrónica)"
    };
    document.getElementById('titulo-grado-actual').innerText = titulos[grado];

    renderizarMapaNiveles();
    document.getElementById('mapa-programacion').scrollIntoView({ behavior: 'smooth' });
}

function renderizarMapaNiveles() {
    const gridContainer = document.getElementById('grid-niveles-juego');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';

    const nivelesGrado = datosNiveles[gradoSeleccionado];
    const progresoGrado = progresoTotal[gradoSeleccionado];

    nivelesGrado.forEach((nivel) => {
        const estaDesbloqueado = nivel.id <= progresoGrado.nivelMaximo;
        const estaCompletado = progresoGrado.completados.includes(nivel.id);

        const card = document.createElement('div');
        card.className = `level-node ${estaDesbloqueado ? 'unlocked' : 'locked'} ${estaCompletado ? 'completed' : ''}`;

        card.innerHTML = `
            <div class="node-number">${estaCompletado ? '✅' : (estaDesbloqueado ? nivel.id : '🔒')}</div>
            <div class="node-title">${nivel.titulo}</div>
            <div class="node-status">${estaCompletado ? '¡Completado!' : (estaDesbloqueado ? '¡Disponible!' : 'Bloqueado')}</div>
        `;

        if (estaDesbloqueado) {
            card.addEventListener('click', () => abrirNivel(nivel.id));
        }

        gridContainer.appendChild(card);
    });
}

function abrirNivel(id) {
    nivelActualId = id;
    const datosNivel = datosNiveles[gradoSeleccionado].find(n => n.id === id);

    document.getElementById('nivel-titulo-modal').innerText = datosNivel.titulo;
    document.getElementById('nivel-objetivo-text').innerText = datosNivel.objetivo;
    document.getElementById('nivel-pregunta-text').innerText = datosNivel.pregunta;

    const feedbackBox = document.getElementById('mensaje-feedback');
    feedbackBox.style.display = 'none';

    const opcionesContainer = document.getElementById('opciones-respuesta');
    opcionesContainer.innerHTML = '';

    datosNivel.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-opcion';
        btn.innerText = `${String.fromCharCode(65 + index)}) ${opcion}`;
        btn.onclick = () => verificarRespuesta(index, datosNivel.correcta);
        opcionesContainer.appendChild(btn);
    });

    document.getElementById('modal-pantalla-nivel').classList.add('active');
}

function verificarRespuesta(indiceSeleccionado, indiceCorrecto) {
    const feedbackBox = document.getElementById('mensaje-feedback');
    feedbackBox.style.display = 'block';

    if (indiceSeleccionado === indiceCorrecto) {
        feedbackBox.className = 'feedback-box correcto';
        feedbackBox.innerHTML = '🎉 ¡EXCELENTE! Respuesta correcta. ¡Nivel completado!';

        setTimeout(() => {
            completarNivelActual();
        }, 1200);

    } else {
        feedbackBox.className = 'feedback-box error';
        feedbackBox.innerHTML = '❌ ¡Ups! Esa no es la respuesta correcta. ¡Inténtalo de nuevo!';
    }
}

function cerrarNivel() {
    document.getElementById('modal-pantalla-nivel').classList.remove('active');
}

function completarNivelActual() {
    if (!nivelActualId) return;

    const progresoGrado = progresoTotal[gradoSeleccionado];

    if (!progresoGrado.completados.includes(nivelActualId)) {
        progresoGrado.completados.push(nivelActualId);
    }

    if (nivelActualId >= progresoGrado.nivelMaximo && nivelActualId < 10) {
        progresoGrado.nivelMaximo = nivelActualId + 1;
    }

    localStorage.setItem('roboKidsProgresoGrados', JSON.stringify(progresoTotal));

    cerrarNivel();
    renderizarMapaNiveles();
}

function reiniciarProgresoGradoActual() {
    if (confirm(`¿Quieres reiniciar los 10 niveles del ${gradoSeleccionado.replace('grado', 'Grado ')}°?`)) {
        progresoTotal[gradoSeleccionado] = { nivelMaximo: 1, completados: [] };
        localStorage.setItem('roboKidsProgresoGrados', JSON.stringify(progresoTotal));
        renderizarMapaNiveles();
    }
}


// =======================================================
// 2. LÓGICA DE ROBOTKITS (MÓDULO INTERACTIVO DE SECUENCIAS)
// =======================================================

const ACTIONS = ['avanzar 1 paso','girar a la derecha','girar a la izquierda','recoger la gema','saltar el obstáculo','encender la luz','tocar la bocina','retroceder 1 paso','abrir la compuerta','detenerse'];
const ROBOTS = ['Robi','Nex','Zeta','Byte','Chip','Volt','Pixel','Coda','Tronic','Sparky'];
const OBJECTS = ['monedas','gemas','estrellas','tornillos','cajas','llaves','baterías','piezas','luces','engranajes'];

function mkQ(text, correct, distractors, li, explain){
    const idx = li % 4;
    const opts = [];
    let di = 0;
    for(let i=0;i<4;i++){
        if(i===idx){ opts.push(correct); } else { opts.push(distractors[di]); di++; }
    }
    return {text, options:opts, correct:idx, explain};
}

const B1_LESSONS = [
    "¡Bienvenido a RobotKits! Un programa es una lista de instrucciones que el robot sigue, una por una, en orden.",
    "El orden importa: si cambias el orden de las instrucciones, el robot puede terminar en un lugar totalmente distinto.",
    "Cada instrucción es un paso pequeño y claro, como 'avanzar' o 'girar'. Al conjunto de pasos para resolver algo se le llama algoritmo.",
    "Los robots no adivinan: hacen exactamente lo que dice cada instrucción, ni más ni menos.",
    "Si falta una instrucción, el robot puede quedarse a mitad de camino o cometer un error.",
    "Podemos escribir instrucciones de movimiento: avanzar, retroceder, girar a la derecha, girar a la izquierda.",
    "Una secuencia es una serie de instrucciones que se ejecutan de principio a fin, sin saltarse ninguna.",
    "Depurar significa encontrar y corregir un error en las instrucciones. ¡Todos los programadores depuran!",
    "En la vida diaria también usamos algoritmos, como los pasos para prepararse un sándwich.",
    "¡Repasemos! Ya sabes que un programa es una secuencia ordenada de instrucciones claras."
];

const B1_Q2 = [
    {q:"¿Qué es un programa?", a:"Una lista ordenada de instrucciones para el robot", d:["Un dibujo del robot","El nombre del robot","Un tipo de batería"], e:"Un programa es la lista de pasos que el robot debe seguir en orden."},
    {q:"¿Qué es un algoritmo?", a:"Los pasos para resolver un problema", d:["El color del robot","Un error del programa","Una pantalla táctil"], e:"Un algoritmo es una serie de pasos claros para lograr un objetivo."},
    {q:"¿Por qué el orden de las instrucciones es importante?", a:"Porque cambiarlo puede cambiar el resultado", d:["No importa nunca","Solo importa el color","Solo importa la velocidad"], e:"El robot ejecuta las instrucciones en el orden exacto en que se escriben."},
    {q:"¿Qué hace el robot si le falta una instrucción?", a:"Puede quedarse a medias o cometer un error", d:["Adivina lo que falta","Se apaga para siempre","Inventa una nueva instrucción"], e:"Los robots no adivinan: si falta un paso, la tarea queda incompleta."},
    {q:"¿Qué es 'depurar' un programa?", a:"Buscar y corregir errores", d:["Pintarlo de otro color","Borrarlo por completo","Hacerlo más lento a propósito"], e:"Depurar es revisar el programa para encontrar y arreglar fallos."},
    {q:"¿Cuál de estas es una instrucción válida para un robot?", a:"Avanzar 2 pasos", d:["Pensar bonito","Ser feliz","Tener hambre"], e:"Las instrucciones deben ser acciones claras y concretas."},
    {q:"En la vida diaria, ¿cuál es un ejemplo de algoritmo?", a:"Los pasos para lavarse los dientes", d:["El color de tu mochila","Tu nombre completo","Tu comida favorita"], e:"Cualquier serie de pasos ordenados para lograr algo es un algoritmo."},
    {q:"¿Qué significa 'secuencia' en programación?", a:"Instrucciones que se ejecutan una tras otra en orden", d:["Instrucciones que se ejecutan al azar","Un solo comando repetido","Una imagen del robot"], e:"Una secuencia respeta siempre el orden en que fue escrita."},
    {q:"Si un robot debe 'girar y luego avanzar', ¿qué pasa si lo programamos al revés?", a:"El robot puede terminar en un lugar distinto", d:["No pasa nada diferente","El robot se rompe","El robot habla"], e:"Cambiar el orden cambia el camino que recorre el robot."},
    {q:"¿Quién sigue exactamente las instrucciones, sin adivinar?", a:"El robot o la computadora", d:["El viento","La suerte","Un fantasma"], e:"Los robots hacen exactamente lo que dicen sus instrucciones."}
];

const B1_Q4 = [
    {q:"Robi debe llegar a la puerta. Tiene 'avanzar' y 'girar', pero olvidamos 'abrir la puerta'. ¿Qué pasará?", a:"Robi llegará pero no podrá pasar", d:["Robi abrirá la puerta solo","Robi se irá volando","No pasa nada"], e:"Sin la instrucción de abrir, el robot no puede continuar."},
    {q:"¿Cuál es el primer paso lógico para armar un sándwich?", a:"Sacar el pan", d:["Comer el sándwich","Guardar el plato","Lavar los platos"], e:"Siempre hay un primer paso necesario antes de los demás."},
    {q:"Si cambias 'girar a la derecha' por 'girar a la izquierda' en el paso 2, ¿qué pasa con la ruta del robot?", a:"El robot toma un camino diferente", d:["El camino es igual","El robot se detiene solo","El robot vuelve al inicio automáticamente"], e:"Cambiar una instrucción cambia el resultado final."},
    {q:"¿Qué pasos son necesarios para plantar una semilla?", a:"Cavar, poner la semilla, tapar con tierra, regar", d:["Cantar, bailar, saltar, reír","Cocinar, comer, dormir","Correr, saltar, nadar"], e:"Cada tarea real tiene una secuencia lógica de pasos."},
    {q:"Un robot recibe: 1) avanzar 2) avanzar 3) girar. ¿Cuántos pasos avanza antes de girar?", a:"2 pasos", d:["1 paso","3 pasos","0 pasos"], e:"El robot avanza dos veces antes de llegar al paso de girar."},
    {q:"¿Qué problema hay si le decimos al robot 'girar' sin decir hacia qué lado?", a:"La instrucción es incompleta y puede confundir al robot", d:["No hay ningún error","El robot elige el mejor lado","El robot ignora la instrucción sin problema"], e:"Las instrucciones deben ser precisas para que el robot las entienda."},
    {q:"Para dibujar con el robot: primero bajar el lápiz, luego mover. ¿Qué pasa si mueves primero?", a:"El robot se mueve pero no dibuja nada", d:["Dibuja igual de bien","El lápiz se rompe","El robot se apaga"], e:"El orden de bajar el lápiz antes de mover es esencial para dibujar."},
    {q:"¿Cuál es una buena secuencia para cepillarse los dientes?", a:"Mojar el cepillo, poner pasta, cepillar, enjuagar", d:["Enjuagar, cepillar, poner pasta, mojar el cepillo","Cepillar, mojar, enjuagar, poner pasta","Poner pasta, enjuagar, cepillar, mojar"], e:"Cada paso debe ir en el orden correcto para que la tarea funcione."},
    {q:"Si el robot debe recoger 3 gemas en orden 1,2,3 pero las recoge 2,1,3, ¿qué salió mal?", a:"El orden de las instrucciones estaba cambiado", d:["Las gemas cambiaron de lugar solas","El robot tiene mala suerte","No salió nada mal"], e:"El robot solo puede seguir el orden que le dieron."},
    {q:"Repaso: ¿qué necesita un robot para completar una tarea correctamente?", a:"Instrucciones claras y en el orden correcto", d:["Solo velocidad","Solo un color bonito","Solo baterías nuevas"], e:"Instrucciones claras y bien ordenadas son la base de la programación."}
];

function b1_g1(li){
    const name = ROBOTS[li%10], a=ACTIONS[li%10], b=ACTIONS[(li+3)%10], c=ACTIONS[(li+6)%10], wrong=ACTIONS[(li+1)%10];
    return mkQ(`El robot ${name} debe hacer esto en orden:\n1) ${a}\n2) ${b}\n3) ${c}\n¿Qué instrucción ejecuta primero?`, a, [b,c,wrong], li, `Las instrucciones se ejecutan en orden, así que primero hace: "${a}".`);
}

function b1_g3(li){
    const name = ROBOTS[(li+2)%10]; const steps = 2 + (li%4);
    return mkQ(`${name} recibe la instrucción "avanzar" ${steps} veces seguidas. ¿Cuántos pasos habrá avanzado en total?`, `${steps} pasos`, [`${steps+1} pasos`, `${steps-1<1?1:steps-1} pasos`, `${steps*2} pasos`], li, `Cada "avanzar" mueve un paso, así que ${steps} instrucciones son ${steps} pasos.`);
}

function b1_g5(li){
    const obj = OBJECTS[li%10]; const n = 3 + (li%3);
    return mkQ(`Un programa dice: "recoger ${obj}" repetido ${n} veces, una instrucción por línea. ¿Cuántas líneas de instrucción tiene el programa?`, `${n} líneas`, [`${n+2} líneas`, `1 línea`, `${n-1} líneas`], li, `Si la instrucción está escrita ${n} veces, el programa tiene exactamente ${n} líneas.`);
}

const ROBOT_PARTS = [
    { id:'p-torso', name:'Torso de Robot', icon:'🎽', pts: 20 },
    { id:'p-head', name:'Cabeza de Robot', icon:'🤖', pts: 40 },
    { id:'p-legs', name:'Piernas', icon:'🦵', pts: 60 },
    { id:'p-feet', name:'Pies', icon:'👟', pts: 80 },
    { id:'p-arm-l', name:'Brazo Izquierdo', icon:'🦾', pts: 100 },
    { id:'p-arm-r', name:'Brazo Derecho', icon:'🦾', pts: 120 },
    { id:'p-visor', name:'Visor Lúminico', icon:'🥽', pts: 140 },
    { id:'p-antenna', name:'Antena de Señal', icon:'📡', pts: 160 },
    { id:'p-light', name:'Luz de Pecho', icon:'🚨', pts: 180 },
    { id:'p-jetpack', name:'Propulsor Izquierdo', icon:'🚀', pts: 200 },
    { id:'p-jetpack2', name:'Propulsor Derecho', icon:'🚀', pts: 220 }
];

let rkState = {
    pts: 0,
    currentLevel: 1,
    maxLevelUnlocked: 1,
    currentQIndex: 0,
    answersCorrectInLevel: 0
};

function rkInit() {
    const saved = localStorage.getItem('robotkits_state');
    if (saved) {
        try { rkState = Object.assign(rkState, JSON.parse(saved)); } catch(e){}
    }
    rkUpdatePtsUI();
    rkShowHome();
}

function rkSave() {
    localStorage.setItem('robotkits_state', JSON.stringify(rkState));
    rkUpdatePtsUI();
}

function rkUpdatePtsUI() {
    const el = document.getElementById('rk-pts');
    if(el) el.innerText = rkState.pts;
}

function rkShowHome() {
    const c = document.getElementById('rk-screen-container');
    if(!c) return;
    c.innerHTML = `
        <div class="hero-rk">
            <h1>Aprende a programar con <span>RobotKits</span></h1>
            <p>Resuelve retos de secuencias, lógica y algoritmos para ganar puntos y armar tu propio Robot en el Taller.</p>
            <button class="cta-btn" onclick="rkShowMap()">🎮 ¡Ver Mapa de Niveles!</button>
            <div class="stats-row">
                <div class="stat-card"><div class="num">${rkState.pts}</div><div class="lbl">Puntos ⭐</div></div>
                <div class="stat-card"><div class="num">${rkState.maxLevelUnlocked}/10</div><div class="lbl">Niveles 🔓</div></div>
            </div>
        </div>
    `;
}

function rkShowMap() {
    const c = document.getElementById('rk-screen-container');
    if(!c) return;

    let nodesHTML = '';
    for(let i=1; i<=10; i++) {
        const isDone = i < rkState.maxLevelUnlocked;
        const isCurrent = i === rkState.maxLevelUnlocked;
        const isUnlocked = i <= rkState.maxLevelUnlocked;

        let cls = 'node ';
        if(!isUnlocked) cls += 'locked';
        else if(isDone) cls += 'done';
        else cls += 'unlocked ' + (isCurrent ? 'current' : '');

        let content = isUnlocked ? (isDone ? '✓' : i) : '🔒';
        let action = isUnlocked ? `onclick="rkStartLevel(${i})"` : '';

        nodesHTML += `<div class="${cls}" ${action}>${content}</div>`;
    }

    c.innerHTML = `
        <div class="map-header">
            <h2>🗺️ Bloque 1: Secuencias</h2>
            <p>Aprende cómo los robots ejecutan instrucciones paso a paso.</p>
        </div>
        <div class="block-section">
            <div class="block-title">
                <div class="block-dot" style="background:var(--teal)"></div>
                <h3>Misiones de Secuencia</h3>
                <span>(10 Niveles)</span>
            </div>
            <div class="node-row">${nodesHTML}</div>
        </div>
        <button class="secondary-btn" onclick="rkShowHome()">⬅️ Volver</button>
    `;
}

function rkGetQuestionsForLevel(level) {
    const li = level - 1;
    const q1 = { q: "Lección del Nivel " + level, text: B1_LESSONS[li], isLesson: true };
    
    let q2Item = B1_Q2[li];
    const q2 = mkQ(q2Item.q, q2Item.a, q2Item.d, li, q2Item.e);
    
    let q3 = b1_g1(li);
    if(level % 3 === 0) q3 = b1_g3(li);
    else if(level % 5 === 0) q3 = b1_g5(li);

    let q4Item = B1_Q4[li];
    const q4 = mkQ(q4Item.q, q4Item.a, q4Item.d, li, q4Item.e);

    return [q1, q2, q3, q4];
}

function rkStartLevel(lvl) {
    rkState.currentLevel = lvl;
    rkState.currentQIndex = 0;
    rkState.answersCorrectInLevel = 0;
    rkRenderQuestion();
}

function rkRenderQuestion() {
    const c = document.getElementById('rk-screen-container');
    if(!c) return;

    const questions = rkGetQuestionsForLevel(rkState.currentLevel);
    const q = questions[rkState.currentQIndex];

    let dots = '';
    for(let i=0; i<4; i++) {
        let dCls = 'dot';
        if(i < rkState.currentQIndex) dCls += ' filled';
        if(i === rkState.currentQIndex) dCls += ' active';
        dots += `<div class="${dCls}"></div>`;
    }

    if(q.isLesson) {
        c.innerHTML = `
            <div class="level-wrap">
                <span class="back-link" onclick="rkShowMap()">⬅️ Volver al mapa</span>
                <div class="card">
                    <span class="level-tag">NIVEL ${rkState.currentLevel} - LECCIÓN</span>
                    <div class="lesson-emoji">💡</div>
                    <h2 class="level-title">${q.q}</h2>
                    <p class="lesson-text">${q.text}</p>
                    <button class="primary-btn" onclick="rkNextQuestion()">¡Entendido! Comenzar Retos 🚀</button>
                </div>
            </div>
        `;
        return;
    }

    let optsHTML = '';
    const letters = ['A','B','C','D'];
    q.options.forEach((opt, idx) => {
        optsHTML += `
            <button class="option" id="rk-opt-${idx}" onclick="rkCheckAnswer(${idx}, ${q.correct}, '${q.explain.replace(/'/g, "\\'")}')">
                <span class="option-letter">${letters[idx]}</span>
                <span>${opt}</span>
            </button>
        `;
    });

    c.innerHTML = `
        <div class="level-wrap">
            <span class="back-link" onclick="rkShowMap()">⬅️ Volver al mapa</span>
            <div class="progress-dots">${dots}</div>
            <div class="card">
                <span class="level-tag">PREGUNTA ${rkState.currentQIndex} DE 3</span>
                <div class="q-text">${q.text}</div>
                <div class="options">${optsHTML}</div>
                <div id="rk-feedback" class="feedback"></div>
                <button id="rk-next-btn" class="primary-btn next-q-btn" onclick="rkNextQuestion()">Siguiente Pregunta ➡️</button>
            </div>
        </div>
    `;
}

function rkCheckAnswer(selected, correct, explain) {
    const fb = document.getElementById('rk-feedback');
    const nextBtn = document.getElementById('rk-next-btn');

    for(let i=0; i<4; i++) {
        const btn = document.getElementById(`rk-opt-${i}`);
        if(btn) {
            btn.classList.add('dim');
            if(i === correct) btn.classList.add('correct');
            if(i === selected && selected !== correct) btn.classList.add('wrong');
        }
    }

    if(selected === correct) {
        rkState.answersCorrectInLevel++;
        fb.className = 'feedback show ok';
        fb.innerHTML = `<b>¡Correcto! 🎉</b><br>${explain}`;
    } else {
        fb.className = 'feedback show bad';
        fb.innerHTML = `<b>¡Incorrecto! ❌</b><br>${explain}`;
    }

    if(nextBtn) nextBtn.classList.add('show');
}

function rkNextQuestion() {
    rkState.currentQIndex++;
    if(rkState.currentQIndex < 4) {
        rkRenderQuestion();
    } else {
        rkFinishLevel();
    }
}

function rkFinishLevel() {
    const c = document.getElementById('rk-screen-container');
    if(!c) return;

    const earned = rkState.answersCorrectInLevel * 10;
    rkState.pts += earned;

    if(rkState.currentLevel === rkState.maxLevelUnlocked && rkState.maxLevelUnlocked < 10) {
        rkState.maxLevelUnlocked++;
    }

    rkSave();

    c.innerHTML = `
        <div class="complete-wrap">
            <div class="complete-emoji">🏆</div>
            <h2>¡Nivel ${rkState.currentLevel} Completado!</h2>
            <p>Has respondido correctamente ${rkState.answersCorrectInLevel} de 3 preguntas.</p>
            <div class="points-earned">+${earned} Puntos ⭐</div>
            <div class="unlock-banner">
                🛠️ Visita el <b>Taller Robot</b> para usar tus puntos y desbloquear partes de tu robot.
            </div>
            <div class="btn-row">
                <button class="secondary-btn" onclick="rkShowMap()">🗺️ Ver Mapa</button>
                <button class="primary-btn" style="width:auto;" onclick="rkOpenWorkshop()">🛠️ Ir al Taller</button>
            </div>
        </div>
    `;
}

function rkOpenWorkshop() {
    const m = document.getElementById('rk-workshop-modal');
    if(!m) return;

    let partsHTML = '';
    let unlockedCount = 0;

    ROBOT_PARTS.forEach(p => {
        const isUnlocked = rkState.pts >= p.pts;
        if(isUnlocked) unlockedCount++;

        const pEl = document.getElementById(`rk-${p.id}`);
        if(pEl) {
            if(isUnlocked) pEl.classList.add('unlocked');
            else pEl.classList.remove('unlocked');
        }

        partsHTML += `
            <div class="p-row ${isUnlocked ? '' : 'locked-row'}">
                <span class="p-ic">${p.icon}</span>
                <span style="flex:1;"><b>${p.name}</b></span>
                <span>${isUnlocked ? '✅ Desbloqueado' : `🔒 ${p.pts} pts`}</span>
            </div>
        `;
    });

    const listEl = document.getElementById('rk-parts-list');
    if(listEl) listEl.innerHTML = partsHTML;

    const pct = Math.min(100, Math.round((unlockedCount / ROBOT_PARTS.length) * 100));
    const barEl = document.getElementById('rk-workshop-bar');
    if(barEl) barEl.style.width = pct + '%';

    m.style.display = 'flex';
}

function rkCloseWorkshop() {
    const m = document.getElementById('rk-workshop-modal');
    if(m) m.style.display = 'none';
}