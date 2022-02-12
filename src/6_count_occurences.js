// Napisz funkcję countOccurences, która jako argument przyjmuje ciąg znaków, a zwraca obiekt.
// W obiekcie liczba wystąpień danego słowa powiązana jest z tablicą odpowiadających jej słów.
// Oto kilka przypadków testowych:
// 1. funkcja zwraca obj
// 2. stworz zmienna do ktorej przypisuje licznik count i wrzuc go do key w obj.
// 3. do value wrzuc unikatowe wartosci z .set

// module.exports = countOccurences;
// function countOccurences(str) {
//   let strSplit = str.split(' ');
//   let counter = 0;
//   console.log(strSplit);

//   for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit.includes(strSplit[i])) {
//       counter += 1;
//       console.log(counter);
//     }
//   }
// }

function countOccurences(str) {
  let words = str.split(' '); //zamieniam zdanie na tablicę słów
  let obj = {};
  //w pętli for tworzę obiekt w którym zliczam poszczeólne słowa {słowo : ilość występowania}
  for (let i = 0; i < words.length; i++) {
    if (Object.keys(obj).includes(words[i])) {
      obj[words[i]] += 1;
    } else {
      obj[words[i]] = 1;
    }
  }
  let objRev = {};
  //w pętli for tworzę obiekt w oparciu o stworzony wcześniej 'obj' zamieniam klucze z wartościami i zliczam:
  //{ilość występowania : [słowa, które występują daną ilość razy]}
  for (let key in obj) {
    if (Object.keys(objRev).includes(obj[key].toString())) {
      objRev[obj[key]].push(key);
    } else {
      objRev[obj[key]] = [key];
    }
  }
  return objRev;
}

countOccurences('hello is it you hello hello'); // {
// '1': [ 'is', 'it', 'you' ],
// '3': [ 'hello' ]
// }

countOccurences('hey mama hey mama'); // {
// '2': [ 'hey', 'mama' ]
// }
