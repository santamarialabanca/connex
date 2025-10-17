// Datos de las tarjetas culturales con iconos Font Awesome representativos
const culturalCards = {
    china: [
        {
            symbol: "fas fa-envelope",
            letter: "C",
            fact: "Los sobres rojos contienen dinero de la suerte y se regalan durante el Año Nuevo para desear prosperidad. Esta tradición milenaria simboliza buenos deseos y fortuna para el año venidero."
        },
        {
            symbol: "fas fa-dragon",
            letter: "H",
            fact: "El dragón es el símbolo más poderoso de esta cultura, representando fuerza, sabiduría y buena fortuna. En esta tradición, los dragones controlan las lluvias y protegen los tesoros imperiales."
        },
        {
            symbol: "fas fa-puzzle-piece",
            letter: "I",
            fact: "Este juego de mesa tradicional requiere concentración y estrategia mental. Originado en el siglo XIX, combina elementos de azar, memoria y táctica."
        },
        {
            symbol: "fas fa-lightbulb",
            letter: "N",
            fact: "Los faroles rojos se encienden durante el Festival de los Faroles para celebrar el final del Año Nuevo. Esta tradición ilumina las calles y simboliza la esperanza y la renovación."
        },
        {
            symbol: "fas fa-coffee",
            letter: "A",
            fact: "La ceremonia del té es una tradición milenaria que simboliza armonía, respeto y tranquilidad. Cada gesto tiene un significado profundo y conecta a las personas con la naturaleza."
        }
    ],
    italia: [
        {
            symbol: "fas fa-mask",
            letter: "I",
            fact: "Las máscaras venecianas permitían a la gente ocultar su identidad durante el Carnaval de Venecia. Esta tradición del siglo XIII permitía la igualdad social temporal y la libertad de expresión."
        },
        {
            symbol: "fas fa-landmark",
            letter: "T",
            fact: "Este anfiteatro romano podía albergar hasta 80.000 espectadores para ver combates de gladiadores. Construido en el año 80 d.C., es uno de los símbolos más reconocibles del Imperio Romano."
        },
        {
            symbol: "fas fa-music",
            letter: "A",
            fact: "Esta región es la cuna de la ópera, con compositores legendarios como Verdi, Puccini y Rossini. La ópera revolucionó la música clásica y sigue siendo referencia mundial."
        },
        {
            symbol: "fas fa-utensils",
            letter: "L",
            fact: "Existen más de 300 tipos de pasta diferentes, cada región tiene sus especialidades. La pasta es símbolo de identidad nacional y tradición culinaria familiar."
        },
        {
            symbol: "fas fa-palette",
            letter: "Y",
            fact: "El Renacimiento produjo artistas como Leonardo da Vinci, Miguel Ángel y Rafael. Este movimiento artístico transformó la cultura europea y estableció nuevos estándares de belleza."
        }
    ],
    siria: [
        {
            symbol: "fas fa-city",
            letter: "S",
            fact: "Esta región alberga algunas de las ciudades más antiguas del mundo, como Damasco y Alepo. Estas ciudades han sido centros de comercio y cultura durante más de 4.000 años."
        },
        {
            symbol: "fas fa-scroll",
            letter: "I",
            fact: "La caligrafía árabe es considerada un arte sagrado, especialmente en la escritura del Corán. Esta tradición artística combina espiritualidad y estética en cada trazo."
        },
        {
            symbol: "fas fa-mosque",
            letter: "R",
            fact: "La Gran Mezquita de Damasco es una de las más antiguas y veneradas del mundo islámico. Construida en el siglo VIII, es un ejemplo perfecto de arquitectura omeya."
        },
        {
            symbol: "fas fa-gem",
            letter: "I",
            fact: "La sal era tan valiosa en las rutas comerciales que se usaba como moneda de cambio. Las caravanas cruzaban el desierto transportando este 'oro blanco' entre ciudades."
        },
        {
            symbol: "fas fa-moon",
            letter: "A",
            fact: "La media luna es el símbolo del Islam y aparece en muchas banderas de países musulmanes. Representa el calendario lunar islámico y la guía espiritual en la oscuridad."
        }
    ],
    chile: [
        {
            symbol: "fas fa-volcano",
            letter: "C",
            fact: "Esta región tiene más de 2.000 volcanes, siendo una de las más volcánicamente activas del mundo. El Cinturón de Fuego del Pacífico moldea su geografía única."
        },
        {
            symbol: "fas fa-wine-glass",
            letter: "H",
            fact: "Esta región es el cuarto exportador mundial de vino y sus valles son ideales para el cultivo de uvas. El clima mediterráneo y los suelos únicos crean vinos de calidad excepcional."
        },
        {
            symbol: "fas fa-fish",
            letter: "I",
            fact: "Esta región tiene una costa de más de 4.000 km, siendo la pesca una industria fundamental. Las corrientes marinas frías crean ecosistemas ricos en biodiversidad marina."
        },
        {
            symbol: "fas fa-mountain",
            letter: "L",
            fact: "La Cordillera de los Andes atraviesa esta región de norte a sur, creando paisajes únicos. Esta cadena montañosa es la más larga del mundo y define la identidad geográfica del territorio."
        },
        {
            symbol: "fas fa-telescope",
            letter: "E",
            fact: "Esta región tiene los cielos más limpios del mundo, albergando los telescopios más avanzados del planeta. El desierto de Atacama es el lugar ideal para observar el universo."
        }
    ]
};

// Mensajes culturales
const culturalMessages = {
    china: {
        title: "Mensaje del Corazón Cultural de CHINA",
        message: `Bienvenidos a una tierra milenaria de sabiduría y ceremonia. Desde los dragones que guardan las leyendas, hasta los faroles que iluminan el año nuevo, cada símbolo os habla de armonía, respeto y tradición viva.

Al unir vuestras piezas, habéis descubierto la identidad de una civilización que valora el arte, la estrategia, la familia y la historia.

Os animamos a explorar más, con mente curiosa y corazón abierto.

¡Gracias por viajar con nosotros por China!`
    },
    italia: {
        title: "Mensaje del Corazón Cultural de ITALIA",
        message: `Habéis llegado a la cuna del arte, la pasión y la historia viva. Desde las máscaras de carnaval hasta la ópera y los sabores de la pasta, cada símbolo lleva el pulso de una cultura que celebra la belleza y la creatividad.

Italia es un país donde las ruinas cuentan historias, y donde la música y la pintura siguen vivos en cada rincón.

Habéis unido vuestras pistas con ingenio y sensibilidad.

¡Gracias por explorar con nosotros el alma de Italia!`
    },
    siria: {
        title: "Mensaje del Corazón Cultural de SIRIA",
        message: `Habéis desenterrado un legado profundo. Siria es tierra de manuscritos, desiertos y sabiduría antigua. Cada símbolo revela una conexión espiritual, una historia escrita en piedra y transmitida por generaciones.

Al reconocer la armonía entre lo material y lo sagrado, habéis entendido el valor de lo intangible.

Os invitamos a seguir investigando con respeto y asombro.

¡Gracias por descubrir la riqueza de Siria!`
    },
    chile: {
        title: "Mensaje del Corazón Cultural de CHILE",
        message: `Habéis recorrido una franja de tierra entre océano y cordillera, un país de contrastes y maravillas naturales. Desde los volcanes a los cielos estrellados, desde la pesca al vino, cada símbolo habla de una geografía única.

Chile es exploración, identidad y resistencia. Habéis conectado piezas que representan su espíritu diverso y resiliente.

¡Gracias por adentraros con nosotros en los paisajes de Chile!`
    }
};

// Estado del juego
let gameState = {
    selectedCards: [],
    formedGroups: [],
    completedGroups: new Set(),
    cipherTablesUnlocked: new Set(),
    locksOpened: new Set(),
    groupCards: {},
    currentGroup: null,
    studentsConnected: 0,
    lockCombination: ['A', 'A', 'A', 'A', 'A'],
    cipherTables: {},
    currentGroupCards: [],
    hackProgress: {
        level1: { completed: 0, total: 4, unlocked: true },
        level2: { completed: 0, total: 4, unlocked: false },
        level3: { completed: 0, total: 4, unlocked: false },
        level4: { completed: 0, total: 1, unlocked: false }
    },
    terminalCommands: [],
    monitoringActive: false,
    groupsData: {
        1: { students: 0, country: null, progress: { grouping: 0, cipher: false, lock: false } },
        2: { students: 0, country: null, progress: { grouping: 0, cipher: false, lock: false } },
        3: { students: 0, country: null, progress: { grouping: 0, cipher: false, lock: false } },
        4: { students: 0, country: null, progress: { grouping: 0, cipher: false, lock: false } }
    },
    // Sistema de sincronización
    isFacilitator: false,
    broadcastChannel: null,
    syncInterval: null
};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeGame();
    setupEventListeners();
    createMatrixRain();
});

