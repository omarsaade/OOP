// OOP course




// video 1 & 2
// window            object
//window.object.proprety
//window.object.meth
// window.location   w btenkatab hik window["location"]
//el window hye object jaweto malyen object


// window.location.reload proprety

//window.location.reload()  methods

// window["location"]["href"]
// window["location"].href
// so fi kaza tari2a lal kitebe ya kbiro

//window.location.reload("https://google.com")







// video 3
// file -> prefernces -> settings -> formatsave -> check
// define object -> o literal
//
// let user = { //user hye object
//     // propreties
//     firstname: "osama",   // keys : value
//     lastname: "elzero",
//     age: "37",
//     adresses: {
//         eg: "Giza",
//         usa: "california",
//         ksa: "Riyadh",
//         getMainAddress: function () {
//             return `the main address In Egypt is ${user.adresses.eg} `;
//         }
//     },




//     // methods
//     getFullName: function () {
//         return `Full name :${user.firstname} ${user.lastname}`;
//     },
//     //
//     getAge: function () {
//         return `Age is ${user.age}`;
//     }
// // }
// // Accessing Object Properties
// console.log(user.firstname);//Dot notation
// console.log(user.lastname);//string
// console.log(user["firstname"]);//Bracket Notation
// console.log(typeof user.firstname) //string;
// //
// // Accesing Object Methods
// console.log(typeof user.getFullName()); //string
// console.log(typeof user.getFullName); //function
// console.log(user.getAge());
// //
// //
// console.log(user.adresses.getMainAddress());
// console.log(user.adresses.ksa);








// video 5
// Dot Notation or Bracket notation
// let myObj = {
// "One": 1,
// "Two!": 2,
// };

// console.log(myObj.One);
// console.log(myObj."One");//Syntax Error
// console.log(myObj.Two!);//Syntax Error

// let myObj2 = {
// 1: "One",
// 2: "Two",
// };
// console.log(myObj2.1);//Syntax Error

// console.log(myObj2["1"]);
// console.log(myObj2[2]);
//
//
// let myVariable = "name";
//
// let myLastObj = {
// name: "Osama"
// };
//
// console.log(myLastObj.myVariable);//undefined
// console.log(myLastObj[myVariable]);//osama , assign property la
// variable
// console.log(myLastObj["name"]);//osama






//video6
// Create an Object (methd 2)
// object.create()


// let user = new Object();                       //built in constructor mawjud bel logga
// user.firstName = "omar";
// user.lastName = "Saade";

// user["age"] = 37;
// user["cash"] = 1000;

// user.getFullName = function () {
//     return `the Full Name : ${user.firstName} ${user.lastName}`
// }

// console.log(user);
// console.log(user.firstName);
// console.log(user["lastName"]);
// console.log(user.age);
// console.log(user.getFullName());






// video7
// Defining Object With Object.Create
// + byahke 3an ahamyet this bel object
// SUPER
//
// let mainObj = {
// hasDiscount: true,
// showMsg: function () {
// return `you ${this.hasDiscount ? "" : "Dont"} Have Discount`;
// },
// };
//
// console.log(mainObj.hasDiscount);
// console.log(mainObj.showMsg());
//
// let otherObj = Object.create(mainObj);
//
// otherObj.hasDiscount = false;
// console.log(otherObj.hasDiscount);
// console.log(otherObj.showMsg());
//
//
// let lastObj = Object.create(mainObj);
//
// console.log(lastObj.hasDiscount);
// console.log(lastObj.showMsg());
//
// let objecto = Object.create(mainObj);
//
// objecto.hasDiscount = true;
// console.log(objecto.hasDiscount);






//////////////////////////////////////
// note about if else statement shortcut
// `they ${hasDiscount?"have":"dont have" } discount`;
// if true they have discount
// if false they dont have discount
////////////////////////////////////////////





// video8
// with object.assign()

// const src1 = {
//     prop1: "value1",
//     prop2: "value2",
//     method1: function () {
//         return `method 1`;
//     },
// };

// const src2 = {
//     prop3: "value3",
//     prop4: "value4",
//     method2: function () {
//         return `method 2`
//     },
// };

// const target = {
//     prop5: "Value5",
// };

// Object.assign(target, src1, src2, { prop6: "value6" });
// console.log(target);

// const myObject = Object.assign({}, target, { prop7: "Value7" });
// console.log(myObject);
// console.log(myObject.prop1);
// console.log(myObject.prop2);
// console.log(myObject.prop6);
// console.log(myObject.method1());
// console.log(myObject.method2());






//video9
// Delete operator
// const user = { name: "osama" };

// console.log(user);
// console.log(user.name);

// delete user; // Delete Proprety not object
// delete user.name;
// delete user["name"];
// console.log(delete user["name"]);

// console.log(user);
// console.log(user.name);//undefined

