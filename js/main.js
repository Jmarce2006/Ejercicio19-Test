

function tamanoVentanaNavegador() {

    var dimensiones = [];

    if (typeof (window.innerWidth) == 'number') {
        // No es IE
        dimensiones = [window.innerWidth, window.innerHeight];
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6 en modo estandar (no quirks)
        dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE en modo quirks
        dimensiones = [document.body.clientWidth, document.body.clientHeight];
    }

    return dimensiones;
}

function getPositionMouse() {

    document.addEventListener("click", function (ev) {
        const dimensiones = tamanoVentanaNavegador()
        const witdh = dimensiones[0]
        const height = dimensiones[1]
        console.log("dimensiones", dimensiones);
        console.log("screen x", ev.screenX);
        console.log("screen y", ev.screenY);

        if (ev.screenX <= (witdh / 2) && ev.screenY <= (witdh / 2)) {
            document.getElementById("pos").innerHTML = "izquierda arriba"
        } else if (ev.screenX <= (witdh / 2) && ev.screenY >= (witdh / 2)) {
            document.getElementById("pos").innerHTML = "izquierda abajo"
            
        }else if (ev.screenX >= (witdh / 2) && ev.screenY <= (witdh / 2)) {
            document.getElementById("pos").innerHTML = "derecha arriba"
            
        }if (ev.screenX >= (witdh / 2) && ev.screenY >= (witdh / 2)) {
            document.getElementById("pos").innerHTML = "derecha abajo"
            
        }

    })

}



getPositionMouse()