let sessionId;
let currentQuestionData = null;
let questionHistory = []; 
let answers = {}; // Store answers indexed by question

function startTest() {
    document.querySelector('.start-section').style.display = 'none';
    document.querySelector('.question-section').style.display = 'block';
    sessionId = Math.random().toString(36).substr(2, 9);
    fetchQuestion();
}


const mbtiQuestions = {
    E: [
      "조용하고 한적한 장소보다 시끌벅적 핫한 장소에서의 데이트를 선호한다.",
      "개인의 시간보다 연인과 함께하는 시간 더 소중하다."
    ],
    I: [
      "연인의 친구를 소개받는 자리가 조금 불편하다.",
      "연인에게 적극적으로 마음을 표현하기보다는 은은하게 뒤에서 챙겨준다."
    ],
    T: [
      "연인과의 다툼 중 의견이 다를 때 상대가 인정할 만한 근거를 제시하며 설득한다.",
      "연애 초반에 마음과는 달리 감정 표현이 서툰 편이다."
    ],
    F: [
      "연인이 조별 과제로 힘들어할 때 원인 분석보다 위로를 우선시한다.",
      "기념일 선물로 상대에게 필요한 실용적인 선물보다는 정성이 들어간 이벤트를 선호한다."
    ],
    J: [
      "연인과 여행을 갈 때, 출발부터 돌아오는 날까지 모든 일정을 계획한다.",
      "내일이 시험인데 보고 싶어서 집 앞으로 왔다는 애인이 불편하다."
    ],
    P: [
      "자유롭고 즉흥적인 데이트를 선호한다.",
      "잔잔한 연애보다는 다이나믹한 연애를 선호한다."
    ]
  };
  

function displayQuestion(data) {
    const questionElement = document.getElementById('question');
    if (questionElement && data.assistant) {
        questionElement.innerText = data.assistant;
        
        const buttons = document.querySelectorAll('.question-section button:not(.navigation-buttons button)');
        buttons.forEach(button => {
            button.style.backgroundColor = '';
            if (answers[data.assistant] && button.innerText === answers[data.assistant]) {
                button.style.backgroundColor = 'blue'; 
            }
        });
    }
}