// console.log("#".repeat(15));

// const username = "Osama";
// console.log(username);
// console.log(delete username);
// console.log(username);

// console.log("#".repeat(15));

// const freezedObj = Object.freeze({ age: 37 });
// console.log(freezedObj);
// console.log(freezedObj.age);

// console.log(delete freezedObj.age);

// console.log(freezedObj);
// console.log(freezedObj.age);

// console.log("#".repeat(15));


// const eObj = {};

// Object.defineProperty(eObj, "a", { value: 1, configurable: false });
// // eobj hye obj fadye
// // key hye a
// // value hye 1
// console.log(eObj);
// console.log(eObj.a);

// console.log(delete eObj.a);

// console.log(eObj);
// console.log(eObj.a);






/////////////////////////////////////////
// video10
// const user = {
//     name: "osama",
//     country: "Egypt",
//     age: 37,
// };

// let finalData = "";

// for (let info in user) {
//     // console.log(user[info]);
//     // console.log(`the ${info} Is => ${user[info]}`);
//     finalData += `<div>The ${info} Is ${user[info]}</div>`;
// }


// console.log(user.country);
// console.log(user["country"]);


// console.log(finalData);
// document.getElementById("info").innerHTML = finalData;





// video11
// Constructor Function
// very important for editing object property
// iza badna nenshe2 ktir object bi idna kerseee
// el 7all huwe el constractorrrrrrrr
// the best


// beforeee
// const phone1 = {
//     serial: 123,
//     color: "red",
//     price: 500,
// };

// const phone2 = {
//     serial: 159,
//     color: "Black",
//     price: 500,
// };

// const phone3 = {
//     serial: 167,
//     color: "silver",
//     price: 500,
// }






// afterrrrrrrrrrrrrrrr
// SUPERRRR
// function Phone(serial, color, price) {
//     this.serial = serial;
//     this.color = color;
//     this.price = price - 100; //super mheme iza habbet 3addel 3al object degre b3adel men hon , mafi de3e lef el dene w 3adeel 3akel wahde
// w he men ahaymyet el constructor kamen
// }

// let phone1 = new Phone(123, "Red", 500);              //constructor enta 3amalto bi idak
// let phone2 = new Phone(159, "black", 500);
// let phone3 = new Phone(167, "silver", 500);

// console.log(phone1.serial);
// console.log(phone1.color);
// console.log(phone1.price);

// console.log(phone2.serial);
// console.log(phone2.color);
// console.log(phone2.price);


// console.log(phone3.serial);
// console.log(phone3.color);
// console.log(phone3.price);



/////////////////////////////




// video12
//btefahmak aktar el constructor wel property
// function sayhello(someone) {
//     // someone => parameter
//     return `hello ${someone}`;
// }
// console.log(sayhello("osama"));//osama hye argument




//el property li esma serial tab3it this li hye el object li ana lah enshe2o
// btsewe el serial li sha5es katabo
// this.serial = serial;



// function Phone(serial) {                //P majuscule yaane lezem ta3ref ano heda constructor
//     // this => hye el created Object from the Constructor
//     console.log(this);
//     this.serial = `#${serial}`; //or // this.serial = serial bidun editing
// }

// let phone1 = new Phone(123456);
// let phone2 = new Phone(427483);
// let phone3 = Phone(123456);

// console.log(phone1.serial);
// console.log(phone2.serial);
// console.log(window.serial);

// console.log(phone1 instanceof Phone);
// console.log(phone2 instanceof Phone);
// console.log(phone3 instanceof Phone);//instance yaane naumzaj


// console.log(phone1.constructor === Phone);
// console.log(phone2.constructor === Phone);
// // console.log(phone3.constructor === Phone);//error




////////////////////////////////////////
// video13
// bt3almak ano ma daruri nafes 3adad el parameter ykun nafes 3adad
// el property

// function User(fName, lName, age, country) {
//     this.fName = fName;
//     this.lName = lName;
//     this.age = age;
//     this.country = country;
//     this.fullName = function () {
//         return `Full Name: ${this.fName} ${this.lName}`;
//     };
//     this.ageInDays = function () {
//         return `Age In Days : ${this.age * 365}`;
//     };
// }
// // User.country = "Egypt";   //wrong

// let user1 = new User("ali", "saade", 23, "egy");
// let user2 = new User("ahmed", "ali", 33, "ldn")
// console.log(user1);
// console.log(`Full Name: ${user1.fName} ${user1.lName}`);
// console.log(user1.fullName());
// console.log(user1.ageInDays());
// console.log(user2);
// console.log(user2.country);
// console.log(user2.ageInDays());

///////////////////////////////////




//video14
// Constructor
// fik techtegel fia umur a3mak men eno bas tefham el oop
// aw ano badal ma te5la2 user ,tsir te5la2 10....no el mawdu3 a3mak men hik w fi enta
// tel3ab bel property w thet function w tgayer w ta3mul condition
//  haraket tawile 3aride