function initializeGame() {
    const cardGrid = document.getElementById('cardGrid');
    const allCards = [];
    
    // Crear todas las tarjetas mezcladas
    Object.keys(culturalCards).forEach(country => {
        culturalCards[country].forEach(card => {
            allCards.push({
                ...card,
                country: country
            });
        });
    });
    
    // Mezclar las tarjetas
    shuffleArray(allCards);
    
    // Crear elementos HTML para las tarjetas
    allCards.forEach((card, index) => {
        const cardElement = createCardElement(card, index);
        cardGrid.appendChild(cardElement);
    });
    
    updateGroupStatus();
    
    // Inicializar sistema de hack
    initializeHackSystem();
    renderCipherPlaceholder();
    
    // Inicializar sistema de candado
    setupLockSystem();
    
    // Inicializar sistema de monitoreo
    if (document.getElementById('startMonitoring')) {
        initializeMonitoringSystem();
    }
    
    // Inicializar sistema de sincronización
    initializeSyncSystem();
}

function createCardElement(card, index) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.country = card.country;
    cardDiv.dataset.index = index;
    
    cardDiv.innerHTML = `
        <div class="card-symbol"><i class="${card.symbol}"></i></div>
        <div class="card-fact">${card.fact}</div>
    `;
    
    cardDiv.addEventListener('click', () => selectCard(cardDiv, card));
    
    return cardDiv;
}

function selectCard(cardElement, card) {
    if (cardElement.classList.contains('selected')) {
        // Deseleccionar
        cardElement.classList.remove('selected');
        gameState.selectedCards = gameState.selectedCards.filter(c => c.index !== cardElement.dataset.index);
    } else {
        // Seleccionar
        if (gameState.selectedCards.length < 5) {
            cardElement.classList.add('selected');
            gameState.selectedCards.push({
                ...card,
                index: cardElement.dataset.index,
                element: cardElement
            });
        } else {
            showNotification('Máximo 5 tarjetas por grupo', 'error');
        }
    }
    
    updateGroupStatus();
    
    // Verificar si se puede formar un grupo
    if (gameState.selectedCards.length === 5) {
        checkGroupFormation();
    }
}

function checkGroupFormation() {
    const countries = gameState.selectedCards.map(card => card.country);
    const uniqueCountries = [...new Set(countries)];
    
    if (uniqueCountries.length === 1) {
        // Grupo válido formado
        const country = uniqueCountries[0];
        showNotification(`¡Grupo de investigación formado correctamente!`, 'success');
        
        // Registrar progreso del hack
        gameState.completedGroups.add(country);
        gameState.currentGroup = country;
        gameState.groupCards[country] = gameState.selectedCards.map(card => ({ ...card }));
        
        console.log('=== GRUPO FORMADO ===');
        console.log('País del grupo:', country);
        console.log('currentGroup establecido:', gameState.currentGroup);
        console.log('Tarjetas del grupo:', gameState.groupCards[country]);
        gameState.currentGroupCards = gameState.groupCards[country];
        refreshHackProgress();
        
        // Actualizar monitoreo
        updateMonitoringOnGroupFormation(country);
        
        // Actualizar sincronización
        updateSyncOnGroupFormation(country);
        
        // Activar desafío final
        setTimeout(() => {
            activateFinalChallenge(country);
        }, 1500);
    } else {
        showNotification('Las tarjetas seleccionadas no pertenecen al mismo país', 'error');
        
        // Deseleccionar todas las tarjetas para empezar de nuevo
        setTimeout(() => {
            gameState.selectedCards.forEach(card => {
                if (card.element) {
                    card.element.classList.remove('selected');
                }
            });
            gameState.selectedCards = [];
            updateGroupStatus();
        }, 2000);
    }
}

function activateFinalChallenge(country) {
    const modal = document.getElementById('challengeModal');
    const symbolOrder = document.getElementById('symbolOrder');
    const codeTable = document.getElementById('codeTable');
    
    // Configurar orden de símbolos
    symbolOrder.innerHTML = '';
    const orderedCards = getOrderedCards(country);
    
    orderedCards.forEach(card => {
        const symbolItem = document.createElement('div');
        symbolItem.className = 'symbol-item';
        symbolItem.innerHTML = `
            <div class="symbol"><i class="${card.symbol}"></i></div>
        `;
        symbolOrder.appendChild(symbolItem);
    });
    
    // Configurar tabla de código
    codeTable.innerHTML = '';
    orderedCards.forEach(card => {
        const codeItem = document.createElement('div');
        codeItem.className = 'code-item';
        codeItem.innerHTML = `
            <div class="symbol"><i class="${card.symbol}"></i></div>
            <div class="letter">${card.letter}</div>
        `;
        codeTable.appendChild(codeItem);
    });
    
    // Configurar respuesta correcta
    const correctAnswer = country.toUpperCase();
    document.getElementById('countryInput').value = '';
    document.getElementById('resultMessage').innerHTML = '';
    
    // Mostrar modal
    modal.style.display = 'block';
    
    // Configurar verificación de respuesta
    document.getElementById('checkAnswer').onclick = () => {
        const userAnswer = document.getElementById('countryInput').value.toUpperCase();
        const resultMessage = document.getElementById('resultMessage');
        
        if (userAnswer === correctAnswer) {
            resultMessage.innerHTML = '¡CORRECTO! ¡Habéis descubierto vuestro país!';
            resultMessage.className = 'result-message success';
            
            // Marcar grupo como completado
            gameState.formedGroups.push({
                country: country,
                cards: [...gameState.selectedCards],
                completed: true
            });
            
            // Mostrar mensaje cultural después de 2 segundos
            setTimeout(() => {
                modal.style.display = 'none';
                showCulturalMessage(country);
            }, 2000);
            
        } else {
            resultMessage.innerHTML = 'Respuesta incorrecta. Intentadlo de nuevo.';
            resultMessage.className = 'result-message error';
        }
    };
}

function getOrderedCards(country) {
    const cards = culturalCards[country];
    
    // Ordenar según la pista: "De lo ancestral a lo moderno"
    const orderHints = {
        china: ['fas fa-dragon', 'fas fa-lightbulb', 'fas fa-envelope', 'fas fa-puzzle-piece', 'fas fa-coffee'], // Dragón (ancestral) -> Tetera (moderno)
        italia: ['fas fa-music', 'fas fa-mask', 'fas fa-landmark', 'fas fa-utensils', 'fas fa-palette'], // Partitura (ancestral) -> Paleta (moderno)
        siria: ['fas fa-city', 'fas fa-scroll', 'fas fa-mosque', 'fas fa-gem', 'fas fa-moon'], // Piedra (ancestral) -> Media luna (moderno)
        chile: ['fas fa-fish', 'fas fa-wine-glass', 'fas fa-volcano', 'fas fa-mountain', 'fas fa-telescope']  // Anzuelo (ancestral) -> Observatorio (moderno)
    };
    
    const orderedSymbols = orderHints[country];
    return orderedSymbols.map(symbol => cards.find(card => card.symbol === symbol));
}

function showCulturalMessage(country) {
    console.log('=== MOSTRANDO MENSAJE CULTURAL ===');
    console.log('País:', country);
    console.log('Mensaje cultural disponible:', culturalMessages[country] ? 'Sí' : 'No');
    
    const modal = document.getElementById('culturalModal');
    const title = document.getElementById('culturalTitle');
    const message = document.getElementById('culturalMessage');
    
    if (!modal || !title || !message) {
        console.error('Elementos del modal cultural no encontrados');
        console.log('Modal:', modal);
        console.log('Title:', title);
        console.log('Message:', message);
        return;
    }
    
    if (!culturalMessages[country]) {
        console.error('No hay mensaje cultural para el país:', country);
        return;
    }
    
    console.log('Título:', culturalMessages[country].title);
    console.log('Mensaje:', culturalMessages[country].message);
    
    title.textContent = culturalMessages[country].title;
    message.innerHTML = `<h4>${culturalMessages[country].title}</h4><p>${culturalMessages[country].message.replace(/\n/g, '</p><p>')}</p>`;
    
    modal.style.display = 'block';
    console.log('Modal cultural mostrado');
}

function setupEventListeners() {
    // Cerrar modales
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Enter para verificar respuesta
    const countryInput = document.getElementById('countryInput');
    const checkAnswerBtn = document.getElementById('checkAnswer');
    if (countryInput && checkAnswerBtn) {
        countryInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAnswerBtn.click();
            }
        });
    }
    
    // Generador de tarjetas
    const generateBtn = document.getElementById('generateCards');
    const printBtn = document.getElementById('printCards');
    const downloadBtn = document.getElementById('downloadCards') || document.getElementById('downloadPDF');
    
    if (generateBtn) generateBtn.addEventListener('click', generatePrintableCards);
    if (printBtn) printBtn.addEventListener('click', printCards);
    if (downloadBtn) downloadBtn.addEventListener('click', downloadPDF);
    
    // Sistema de candado
    setupLockSystem();
    
    // Sistema de cifrado
    document.getElementById('requestTable').addEventListener('click', requestCipherTable);
}

