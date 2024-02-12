localStorage.setItem('a', '10');
localStorage.setItem('b', '20');
localStorage.setItem('c', '30');

let sum = localStorage.getItem('a') + +localStorage.getItem('b') + +localStorage.getItem('c');
console.log(sum);

let time = localStorage.getItem('time');

console.log(time);

// метод Date.now(), возвращающий текущую метку времени.
// количество миллисекунд с 1 января 1970 года

if (time === null) {
    let now = date.now();
    localStorage.setItem('time', now);
}

localStorage.setItem('key', '1');
let value1 = localStorage.getItem('key');

console.log(value1);

localStorage.setItem('key', '2');
value1 = localStorage.getItem('key');

console.log(value1);

// удалить данные из LS
localStorage.removeItem('key');

let count = 0;

localStorage.setItem('count', 0);
localStorage.getItem('count') + 1;