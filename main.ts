import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
const promedioTable: HTMLElement = document.getElementById("promedioTemporadas")!;

promedioTable.innerHTML = `${darPromedioDeTemporadas(series)}`;

mostrarDatosSeries(series);

function mostrarDatosSeries(series: Serie[]) {
    
    for (let serie of series) {
        let trSerie: HTMLElement = document.createElement("tr");
        
        trSerie.innerHTML = `<td class="id">${serie.id}</td>
        <td style="color: blue;">${serie.name}</td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
        seriesTable.appendChild(trSerie);
    }
}

function darPromedioDeTemporadas(series: Serie[]): number {
    let promedio: number = 0;
    for (let i = 0; i < series.length; i++) {
        promedio += series[i].seasons;
        }
    return promedio / series.length;
}
