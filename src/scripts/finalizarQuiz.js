function finishQuiz() {
  const player = JSON.parse(localStorage.getItem("Player Logado"));
  const playerId = player.idPlayer;

  let awnser = document.getElementById('selectedOption').innerText;
  const questionData = JSON.parse(localStorage.getItem("Questao"));

  if (awnser == questionData.alternativa1) awnser = 1;
  else if (awnser == questionData.alternativa2) awnser = 2;
  else if (awnser == questionData.alternativa3) awnser = 3;
  else if (awnser == questionData.alternativa4) awnser = 4;
  else throw new Error("Invalid option");

  fetch(`http://localhost:8080/terminar?id=${playerId}`, {
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
    .then(response => response.json())
    .then(response => {
      localStorage.setItem("Resultado", JSON.stringify(response));
      localStorage.removeItem("Questao");
      document.location.href = "conclusao.html";
    })
    .catch(error => {
      throw new Error(`Error on sign up: ${error}`);
    })

}

function getFeedback() {
  const result = JSON.parse(localStorage.getItem("Resultado"));

  document.getElementById("score").innerHTML = `Sua pontuação: ${result.quantidadeDeAcertos}/5`;
  document.getElementById("rankingPosition").innerHTML = `Sua posição no Ranking: ${result.posicaoNoRanking}`;

  const rightQuestions = result.questoesAcertadas;
  const wrongQuestions = result.questoesErradas;

  const awnserBold = document.createElement("b");
  awnserBold.setAttribute("class", "rightQuestionAnswer");
  awnserBold.innerHTML = "Resposta: ";

  const wrongAwnserBold = document.createElement("b");
  wrongAwnserBold.setAttribute("class", "wrongQuestionAnswer");
  wrongAwnserBold.innerHTML = "Resposta selecionada: ";

  let hits = 1;
  let mistakes = 1;

  for (const rightQuestion of rightQuestions) {
    const rightQuestionDiv = document.createElement("div");
    rightQuestionDiv.setAttribute("class", "reviewQuestion");

    const rightQuestionTitle = document.createElement("h4");
    rightQuestionTitle.innerHTML = "Acerto " + hits + ": ";
    rightQuestionDiv.appendChild(rightQuestionTitle);

    const question = document.createElement("p");
    question.innerText = "Pergunta: " + rightQuestion.perguntaTexto;
    rightQuestionDiv.appendChild(question);

    const awnser = document.createElement("p");
    awnser.innerText = "Resposta: " + rightQuestion.respostaTexto;
    rightQuestionDiv.appendChild(awnser);

    document.getElementById("acertos").appendChild(rightQuestionDiv);
    hits++;
  }

  for (const wrongQuestion of wrongQuestions) {
    const wrongQuestionDiv = document.createElement("div");
    wrongQuestionDiv.setAttribute("class", "reviewQuestion");

    const wrongQuestionTitle = document.createElement("h4");
    wrongQuestionTitle.innerHTML = "Erro " + mistakes + ": ";
    wrongQuestionDiv.appendChild(wrongQuestionTitle);

    const question = document.createElement("p");
    question.innerText = "Pergunta: " + wrongQuestion.perguntaTexto;
    wrongQuestionDiv.appendChild(question);

    const righAwnser = document.createElement("p");
    righAwnser.innerText = "Resposta correta: " + wrongQuestion.respostaCertaTexto;
    wrongQuestionDiv.appendChild(righAwnser);

    const wrongAwnser = document.createElement("p");
    wrongAwnser.innerText = "Resposta selecionada: " + wrongQuestion.alternativaRespondidaTexto;
    wrongQuestionDiv.appendChild(wrongAwnser);

    document.getElementById("erros").appendChild(wrongQuestionDiv);
    mistakes++;
  }

  localStorage.removeItem("Dificuldade em jogo")
}