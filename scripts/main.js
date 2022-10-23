import { series } from './data.js';
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("promedioTemporadas");
promedioTable.innerHTML = "".concat(darPromedioDeTemporadas(series));
mostrarDatosSeries(series);
function mostrarDatosSeries(series) {
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trSerie = document.createElement("tr");
        trSerie.innerHTML = "<td class=\"id\">".concat(serie.id, "</td>\n        <td style=\"color: blue;\">").concat(serie.name, "</td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTable.appendChild(trSerie);
    }
}
function darPromedioDeTemporadas(series) {
    var promedio = 0;
    for (var i = 0; i < series.length; i++) {
        promedio += series[i].seasons;
    }
    return promedio / series.length;
}