function generatePrintableCards() {
    const cardPreview = document.getElementById('cardPreview') || document.getElementById('generatedCards');
    if (!cardPreview) {
        showNotification('Error: No se encontró el contenedor de tarjetas', 'error');
        return;
    }
    cardPreview.innerHTML = '';
    
    let cardNumber = 1;
    
    // Mezclar todas las tarjetas
    const allCards = [];
    Object.keys(culturalCards).forEach(country => {
        culturalCards[country].forEach(card => {
            allCards.push({
                ...card,
                country: country
            });
        });
    });
    
    shuffleArray(allCards);
    
    // Crear tarjetas imprimibles
    allCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'printable-card';
        cardElement.innerHTML = `
            <div class="card-number">${cardNumber}</div>
            <div class="card-symbol"><i class="${card.symbol}"></i></div>
            <div class="card-fact">${card.fact}</div>
        `;
        cardPreview.appendChild(cardElement);
        cardNumber++;
    });
    
    // Verificar que los iconos se renderizaron correctamente
    const icons = cardPreview.querySelectorAll('.card-symbol i');
    console.log(`Se generaron ${icons.length} tarjetas con iconos`);
    
    // Depuración: verificar iconos específicos
    const telescopeCard = allCards.find(card => card.symbol === 'fas fa-telescope');
    if (telescopeCard) {
        console.log('Tarjeta del telescopio encontrada:', telescopeCard);
    }
    
    showNotification('Tarjetas generadas correctamente', 'success');
}

function printCards() {
    // Ocultar elementos no necesarios para impresión
    const elementsToHide = document.querySelectorAll('.generator-controls, .main-header, .event-info, .control-panel, .instructions, .emblem');
    elementsToHide.forEach(el => el.style.display = 'none');
    
    // Imprimir
    window.print();
    
    // Restaurar elementos
    elementsToHide.forEach(el => el.style.display = '');
    
    showNotification('Impresión iniciada', 'success');
}

