const pagePrefix = "page1"; // 1ページ目の識別子

document.getElementById('next-button').addEventListener('click', () => {
  window.location.href = "ori1-2.html"; // 特定のページに進む
});

document.getElementById('prev-button').addEventListener('click', () => {
  window.location.href = "list.html"; // 特定のページに戻る
});

const quiz = [
  {
    question: '（A）に当てはまる数字を答えよ。',
    answers: [ '1964', '1966', '1970', '1977'],
    correct: '1970'
  },
  {
    question: '（B）に当てはまる数字を答えよ。',
    answers: ['44', '45', '54', '55'],
    correct: '45'
  },
  {
    question: '（C）に当てはまる語句を答えよ。',
    answers: ['せんべい', '餅', 'みかん', 'どら焼き'],
    correct: '50円'
  },
  {
    question: '（D）に当てはまる語句を答えよ。',
    answers: ['息子', '孫', 'ひ孫', '玄孫（孫の孫）'],
    correct: '玄孫（孫の孫）'
  },
  {
    question: '①【予言】について、ドラえもんが告げた予言の内容として正しいものは次のうちどれか。',
    answers: [ '三十分後に首つり、四十分後に火あぶり', '三十分後に首つり、五十分後に火あぶり', '三十分後に火あぶり、四十分後に首つり', '三十分後に首つり、五十分後に火あぶり'],
    correct: 'のび太の恐竜'
  },
  {
    question: '②【倒産】について、のび太の会社に倒産前に起きた事件について正しいものは次のうちどれか。',
    answers: [ '事業に大失敗した', '競合他社に敗北した', '花火でオフィスが火事になった', '部下が横領をはたらいた'],
    correct: '花火でオフィスが火事になった'
  },
  {
    question: '③【子孫を困らせている】について、この年にセワシがもらったお年玉の金額はいくらであったか。',
    answers: ['50円', '100円', '150円', '200円'],
    correct: '50円'
  },
  {
    question: '④【悲惨な未来】について、ドラえもんが持参した未来のアルバムに記されていない出来事は次のうちどれか。',
    answers: ['大学入試失敗', '起業記念パーティー', '借金取りおしかけ', '詐欺被害に遭う'],
    correct: '詐欺被害に遭う'
  },
  {
    question: '問題文第二段落は、『ドラえもん』第1話の概要である。この話のタイトルとして正しいものは次のうちどれか。',
    answers: ['未来の国からはるばると', 'ドラえもんがやってきた！', 'ドラえもん登場！！', '未来の世界からこんにちは'],
    correct: '未来の国からはるばると'
  },
  {
    question: '第1話に登場するキャラクターとして誤っているのは次のうちどれか。',
    answers: ['ジャイアン', 'しずか', 'スネ夫', 'のび太の父'],
    correct: 'スネ夫'
  },
];

const $doc = document;
const $quizContainer = $doc.getElementById('quiz-container');

const initQuiz = () => {
  quiz.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('mb-4');
    
    // 質問文を追加
    const questionTitle = document.createElement('p');
    questionTitle.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionTitle);
    
    // 選択肢を追加
    q.answers.forEach(answer => {
      const label = document.createElement('label');
      label.classList.add('d-block');
      
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `quiz-${index}`; // 質問ごとに一意のname属性
      input.value = answer;

      // 回答の保存イベントリスナーを設定
      input.addEventListener('change', () => {
        const questionId = input.name; // 例: quiz-1
        localStorage.setItem(`${pagePrefix}-${questionId}`, input.value); // 回答を保存
      });

      // 保存された回答をチェック
      const savedAnswer = localStorage.getItem(`${pagePrefix}-quiz-${index}`);
      if (savedAnswer === answer) {
        input.checked = true; // 選択状態を復元
      }
      
      label.appendChild(input);
      label.appendChild(document.createTextNode(answer));
      questionDiv.appendChild(label);
    });
    
    $quizContainer.appendChild(questionDiv);
  });
};

// 初期化
document.addEventListener('DOMContentLoaded', initQuiz);