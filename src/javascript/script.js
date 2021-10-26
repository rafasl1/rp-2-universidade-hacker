/*

Criação do objeto perguntas

Leitura do json de perguntas em lista
Selecionar X (x = 5) perguntas aleatoriamente da lista e definir respostas corretas
Mostrar pergunta x na tela
Determinar se a resposta escolhida está correta e salvar essa informação
Na ultima pagina, ao clicar me finalizar,
	calcular pontuação e
	mostrar resultado na tela

questionsList = [] // TODAS AS PERGUNTAS QUE EXISTEM NO JSON
questionsUsedList = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5] // PERGUNTAS Q VAO SER USADAS
correctAnswers = [2,3,0,1,1] // VETOR DE RESPOSTAS
userAnswers = [0,2,3,2,1] // RESPOSTAS DO USUÁRIO

*/

var questionsList = new Array(); // TODAS AS PERGUNTAS QUE EXISTEM NO JSON
var questionsUserList = new Set(); // PERGUNTAS Q VAO SER USADAS
var correctAnswers = [2,3,0,1,1] // VETOR DE RESPOSTAS
var userAnswers = [0,2,3,2,1] // RESPOSTAS DO USUÁRIO
var perguntaX = 0

function startQuiz() { // fácil afonso

}

function readJson() { // difícil afonso
    readTextFile("../questoes.json", function(text){
        questionsList = JSON.parse(text); //parse JSON
        console.log(questionsList);
    });
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            console.log("Got the json");
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//vai selecionar 5 perguntas aleátorias da lista
function selectRandom() { // fácil afonso
    while(questionsUserList.size < 5){
        questionsUserList.add(questionsList[Math.floor(random(1, questionsList.length)) - 1]);
    }
}

function random(inicio, fim){
    return Math.random() * (fim - inicio) + inicio;
}

function showQuestion(question = 1) { // média afonso

}

function submitAnswer() { // médio and
    // update userAnswers
    // show nextQuestion
}

function showResult() { // médio and

}

function calculatePoints() { // fácil and

}