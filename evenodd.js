function generateAndcheck(){
    var generatedNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("number").innerText = "generateAndcheck";
    checkOddEven(generatedNumber);
}
function checkOddEven(number) {
    var result = number % 2 === 0 ? "Even" : "Odd";
    alert("The generated number is " + result + ".");
    document.getElementById("odd-even").textContent = "The number is " + result + ".";

}

  