// Przykładowa tablica
var arr = ["Alfa Romeo", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];

updateView();

function updateView() {
    var arrayElementsDOM = document.getElementById('array-elements');
    // Usunie mi istniejace boxy
    arrayElementsDOM.innerHTML = "";
    // Narysuje mi je ponownie
    arr.forEach(drawBox);
    // Aktualizuje informacje o tablicy
    drawArrayInfo(arr);
}

// Pokazujemy informacje o tablicy
function drawArrayInfo(arr) {
    console.log('Rysuję informację o tablicy:');
    console.log(arr);
    var arrayElementsDOM = document.getElementById('array');
    arrayElementsDOM.innerHTML = "";
    arrayElementsDOM.insertAdjacentHTML('beforeend', '<h3><small class="text-muted pr-2">Length:</small>' + arr.length + '</h3>');
}

// Rysowanie boxu z informacja
function drawBox(arrValue, index) {
    console.log('Rysuję BOX dla wartości "' + arrValue + '" [klucz = ' + index + ']');
    var arrayElementsDOM = document.getElementById('array-elements');
    var html = '<div class="col-3">\n\
<div class="box">\n\
<div class="box-actions">\n\
<button class="btn btn-danger btn-sm" onclick="removeElement(\'' + arrValue + '\')">\n\
<i class="far fa-trash-alt"></i>\n\
</button>\n\
</div>\n\
<h2>' + arrValue + '</h2>\n\
</div>\n\
</div>';
    console.log(html);
    arrayElementsDOM.insertAdjacentHTML('beforeend', html);
}