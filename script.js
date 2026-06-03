const logoScreen =
document.getElementById("logo-screen");

const homeScreen =
document.getElementById("home-screen");

const designScreen =
document.getElementById("design-screen");

const appointmentScreen =
document.getElementById("appointment-screen");

const designBtn =
document.getElementById("design-btn");

const galleryBtn =
document.getElementById("gallery-btn");

const mainHand =
document.getElementById("main-hand");

const templateImg =
document.getElementById("template-img");

const shapeButtons =
document.querySelectorAll(".shape-icon");

const designIcons =
document.querySelectorAll(".design-icon");

const shapeContainer =
document.getElementById("shape-buttons");

const designButtons =
document.getElementById("design-buttons");

const finalButtons =
document.getElementById("final-buttons");

const titleBox =
document.getElementById("title-box");

const backButton =
document.getElementById("back-button");

const nextButton =
document.getElementById("next-button");

const homeBackButton =
document.getElementById("home-back-button");

const customBox =
document.getElementById("custom-box");

const customInput =
document.getElementById("custom-input");

const customLabel =
document.getElementById("custom-label");

const customExample =
document.getElementById("custom-example");

const clientName =
document.getElementById("client-name");

const appointmentDate =
document.getElementById("appointment-date");

const appointmentHour =
document.getElementById("appointment-hour");

const appointmentBack =
document.getElementById("appointment-back");

const whatsappButton =
document.getElementById("whatsapp-button");

const summaryContent =
document.getElementById("summary-content");

const galleryScreen =
document.getElementById("gallery-screen");

const galleryBackButton =
document.getElementById("gallery-back-button");

let currentShape = "";
let currentDesign = "";


/* TEXTOS BONITOS */

const shapeNames = {
    normal: "Normal",
    ovalada: "Ovalada",
    almendra: "Almendra",
    cuadrada: "Cuadrada",
    ballerina: "Ballerina",
    stiletto: "Stiletto"
};

const designNames = {
    colorplano: "Color plano",
    francesa: "Francesa",
    glitter: "Glitter",
    degradado: "Degradado",
    nailart: "Nail Art"
};


/* FECHA MÍNIMA */

const today =
new Date().toISOString().split("T")[0];

appointmentDate.min = today;


/* SPLASH */

setTimeout(() => {

    logoScreen.classList.remove("active");
    homeScreen.classList.add("active");

}, 1000);


/* ABRIR DISEÑO */

designBtn.addEventListener("click", () => {

    homeScreen.classList.remove("active");
    designScreen.classList.add("active");

    mainHand.classList.remove("hide");
    mainHand.classList.remove("show");

    setTimeout(() => {

        mainHand.classList.add("show");

    }, 100);

});


/* ELEGIR FORMA */

shapeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        currentShape =
        button.dataset.shape;

        titleBox.classList.add("hide");

        mainHand.classList.remove("show");
        mainHand.classList.add("hide");

        setTimeout(() => {

            templateImg.src =
            `images/plantillas/plantilla_${currentShape}.JPEG`;

            mainHand.src =
            `images/manos/forma/mano_forma_${currentShape}.PNG`;

            mainHand.classList.remove("hide");

            setTimeout(() => {

                mainHand.classList.add("show");

            }, 50);

            shapeContainer.classList.add("hide");
            designButtons.classList.add("show");

            titleBox.innerHTML = `
                <p class="subtitle-design">
                    Ahora elige el diseño ✨
                </p>
            `;

            titleBox.style.top = "145px";
            titleBox.classList.remove("hide");

        }, 650);

    });

});


/* ELEGIR DISEÑO */

designIcons.forEach((button) => {

    button.addEventListener("click", () => {

        currentDesign =
        button.dataset.design;

        customInput.value = "";
        customExample.style.display = "block";

        titleBox.classList.add("hide");

        mainHand.classList.remove("show");
        mainHand.classList.add("hide");

        setTimeout(() => {

            templateImg.src =
            "images/plantillas/plantilla_principal.PNG";

            mainHand.src =
            `images/manos/diseno/${currentShape}/mano_diseno_${currentShape}_${currentDesign}.PNG`;

            mainHand.classList.remove("hide");

            setTimeout(() => {

                mainHand.classList.add("show");

            }, 50);

            designButtons.classList.remove("show");

            homeBackButton.style.display = "none";

            finalButtons.classList.add("show");

            customBox.classList.add("show");

            if(currentDesign === "nailart"){

                customLabel.innerText =
                "Describe el nail art";

                customExample.innerText =
                "Ej: flores blancas, brillo fino, rosa nude ✨";

            }else{

                customLabel.innerText =
                "Escribe el color o acabado";

                customExample.innerText =
                "Ej: nude rosita, blanco leche, glitter dorado ✨";
            }

            setTimeout(() => {

                titleBox.innerHTML = `
                    <h1>
                        ${designNames[currentDesign].toUpperCase()}
                    </h1>
                `;

                titleBox.style.top = "30px";

                titleBox.classList.remove("hide");

            }, 250);

        }, 650);

    });

});


/* VOLVER DISEÑO → FORMA */

