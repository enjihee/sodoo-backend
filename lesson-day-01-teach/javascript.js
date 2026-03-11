// let name = prompt("neree oruulna uu");
// console.log(`name : $name`);
// console.log(name);

// let age = prompt("Nasaa oruulna uu");
// let license = false;
// // let ageNum = Number(input("Nasaa"))
// if (age > 18 && license == true) {
//     console.log("Mashin barih erhtei");
// }else{
//     console.log("Nasand hureegui , unemlehgui uchir joloodoh erhgui");
// }
// array
function line() {
    console.log("-------------------");
}

let food = ["Pizza", "Pasta", "buuz"];
food.push("sushi")
food.pop()
food.shift()
console.log(food);
let numberoffood = food.length;
line()
console.log(numberoffood);
for(let foods of food){
    console.log(foods);
}

let number = [23,1,34,67,34,35];
let totalNumber = 0;
for(let numbers of number){
    totalNumber += numbers;
}
line()
console.log(totalNumber);
// find number
for(let num of number){
    if (num == 34) {
        console.log("34 toog ollo");
        break;
    }
    console.log(num);
}
line()

for (let i = 10; i > 0; i--) {
    console.log(i);
    
}

function Hello() {
    console.log("sainuu");
    console.log("oroin mend");
}
Hello()
Hello()
Hello() 

