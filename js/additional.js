
/*- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
 кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
 Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
*/
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) console.log('У масиві 3 або більше елемента');
else console.log('У масиві менше 3 елементів');

/* - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
 Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.*/
let a = 4;
let b = 6;
let c = 2;
if ((a <= b && a >=c) || (a>= b && a <= c)) console.log(a + ' середнє(перше число)');
else if ((b <= a && b >= c) || (b >= a && b <= c)) console.log(b + ' середнє(друге число)');
else console.log(c + ' середнє(третє число)');

/*- Перепишіть конструкцію if з використанням умовного оператора '?':
 let result;
 if (a + b < 4) {
    result = 'Мало';
 } else {
    result = 'Багато';
 }*/
let result;
a + b < 4 ? result = 'Мало' : result = 'Багато';

/*
 - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
напишіть це тернарним оператором
*/
let random = Math.floor(Math.random()*200-100);
random > 0 ? console.log(random + ' позитивне') : random < 0 ? console.log(random + ' негативне') : console.log(random);