function getQuestion() {
  // bate na api com base na dificuldade que a pessoa quer
  const difficulty = localStorage.getItem("Dificuldade em jogo");
  fetch(`http://localhost:8080/dificuldade?opcao=${difficulty}`)
    .then(response => response.json())
    .then(response => {
      localStorage.setItem("Questao", JSON.stringify(response));
      localStorage.removeItem("Questao1");

      const option1Text = response.alternativa1;
      const option2Text = response.alternativa2;
      const option3Text = response.alternativa3;
      const option4Text = response.alternativa4;
      const question = response.pergunta;

      document.getElementById('firstOption').innerText = option1Text;
      document.getElementById('SecondOption').innerText = option2Text;
      document.getElementById('thirdOption').innerText = option3Text;
      document.getElementById('fourthOption').innerText = option4Text;
      document.getElementById('question').innerText = question;
    })
    .catch(error => {
      throw new Error(`Error on sign up: ${error}`);
    })
}

function submitQuestion() {
  const player = JSON.parse(localStorage.getItem("Player Logado"));
  const playerId = player.idPlayer;

  let awnser = document.getElementById('selectedOption').innerText;
  const questionData = JSON.parse(localStorage.getItem("Questao"));

  if (awnser == questionData.alternativa1) awnser = 1;
  else if (awnser == questionData.alternativa2) awnser = 2;
  else if (awnser == questionData.alternativa3) awnser = 3;
  else if (awnser == questionData.alternativa4) awnser = 4;
  else throw new Error("Invalid option");

  fetch(`http://localhost:8080/resposta?id=${playerId}`, {
    method: "POST",
    body: JSON.stringify({
      idQuestao: JSON.parse(localStorage.getItem("Questao")).idQuestao,
      alternativa: awnser
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  localStorage.removeItem("Questao");
}

function submitAndGoToNextQuestion(nextQuestionPage) {
  submitQuestion();
  document.location.href = nextQuestionPage;
}