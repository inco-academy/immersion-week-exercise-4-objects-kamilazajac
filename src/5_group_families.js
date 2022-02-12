// Napisz funkcję groupFamilies, która przyjmuje tablicę obiektów z kluczami „name” i „surname”.
// Funkcja zwraca obiekt z nazwiskami jako kluczami i powiązanymi z nimi imionami w tablicy.
// Oto kilka przypadków testowych

// 1. dla powtarzajacych sie wartosci przypisujemy tablice skladajaca sie z kluczy
// 2. if key z 2 obiektu == key z 1 obiektu to push value z 2 obiektu do 1 obiektu

module.exports = groupFamilies;
function groupFamilies(arr) {
  let obj = {}; // definiuje pusty obiekt

  for (let i = 0; i < arr.length; i++) {
    // przegladam wszytkie obiekty w tablicy
    if (obj.hasOwnProperty(arr[i]['surname'])) {
      // sprawdzam czy w pustym obiekcie znajduje się dane surname
      obj[arr[i].surname].push(arr[i].name); // jesli tak to, przeniesc to tablicy z kluczem name
    } else {
      obj[arr[i].surname] = [arr[i].name]; //jezeli nie to stworz nowa pare klucz:value
    }
    console.log(obj);
  }
}
groupFamilies([
  { name: 'Barack', surname: 'Obama' },
  { name: 'Michelle', surname: 'Obama' },
]); // { Obama: [ 'Barack', 'Michelle' ] }

groupFamilies([
  { name: 'Barack', surname: 'Obama' },
  { name: 'Michelle', surname: 'Obama' },
  { name: 'Donald', surname: 'Trump' },
]); // { Obama: [ 'Barack', 'Michelle' ], Trump: [ 'Donald' ] }
