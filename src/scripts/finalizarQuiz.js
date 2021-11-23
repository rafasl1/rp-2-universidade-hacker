function finisghQuiz() {

}

function getFeedback() {
  const result = JSON.parse(localStorage.getItem("Resultado"));

  document.getElementById("score").innerHTML = `Sua pontuação: ${result.quantidadeDeAcertos}/5`;
  document.getElementById("rankingPosition").innerHTML = `Sua posição no Ranking: ${result.posicaoNoRanking}`;

  const rightQuestions = response.questoesAcertadas;
  const wrongQuestions = response.questoesErradas;

  const awnserBold = document.createElement("b");
  awnserBold.setAttribute("class", "rightQuestionAnswer");
  awnserBold.innerHTML = "Resposta: ";

  const wrongAwnserBold = document.createElement("b");
  wrongAwnserBold.setAttribute("class", "wrongQuestionAnswer");
  wrongAwnserBold.innerHTML = "Resposta selecionada: ";

  for (const rightQuestion of rightQuestions) {
    const rightQuestionDiv = document.createElement("div");
    rightQuestionDiv.setAttribute("class", "reviewQuestion");

    const question = document.createElement("p");
    question.innerText = rightQuestion.perguntaTexto;
    rightQuestionDiv.appendChild(question);

    const awnser = document.createElement("p");
    awnser.appendChild(awnserBold);
    awnser.innerText = rightQuestion.respostaTexto;
    rightQuestionDiv.appendChild(awnser);
  }

  for (const wrongQuestion of wrongQuestions) {
    const wrongQuestionDiv = document.createElement("div");
    wrongQuestionDiv.setAttribute("class", "reviewQuestion");

    const question = document.createElement("p");
    question.innerText = wrongQuestion.perguntaTexto;
    wrongQuestionDiv.appendChild(question);

    const righAwnser = document.createElement("p");
    righAwnserBold.innerText = "Resposta correta: "
    righAwnser.appendChild(awnserBold);
    righAwnser.innerText = wrongQuestion.respostaCertaTexto;
    rightQuestionDiv.appendChild(awnser);

    const wrongAwnser = document.createElement("p");
    wrongAwnser.appendChild(wrongAwnserBold);
    wrongAwnser.innerText = wrongQuestion.alternativaRespondidaTexto;
    rightQuestionDiv.appendChild(wrongAwnser);
  }

  localStorage.removeItem("Resultado");
}

function getFinalQuestion() {
  const question5 = JSON.parse(localStorage.getItem("Questao5"));

  const option1Text = question5.alternativa1;
  const option2Text = question5.alternativa2;
  const option3Text = question5.alternativa3;
  const option4Text = question5.alternativa4;
  const question = question5.pergunta;

  document.getElementById('firstOption').innerText = option1Text;
  document.getElementById('SecondOption').innerText = option2Text;
  document.getElementById('thirdOption').innerText = option3Text;
  document.getElementById('fourthOption').innerText = option4Text;
  document.getElementById('question').innerText = question;
}