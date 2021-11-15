
/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).
*/
let time = Math.floor(Math.random()*(59));
if (time <= 15){
    console.log(`${time} first quarter`);
}else if (time <= 30){
    console.log(`${time} second quarter`);
}else if (time <= 45){
    console.log(`${time} third quarter`);
}else{
    console.log(`${time} fourth quarter`);
}

/* - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
(у першу, другу чи третю).*/
let day = Math.floor(Math.random()*(31-1))+1;
if (day <= 10){
    console.log(`${day} first decade`);
}else if (day <= 20){
    console.log(`${day} second decade`);
}else{
    console.log(`${day} third decade`);
}

/*- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)*/
let test = false;
if (test === true){
    console.log('Вірно');
}else{
    console.log('Неправильно');
}
test ? console.log('Вірно') : console.log('Неправильно');

/*- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
що дорівнює 1, 0, -3*/
let a = 0;
if (a !== -3){
    console.log('Вірно');
}else{
    console.log('Невірно');
}

/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
відображається інфа що заплановано на цей день.*/
let weekday = +prompt('Введіть порядковий номер дня тижня(від 1 до 7):');
switch (weekday){
    case 1:
        console.log('Понеділок: басейн, зустріч з друзями, okten лекція');
        break;
    case 2:
        console.log('Вівторок: okten практика');
        break;
    case 3:
        console.log('Середа: басейн, зустріч з друзями, okten лекція');
        break;
    case 4:
        console.log('Четвер: okten практика');
        break;
    case 5:
        console.log("П'ятниця: басейн, зустріч з друзями, okten лекція");
        break;
    case 6:
        console.log('Субота: англійська');
        break;
    case 7:
        console.log('Неділя: відпочинок');
        break;
    default:
        console.log('Неправильный ввод');
}

/*- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
*/
let year = Math.floor(Math.random()*(2021-1))+1;
if (year%4 === 0 && year%100!==0){
    console.log(`${year} високосний`);
}else if (year%100===0){
    year%400===0 ? console.log(`${year} високосний`) : console.log(`${year} невисокосний`);
}else{
    console.log(`${year} невисокосний`);
}

/*
- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!*/
let input = prompt('Яка «офіційна» назва JavaScript?');
if (input === 'ECMAScript') console.log('Правильно!');
else console.log('Не знаєте? ECMAScript!')

