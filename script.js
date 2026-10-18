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
// JavaScript

const drawButton = document.querySelector('#drawButton');
const resultDisplay = document.querySelector('#resultDisplay');


const results = [
  { name: '大吉', color: '#DAA520' },
  { name: '中吉', color: '#E74C3C' },
  { name: '小吉', color: '#F39C12' },
  { name: '吉', color: '#27AE60' },
  { name: '半吉', color: '#16A085' },
  { name: '末吉', color: '#3498DB' },
  { name: '凶', color: '#8E44AD' },
  { name: '大凶', color: '#555555' }
];


let lastResult = '';


function getRandomResult() {
  const randomNumber = Math.floor(Math.random() * results.length);
  return results[randomNumber];
}

function showConfetti() {

  const colors = [
    '#FFD700',
    '#FF6B6B',
    '#4ECDC4',
    '#FF9F43',
    '#A29BFE'
  ];


  for (let side of ['left', 'right']) {

    for (let i = 0; i < 8; i++) {

      const piece = document.createElement('span');
      piece.classList.add('confetti');

      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      piece.style.left = side === 'left' ? '0%' : '100%';
      piece.style.top = '50%';

      const direction = side === 'left' ? -1 : 1;

      const x = direction * (20 + Math.random() * 100);
      const y = (Math.random() - 0.5) * 160;

      piece.style.setProperty('--x', x + 'px');
      piece.style.setProperty('--y', y + 'px');

      resultDisplay.appendChild(piece);


      piece.addEventListener('animationend', () => {
        piece.remove();
      });
    }
  }
}


function showBadParticles() {

  const colors = [
    '#333333',
    '#666666',
    '#999999'
  ];

  for (let i = 0; i < 16; i++) {

    const piece = document.createElement('span');
    piece.classList.add('bad-particle');

    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.left = Math.random() * 100 + '%';
    piece.style.top = '10%';

    const x = (Math.random() - 0.5) * 120;

    piece.style.setProperty('--x', x + 'px');

    resultDisplay.appendChild(piece);

    
    piece.addEventListener('animationend', () => {
      piece.remove();
    });
  }
}


drawButton.addEventListener('click', () => {


  drawButton.disabled = true;


  resultDisplay.classList.remove(
    'pop',
    'bad-shake',
    'very-bad-shake'
  );

  resultDisplay.style.color = '#333';
  resultDisplay.style.borderColor = '#e9ecef';

  let count = 0;


  const animation = setInterval(() => {

    const randomResult = getRandomResult();

    resultDisplay.textContent = randomResult.name;
    count++;


    if (count >= 12) {

      clearInterval(animation);

      let finalResult = getRandomResult();

      while (finalResult.name === lastResult) {
        finalResult = getRandomResult();
      }

      lastResult = finalResult.name;


      resultDisplay.textContent = finalResult.name;


      resultDisplay.style.color = finalResult.color;
      resultDisplay.style.borderColor = finalResult.color;


      if (
        finalResult.name === '大吉' ||
        finalResult.name === '中吉' ||
        finalResult.name === '小吉' ||
        finalResult.name === '吉'
      ) {


        resultDisplay.classList.add('pop');
        showConfetti();

      } else if (finalResult.name === '凶') {


        resultDisplay.classList.add('bad-shake');

      } else if (finalResult.name === '大凶') {


        resultDisplay.classList.add('very-bad-shake');
        showBadParticles();

      } else {

     
        resultDisplay.classList.add('pop');

      }


      drawButton.disabled = false;
    }

  }, 80);

});

    } else if (randomNumber < 0.8) {
        resultDisplay.textContent = '中吉';

  
    } else {
        resultDisplay.textContent = '吉'; //
    }

});
