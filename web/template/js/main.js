// Przykładowa tablica
var arr = ["Alfa Romeo", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];


drawArrayInfo(arr);

drawBox(arr[0]);
drawBox(arr[1]);
drawBox(arr[2]);
drawBox(arr[3]);
drawBox(arr[4]);
drawBox(arr[5]);
drawBox(arr[6]);
drawBox(arr[7]);
drawBox(arr[7]);


// Pokazujemy informacje o tablicy
function drawArrayInfo(arr) {
    console.log('Rysuję informację o tablicy:');
    console.log(arr);
    var arrayElementsDOM = document.getElementById('array');
    arrayElementsDOM.insertAdjacentHTML('beforeend', '<h3><small class="text-muted pr-2">Length:</small>' + arr.length + '</h3>');
}

// Rysowanie boxu z informacja
function drawBox(arrValue) {
    console.log('Rysuję BOX dla wartości "' + arrValue + '"');
    var arrayElementsDOM = document.getElementById('array-elements');
    arrayElementsDOM.insertAdjacentHTML('beforeend', '<div class="col-3"><div class="box"><h2>' + arrValue + '</h2></div></div>');
}