let Pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
let Total = 3345700

for (let number = 0; number < Pecahan.length; number++) {
    if (Total >= Pecahan[number]){
    let jmlUang = Math.floor(Total/Pecahan[number])
    Total = Total % Pecahan[number]
    console.log("Jumlah Uang "+ Pecahan[number]+"= " +jmlUang);
    }
}