function WidthXHeight(coordenadas, location, lblSize, hexadecimal) {

    // Convertir pulgadas a puntos (1 pulgada = 72 puntos en Illustrator)
    var xPuntosArtboard = coordenadas[0] * 72;
    var yPuntosArtboard = coordenadas[1] * 72;

    // Obtener el objeto seleccionado
    var seleccion = app.activeDocument.selection;

    if (seleccion.length > 0) {
        // Solo toma el primer objeto seleccionado (ajusta según tus necesidades)
        var objeto = seleccion[0];

        // Obtener el índice del artboard activo
        var indiceArtboardActivo = app.activeDocument.artboards.getActiveArtboardIndex();

        // Obtener las coordenadas del artboard activo
        var coordenadasArtboard = app.activeDocument.artboards[indiceArtboardActivo].artboardRect;

        // Obtener el ancho y alto del objeto seleccionado
        var anchoObjeto = objeto.width / 72;
        var altoObjeto = objeto.height / 72;

        // Crear un nuevo TextFrame para mostrar el ancho y alto
        var textoAnchoAlto = app.activeDocument.textFrames.add();
        textoAnchoAlto.contents = anchoObjeto.toFixed(2) + "''w x " + altoObjeto.toFixed(2) + "''h - " + location;


        //0”w x 0”h - Location

        // Establecer la fuente y el tamaño del TextFrame
        textoAnchoAlto.textRange.characterAttributes.textFont = app.textFonts.getByName("MyriadPro-Regular");
        textoAnchoAlto.textRange.characterAttributes.size = lblSize;

        // Establecer el color hexadecimal del TextFrame
        textoAnchoAlto.textRange.characterAttributes.fillColor = obtenerColorHexadecimal(hexadecimal);

        // Posicionar el TextFrame usando las coordenadas proporcionadas
        textoAnchoAlto.position = [
            coordenadasArtboard[0] + xPuntosArtboard - anchoObjeto / 2,
            coordenadasArtboard[1] + yPuntosArtboard + altoObjeto / 2
        ];

        // Refrescar la vista para ver los cambios
        app.redraw();
    } else {
        alert("Selecciona al menos un objeto antes de ejecutar el script.");
    }
}


function obtenerColorHexadecimal(hex) {
    var r = parseInt(hex.substring(1, 3), 16);
    var g = parseInt(hex.substring(3, 5), 16);
    var b = parseInt(hex.substring(5, 7), 16);

    var nuevoColor = new RGBColor();
    nuevoColor.red = r;
    nuevoColor.green = g;
    nuevoColor.blue = b;

    return nuevoColor;
}

