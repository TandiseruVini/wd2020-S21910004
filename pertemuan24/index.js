//Array

let nilai = [90, 80, 75, 100, 85];

for(let i=0; i<nilai.length; i++){
    console.log("Nilai=", nilai[i] + 5);     //bsa lngsung menggunakan looping
}

// console.log(nilai1);

// nilai[2] = 90;
// console.log(nilai[nilai.length - 1]);

let john = ["John", "Doe", 33, true];
console.log(john[john.length - 1]);
console.log(john);

//toString()
console.log(john.toString());
//join()
console.log(john.join("-"));

//pop()
john.pop();
console.log(john.join("-"));
//push()
john.push("true");
john.push("Hello");
console.log(john.join("-"));

//shift()
john.shift();
console.log(john.join("-"));

//unshift()
john.unshift("John");
john.unshift("Prof");
console.log(john.join("-"));

