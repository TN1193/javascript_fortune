// JavaScript

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');

drawButton.addEventListener('click', () => {

    // 0から1未満のランダムな数字を生成する
    const randomNumber = Math.random();

    console.log(randomNumber); // ランダムな数字をコンソールに表示する（確認用）

    // 0.3 未満だったら
    if (randomNumber < 0.3) {
        resultDisplay.textContent = '大吉';

    // 0.8 未満だったら
    } else if (randomNumber < 0.8) {
        resultDisplay.textContent = '中吉';

    // どちらでもない場合
    } else {
        resultDisplay.textContent = '吉'; //
    }

});