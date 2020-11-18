console.log("Basic Javascript");

//Conditional JavaScript

// let firstName ="John";
// let isMarried = true;

// if(isMarried === true)
// {
//     console.log(firstName + "is married");
// }   else{
//     console.log(firstName + "is not married");
// }

/*
    Jika umur < 13 tahun maka tampilkan kategori anak-anak
    Jika umur 13 sampai 16 tahun tampilkan kategori remaja
    Jika umur 17 sampai 25 tahun tampilkan kategori anak muda
    Jika umur 26 sampai 50 tahun tampilkan kategori dewasa
*/

// let umur = 25;

// if(umur< 13){
//     console.log("Kategori anak-anak");
// }else if(umur >= 13 && umur < 17){
//     console.log("Kategori remaja");
// }else if(umur>= 17 && umur < 26){
//     console.log("Kategori anak muda");
// }else if(umur >= 26 && umur <50){
//     console.log("Kategori orang dewasa");
// }

// let firstName = "John";
// let job = "teacher";

// switch(job){
// case "teacher":
//     console.log(firstName + "is a teacher");
//     break;
// case "driver":
//     console.log(firstName + " is a driver");
//     break;
// case "Instructor":
//     console.log(firstName + " is a Instructor");
//     break;
// default:
//     console.log(firstName + " does something else");
//     break;
// }


// let umur = 25;

// if(umur< 13){
//     console.log("Kategori anak-anak");
// }else if(umur >= 13 && umur < 17){
//     console.log("Kategori remaja");
// }else if(umur>= 17 && umur < 26){
//     console.log("Kategori anak muda");
// }else if(umur >= 26 && umur <50){
//     console.log("Kategori orang dewasa");
// }

// switch(true)
// {
//     case umur <13:
//         console.log("Kategori anak-anak"); 
//         break;
//     case umur >= 13 && umur < 17:
//         console.log("Kategori remaja");
//         break;
//     case umur>= 17 && umur < 26:
//         console.log("Kategori anak muda");
//         break;
//     case umur >= 26 && umur <50:
//         console.log("Kategori orang dewasa");
//         break;
//     default:
//         console.log("Tidak ada dalam range");
//         break;
// }

//JavaScript Function

// function helloworld(){
//     console.log("Hello World function declaration");
// }

let helloworld = function(nama){
    let age = 33;
    console.log("Hello nama saya " + nama + ". Umur saya adalah" + age + "tahun.");
};

helloworld("vini");