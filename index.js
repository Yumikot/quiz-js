const quiz = [
  {
    question: 'ゲーム史上最も売れたゲームは？',
    answers: [
      'ニンテンドーswitch',
      'プレイステーション',
      'ニンテンドーDS',
      'スーファミ',
    ],
    correct: 'ニンテンドーDS',
  },
  {
    question: '日本で一番面積の多い都道府県は？',
    answers: ['兵庫県', '北海道', '青森', '東京'],
    correct: '北海道',
  },
  {
    question: '最古のワイン発祥の地はどこ？',
    answers: ['フランス', 'イタリア', 'ジョージア', 'エジプト'],
    correct: 'ジョージア',
  },
  {
    question: '哺乳類ではないものは？',
    answers: ['クジラ', 'ライオン', 'カエル', '人間'],
    correct: 'カエル',
  },
]

const quizLength = quiz.length
let quizIndex = 0
let score = 0

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length

//クイズの問題文
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question
  let buttonIndex = 0
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++
  }
}

setupQuiz()

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('おめでとう！正解')
    score++
  } else {
    window.alert('残念、不正解です!')
  }

  quizIndex++

  if (quizIndex < quizLength) {
    setupQuiz()
  } else {
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です')
  }
}

//ボタンを押したら正解か判定
let handlerIndex = 0

while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e)
  })
  handlerIndex++
}
