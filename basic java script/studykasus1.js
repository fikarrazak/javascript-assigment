let P = 30 
let L = 20.5
let harga = 1500000 //permeter persegi
let total = 0 
let hasil = 0 // hasil perkalian P dan L
let ppn = 0

hasil += P * L
total += hasil * harga
ppn += total * 15/100

console.log("Total Keseluruhan = "+ ppn)