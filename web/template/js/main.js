// Przykładowa tablica
var arr = ["Alfa Romeo", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes"];


//drawArrayInfo(arr);

// Cut First Element
arr.shift()

// Add New First Element

// Draw Array Info
arr.unshift('Porsche')

drawArrayInfo(arr)

// Cut Last Element
arr.pop()

// Add New Last Elements
arr.push('Maseratti')
arr.push('Polonez')

// Draw Array Info
drawArrayInfo(arr)

// Cut 6+ Elements
arr.splice(6)

// Cut 2nd and 3rd Elements
arr.splice(2, 3)


arr.forEach(drawBox)

/*drawBox(arr[0]);
drawBox(arr[1]);
drawBox(arr[2]);
drawBox(arr[3]);
drawBox(arr[4]);
drawBox(arr[5]);
drawBox(arr[6]);
drawBox(arr[7]);
drawBox(arr[7]);*/

/*arr.forEach(function(wartość, numerek, tabliczka) {
    console.log('Tabliczka: ', tabliczka)
    console.log('Indeks', numerek)
    console.log('Wartość: ', wartość)
    drawBox(wartość)
})*/

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
