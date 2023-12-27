// 1)İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
// Son dəyəri konsola çıxarın.
// let num = +prompt("iki reqemli eded daxil edin");
// while (num < 100) {
//     console.log(num);
//     num += 7;
// }

// 2)Konsola N dəfə «I know how to use cycles» mesajı  yazın.
// Proqram N ədədini istifadəçidən soruşur.
// let value = prompt();
// let i = 0;
// while (i < value ) {
//     console.log( "I know how to use cycles");
//     i++;
// }

// 3)Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.
// let value = 100;
// while (value < 1000) {
//     if (value % 10 == 0) {
//         console.log(value);
//     }
//     value ++;
// }

// 5)İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
// let num = +prompt();
// let starValue = 100;
// while (starValue < 1000) {
//    if (starValue % num === 0) {
//     console.log(starValue);
//    }
//     starValue++;
// }

// 6) Sadə ədədləri çıxaran proqram yazın.       SEHVDİ
// İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
// «23» ədədi daxil edildikdə, konsola «23», «19», «17», «13», «11», «7», «5», «3», «2», «1» ardıcıllığı çıxarılmalıdır.

// let starValue = 2;
// while (starValue < 100) {
//     if (starValue % 1 === 0 && starValue % starValue === 0) {
//         console.log(starValue);
//     }
//     starValue++;
// }

// 7)Task-07
// 10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
// Alınan dəyəri konsola çıxarın.
// let starValue = 1;
// for ( i = 1; i <= 10; i++) {
//     starValue *= i;
// }
// console.log(starValue);


// 8)İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.
// let starValue = prompt();
// let result = "";
// for(i = starValue.length - 1; i>=0; i--){
//     result += starValue[i];
// }
// console.log(result);



// 1-den 10 e qeder ededlerin verilmesi
// let starValue = 0;
// let endValue = 10;
// function customLop(){
//    if (starValue < endValue) {
//     starValue += 1;
//     console.log(starValue);
//     customLop()
//    }
// }
// customLop()

// 1-den 10-a qeder cüt ededler
// let starValue = 0;
// let endValue = 10;
// function customLop(){
//    if (starValue < endValue) {
//     starValue += 1;
//     if (starValue % 2 === 0 ) {
//         console.log(starValue);
//     }
    
//     customLop()
//    }
// }
// customLop()

// let starValue = 0;
// let endValue = 10;
// while (starValue < endValue) {
//     console.log(starValue);
//     starValue++;
// }

// let val = "hello world";
// let i = 0;
// while (i < val.length) {
//     console.log(val[i]);
//     i++;
// }
// sözün tersine yazılması
// let val = "hello world";
// let result = ""
// let i = val.length - 1;
// while (i >= 0) {
//     result += val[i];
//     i--;
// }
// console.log(val[i]);


