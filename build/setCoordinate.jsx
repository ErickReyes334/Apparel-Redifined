function setCoordinate(objeto, coordenadas) {
    var xPuntosArtboard = coordenadas[0] * 72;
    var yPuntosArtboard = coordenadas[1] * 72;

    var indiceArtboardActivo = app.activeDocument.artboards.getActiveArtboardIndex();
    var coordenadasArtboard = app.activeDocument.artboards[indiceArtboardActivo].artboardRect;

    var posicionY = coordenadasArtboard[1] + yPuntosArtboard + objeto.height / 2

    objeto.position = [
        coordenadasArtboard[0] + xPuntosArtboard - objeto.width / 2,
        posicionY
    ];

    app.redraw();
}




