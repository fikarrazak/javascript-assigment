let Harga = [3000, 10000, 4500, 5000]
let Jumlah = [20, 8, 10, 5]
let Total = 0

for (let number = 0; number < Harga.length; number++) {
    Total += Harga[number] * Jumlah[number]
}

let PPN = Total * 10/100
Total += PPN
console.log("Total = " + Total);