if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "../../views/login.html";
  }
  
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  
  const userStatus = document.querySelector("#userStatus");
  userStatus.innerHTML = `Usuário: ${userLogin.name}<br>E-mail: ${userLogin.email}<br>Telefone: ${userLogin.phone}<br>CPF: ${userLogin.cpf}`;
  
  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
  }