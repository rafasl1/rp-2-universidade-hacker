function startQuiz() {
  let dificuldade = document.getElementById('selectedOption').innerText

  switch (dificuldade) {
    case 'Carinha do TI':
      dificuldade = "carinha-do-ti"
      break;
    case 'Tio da Informática':
      dificuldade = "tio-da-informatica"
      break;
    case 'Primo que conserta o Wi-Fi':
      dificuldade = "primo-que-conserta-o-wifi"
      break;
    case 'Hackeia a NASA':
      dificuldade = "hackeia-a-nasa"
      break;
    default:
      throw new Error("Invalid option");
  }

  fetch(`http://localhost:8080/dificuldade?opcao=${dificuldade}`, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => {
      localStorage.setItem("Questao1", JSON.stringify(response));
      localStorage.setItem("Dificuldade em jogo", dificuldade);
      document.location.href = "pergunta.html";
    })
    .catch(error => {
      throw new Error(`Erro selecionando dificuldade: ${error}`);
    })
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
  startQuiz();
}