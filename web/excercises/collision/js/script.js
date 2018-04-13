
// Podajemy charakterystykę kwadratu
var sx = prompt('Podaj współrz. X dla kwadratu:', '')
var sy = prompt('Podaj współrz. Y dla kwadratu:', '')
var sa = prompt('Podaj dł. boku kwadratu:', '')

// Podajemy współrzędne punktu
var px = prompt('Podaj współrz. X dla punktu:',)
var py = prompt('Podaj współrz. Y dla punktu:',)

// Deklarujemy punkkt jako obiekt
var point = {

    // Deklarujemy współrzędne punktu
    x: px,
    y: py,

}

// Deklarujemy kwadrat jako obiekt
var square = {

    // Deklarujemy współrzędne punktu
    x: sx,
    y: sy,

    // Deklarujemy długość boku
    a: sa,

    // Deklarujemy funkcję sprawdzającą kolizję
    checkCollision: function (p) {
        if (p.x < this.x && p.x > this.x + this.a && p.y > this.y && p.y < this.y - a) {
            return 'Nie ma kolizji'
        } else
            return 'Obiekty są w kolizji'
    }
}

// Zwracamy właściwości kwadratu i punktu
console.log(square)
console.log(point)

console.log(square.checkCollision(point))