let Harga = [10000, 14000, 20000, 9000]
let Jumlah = [5, 5, 2, 10]
let Total = 0

for (let number = 0; number < Harga.length; number++) {
    Total += Harga[number] * Jumlah[number]
}

console.log("Total = " + Total);