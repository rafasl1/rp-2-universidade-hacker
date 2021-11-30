function cadastrarPlayer() {
  fetch("http://localhost:8080/cadastro", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById('real-name').value,
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      localStorage.setItem("Player Logado", JSON.stringify(response));
      document.location.href = "index.html";
    })
    .catch(error => {
      throw new Error(`Error on sign up: ${error}`);
    })
}