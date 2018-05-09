var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var result1 = dinosaur.toUpperCase();
var result2 = text.replace('Velociraptor', result1);

console.log(result2.split(0, result2.length / 2));

/* dodatkowe:
- stworz funkcje, która przyjmuje za argumenty
a) stringa
b) liczbę wyrazów (X)
i zwraca pierwsze X wyrazów ze stringa */

function xFirstWords(txt, x) {
    return txt.
    split(' ').
    slice(0, x).
    join(' ');
}

/*- stwórz funkcję która przyjmuje za argument stringa i zwraca go "od tyłu" => zmienia np. "auto" na "otua" */

function reverseString(txt) {
    return txt.
    split('').
    reverse().
    join('');
}

/*- stworz funkcję, która z podanego stringa usunie WSZYSTKIE spacje i zwróci jeden ciąg wyrazów bez spacji*/

function replaceString(txt) {
    return txt.
    split(' ').
    join('');
}

/*- stwórz funkcję, która zmieni podanego stringa na 'TaKiE cOś' */

function camelString(txt) {
    return txt.
    split('').
    map(
        function (value, index) {
            return index % 2 === 0 ? value.toUpperCase() : value.toLowerCase();
        }
    ).join('');
}


/*- stwórz funkcję która przyjmuje argument
    a) stringa
    b) literę
    i zwraca tablicę pozycji (indexy) WSZYSTKICH wystąpień tej litery */

function indexString(txt, leter) {
    return txt.
    split('').
    map(
        function (value, index) {
            return [value, index];
        }
    ).
    filter(
        function (arr) {
            return arr[0] == leter;
        }
    ).
    map(
        function (arr) {
            return arr[1];
        }
    );
}
