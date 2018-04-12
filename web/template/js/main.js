// Przykładowa tablica
var arr = ["Alfa Romeo", "Mercedes", "Skoda", "Ferrari", "Fiat", "Volkswagen", "Kamaz", "Audi", "Mercedes", "Porsche"];

updateView();

function removeElement(arrValue, index) {
    console.log('Usuwam pozycję z tablicy o wartości: ', arrValue);
    console.log('Usuwana pozycja ma indeks: ', index)
    arr.splice(index, 1)
    console.log('Nowa tablica będzie teraz wyglądać następująco: ', arr)
    updateView()
}

// Dodanie elementu na początku tablicy
function unshiftElement() {
    // Pobranie wartości z inputa o id = element-name
    var newElementName = document.getElementById('element-name').value
    console.log('Dodaję pozycję na początku tablicy o wartości: ', newElementName);
    arr.unshift(newElementName)
    console.log('Nowa tablica wygląda następująco: ', arr)
    updateView()
}

// Dodanie elementu na końcu tablicy
function pushElement() {
    // Pobranie wartości z inputa o id = element-name
    var newElementName = document.getElementById('element-name').value
    console.log('Usuwam pozycję z tablicy o wartości: ', newElementName);
    arr.push(newElementName)
    console.log('Nowa tablica wygląda następująco: ', arr)
    updateView()
}

// Usunięcie pierwszego elementu tablicy
function removeFirst() {
    console.log('Usuwam pozycję z tablicy o wartości: ', arr[0]);
    arr.shift()
    console.log('Nowa tablica będzie teraz wyglądać następująco: ', arr)
    updateView()
}

// Usunięcie ostatniego elementu tablicy
function removeLast() {
    console.log('Usuwam pozycję z tablicy o wartości: ', arr[0]);
    arr.pop()
    console.log('Nowa tablica będzie teraz wyglądać następująco: ', arr)
    updateView()
}

/*console.log('Usuwam pozycję z tablicy o wartości: ', arrValue);
console.log('Usuwana pozycja ma indeks: ', index)
console.log('Nowa tablica będzie teraz wyglądać następująco: ', arr)
updateView()*/

// Połączenie od wskazanego elementu do początku tablicy
function fastBackward(arrValue, index) {
    if (index > 0) {
        console.log('Łącze pozycję z tablicy od początku do wartości: ', arrValue);
        var cutElements = arr.splice(1, index)
        console.log('Nowa tablica wygląda następująco: ', cutElements)
        cutElements = cutElements.join(', ')
        console.log('Pierwszy element wygląda teraz następująco: ', cutElements)
        arr[0] = arr[0] + ', ' + cutElements
        console.log('Pierwszy element wygląda teraz następująco: ', arr[0])
    }
    updateView()
}

// Połączenie od wskazanego elementu do początku tablicy
function joinBackward(arrValue, index) {
    if (index > 0) {
        console.log('Łącze pozycję z tablicy z poprzednią: ', arr[index - 1]);
        arr[index - 1] += ', ' + arr[index]
        arr.splice(index, 1)
        console.log('Usuwam  następujący element tablicy: ', arr[index])
    }
    updateView()
}

// Połączenie od wskazanego elementu do początku tablicy
function cloneElement(arrValue, index) {
    console.log('Kopiuję element z tablicy i wstawiam jako następny: ', arrValue);
    var copiedElement = arrValue
    arr.splice(index, 0, copiedElement)
    console.log('Nowa tablica będzie teraz wyglądać następująco: ', arr)
    updateView()
}

function moveLeft(arrValue, index) {
    console.log('Przesuwam w miejsce elementu o kluczu: ', arr[index - 1]);
    if (index > 0) {
        var tmp = arr[index]
        console.log('W jego miejscu wstawię wskazany przez użytkownika: ', tmp)
        arr[index] = arr[index - 1]
        console.log('Element bieżący to teraz: ', arr[index])
        arr[index - 1] = tmp
        console.log('Element po lewej to teraz: ', arr[index - 1])
        //console.log('Nowa tablica będzie teraz wyglądać następująco: ', arr)
    }
    updateView()
}

function moveRight(arrValue, index) {
    console.log('Przesuwam w miejsce elementu o kluczu: ', arr[index - 1]);
    if (index < arr.length - 1) {
        var tmp = arr[index]
        console.log('W jego miejscu wstawię wskazany przez użytkownika: ', tmp)
        arr[index] = arr[index + 1]
        console.log('Element bieżący to teraz: ', arr[index])
        arr[index + 1] = tmp
        console.log('Element po prawej to teraz: ', arr[index + 1])
    }
    updateView()
}

// Pokazanie wszystkich boxów oraz aktualizacja informacji o tablicy
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
<span class="badge badge-light float-left">' + index + '</span>\n\
<button class="btn btn-danger btn-sm" onclick="removeElement(\'' + arrValue + '\', ' + index + ')">\n\
<i class="far fa-trash-alt"></i>\n\
<button class="btn btn-danger btn-sm" onclick="fastBackward(\'' + arrValue + '\', ' + index + ')">\n\
<i class="fas fa-fast-backward"></i>\n\
<button class="btn btn-warning btn-sm" onclick="joinBackward(\'' + arrValue + '\', ' + index + ')">\n\
<i class="fas fa-step-backward"></i>\n\
<button class="btn btn-info btn-sm" onclick="cloneElement(\'' + arrValue + '\', ' + index + ')">\n\
<i class="far fa-plus-square"></i>\n\
<button class="btn btn-success btn-sm" onclick="moveLeft(\'' + arrValue + '\', ' + index + ')">\n\
<i class="fas fa-caret-square-left"></i>\n\
<button class="btn btn-success btn-sm" onclick="moveRight(\'' + arrValue + '\', ' + index + ')">\n\
<i class="fas fa-caret-square-right"></i>\n\
</button>\n\
</div>\n\
<h2>' + arrValue + '</h2>\n\
</div>\n\
</div>';
    arrayElementsDOM.insertAdjacentHTML('beforeend', html);
}