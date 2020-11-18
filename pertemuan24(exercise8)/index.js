//Array

let nilai = [90, 80, 70, 100, 85];
for (let i = 0; i < Array.length; i++) {
    console.log("Nilai =", nilai[i] + 5);
    
}

console.log(nilai);


//nilai[2] = 90;
//console.log(nilai[nilai.length - 1]);

let john = ["john", "Doe", 33, true];
let vineh = ["vineh", "Doe", 17, true];
let vanisa = ["vanisa", "Doe", 18, true];
console.log(john[john.length -1]);
console.log(john);

//toString()
console.log(john.toString());
//join()
console.log(john.join(" - "));

//pop()
john.pop();
console.log(john.join(" - "));

//push()
john.push(true);
john.push("Hello");
console.log(john.join(" - "));

//shift()
john.shift()
console.log(john.join(" - "));

//unshift()
john.unshift("john");
john.unshift("Prof");
console.log(john.join(" - "));

//splice()
john.splice("john");
console.log(john.join(" - "));

//concat()
let nama = john.concat(john);
console.log(nama);

//slice()
let susi = ["susi", "Doe", 18, true];
let tia = ["tia", "Doe", 19, true];
let winny = ["winny", "Doe", 17, true];

console.log(john);
console.log(john);

//sort()
let sisi = ["sisi", "Doe", 18, true];
sisi.sort();

console.log(john);

let umur = [18, 17, 20, 30, 19];

umur.sort();
console.log(umur);

//reverse()
let mawar = ["mawar", "Doe", 18, true];

mawar.reverse();

console.log(mawar);