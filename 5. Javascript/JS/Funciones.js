// Diccionario de la información de las asignaturas

var asignaturas = {
    "BBDD": {
        "nombre": "Base de Datos",
        "profesor": "Jaume Oliver",
    },
    "Programación": {
        "nombre": "Programación",
        "profesor": "David Gelpi",
    },
    "Refuerzo-Programación": {
        "nombre": "Refuerzo Programación",
        "profesor": "David Gelpi",
    },
    "ED": {
        "nombre": "Entornos de Desarrollo",
        "profesor": "David Gelpi",
    },
    "LLM": {
        "nombre": "Lenguaje de Marcas",
        "profesor": "Rafael Gion Muñoz",
    },
    "Refuerzo-LLM": {
        "nombre": "Refuerzo Lenguaje de Marcas",
        "profesor": "Rafael Gion Muñoz",
    },
    "SI": {
        "nombre": "Sistemas Informáticos",
        "profesor": "Ramón Jaume Vidal",
    },
    "FOL": {
        "nombre": "Formación y orientación laboral",
        "profesor": "No se sabe",
    },
    "Tutoria": {
        "nombre": "Tutoria",
        "profesor": "David Gelpi"
    }
};


document.addEventListener("mouseover", function (e) {
    var element = e.target;
    if (element.tagName == "TD") {
        element.classList.toggle("hoverCeldas", true);
    }
});

document.addEventListener("mouseout", function (e) {
    var element = e.target;
    if (element.tagName == "TD") {
        element.classList.toggle("hoverCeldas", false);
    }
});

function limpiarP(element) {
    element.childNodes[1].innerText = "";
    element.childNodes[1].innerHTML = "";
    element.childNodes[1].outerText = "";
}

function generarNodo(tag, element) {
    var node = document.createElement(tag);
    var textnode = document.createTextNode("");
    node.appendChild(textnode);
    element.appendChild(node);
}

function infoAsignaturas(asignatura) {
    var celda = document.getElementsByTagName("TD")
    for (i = 0; i <= celda.length; i++) {
        if (celda[i].innerText.split("\n")[0] == asignatura) {
            if (celda[i].childNodes.length > 1 && celda[i].childNodes[1].innerText == "") {
                celda[i].childNodes[1].innerText = "" + asignaturas[asignatura]["nombre"] + "\n" + asignaturas[asignatura]["profesor"];
            } else {
                limpiarP(celda[i]);
                generarNodo('P', celda[i]);
            }
            celda[i].classList.toggle(asignatura);
        } else {
            if (celda[i].className != "") {
                celda[i].classList.toggle(celda[i].className);
                limpiarP(celda[i]);
                generarNodo('P', celda[i]);
            }
        }
    }
}

document.addEventListener("click", function (e) {
    var element = e.target;
    if (element.tagName == "TD") {
        var asignatura = element.innerText.split("\n")[0];
        infoAsignaturas(asignatura);
    }

});