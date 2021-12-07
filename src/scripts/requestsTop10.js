function getTop10() {
  fetch('http://localhost:8080/top10')
    .then(response => response.json())
    .then(response => {
      document.getElementsByClassName("rankingTitle")[0].innerHTML = "Ranking (Top " + response.length + ")";

      for (let i = 0; i < response.length; i++) {
        const divPlayerInRanking = document.createElement("div");
        divPlayerInRanking.setAttribute("class", "playerInRanking");

        const icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-user-circle");

        const playerNameDiv = document.createElement("div");
        playerNameDiv.textContent = response[i];

        divPlayerInRanking.appendChild(icon);
        divPlayerInRanking.appendChild(playerNameDiv);

        document.getElementById('ranking').appendChild(divPlayerInRanking);
      }
    })
    .catch(error => {
      throw new Error(`Error requesting data: ${error}`);
    })
}

document.onload(getTop10());