backButton.addEventListener("click", () => {

    titleBox.classList.add("hide");

    mainHand.classList.remove("show");
    mainHand.classList.add("hide");

    setTimeout(() => {

        templateImg.src =
        `images/plantillas/plantilla_${currentShape}.JPEG`;

        mainHand.src =
        `images/manos/forma/mano_forma_${currentShape}.PNG`;

        mainHand.classList.remove("hide");

        setTimeout(() => {

            mainHand.classList.add("show");

        }, 50);

        finalButtons.classList.remove("show");

        customBox.classList.remove("show");
        customInput.value = "";
        customExample.style.display = "block";

        designButtons.classList.add("show");

        homeBackButton.style.display = "block";

        currentDesign = "";

        titleBox.innerHTML = `
            <p class="subtitle-design">
                Ahora elige el diseño ✨
            </p>
        `;

        titleBox.style.top = "145px";
        titleBox.classList.remove("hide");

    }, 650);

});


/* IR A SOLICITAR CITA */

nextButton.addEventListener("click", () => {

    titleBox.classList.add("hide");

    customBox.classList.remove("show");

    finalButtons.classList.remove("show");

    mainHand.classList.remove("show");
    mainHand.classList.add("hide");

    setTimeout(() => {

        designScreen.classList.remove("active");
        summaryContent.innerHTML = `
            Forma: ${shapeNames[currentShape]}
            <br>
            Diseño: ${designNames[currentDesign]}
            <br>
            Detalle:
            ${customInput.value.trim() || "No especificado"}
        `;
        appointmentScreen.classList.add("active");

    }, 650);

});


/* VOLVER DESDE SOLICITAR CITA */

appointmentBack.addEventListener("click", () => {

    appointmentScreen.classList.remove("active");
    designScreen.classList.add("active");

    templateImg.src =
    "images/plantillas/plantilla_principal.PNG";

    mainHand.src =
    `images/manos/diseno/${currentShape}/mano_diseno_${currentShape}_${currentDesign}.PNG`;

    titleBox.innerHTML = `
        <h1>
            ${designNames[currentDesign].toUpperCase()}
        </h1>
    `;

    titleBox.style.top = "30px";
    titleBox.classList.remove("hide");

    customBox.classList.add("show");

    finalButtons.classList.add("show");

    homeBackButton.style.display = "none";

    mainHand.classList.remove("hide");
    mainHand.classList.remove("show");

    setTimeout(() => {

        mainHand.classList.add("show");

    }, 50);

});


/* VOLVER ATRÁS */

homeBackButton.addEventListener("click", () => {

    mainHand.classList.remove("show");
    mainHand.classList.add("hide");

    titleBox.classList.add("hide");

    setTimeout(() => {

        if (currentShape !== "" && currentDesign === "") {

            titleBox.innerHTML = `
                <h1>
                    Elige la forma
                    <br>
                    de tus uñas
                </h1>
            `;

            titleBox.style.top = "25px";
            titleBox.classList.remove("hide");

            templateImg.src =
            "images/plantillas/plantilla_principal.PNG";

            mainHand.src =
            "images/manos/forma/mano_forma_principal.PNG";

            mainHand.classList.remove("hide");

            setTimeout(() => {

                mainHand.classList.add("show");

            }, 50);

            shapeContainer.classList.remove("hide");
            designButtons.classList.remove("show");

            currentShape = "";

            return;
        }

        designScreen.classList.remove("active");
        homeScreen.classList.add("active");

        titleBox.innerHTML = `
            <h1>
                Elige la forma
                <br>
                de tus uñas
            </h1>
        `;

        titleBox.style.top = "25px";
        titleBox.classList.remove("hide");

        shapeContainer.classList.remove("hide");
        designButtons.classList.remove("show");
        finalButtons.classList.remove("show");

        customBox.classList.remove("show");
        customInput.value = "";
        customExample.style.display = "block";

        currentShape = "";
        currentDesign = "";

        templateImg.src =
        "images/plantillas/plantilla_principal.PNG";

        mainHand.src =
        "images/manos/forma/mano_forma_principal.PNG";

        mainHand.classList.remove("show");
        mainHand.classList.remove("hide");

        homeBackButton.style.display = "block";

    }, 650);

});


/* WHATSAPP */

whatsappButton.addEventListener("click", () => {

    const name =
    clientName.value.trim();

    const date =
    appointmentDate.value;

    const hour =
    appointmentHour.value;

    const details =
    customInput.value.trim();

    if(name === ""){

        alert("Escribe tu nombre antes de pedir la cita");

        return;
    }

    if(date === ""){

        alert("Elige un día para la cita");

        return;
    }

    if(hour === ""){

        alert("Elige una hora para la cita");

        return;
    }

    const message =
`Hola Blanca 💅

Soy ${name}.

Quiero solicitar una cita ✨

Forma: ${shapeNames[currentShape]}
Diseño: ${designNames[currentDesign]}
Detalle/color: ${details !== "" ? details : "No especificado"}

Día: ${date}
Hora: ${hour}

Sé que la cita no queda confirmada hasta que me digas disponibilidad ☺️`;

    const encodedMessage =
    encodeURIComponent(message);

    window.open(
        `https://wa.me/34656187294?text=${encodedMessage}`,
        "_blank"
    );

});


/* ABRIR GALERÍA */

galleryBtn.addEventListener("click", () => {

    homeScreen.classList.remove("active");

    galleryScreen.classList.add("active");

});


/* VOLVER GALERÍA */

galleryBackButton.addEventListener("click", () => {

    galleryScreen.classList.remove("active");

    homeScreen.classList.add("active");

});


/* OCULTAR EJEMPLO AL ESCRIBIR */

customInput.addEventListener("input", () => {

    if(customInput.value.trim() !== ""){

        customExample.style.display = "none";

    }else{

        customExample.style.display = "block";
    }

});