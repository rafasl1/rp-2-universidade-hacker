function responder() {
  const player = JSON.parse(localStorage.getItem("Player Logado"));
  const playerId = player.idPlayer;

  let awnser = document.getElementById('selectedOption').innerText;
  const questionData = JSON.parse(localStorage.getItem("Questao1"));

  if (awnser == questionData.alternativa1) awnser = 1;
  else if (awnser == questionData.alternativa2) awnser = 2;
  else if (awnser == questionData.alternativa3) awnser = 3;
  else if (awnser == questionData.alternativa4) awnser = 4;
  else throw new Error("Invalid option");

  fetch(`http://localhost:8080/resposta?id=${playerId}`, {
    method: "POST",
    body: JSON.stringify({
      idQuestao: JSON.parse(localStorage.getItem("Questao1")).idQuestao,
      alternativa: awnser
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  localStorage.removeItem("Questao1");
  document.location.href = "pergunta2.html";
}

function selectOption(option) {
  switch (option) {
    case 'firstOption':
      document.getElementById(option).style.border = "8px solid #0FBFFF";
      document.getElementById('SecondOption').style.border = "";
      document.getElementById('thirdOption').style.border = "";
      document.getElementById('fourthOption').style.border = "";
      break;
    case 'SecondOption':
      document.getElementById(option).style.border = "8px solid #FF960F";
      document.getElementById('firstOption').style.border = "";
      document.getElementById('thirdOption').style.border = "";
      document.getElementById('fourthOption').style.border = "";
      break;
    case 'thirdOption':
      document.getElementById(option).style.border = "8px solid #1E91E8";
      document.getElementById('firstOption').style.border = "";
      document.getElementById('SecondOption').style.border = "";
      document.getElementById('fourthOption').style.border = "";
      break;
    case 'fourthOption':
      document.getElementById(option).style.border = "8px solid #3915B0";
      document.getElementById('firstOption').style.border = "";
      document.getElementById('SecondOption').style.border = "";
      document.getElementById('thirdOption').style.border = "";
      break;
    default:
      throw new Error("Invalid option");
  }
  document.getElementById(option).setAttribute("id", "selectedOption");
}

function getFirstQuestion() {
  const question1 = JSON.parse(localStorage.getItem("Questao1"));

  const option1Text = question1.alternativa1;
  const option2Text = question1.alternativa2;
  const option3Text = question1.alternativa3;
  const option4Text = question1.alternativa4;
  const question = question1.pergunta;

  document.getElementById('firstOption').innerText = option1Text;
  document.getElementById('SecondOption').innerText = option2Text;
  document.getElementById('thirdOption').innerText = option3Text;
  document.getElementById('fourthOption').innerText = option4Text;
  document.getElementById('question').innerText = question;
}