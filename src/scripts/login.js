function fazerLogin() {
  fetch("http://localhost:8080/login", {
    method: "POST",
    body: JSON.stringify({
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
      alert("Erro ao fazer login, tente novamente");
      throw new Error(`Error on sign in: ${error}`);
    })
}