function downloadPDF() {
    // Crear contenido HTML para PDF
    const printableCards = document.querySelectorAll('.printable-card');
    if (printableCards.length === 0) {
        showNotification('Primero genera las tarjetas', 'error');
        return;
    }
    
    let htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Tarjetas Misión C.O.N.N.E.X.</title>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                body { 
                    font-family: 'Share Tech Mono', monospace; 
                    margin: 0; 
                    padding: 20px; 
                    background: linear-gradient(135deg, #001100, #002200, #001100);
                    color: #00ff00;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    padding: 20px;
                    border: 2px solid #00ff00;
                    border-radius: 10px;
                    background: rgba(0, 255, 0, 0.05);
                }
                .header h1 {
                    font-family: 'Orbitron', monospace;
                    font-size: 2.5rem;
                    color: #00ff00;
                    text-shadow: 0 0 10px #00ff00;
                    margin: 0;
                }
                .card-container { 
                    display: grid; 
                    grid-template-columns: repeat(2, 1fr); 
                    gap: 15px; 
                }
                .printable-card { 
                    background: linear-gradient(145deg, #001100, #002200);
                    border: 2px solid #00ff00; 
                    border-radius: 10px; 
                    padding: 20px; 
                    text-align: center; 
                    page-break-inside: avoid;
                    box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
                    position: relative;
                }
                .card-symbol { 
                    font-size: 3rem; 
                    margin-bottom: 15px; 
                    color: #00ff00;
                    font-family: 'Orbitron', monospace;
                }
                .card-fact { 
                    font-size: 0.9rem; 
                    color: #00cc00; 
                    line-height: 1.4; 
                    font-family: 'Share Tech Mono', monospace;
                }
                .card-number { 
                    position: absolute; 
                    top: 10px; 
                    right: 10px; 
                    font-size: 0.8rem; 
                    color: #00ff00; 
                    font-family: 'Share Tech Mono', monospace;
                }
                @media print {
                    body { background: none; }
                    .printable-card { 
                        background: linear-gradient(145deg, #001100, #002200) !important;
                        -webkit-print-color-adjust: exact;
                        color-adjust: exact;
                    }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>OPERACION HORIZONTE</h1>
                <p>MISIÓN C.O.N.N.E.X. - TARJETAS CULTURALES</p>
            </div>
            <div class="card-container">
    `;
    
    printableCards.forEach(card => {
        htmlContent += card.outerHTML;
    });
    
    htmlContent += `
            </div>
        </body>
        </html>
    `;
    
    // Crear y descargar archivo
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tarjetas-mision-connex.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Archivo HTML descargado', 'success');
}

function updateGroupStatus() {
    const groupStatusElement = document.getElementById('groupStatus');
    const selectedCount = gameState.selectedCards.length;
    
    if (selectedCount === 0) {
        groupStatusElement.textContent = 'Selecciona 5 tarjetas del mismo país';
        groupStatusElement.className = 'group-status';
    } else if (selectedCount < 5) {
        groupStatusElement.textContent = `Seleccionadas: ${selectedCount}/5 tarjetas`;
        groupStatusElement.className = 'group-status';
    } else {
        // Verificar si las 5 tarjetas son del mismo país
        const countries = gameState.selectedCards.map(card => card.country);
        const uniqueCountries = [...new Set(countries)];
        
        if (uniqueCountries.length === 1) {
            groupStatusElement.textContent = `¡Grupo de investigación formado! Solicita la tabla de cifrado`;
            groupStatusElement.className = 'group-status success';
        } else {
            groupStatusElement.textContent = 'Las tarjetas seleccionadas no son del mismo país';
            groupStatusElement.className = 'group-status error';
        }
    }
}

// Sistema de Candado
function setupLockSystem() {
    const wheels = document.querySelectorAll('.lock-wheel');
    console.log('=== SETUP LOCK SYSTEM ===');
    console.log('Ruedas encontradas:', wheels.length);
    
    // Limpiar event listeners existentes para evitar duplicados
    wheels.forEach((wheel, index) => {
        console.log(`Configurando rueda ${index + 1}:`, wheel);
        
        // Remover listeners existentes
        wheel.removeEventListener('click', wheel._clickHandler);
        wheel.removeEventListener('keydown', wheel._keyHandler);
        
        // Crear nuevos handlers
        wheel._clickHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(`CLICK en rueda ${index + 1}`);
            cycleWheel(index);
        };
        
        wheel._keyHandler = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                console.log(`KEYDOWN en rueda ${index + 1}`);
                cycleWheel(index);
            }
        };
        
        // Añadir listeners
        wheel.addEventListener('click', wheel._clickHandler);
        wheel.addEventListener('keydown', wheel._keyHandler);
    });
    
    const unlockBtn = document.getElementById('unlockBtn');
    if (unlockBtn) {
        unlockBtn.removeEventListener('click', unlockBtn._unlockHandler);
        unlockBtn._unlockHandler = attemptUnlock;
        unlockBtn.addEventListener('click', unlockBtn._unlockHandler);
    }
    
    // Función de prueba para verificar todas las letras
    testAllLetters();
}

function testAllLetters() {
    console.log('=== PRUEBA DE TODAS LAS LETRAS ===');
    const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    console.log('Alfabeto completo:', letters);
    console.log('Total de letras:', letters.length);
    
    // Verificar que cada letra se puede mostrar
    const wheel = document.getElementById('wheel1');
    if (wheel) {
        console.log('Probando todas las letras en la primera rueda...');
        letters.split('').forEach((letter, index) => {
            wheel.textContent = letter;
            console.log(`Letra ${index + 1}: ${letter} - Mostrada: ${wheel.textContent}`);
        });
        // Restaurar letra inicial
        wheel.textContent = 'A';
    }
    
    // Añadir función de prueba manual al objeto window para depuración
    window.testWheelCycle = function(wheelIndex = 0) {
        console.log(`=== PRUEBA MANUAL DE RUEDA ${wheelIndex + 1} ===`);
        const wheel = document.getElementById(`wheel${wheelIndex + 1}`);
        if (!wheel) {
            console.error('Rueda no encontrada');
            return;
        }
        
        console.log('Estado inicial:', wheel.textContent);
        
        // Simular 10 clics con delay para evitar conflictos
        let clickCount = 0;
        const simulateClick = () => {
            if (clickCount < 10) {
                console.log(`--- Simulando clic ${clickCount + 1} ---`);
                cycleWheel(wheelIndex);
                clickCount++;
                setTimeout(simulateClick, 600); // Delay de 600ms para evitar conflictos
            } else {
                console.log('=== PRUEBA COMPLETADA ===');
            }
        };
        
        simulateClick();
    };
    
    // Función adicional para probar secuencia completa
    window.testFullSequence = function(wheelIndex = 0) {
        console.log(`=== PRUEBA SECUENCIA COMPLETA RUEDA ${wheelIndex + 1} ===`);
        const wheel = document.getElementById(`wheel${wheelIndex + 1}`);
        if (!wheel) {
            console.error('Rueda no encontrada');
            return;
        }
        
        const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        console.log('Secuencia esperada:', letters);
        
        // Resetear a A
        wheel.textContent = 'A';
        gameState.lockCombination[wheelIndex] = 'A';
        
        let currentIndex = 0;
        const testNext = () => {
            if (currentIndex < letters.length - 1) {
                cycleWheel(wheelIndex);
                currentIndex++;
                setTimeout(testNext, 100);
            } else {
                console.log('=== SECUENCIA COMPLETA PROBADA ===');
            }
        };
        
        setTimeout(testNext, 100);
    };
    
    // Función de diagnóstico completo
    window.diagnoseWheel = function(wheelIndex = 0) {
        console.log(`=== DIAGNÓSTICO COMPLETO RUEDA ${wheelIndex + 1} ===`);
        const wheel = document.getElementById(`wheel${wheelIndex + 1}`);
        if (!wheel) {
            console.error('Rueda no encontrada');
            return;
        }
        
        console.log('Elemento DOM:', wheel);
        console.log('textContent actual:', wheel.textContent);
        console.log('innerHTML actual:', wheel.innerHTML);
        console.log('Clases CSS:', wheel.className);
        console.log('Event listeners:', wheel._clickHandler ? 'Presente' : 'Ausente');
        
        // Probar cambio directo
        console.log('--- Probando cambio directo ---');
        wheel.textContent = 'B';
        console.log('Después de cambiar a B:', wheel.textContent);
        
        wheel.textContent = 'C';
        console.log('Después de cambiar a C:', wheel.textContent);
        
        wheel.textContent = 'A';
        console.log('Restaurado a A:', wheel.textContent);
        
        // Probar función cycleWheel
        console.log('--- Probando función cycleWheel ---');
        console.log('Estado antes:', wheel.textContent);
        cycleWheel(wheelIndex);
        console.log('Estado después:', wheel.textContent);
        
        console.log('=== DIAGNÓSTICO COMPLETADO ===');
    };
    
    // Función de prueba completa del flujo
    window.testCompleteFlow = function(country = 'italia') {
        console.log(`=== PRUEBA COMPLETA DEL FLUJO PARA ${country.toUpperCase()} ===`);
        
        // Simular formación de grupo
        console.log('1. Simulando formación de grupo...');
        gameState.selectedCards = culturalCards[country].map((card, index) => ({
            ...card,
            country: country,
            index: index,
            element: null
        }));
        
        checkGroupFormation();
        
        setTimeout(() => {
            console.log('2. Simulando solicitud de tabla de cifrado...');
            requestCipherTable();
            
            setTimeout(() => {
                console.log('3. Simulando combinación correcta en candado...');
                const correctAnswer = country === 'italia' ? 'ITALY' : country.toUpperCase();
                console.log('Combinación correcta:', correctAnswer);
                
                // Establecer combinación correcta
                gameState.lockCombination = correctAnswer.split('');
                console.log('Combinación establecida:', gameState.lockCombination);
                
                setTimeout(() => {
                    console.log('4. Intentando abrir candado...');
                    attemptUnlock();
                }, 1000);
            }, 1000);
        }, 1000);
    };
    
    console.log('Funciones de prueba disponibles:');
    console.log('- window.testWheelCycle(0) - Prueba de 10 clics');
    console.log('- window.testFullSequence(0) - Prueba de secuencia completa');
    console.log('- window.diagnoseWheel(0) - Diagnóstico completo');
    console.log('- window.testCompleteFlow("italia") - Prueba flujo completo');
}

// Variable global para evitar múltiples ejecuciones simultáneas
let wheelCycling = false;

function cycleWheel(index) {
    // Prevenir múltiples ejecuciones simultáneas
    if (wheelCycling) {
        console.log('=== CYCLE WHEEL BLOQUEADO (ya en ejecución) ===');
        return;
    }
    
    wheelCycling = true;
    
    console.log('=== CYCLE WHEEL LLAMADO ===');
    console.log('Índice de rueda:', index);
    console.log('Timestamp:', Date.now());
    
    const wheel = document.getElementById(`wheel${index + 1}`);
    if (!wheel) {
        console.error('No se encontró la rueda:', `wheel${index + 1}`);
        wheelCycling = false;
        return;
    }
    
    const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const currentLetter = wheel.textContent.trim();
    const currentIndex = letters.indexOf(currentLetter);
    
    console.log('Letra actual:', currentLetter);
    console.log('Índice actual:', currentIndex);
    console.log('Alfabeto completo:', letters);
    
    // Verificar que la letra actual existe en el alfabeto
    if (currentIndex === -1) {
        console.error('Letra actual no encontrada en el alfabeto:', currentLetter);
        wheel.textContent = 'A';
        gameState.lockCombination[index] = 'A';
        wheelCycling = false;
        return;
    }
    
    const nextIndex = (currentIndex + 1) % letters.length;
    const nextLetter = letters[nextIndex];
    
    console.log('Siguiente letra:', nextLetter);
    console.log('Índice siguiente:', nextIndex);
    console.log('Cálculo: (', currentIndex, '+ 1) %', letters.length, '=', nextIndex);
    
    // Actualizar DOM y estado
    wheel.textContent = nextLetter;
    gameState.lockCombination[index] = nextLetter;
    
    console.log('Combinación actualizada:', gameState.lockCombination);
    console.log('Letra confirmada en DOM:', wheel.textContent);
    
    // Efecto visual
    wheel.classList.add('success-animation');
    setTimeout(() => {
        wheel.classList.remove('success-animation');
        wheelCycling = false; // Liberar el bloqueo después del efecto visual
    }, 500);
}

function attemptUnlock() {
    console.log('=== ATTEMPT UNLOCK LLAMADO ===');
    const combination = gameState.lockCombination.join('');
    const statusElement = document.getElementById('lockStatus');
    const unlockBtn = document.getElementById('unlockBtn');
    
    console.log('Combinación actual:', combination);
    console.log('Grupo actual:', gameState.currentGroup);
    console.log('Tablas de cifrado desbloqueadas:', Array.from(gameState.cipherTablesUnlocked));
    console.log('Nivel 3 desbloqueado:', gameState.hackProgress.level3.unlocked);
    
    if (!gameState.hackProgress.level3.unlocked) {
        // Verificar si el grupo actual tiene su tabla de cifrado
        if (gameState.currentGroup && gameState.cipherTablesUnlocked.has(gameState.currentGroup)) {
            console.log('Grupo actual tiene tabla de cifrado, permitiendo acceso al candado');
            // Permitir acceso al candado para este grupo específico
        } else {
            statusElement.textContent = 'Necesitas la tabla de cifrado de tu grupo antes de abrir el candado';
            statusElement.className = 'lock-status error';
            showNotification('Obtén la tabla de cifrado de tu grupo antes de intentar abrir el candado', 'warning');
            return;
        }
    }
    
    // Verificar si hay un grupo formado
    if (gameState.currentGroup) {
        let correctAnswer = gameState.currentGroup.toUpperCase();
        
        // Caso especial para Italia - debe ser "ITALY" en lugar de "ITALIA"
        if (gameState.currentGroup === 'italia') {
            correctAnswer = 'ITALY';
        }
        
        console.log('Respuesta correcta esperada:', correctAnswer);
        console.log('Combinación introducida:', combination);
        console.log('¿Son iguales?', combination === correctAnswer);
        
        if (combination === correctAnswer) {
            const alreadyUnlocked = gameState.locksOpened.has(gameState.currentGroup);
            statusElement.textContent = '¡CANDADO ABIERTO! ¡MISIÓN COMPLETADA!';
            statusElement.className = 'lock-status success';
            unlockBtn.textContent = '¡ÉXITO!';
            unlockBtn.style.background = 'linear-gradient(145deg, #00ff00, #00cc00)';
            
            gameState.locksOpened.add(gameState.currentGroup);
            refreshHackProgress();
            
            const feedbackMessage = alreadyUnlocked
                ? `El candado de investigación ya estaba abierto.`
                : '¡CANDADO ABIERTO! Sistema parcialmente restaurado.';
            showNotification(feedbackMessage, alreadyUnlocked ? 'info' : 'success');
            
            // Actualizar monitoreo
            updateMonitoringOnLockOpen(gameState.currentGroup);
            
            // Actualizar sincronización
            updateSyncOnLockOpen(gameState.currentGroup);
            
            if (!alreadyUnlocked) {
                // Mostrar mensaje cultural
                console.log('Programando mensaje cultural para:', gameState.currentGroup);
                setTimeout(() => {
                    console.log('Ejecutando mensaje cultural...');
                    showCulturalMessage(gameState.currentGroup);
                }, 2000);
            }
            
            if (!alreadyUnlocked && gameState.hackProgress.level4.completed >= gameState.hackProgress.level4.total) {
                setTimeout(() => {
                    showNotification('¡MISIÓN COMPLETADA! Sistema completamente restaurado', 'success');
                }, 600);
            }
            
        } else {
            statusElement.textContent = `Combinación incorrecta: ${combination}. Inténtalo de nuevo.`;
            statusElement.className = 'lock-status error';
            unlockBtn.classList.add('error-animation');
            setTimeout(() => unlockBtn.classList.remove('error-animation'), 500);
            showNotification(`Combinación incorrecta: ${combination}`, 'error');
        }
    } else {
        statusElement.textContent = 'Primero debes formar un grupo válido';
        statusElement.className = 'lock-status error';
        showNotification('Primero debes formar un grupo válido antes de abrir el candado', 'warning');
    }
}

// Sistema de Cifrado
function requestCipherTable() {
    const source = determineCipherSource();
    
    if (!source) {
        showNotification('Debes formar un grupo cultural válido antes de solicitar la tabla de cifrado', 'warning');
        return;
    }
    
    const { country, cards } = source;
    gameState.currentGroup = country;
    gameState.currentGroupCards = cards.map(card => ({ ...card }));
    gameState.groupCards[country] = cards.map(card => ({ ...card }));
    
    console.log('=== SOLICITUD TABLA DE CIFRADO ===');
    console.log('País detectado:', country);
    console.log('currentGroup actualizado:', gameState.currentGroup);
    console.log('Tarjetas para tabla:', cards);
    
    showCipherTable(country, cards);
}

function determineCipherSource() {
    if (gameState.selectedCards.length === 5) {
        const countries = gameState.selectedCards.map(card => card.country);
        const uniqueCountries = [...new Set(countries)];
        
        if (uniqueCountries.length === 1) {
            const country = uniqueCountries[0];
            return {
                country,
                cards: gameState.selectedCards.map(card => ({ ...card }))
            };
        }
        
        showNotification('Las tarjetas seleccionadas no pertenecen al mismo país', 'warning');
        return null;
    }
    
    if (gameState.currentGroup && gameState.groupCards[gameState.currentGroup]) {
        return {
            country: gameState.currentGroup,
            cards: gameState.groupCards[gameState.currentGroup].map(card => ({ ...card }))
        };
    }
    
    const completedCountries = Array.from(gameState.completedGroups);
    for (const country of completedCountries) {
        if (gameState.groupCards[country]) {
            return {
                country,
                cards: gameState.groupCards[country].map(card => ({ ...card }))
            };
        }
    }
    
    if (gameState.formedGroups.length > 0) {
        const lastGroup = gameState.formedGroups[gameState.formedGroups.length - 1];
        if (lastGroup && lastGroup.cards) {
            return {
                country: lastGroup.country,
                cards: lastGroup.cards.map(card => ({ ...card }))
            };
        }
    }
    
    return null;
}

function showCipherTable(country, cards = null) {
    const cipherDisplay = document.getElementById('cipherDisplay');
    const wasUnlocked = gameState.cipherTablesUnlocked.has(country);
    const groupCards = cards || gameState.groupCards[country] || culturalCards[country]?.map(card => ({ ...card, country }));
    
    if (!groupCards || groupCards.length === 0) {
        showNotification('No se encontraron símbolos registrados para este país', 'error');
        return;
    }
    
    cipherDisplay.innerHTML = '';
    cipherDisplay.classList.add('active');
    
    const header = document.createElement('div');
    header.className = 'cipher-header';
    header.innerHTML = `
        <h3>Tabla de Cifrado Asignada</h3>
        <p>Equivalencias alfabéticas para los símbolos obtenidos</p>
    `;
    cipherDisplay.appendChild(header);
    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const mapping = {};
    groupCards.forEach(card => {
        if (card && card.letter) {
            mapping[card.letter.toUpperCase()] = card.symbol;
        }
    });
    
    const cipherGrid = document.createElement('div');
    cipherGrid.className = 'cipher-grid';
    
    alphabet.forEach(letter => {
        const assignedSymbol = mapping[letter];
        const gridItem = document.createElement('div');
        gridItem.className = `cipher-grid-item ${assignedSymbol ? 'assigned' : 'empty'}`;
        gridItem.setAttribute('data-letter', letter);
        gridItem.innerHTML = `
            <span class="cipher-letter">${letter}</span>
            <span class="cipher-symbol">${assignedSymbol ? `<i class="${assignedSymbol}"></i>` : '<i class="fas fa-minus"></i>'}</span>
        `;
        cipherGrid.appendChild(gridItem);
    });
    
    cipherDisplay.appendChild(cipherGrid);
    
    gameState.cipherTablesUnlocked.add(country);
    refreshHackProgress();
    
    updateMonitoringOnCipherRequest(country);
    updateSyncOnCipherRequest(country);
    addTerminalCommand(`decrypt_table grupo_investigacion`);
    
    const feedbackMessage = wasUnlocked
        ? 'Esta tabla de cifrado ya estaba disponible.'
        : 'Tabla de cifrado desplegada. Usa los símbolos para descifrar el código.';
    showNotification(feedbackMessage, wasUnlocked ? 'info' : 'success');
    
    cipherDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function renderCipherPlaceholder() {
    const cipherDisplay = document.getElementById('cipherDisplay');
    if (!cipherDisplay) return;
    
    cipherDisplay.innerHTML = `
        <div class="cipher-placeholder">
            <i class="fas fa-shield-alt"></i>
            <p>Solicita la tabla de cifrado cuando formes un grupo cultural.</p>
        </div>
    `;
    cipherDisplay.classList.remove('active');
}

function showNotification(message, type = 'info') {
    const notificationStyles = {
        success: {
            icon: 'fa-check-circle',
            color: '#00ff9d',
            gradient: ['#001a00', '#003300'],
            shadow: 'rgba(0, 255, 157, 0.45)'
        },
        error: {
            icon: 'fa-times-circle',
            color: '#ff4d4d',
            gradient: ['#2b0000', '#450000'],
            shadow: 'rgba(255, 77, 77, 0.45)'
        },
        warning: {
            icon: 'fa-exclamation-triangle',
            color: '#ffcc00',
            gradient: ['#2b1f00', '#453200'],
            shadow: 'rgba(255, 204, 0, 0.45)'
        },
        info: {
            icon: 'fa-info-circle',
            color: '#00c6ff',
            gradient: ['#001a2e', '#00335a'],
            shadow: 'rgba(0, 198, 255, 0.45)'
        }
    };
    
    const config = notificationStyles[type] || notificationStyles.info;
    
    // Crear modal de alerta
    const alertModal = document.createElement('div');
    alertModal.className = 'alert-modal';
    alertModal.setAttribute('role', 'alertdialog');
    alertModal.setAttribute('aria-live', 'assertive');
    alertModal.innerHTML = `
        <div class="alert-content ${type}">
            <div class="alert-icon">
                <i class="fas ${config.icon}"></i>
            </div>
            <div class="alert-message">${message}</div>
            <div class="alert-close">
                <i class="fas fa-times"></i>
            </div>
        </div>
    `;
    
    // Añadir estilos inline para asegurar que funcione
    alertModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const alertContent = alertModal.querySelector('.alert-content');
    alertContent.style.cssText = `
        background: linear-gradient(145deg, ${config.gradient[0]}, ${config.gradient[1]});
        border: 3px solid ${config.color};
        border-radius: 15px;
        padding: 40px;
        text-align: center;
        max-width: 500px;
        width: 90%;
        position: relative;
        box-shadow: 0 0 30px ${config.shadow};
        animation: slideInScale 0.4s ease-out;
    `;
    
    const alertIcon = alertModal.querySelector('.alert-icon');
    alertIcon.style.cssText = `
        font-size: 4rem;
        color: ${config.color};
        margin-bottom: 20px;
        animation: pulse 1s infinite;
    `;
    
    const alertMessage = alertModal.querySelector('.alert-message');
    alertMessage.style.cssText = `
        font-size: 1.5rem;
        color: ${config.color};
        font-family: 'Orbitron', monospace;
        font-weight: bold;
        line-height: 1.4;
        margin-bottom: 20px;
        text-shadow: 0 0 10px ${config.shadow};
    `;
    alertMessage.innerHTML = message.replace(/\n/g, '<br>');
    
    const alertClose = alertModal.querySelector('.alert-close');
    alertClose.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 1.5rem;
        color: ${config.color};
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    `;
    
    // Añadir al DOM
    document.body.appendChild(alertModal);
    
    // Auto-cerrar después de 3 segundos
    setTimeout(() => {
        if (alertModal.parentNode) {
            alertModal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                if (alertModal.parentNode) {
                    alertModal.parentNode.removeChild(alertModal);
                }
            }, 300);
        }
    }, 3000);
    
    // Cerrar al hacer clic en X o fuera del modal
    alertClose.addEventListener('click', () => {
        alertModal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            if (alertModal.parentNode) {
                alertModal.parentNode.removeChild(alertModal);
            }
        }, 300);
    });
    
    alertModal.addEventListener('click', (e) => {
        if (e.target === alertModal) {
            alertModal.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => {
                if (alertModal.parentNode) {
                    alertModal.parentNode.removeChild(alertModal);
                }
            }, 300);
        }
    });
}

