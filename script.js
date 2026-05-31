let selectedShape = "";
let selectedDesign = "";
let selectedColor = "";
let nailArtDescription = "";

function startDesigner() {

    document.getElementById("content")
        .innerHTML = `

        <img
            class="hand-image"
            src="images/plantillas/natural_plantilla.PNG"
        >

        <h2>Elige la forma</h2>

        <div class="buttons">

            <button onclick="selectShape('natural')">
                Natural
            </button>

            <button onclick="selectShape('ovalada')">
                Ovalada
            </button>

            <button onclick="selectShape('almendra')">
                Almendra
            </button>

            <button onclick="selectShape('cuadrada')">
                Cuadrada
            </button>

            <button onclick="selectShape('ballerina')">
                Ballerina
            </button>

            <button onclick="selectShape('stiletto')">
                Stiletto
            </button>

        </div>

        <button
            class="back-btn"
            onclick="goHome()"
        >
            ← Inicio
        </button>
    `;
}

function selectShape(shape){

    selectedShape = shape;

    document.getElementById("content")
        .innerHTML = `

        <img
            class="hand-image"
            src="images/plantillas/${shape}_plantilla.PNG"
        >

        <h2>Elige el diseño</h2>

        <div class="buttons">

            <button onclick="selectDesign('colorplano')">
                Color plano
            </button>

            <button onclick="selectDesign('francesa')">
                Francesa
            </button>

            <button onclick="selectDesign('glitter')">
                Glitter
            </button>

            <button onclick="selectDesign('degradado')">
                Degradado
            </button>

            <button onclick="selectDesign('nailart')">
                Nail art
            </button>

        </div>

        <button
            class="back-btn"
            onclick="startDesigner()"
        >
            ← Cambiar forma
        </button>
    `;
}

function selectDesign(design){

    selectedDesign = design;

    if(design === "nailart"){
        nailArtScreen();
        return;
    }

    document.getElementById("content")
        .innerHTML = `

        <img
            class="hand-image"
            src="images/${selectedShape}/${selectedShape}_${design}.PNG"
        >

        <h2>
            ¿Qué color quieres?
        </h2>

        <textarea
            id="colorInput"
            placeholder="Ej: nude beige elegante, rojo vino oscuro..."
        ></textarea>

        <button
            class="secondary-btn"
            onclick="saveColorAndContinue()"
        >
            Continuar
        </button>

        <button
            class="back-btn"
            onclick="selectShape('${selectedShape}')"
        >
            ← Cambiar diseño
        </button>
    `;
}

function saveColorAndContinue(){

    selectedColor =
        document.getElementById("colorInput").value;

    bookingScreen();
}

function nailArtScreen(){

    let inspoHtml = "";

    const inspirationFiles = [
        "insp_1.PNG",
        "insp_2.PNG",
        "insp_3.PNG",
        "insp_4.PNG",
        "insp_5.jpg",
        "insp_6.jpg",
        "insp_7.jpg",
        "insp_8.jpg",
        "insp_9.PNG",
        "insp_10.PNG",
        "insp_11.PNG",
        "insp_12.PNG",
        "insp_13.PNG",
        "insp_14.PNG",
        "insp_15.PNG",
        "insp_16.PNG",
        "insp_17.PNG",
        "insp_18.PNG"
    ];

    inspirationFiles.forEach(file => {

        inspoHtml += `
            <img
                class="inspo-image"
                src="images/inspiracion/${file}"
            >
        `;
    });

    document.getElementById("content")
        .innerHTML = `

        <img
            class="hand-image"
            src="images/${selectedShape}/${selectedShape}_nailart.PNG"
        >

        <h2>
            Describe tu idea
        </h2>

        <textarea
            id="nailArtInput"
            placeholder="Ej: flores blancas minimalistas..."
        ></textarea>

        <h2>
            Inspiración
        </h2>

        <div class="inspo-container">
            ${inspoHtml}
        </div>

        <button
            class="secondary-btn"
            onclick="saveNailArtAndContinue()"
        >
            Continuar
        </button>

        <button
            class="back-btn"
            onclick="selectShape('${selectedShape}')"
        >
            ← Cambiar diseño
        </button>
    `;
}

function saveNailArtAndContinue(){

    nailArtDescription =
        document.getElementById("nailArtInput").value;

    bookingScreen();
}

function bookingScreen(){

    document.getElementById("content")
        .innerHTML = `

        <h2>Reserva tu cita</h2>

        <input
            id="clientName"
            type="text"
            placeholder="Tu nombre"
            style="
                width:90%;
                padding:18px;
                border:none;
                border-radius:20px;
                font-size:16px;
                margin-top:10px;
            "
        >

        <input
            id="dateInput"
            type="date"
            style="
                width:90%;
                padding:18px;
                border:none;
                border-radius:20px;
                font-size:16px;
                margin-top:20px;
            "
        >

        <input
            id="timeInput"
            type="time"
            style="
                width:90%;
                padding:18px;
                border:none;
                border-radius:20px;
                font-size:16px;
                margin-top:20px;
            "
        >

        <button
            class="main-btn"
            onclick="sendWhatsApp()"
        >
            Solicitar cita por WhatsApp 💅
        </button>

        <button
            class="back-btn"
            onclick="selectDesign('${selectedDesign}')"
        >
            ← Volver
        </button>
    `;
}

function sendWhatsApp(){

    const name =
        document.getElementById("clientName").value;

    const date =
        document.getElementById("dateInput").value;

    const time =
        document.getElementById("timeInput").value;

    let message = `
Hola Blanca 💅

Quiero solicitar una cita.

Nombre: ${name}

Forma: ${selectedShape}
Diseño: ${selectedDesign}
`;

    if(selectedDesign === "nailart"){

        message += `
Idea nail art:
${nailArtDescription}
`;
    }

    else{

        message += `
Color:
${selectedColor}
`;
    }

    message += `

Fecha solicitada:
${date}

Hora:
${time}
`;

    const phone =
        "34656187294"; // CAMBIAR

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

function goHome(){
    location.reload();
}