const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");


let countNum =0;   //廣域變數
let randomNumber = Math.floor(Math.random()*100)
console.log("觀察隨機的數字:", randomNumer);
function checkGuess() {
    countNum++;
    count.textContent = "猜測次數："+countNum;
    const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
    if  (  userGuess === randomNumber ) {
        result.textContent = "猜測結果：Congratulations!" ;
    }
    else if (userGuess < randomNumber ) {
        result.textContent = "猜測結果：數字太小!" ;
    }
    else if (userGuess >  randomNumber ) {
        result.textContent = "猜測結果：數字太大!";
    }
    //guessField.focus();       //游標焦點預設在輸入欄位裡
    if (countNum > 10){
        result.textContent += "遊戲結束";
        result.computedStyleMap.backgroundColor="red";
        alert("遊戲結束");
        setGameOver();
        }
}
function setGameOver() {
        guessField.disabled = true; //停止輸入功能
        guessSubmit.disabled = true;    //停止按鈕功能
}

function initGame() {
        randomNumber = Math.floor(Math.random()*100);
        guessField.disabled = false; //停止輸入功能
        guessSubmit.disabled = false;    //停止按鈕功能
}