function createMatrixRain() {
    const matrixContainer = document.getElementById('matrix-rain');
    const characters = '01';
    
    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.style.cssText = `
            position: absolute;
            top: -100px;
            left: ${Math.random() * 100}%;
            color: #00ff00;
            font-family: 'Share Tech Mono', monospace;
            font-size: 14px;
            animation: matrixFall ${5 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        let text = '';
        for (let j = 0; j < 20; j++) {
            text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Sistema de Ventanas Progresivas (Hack System)
function initializeHackSystem() {
    refreshHackProgress();
    setupCommandListeners();
    addTerminalCommand('system_init');
}

function updateProgressWindows() {
    const levels = ['level1', 'level2', 'level3', 'level4'];
    
    levels.forEach(level => {
        const windowElement = document.getElementById(level);
        const progress = gameState.hackProgress[level];
        const statusElement = windowElement.querySelector('.window-status');
        const progressFill = windowElement.querySelector('.progress-fill');
        const progressText = windowElement.querySelector('.progress-text');
        
        // Actualizar estado de la ventana
        windowElement.classList.remove('unlocked', 'completed');
        statusElement.classList.remove('locked', 'unlocked', 'completed');
        
        if (progress.completed >= progress.total) {
            windowElement.classList.add('completed');
            statusElement.classList.add('completed');
            statusElement.innerHTML = '<i class="fas fa-check"></i>';
        } else if (progress.unlocked) {
            windowElement.classList.add('unlocked');
            statusElement.classList.add('unlocked');
            statusElement.innerHTML = '<i class="fas fa-unlock"></i>';
        } else {
            statusElement.classList.add('locked');
            statusElement.innerHTML = '<i class="fas fa-lock"></i>';
        }
        
        // Actualizar barra de progreso
        const percentage = (progress.completed / progress.total) * 100;
        progressFill.style.width = `${percentage}%`;
        
        // Actualizar texto de progreso
        if (level === 'level1') {
            progressText.textContent = `${progress.completed}/${progress.total} grupos culturales formados`;
            if (progress.completed === 0) {
                progressText.textContent += ' • Selecciona 5 tarjetas del mismo país';
            }
        } else if (level === 'level2') {
            progressText.textContent = `${progress.completed}/${progress.total} tablas de cifrado obtenidas`;
            if (!progress.unlocked) {
                progressText.textContent += ' • Forma al menos un grupo';
            }
        } else if (level === 'level3') {
            progressText.textContent = `${progress.completed}/${progress.total} candados abiertos`;
            if (!progress.unlocked) {
                progressText.textContent += ' • Consigue la tabla de cifrado de tu grupo';
            } else if (progress.completed === 0) {
                progressText.textContent += ' • Introduce el código correcto';
            }
        } else if (level === 'level4') {
            progressText.textContent = progress.completed >= progress.total
                ? 'Misión completada'
                : 'Sistema bloqueado';
        }
    });
}

function refreshHackProgress() {
    const prevLevel2Unlocked = gameState.hackProgress.level2.unlocked;
    const prevLevel3Unlocked = gameState.hackProgress.level3.unlocked;
    const prevLevel4Unlocked = gameState.hackProgress.level4.unlocked;
    
    gameState.hackProgress.level1.unlocked = true;
    gameState.hackProgress.level1.completed = Math.min(
        gameState.completedGroups.size,
        gameState.hackProgress.level1.total
    );
    
    gameState.hackProgress.level2.completed = Math.min(
        gameState.cipherTablesUnlocked.size,
        gameState.hackProgress.level2.total
    );
    gameState.hackProgress.level2.unlocked = gameState.hackProgress.level1.completed > 0;
    
    gameState.hackProgress.level3.completed = Math.min(
        gameState.locksOpened.size,
        gameState.hackProgress.level3.total
    );
    // El nivel 3 se desbloquea cuando el grupo actual tiene su tabla de cifrado
    gameState.hackProgress.level3.unlocked = gameState.currentGroup && gameState.cipherTablesUnlocked.has(gameState.currentGroup);
    
    const allLocksOpened = gameState.hackProgress.level3.completed >= gameState.hackProgress.level3.total;
    gameState.hackProgress.level4.completed = allLocksOpened ? gameState.hackProgress.level4.total : 0;
    gameState.hackProgress.level4.unlocked = gameState.hackProgress.level3.completed > 0;
    
    if (!prevLevel2Unlocked && gameState.hackProgress.level2.unlocked) {
        addTerminalCommand('level_unlocked level2');
    }
    if (!prevLevel3Unlocked && gameState.hackProgress.level3.unlocked) {
        addTerminalCommand('level_unlocked level3');
    }
    if (!prevLevel4Unlocked && gameState.hackProgress.level4.unlocked) {
        addTerminalCommand('level_unlocked level4');
    }
    
    updateProgressWindows();
}

function setupCommandListeners() {
    const commandItems = document.querySelectorAll('.command-item');
    
    commandItems.forEach(item => {
        item.addEventListener('click', function() {
            const command = this.dataset.command;
            executeCommand(command);
        });
    });
}

function executeCommand(command) {
    switch(command) {
        case 'status':
            addTerminalCommand('system_status');
            showSystemStatus();
            break;
        case 'scan':
            addTerminalCommand('scan_groups');
            scanGroups();
            break;
        case 'decrypt':
            addTerminalCommand('init_decrypt');
            initDecryptProcess();
            break;
        case 'unlock':
            addTerminalCommand('unlock_system');
            unlockSystem();
            break;
    }
}

function addTerminalCommand(command) {
    const terminalOutput = document.getElementById('terminalOutput');
    
    const commandLine = document.createElement('div');
    commandLine.className = 'terminal-line';
    commandLine.innerHTML = `
        <span class="prompt">CONNEX@system:~$</span> 
        <span class="command">${command}</span>
    `;
    
    terminalOutput.appendChild(commandLine);
    
    // Añadir output después de un breve delay
    setTimeout(() => {
        const outputLine = document.createElement('div');
        outputLine.className = 'terminal-line';
        
        let output = '';
        switch(command) {
            case 'system_init':
                output = 'Sistema CONNEX inicializado. Estado: COMPROMETIDO';
                break;
            case 'system_status':
                output = `Grupos completados: ${gameState.hackProgress.level1.completed}/4 | Países descifrados: ${gameState.hackProgress.level2.completed}/4`;
                break;
            case 'scan_groups':
                output = `Escaneando... ${gameState.formedGroups.length} grupos detectados`;
                break;
            case 'init_decrypt':
                output = 'Proceso de descifrado iniciado. Solicita tabla de cifrado';
                break;
            case 'unlock_system':
                output = 'Sistema de desbloqueo activado. Introduce código de 5 letras';
                break;
            case 'level_unlocked':
                const level = command.split(' ')[1];
                output = `Nivel ${level} desbloqueado. Acceso concedido`;
                break;
            case 'decrypt_table':
                output = `Tabla de cifrado para grupo de investigación generada`;
                break;
            default:
                output = 'Comando ejecutado';
        }
        
        outputLine.innerHTML = `<span class="output">${output}</span>`;
        terminalOutput.appendChild(outputLine);
        
        // Scroll al final
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }, 500);
}

function showSystemStatus() {
    const status = `
        Estado del Sistema CONNEX:
        - Grupos culturales: ${gameState.hackProgress.level1.completed}/4 completados
        - Países descifrados: ${gameState.hackProgress.level2.completed}/4
        - Candados abiertos: ${gameState.hackProgress.level3.completed}/4
        - Sistema restaurado: ${gameState.hackProgress.level4.completed > 0 ? 'SÍ' : 'NO'}
    `;
    
    showNotification(status, 'info');
}

function scanGroups() {
    const groupCount = gameState.formedGroups.length;
    if (groupCount > 0) {
        showNotification(`Escaneo completado: ${groupCount} grupos culturales detectados`, 'success');
    } else {
        showNotification('No se detectaron grupos culturales. Forma grupos primero', 'warning');
    }
}

function initDecryptProcess() {
    if (gameState.hackProgress.level1.completed >= 4) {
        showNotification('Proceso de descifrado iniciado. Usa el botón "Solicitar Tabla de Cifrado"', 'success');
    } else {
        showNotification('Completa primero todos los grupos culturales', 'warning');
    }
}

function unlockSystem() {
    if (gameState.hackProgress.level2.completed < gameState.hackProgress.level2.total) {
        showNotification('Descifra primero todos los países y obtén sus tablas de cifrado', 'warning');
        return;
    }
    
    showNotification('Sistema de desbloqueo activado. Usa el candado de 5 letras', 'success');
}

// Sistema de Monitoreo del Facilitador
function initializeMonitoringSystem() {
    setupMonitoringEventListeners();
    updateDashboard();
    logActivity('Sistema de monitoreo inicializado', 'success');
}

function setupMonitoringEventListeners() {
    document.getElementById('startMonitoring').addEventListener('click', startMonitoring);
    document.getElementById('stopMonitoring').addEventListener('click', stopMonitoring);
    document.getElementById('resetAll').addEventListener('click', resetAllGroups);
}

function startMonitoring() {
    gameState.monitoringActive = true;
    document.getElementById('startMonitoring').disabled = true;
    document.getElementById('stopMonitoring').disabled = false;
    
    // Simular conexión de grupos (en un entorno real, esto vendría de los dispositivos de los estudiantes)
    simulateGroupConnections();
    
    logActivity('Monitoreo iniciado - Esperando conexiones de grupos', 'success');
    showNotification('Sistema de monitoreo activado', 'success');
}

function stopMonitoring() {
    gameState.monitoringActive = false;
    document.getElementById('startMonitoring').disabled = false;
    document.getElementById('stopMonitoring').disabled = true;
    
    logActivity('Monitoreo detenido', 'warning');
    showNotification('Sistema de monitoreo desactivado', 'warning');
}

function resetAllGroups() {
    if (confirm('¿Estás seguro de que quieres reiniciar todos los grupos?')) {
        // Resetear datos de grupos
        Object.keys(gameState.groupsData).forEach(groupId => {
            gameState.groupsData[groupId] = {
                students: 0,
                country: null,
                progress: { grouping: 0, cipher: false, lock: false }
            };
        });
        
        // Resetear progreso del hack
        gameState.hackProgress = {
            level1: { completed: 0, total: 4, unlocked: true },
            level2: { completed: 0, total: 4, unlocked: false },
            level3: { completed: 0, total: 4, unlocked: false },
            level4: { completed: 0, total: 1, unlocked: false }
        };
        gameState.completedGroups = new Set();
        gameState.cipherTablesUnlocked = new Set();
        gameState.locksOpened = new Set();
        gameState.groupCards = {};
        
        updateDashboard();
        refreshHackProgress();
        renderCipherPlaceholder();
        
        logActivity('Todos los grupos han sido reiniciados', 'warning');
        showNotification('Sistema reiniciado completamente', 'success');
    }
}

function simulateGroupConnections() {
    // Simular conexión gradual de grupos
    setTimeout(() => {
        connectGroup(1, 'China');
        logActivity('Grupo 1 conectado - Detectado país: China', 'success');
    }, 2000);
    
    setTimeout(() => {
        connectGroup(2, 'Italia');
        logActivity('Grupo 2 conectado - Detectado país: Italia', 'success');
    }, 4000);
    
    setTimeout(() => {
        connectGroup(3, 'Siria');
        logActivity('Grupo 3 conectado - Detectado país: Siria', 'success');
    }, 6000);
    
    setTimeout(() => {
        connectGroup(4, 'Chile');
        logActivity('Grupo 4 conectado - Detectado país: Chile', 'success');
    }, 8000);
}

function connectGroup(groupId, country) {
    gameState.groupsData[groupId].students = 5;
    gameState.groupsData[groupId].country = country;
    gameState.groupsData[groupId].progress.grouping = 5;
    
    updateGroupMonitor(groupId);
    updateGlobalStats();
}

function updateGroupProgress(groupId, progressType, value) {
    if (gameState.groupsData[groupId]) {
        if (progressType === 'grouping') {
            gameState.groupsData[groupId].progress.grouping = value;
        } else if (progressType === 'cipher') {
            gameState.groupsData[groupId].progress.cipher = value;
        } else if (progressType === 'lock') {
            gameState.groupsData[groupId].progress.lock = value;
        }
        
        updateGroupMonitor(groupId);
        updateGlobalStats();
        
        logActivity(`Grupo ${groupId}: ${progressType} actualizado`, 'success');
    }
}

function updateGroupMonitor(groupId) {
    const groupElement = document.getElementById(`group${groupId}`);
    const groupData = gameState.groupsData[groupId];
    
    if (!groupElement || !groupData) return;
    
    // Actualizar estado de conexión
    const statusElement = groupElement.querySelector('.group-status');
    if (groupData.students > 0) {
        statusElement.className = 'group-status online';
        statusElement.innerHTML = '<i class="fas fa-circle"></i><span>Conectado</span>';
        groupElement.classList.add('active');
    } else {
        statusElement.className = 'group-status offline';
        statusElement.innerHTML = '<i class="fas fa-circle"></i><span>Desconectado</span>';
        groupElement.classList.remove('active');
    }
    
    // Actualizar barras de progreso
    const progressItems = groupElement.querySelectorAll('.progress-item');
    
    // Agrupación
    const groupingProgress = progressItems[0].querySelector('.progress-fill');
    const groupingText = progressItems[0].querySelector('.progress-text');
    const groupingPercentage = (groupData.progress.grouping / 5) * 100;
    groupingProgress.style.width = `${groupingPercentage}%`;
    groupingText.textContent = `${groupData.progress.grouping}/5`;
    
    // Cifrado
    const cipherProgress = progressItems[1].querySelector('.progress-fill');
    const cipherText = progressItems[1].querySelector('.progress-text');
    if (groupData.progress.cipher) {
        cipherProgress.style.width = '100%';
        cipherText.textContent = 'Solicitado';
    } else {
        cipherProgress.style.width = '0%';
        cipherText.textContent = 'No solicitado';
    }
    
    // Candado
    const lockProgress = progressItems[2].querySelector('.progress-fill');
    const lockText = progressItems[2].querySelector('.progress-text');
    if (groupData.progress.lock) {
        lockProgress.style.width = '100%';
        lockText.textContent = 'Abierto';
        statusElement.className = 'group-status completed';
        statusElement.innerHTML = '<i class="fas fa-circle"></i><span>Completado</span>';
    } else {
        lockProgress.style.width = '0%';
        lockText.textContent = 'Bloqueado';
    }
}

function updateGlobalStats() {
    const totalStudents = Object.values(gameState.groupsData).reduce((sum, group) => sum + group.students, 0);
    const groupsFormed = Object.values(gameState.groupsData).filter(group => group.students === 5).length;
    const cipherTables = Object.values(gameState.groupsData).filter(group => group.progress.cipher).length;
    const locksOpened = Object.values(gameState.groupsData).filter(group => group.progress.lock).length;
    
    document.getElementById('totalStudents').textContent = totalStudents;
    document.getElementById('groupsFormed').textContent = groupsFormed;
    document.getElementById('cipherTables').textContent = cipherTables;
    document.getElementById('locksOpened').textContent = locksOpened;
}

function updateDashboard() {
    Object.keys(gameState.groupsData).forEach(groupId => {
        updateGroupMonitor(parseInt(groupId));
    });
    updateGlobalStats();
}

function logActivity(message, type = 'info') {
    const logContainer = document.getElementById('activityLog');
    const timestamp = new Date().toLocaleTimeString();
    
    const logEntry = document.createElement('div');
    logEntry.className = `log-entry ${type}`;
    logEntry.innerHTML = `
        <span class="log-time">[${timestamp}]</span>
        <span class="log-message">${message}</span>
    `;
    
    logContainer.appendChild(logEntry);
    logContainer.scrollTop = logContainer.scrollHeight;
    
    // Mantener solo los últimos 50 registros
    while (logContainer.children.length > 50) {
        logContainer.removeChild(logContainer.firstChild);
    }
}

function sendMessageToGroup(groupId) {
    const message = prompt(`Enviar mensaje al Grupo ${groupId}:`);
    if (message) {
        logActivity(`Mensaje enviado al Grupo ${groupId}: "${message}"`, 'info');
        showNotification(`Mensaje enviado al Grupo ${groupId}`, 'success');
        
        // Enviar mensaje a través del sistema de sincronización
        sendMessageToGroupSync(groupId, message);
    }
}

function helpGroup(groupId) {
    const groupData = gameState.groupsData[groupId];
    let helpMessage = '';
    
    if (groupData.progress.grouping < 5) {
        helpMessage = `Grupo ${groupId}: Necesita completar la agrupación (${groupData.progress.grouping}/5 estudiantes)`;
    } else if (!groupData.progress.cipher) {
        helpMessage = `Grupo ${groupId}: Debe solicitar la tabla de cifrado`;
    } else if (!groupData.progress.lock) {
        helpMessage = `Grupo ${groupId}: Debe usar la tabla de cifrado para abrir el candado`;
    } else {
        helpMessage = `Grupo ${groupId}: ¡Misión completada!`;
    }
    
    logActivity(`Ayuda para Grupo ${groupId}: ${helpMessage}`, 'warning');
    showNotification(helpMessage, 'info');
}

// Integrar con el sistema existente
function updateMonitoringOnGroupFormation(country) {
    // Encontrar el grupo que corresponde a este país
    const groupId = Object.keys(gameState.groupsData).find(id => 
        gameState.groupsData[id].country === country
    );
    
    if (groupId) {
        updateGroupProgress(parseInt(groupId), 'grouping', 5);
        logActivity(`Grupo ${groupId} (${country}): Agrupación completada`, 'success');
    }
}

function updateMonitoringOnCipherRequest(country) {
    const groupId = Object.keys(gameState.groupsData).find(id => 
        gameState.groupsData[id].country === country
    );
    
    if (groupId) {
        updateGroupProgress(parseInt(groupId), 'cipher', true);
        logActivity(`Grupo ${groupId} (${country}): Tabla de cifrado solicitada`, 'success');
    }
}

function updateMonitoringOnLockOpen(country) {
    const groupId = Object.keys(gameState.groupsData).find(id => 
        gameState.groupsData[id].country === country
    );
    
    if (groupId) {
        updateGroupProgress(parseInt(groupId), 'lock', true);
        logActivity(`Grupo ${groupId} (${country}): Candado abierto - ¡Misión completada!`, 'success');
    }
}

// Sistema de Sincronización en Tiempo Real
function initializeSyncSystem() {
    // Detectar si es el facilitador
    gameState.isFacilitator = window.isFacilitator || document.getElementById('facilitatorDashboard') !== null;
    
    // Inicializar BroadcastChannel para comunicación entre pestañas
    if ('BroadcastChannel' in window) {
        gameState.broadcastChannel = new BroadcastChannel('connx-sync');
        gameState.broadcastChannel.onmessage = handleSyncMessage;
    }
    
    // Verificar si ya hay un grupo seleccionado
    const savedGroup = localStorage.getItem('connx-current-group');
    if (savedGroup && !gameState.isFacilitator) {
        gameState.currentGroup = parseInt(savedGroup);
        updateGroupUI();
        connectToGroup(gameState.currentGroup);
    }
    
    // Iniciar sincronización periódica
    startSyncInterval();
}

function joinGroup(groupId) {
    if (gameState.isFacilitator) return;
    
    gameState.currentGroup = groupId;
    localStorage.setItem('connx-current-group', groupId.toString());
    
    updateGroupUI();
    connectToGroup(groupId);
    
    // Notificar al facilitador
    sendSyncMessage({
        type: 'group_join',
        groupId: groupId,
        timestamp: Date.now()
    });
    
    showNotification(`Conectado al Grupo ${groupId}`, 'success');
}

function updateGroupUI() {
    if (gameState.isFacilitator) return;
    
    const groupButtons = document.querySelectorAll('.group-btn');
    if (groupButtons.length) {
        groupButtons.forEach(btn => {
            btn.classList.remove('selected');
            if (parseInt(btn.dataset.group, 10) === gameState.currentGroup) {
                btn.classList.add('selected');
            }
        });
    }
    
    const statusElement = document.getElementById('connectionStatus');
    if (!statusElement) return;
    
    if (gameState.currentGroup) {
        statusElement.className = 'connection-status connected';
        statusElement.innerHTML = '<i class="fas fa-circle"></i><span>Conectado al Grupo ' + gameState.currentGroup + '</span>';
    } else {
        statusElement.className = 'connection-status disconnected';
        statusElement.innerHTML = '<i class="fas fa-circle"></i><span>Desconectado</span>';
    }
}

function connectToGroup(groupId) {
    if (gameState.isFacilitator) return;
    
    // Actualizar datos locales
    const groupData = {
        students: 5, // Asumimos que el grupo está completo
        country: getCountryByGroup(groupId),
        progress: {
            grouping: 5,
            cipher: false,
            lock: false
        }
    };
    
    // Guardar en localStorage
    localStorage.setItem(`connx-group-${groupId}`, JSON.stringify(groupData));
    
    // Notificar al facilitador
    sendSyncMessage({
        type: 'group_update',
        groupId: groupId,
        data: groupData,
        timestamp: Date.now()
    });
}

function getCountryByGroup(groupId) {
    const countryMap = {
        1: 'China',
        2: 'Italia', 
        3: 'Siria',
        4: 'Chile'
    };
    return countryMap[groupId] || null;
}

function sendSyncMessage(message) {
    if (gameState.broadcastChannel) {
        gameState.broadcastChannel.postMessage(message);
    }
    
    // También guardar en localStorage para persistencia
    const syncData = {
        ...message,
        sender: gameState.currentGroup || 'facilitator'
    };
    localStorage.setItem('connx-sync-data', JSON.stringify(syncData));
}

function handleSyncMessage(event) {
    const message = event.data;
    
    if (gameState.isFacilitator) {
        handleFacilitatorSync(message);
    } else {
        handleGroupSync(message);
    }
}

function handleFacilitatorSync(message) {
    switch (message.type) {
        case 'group_join':
            logActivity(`Grupo ${message.groupId} se ha conectado`, 'success');
            updateGroupMonitor(message.groupId);
            break;
            
        case 'group_update':
            if (gameState.groupsData[message.groupId]) {
                gameState.groupsData[message.groupId] = message.data;
                updateGroupMonitor(message.groupId);
                updateGlobalStats();
            }
            break;
            
        case 'progress_update':
            updateGroupProgress(message.groupId, message.progressType, message.value);
            break;
            
        case 'group_disconnect':
            logActivity(`Grupo ${message.groupId} se ha desconectado`, 'warning');
            break;
    }
}

function handleGroupSync(message) {
    // Los grupos pueden recibir mensajes del facilitador
    if (message.type === 'facilitator_message') {
        showNotification(`Mensaje del facilitador: ${message.text}`, 'info');
    }
}

function startSyncInterval() {
    gameState.syncInterval = setInterval(() => {
        if (gameState.isFacilitator) {
            // El facilitador lee datos de localStorage
            syncFromStorage();
        } else if (gameState.currentGroup) {
            // Los grupos envían su estado actual
            sendCurrentProgress();
        }
    }, 2000); // Sincronizar cada 2 segundos
}

function syncFromStorage() {
    if (!gameState.isFacilitator) return;
    
    for (let groupId = 1; groupId <= 4; groupId++) {
        const storedData = localStorage.getItem(`connx-group-${groupId}`);
        if (storedData) {
            try {
                const groupData = JSON.parse(storedData);
                if (JSON.stringify(gameState.groupsData[groupId]) !== JSON.stringify(groupData)) {
                    gameState.groupsData[groupId] = groupData;
                    updateGroupMonitor(groupId);
                    updateGlobalStats();
                }
            } catch (e) {
                console.error('Error parsing group data:', e);
            }
        }
    }
}

function sendCurrentProgress() {
    if (gameState.isFacilitator || !gameState.currentGroup) return;
    
    const currentData = {
        students: 5,
        country: getCountryByGroup(gameState.currentGroup),
        progress: {
            grouping: gameState.selectedCards.length,
            cipher: gameState.cipherTables[getCountryByGroup(gameState.currentGroup)] ? true : false,
            lock: gameState.currentGroup && gameState.lockCombination.join('') === getCountryByGroup(gameState.currentGroup).toUpperCase()
        }
    };
    
    localStorage.setItem(`connx-group-${gameState.currentGroup}`, JSON.stringify(currentData));
    
    sendSyncMessage({
        type: 'group_update',
        groupId: gameState.currentGroup,
        data: currentData,
        timestamp: Date.now()
    });
}

function updateProgressSync(progressType, value) {
    if (gameState.isFacilitator || !gameState.currentGroup) return;
    
    sendSyncMessage({
        type: 'progress_update',
        groupId: gameState.currentGroup,
        progressType: progressType,
        value: value,
        timestamp: Date.now()
    });
}

// Integrar con funciones existentes
function updateSyncOnGroupFormation(country) {
    updateProgressSync('grouping', 5);
}

function updateSyncOnCipherRequest(country) {
    updateProgressSync('cipher', true);
}

function updateSyncOnLockOpen(country) {
    updateProgressSync('lock', true);
}

// Función para enviar mensaje a grupo específico (facilitador)
function sendMessageToGroupSync(groupId, message) {
    if (!gameState.isFacilitator) return;
    
    sendSyncMessage({
        type: 'facilitator_message',
        targetGroup: groupId,
        text: message,
        timestamp: Date.now()
    });
}

// Añadir estilos CSS para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes matrixFall {
        0% {
            transform: translateY(-100vh);
        }
        100% {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);
