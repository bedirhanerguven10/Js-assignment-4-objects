//# ODEV: maaslar dizisi icin maasi ortalamanin altinda olanlara %20 zam yaparak zamli maaslari ayrı bir diziye atalım.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let avgMaas = maaslar.reduce((sum, maas) => {
//     return (sum + maas); 
// })
// console.log(avgMaas / maaslar.length);

// # ODEV: Kisiler dizisi icin asagıdaki islemleri gerceklestiren kodları yazınız

// ## 1: Yasi(age) 33 den kücük olan kisilerin adlarini (name) listeyiniz.
// const kisiler = [
//     {
//     name: 'Ahmet',
//     surname: 'Can',
//     job: 'developer',
//     age: 30,
//     },
//     {
//     name: 'Mehmet',
//     surname: 'Baki',
//     job: 'tester',
//     age: 35,
//     },
//     {
//     name: 'Nur',
//     surname: 'Ersan',
//     job: 'team lead',
//     age: 40,
//     },
//     {
//     name: 'Merve',
//     surname: 'Veli',
//     job: 'developer',
//     age: 26,
//     },
    
//     {
//     name: 'Ruzgar',
//     surname: 'Kuzey',
//     job: 'tester',
//     age: 24,
//     },
//     ];
// let genc = kisiler.map((value) => value.age < 33 && (value.name));
// console.log(genc);


// console.log(genc);

// ## 2: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

// const young = kisiler.filter((val) => val.age < 33).map((val) => (val.name));
// console.log(young);

// ## 3: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak yeni diziye saklayiniz.

// const dev = kisiler.filter((fil) => fil.job == 'developer').map((fil) => {
//     ({name,job} = fil);
//     return{name,job}
// })
// console.log(dev);