// lanshuf shu asdna

// function User(name, email, age, showEmail) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.updateName = function (newName) {
//         if (this.age > 18) {
//             this.name = newName;
//         } else {
//             console.log(`you cant update Name Because of age Restriction`);
//         }
//     };
//     this.showEmail = function () {
//         if (showEmail === true) {
//             return `Email Is: ${this.email}`;
//         } else {
//             return `Data Is Private`;
//         }
//     };

// }

// let user1 = new User("Osama", "o@nn.sa", 17, true);
// console.log(user1.name);
// user1.updateName("Ahmed");
// console.log(user1.name);
// console.log(user1.showEmail());






//////////////////////////////////
// video15
// li lezem tefhamo hom ya habibi ano kelshi ta2riban munsha2 huwe ma3mul 3n tari2 hidden constructor
// so ka example el obj1 hye built in constractor w hye ma btetbayen w nafes el shi number lama t3aref variable 3adye
// fia number aw lama t3aref vartiable fia string m3ayan..enta ma btshuf li2an hye hidden , bas fik tfut w tshuf hal shi
// bel console w bas hik
// shu kamen..basss


// function User(name) {
//     this.name = name;
//     this.welcome = function () {
//         return `Welcome ${this.name}`;
//     };
// }

// let user1 = new User("Osama");
// let user2 = new User("ahmed");


// // let obj1 = new Object({a:1});
// // let obj2 = new Object({b:2});
// let obj3 = { c: 3 };

// let num1 = new Number(1);
// let num2 = new Number(2);
// let num3 = 3;

// let str1 = new String("Osama");
// let str2 = new String("ahmed");
// let str3 = "Mahmud";


///////////////////////////////////////
// prototype
// v16
// kell ma na3mul function jdide fi default property btenshe2 lal
// function hayde

// el protoype prop li n3amalet la function hye 3ibara 3an object
// object fi jaweto el property wel value taba3a
// object =>property:value
//       =>constructor : function

// kell el object li enta btenshe2ha men el constructor taba3ak kella
// bturwes el 5awas tab3itha men el prototype taba3 el constructor heda
// aw el function heda


// function User(name) {
//     this.name = name;
//     this.welcome = function () {
//         return `welcome ${this.name}`
//     };
// }

// let user1 = new User("ahmed");
// let user2 = new User("osama");

// console.log(User.prototype);


// const arr = [1, 2, 3, 4, 5];
// console.log(Array.prototype);
// console.log(arr.reverse());








// //////////////////////////////////
// v17
// add to prototype chain
// lama enta tenshe2 object men el constructor taba3ak par example
//  let user1 = new User("osama")

// lama ta3melo console.log(user1);    => jaweba bel console
// bya3tik esmo w jaweto fi el properties tab3uno metel
// name:"osama"
// welcome : f()
// w bya3tik el default property li hkina 3ana li hye
// __proto__: Object

// BI 3ALMAK KIF EDDIF METHOD BEL PROTOTYPE CHAIN
// FINA NUWRES EL 5AWAS MEN KELL CONSTRCUCTOR W N2ACCESS 3LAYA





// function User(name) {
//     this.name = name;
//     this.welcome = function () {
//         return `welcome ${this.name}`
//     };
// }

// let user1 = new User("ahmed");
// let user2 = new User("osama");

// console.log(User.prototype);
// console.log(user1);


// User.prototype.addTitle = function () {
//     return `Mr. ${this.name}`;
// };

// console.log(Object.prototype);
// Object.prototype.elzero = "Elzero Web School"
// const myObject = { a: 1, b: 2 };





// li 3ambi sir hon ano nahna 3m ndif method 3al prototype taba3 el consttuctor
// taba3na wel method esma addtitle--->


// User.prototype.addTitle = function () {
//     return `Mr. ${this.name}`;
// };

//hala2 mnfut 3al constructor li 5ele2 bi default mnle2ia 5elane fi ka method
// la hala w mnerja3 mnfut 3al object li ansha2nehna el jdide mnle2e fia
// bel name wel welcome w law gina fatahna el proptype mnle2i fiha el methods
//
// el engine taba3 javascript bya3mul eh?
// bi dawwer 3al property brl object nafso
// iz ma la2ha bu fut ydawer bel prototype
// ma la2aha bi fut ydawwer bi tene prototype....
// awal ma yle2iha bi shaggelha

// kif ndif?
// example2..nehna 3ana object constructor esmo object
// nehna baddna nhet object constructor ysir aya object bel 3alam  fi yesta3mlo
//  kif?


//

// hala2 aya object bel dene lah tenshe2o as a instance from el object
// ha ykun muta7 li ano yed5ul 3al property li esma elzero

// /////////////////////////////





