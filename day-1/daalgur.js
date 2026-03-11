let length = 12;
let width = 5;
let area = length * width;
console.log("Тэгш өнцөгтийн талбай: " + area);


let price = 5000.0;
let discountPercentage = 10;
let discountAmount = price * (discountPercentage / 100);
let finalPrice = price - discountAmount;
console.log("Эцсийн үнэ: " + finalPrice + "₮");


let firstName = "Болд";
let lastName = "Дорж";
let fullName = lastName + " " + firstName;
console.log("Намайг " + fullName + " гэдэг.");


let temperature = 25;
if (temperature > 20) {
    console.log("Гадаа дулаахан байна.");
} else {
    console.log("Гадаа сэрүүхэн байна.");
}




let secretWord = "python";
let userGuess = "java";
if (userGuess === secretWord) {
    console.log("Та зөв таалаа!");
} else {
    console.log("Буруу таалаа.");
}



for (let i = 1; i <= 5; i++) {
    console.log(i + " дахь удаагийн мэндчилгээ.");
}



let fruits = ["Алим", "Банана", "Жүрж"];
for (let fruit of fruits) {
    console.log("Би " + fruit + "-д дуртай.");
}


function displayWelcomeMessage() {
    console.log("Сургалтад тавтай морилно уу!");
    console.log("Танд амжилт хүсье!");
}

displayWelcomeMessage();




let birthYearStr = prompt("Та хэдэн онд төрсөн бэ?");
let birthYear = Number(birthYearStr);
let currentYear = 2025;
let age = currentYear - birthYear;
console.log("Та ойролцоогоор " + age + " настай юм байна.");