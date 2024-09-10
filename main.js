// 11-masala
// let massiv = [10, 20, 30, 40, 50];

// for (let i = 0; i < massiv.length; i++) {
//   console.log(massiv[i]);
// }

// 12-masala
// let massiv = [10, 20, 30, 40, 50,51,53];

// for (let i = 0; i < massiv.length; i++) {
//   if (massiv[i] % 2 == 0) {
//     console.log(massiv[i]);
//   }
// }

// 13-masala
// let massiv = [10, 20, 30, 40, 50,51,53];

// for (let i = 0; i < massiv.length; i++) {
//   if (massiv[i] % 2) {
//     console.log(massiv[i]);
//   }
// }

// 14-masala
// let massiv = [10, 25, 5, 40, 15];

// let engKatta = Math.max(...massiv);

// console.log("Massivdagi eng katta son:", engKatta);

// 15-masala
// let massiv = [10, 25, 5, 40, 15];

// let engKatta = Math.min(...massiv);

// console.log("Massivdagi eng katta son:", engKatta);

// 16-masala
// let massiv = [10, 20, 30, 40, 50];
// let yigindi = 0;

// for (let i = 0; i < massiv.length; i++) {
//   yigindi += massiv[i];
// }

// console.log("Massivdagi barcha sonlar yig'indisi:", yigindi);

// 17-masala
// let musbat = [10, -10, 20, -20, -30, 30];

// for (i = 0; i < musbat.length; i++) {
//   if (musbat[i] > 0) {
//     console.log(musbat[i]);
//   }
// }

// 18-masala
// let musbat = [10, -10, 20, -20, -30, 30];

// for (i = 0; i < musbat.length; i++) {
//   if (musbat[i] < 0) {
//     console.log(musbat[i]);
//   }
// }

// 19-masala
// let massiv = [10, 20, 30, 40, 50];
// let yangiMassiv = [];

// for (let i = 0; i < massiv.length; i++) {
//   yangiMassiv.push(massiv[i] * 2);
// }

// console.log("Yangi massiv:", yangiMassiv);

// 20-masala
// let toq = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < toq.length; i++) {
//   if (toq[i]%2==0) {
//     console.log(toq[i])
//   }
// }

// 21-masla
// let text = "Salom";

// for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }

// 22-masala
// let text = "Salom Dunyo! ABC";
// let kattaHarfSoni = 0;

// for (let i = 0; i < text.length; i++) {
//   let ascii = text.charCodeAt(i);
//   if (ascii >= 65 && ascii <= 90) {

//     kattaHarfSoni++;
//   }
// }

// console.log("Katta harflar:", kattaHarfSoni);

// 23-masala
// let text = "Salom Dunyo! ABC";
// let kattaHarfSoni = 0;

// for (let i = 0; i < text.length; i++) {
//   let ascii = text.charCodeAt(i);
//   if (ascii >= 97 && ascii <= 122) {
//     kattaHarfSoni++;
//   }
// }

// console.log("Katta harflar soni:", kattaHarfSoni);

// 24-masala
// let text = "Salom D8un8yo! A9BC0";
// let kattaHarfSoni = 0;

// for (let i = 0; i < text.length; i++) {
//   let ascii = text.charCodeAt(i);
//   if (ascii >= 48 && ascii <= 57) {
//     kattaHarfSoni++;
//   }
// }

// console.log("Katta harflar soni:", kattaHarfSoni);

// 25-masala
// let text = "Salom Dunyo! A B C";
// let count = 0;

// for (let i = 0; i < text.length; i++) {
//    if(text[i]===" "){
//     count++;
//    }
// }
// console.log(count)

// 26-masla
// let text = "Salom Dunyo!";
// let teskariText = "";

// for (let i = text.length - 1; i >= 0; i--) {
//   teskariText += text[i];
// }

// console.log("Teskari string:", teskariText);

// 27-masala
// let text = "Salom Dunyo a aa!";
// let count=0;

// for (let i=0;i<text.length;i++) {
//   if(text[i]==="a"){
//     count++;
//   }
// }

// console.log(count);

// 30-masala
// let text = "Salom 123 Dunyo 45!";
// let raqamYigindisi = 0;

// for (let i = 0; i < text.length; i++) {
//   if (!isNaN(text[i]) && text[i] !== " ") {
//     raqamYigindisi += parseInt(text[i]);
//   }
// }

// console.log("Raqamlar yig'indisi:", raqamYigindisi);

// 31-masala
// let son = prompt("Son kiriting:");
// let raqamlarYigindisi = 0;

// for (let i = 0; i < son.length; i++) {
//   raqamlarYigindisi += parseInt(son[i]);
// }

// console.log("Raqamlar yig'indisi:", raqamlarYigindisi);

// 32-masala
// let son=+prompt("Son kiriting: ");
// let engKatta = Math.max(...son);

// console.log(engKatta);

// 33-masala
// let n = 10; 
// let fib = [0, 1]; 

// for (let i = 2; i < n; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// }

// console.log("Fibonacci ketma-ketligi:", fib);

// 34-masala
// let number=+prompt("son kiriting: ")
// let check = 0;
// let i = 0;

// while (i <= number) {
//   if (number % i === 0) {
//     check++;
//   }
//   i++;
// }
// console.log(check === 2 ? "Tub son" : "Tub emas");

// 35-masala
// let n = 10000; 
// let mukammalSonlar = [];

// for (let i = 2; i <= n; i++) {
//   let yigindi = 0;

//   for (let j = 1; j <= i / 2; j++) {
//     if (i % j === 0) {
//       yigindi += j;
//     }
//   }

//   if (yigindi === i) {
//     mukammalSonlar.push(i);
//   }
// }

// console.log("Mukammal sonlar:", mukammalSonlar);

// 36-masala
// let a = 48; 
// let b = 18; 

// let max = a > b ? a : b;

// let ekub = 1; 

// for (let i = 1; i <= max; i++) {
//   if (a % i === 0 && b % i === 0) {
//     ekub = i; 
//   }
// }

// console.log(`Ikki sonning EKUB: ${ekub}`);

// 37-maslal
// let a = 48;
// let b = 18; 

// let ekub = 1;
// let max = a > b ? a : b;

// for (let i = 1; i <= max; i++) {
//   if (a % i === 0 && b % i === 0) {
//     ekub = i;
//   }
// }

// let ekuk = (a * b) / ekub;

// console.log(`Ikki sonning EKUK: ${ekuk}`);

// 38-masala

// let massiv = [34, 7, 23, 32, 5, 62, 1];

// massiv.sort((a, b) => b - a);

// console.log("Tartiblangan massiv (kattadan kichikaga):", massiv);

// 39-masala
// let massiv = [1, 2, 3, 4, 5];
// let factorials = []; 

// for (let i = 0; i < massiv.length; i++) {
//   let n = massiv[i];
//   let result = 1;

//   for (let j = 2; j <= n; j++) {
//     result *= j;
//   }

//   factorials.push(result);
// }

// console.log("Faktoriyallar:", factorials);

// 40-masala
// let massiv = [1, 2, 2, 3, 4, 4, 5, 1, 6, 7, 7];

// let uniqueMassiv = [...new Set(massiv)];

// console.log("Takrorlanmaydigan massiv:", uniqueMassiv);









