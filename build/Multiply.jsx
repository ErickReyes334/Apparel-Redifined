#include "setCoordinate.jsx";

function Multiply(widthConteiner, coordenadasArray, n) {
    var doc = app.activeDocument;
    var objeto = doc.selection[0];

    // Creamos un arreglo para almacenar las duplicaciones
    var duplicados = [];

    for (var i = 0; i < n; i++) {
        // Duplicar el objeto original
        var dup = objeto.duplicate();

        // Determinar si el ancho o la altura es mayor y calcular el factor de escala en consecuencia
        var WidthInicial = objeto.width;
        var HeightInicial = objeto.height;
        var ScaleFactor;

        if (WidthInicial >= HeightInicial) {
            // El ancho es mayor o igual que la altura
            ScaleFactor = ((widthConteiner / WidthInicial) * 100) - 1;
        } else {
            // La altura es mayor que el ancho
            ScaleFactor = ((widthConteiner / HeightInicial) * 100) - 1;
        }

        // Aplicar la escala al objeto duplicado
        dup.resize(ScaleFactor, ScaleFactor, true, true, true, true, null, Transformation.TOP);

        // Ajustar las coordenadas del objeto duplicado
        setCoordinate(dup, coordenadasArray[i]);

        // Almacenar la duplicación en el arreglo
        duplicados.push(dup);
    }

    // Desseleccionar todos los objetos en el documento original
    doc.selection = [];

    // Seleccionar los objetos duplicados
    for (var j = 0; j < duplicados.length; j++) {
        duplicados[j].selected = true;
    }

    // Eliminar el objeto original
    //objeto.remove();
}
