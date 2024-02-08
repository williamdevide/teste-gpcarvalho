function loginUser() {
    
    let loginEmail = document.querySelector('#loginEmail')
    let loginPassword = document.querySelector('#loginPassword')
    let users = []
    
    let userValid = {
        name: '',
        email: '',
        cpf: '',
        phone: '',
        password: ''
    }
    
    users = JSON.parse(localStorage.getItem('users'))
    
    console.log(users)

    users.forEach((item) => {
        if (loginEmail.value == item.email && loginPassword.value == item.password) {

            userValid = {
                name: item.name,
                email: item.email,
                cpf: item.cpf,
                phone: item.phone,
                password: item.password
            };

        }
    })
     
    if(loginEmail.value == userValid.email && loginPassword.value == userValid.password){
      window.location.href = '../index.html'
      
      let mathRandom = Math.random().toString(16).substr(2)
      let token = mathRandom + mathRandom
      
      localStorage.setItem('token', token)
      localStorage.setItem('userLogin', JSON.stringify(userValid))
    } else {
      loginEmail.focus()
    }



















    
    //     // Obtendo os valores dos campos de e-mail e senha
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     // Verificando se o e-mail e a senha foram preenchidos
//     if (email.trim() === '' || password.trim() === '') {
//         document.getElementById('loginMessage').textContent = 'Por favor, preencha todos os campos.';
//         return;
//     }

//     // Aqui você pode adicionar a lógica para autenticar o usuário
//     // Por enquanto, apenas um exemplo simples de log
//     if (email === 'usuario@example.com' && password === 'senha123') {
//         document.getElementById('loginMessage').textContent = 'Usuário logado com sucesso.';
//         setTimeout(function () {
//             window.location.href = '../index.html'; // Redireciona para a página inicial
//         }, 2000); // 2 segundos de espera antes de redirecionar
//     } else {
//         document.getElementById('loginMessage').textContent = 'E-mail ou senha incorretos. Por favor, tente novamente.';
//         // Limpar os campos de e-mail e senha após uma tentativa de login malsucedida
//         document.getElementById('loginEmail').value = '';
//         document.getElementById('loginPassword').value = '';
//     }
}


// Método para lidar com o cadastro do usuário
function registerUser() {
    const valida = ValidateForm();
    // Verifica se o formulário é válido
    if (!valida) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    } else {

        let users = JSON.parse(localStorage.getItem('users') || '[]')

        users.push({
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            phone: document.querySelector('#phone').value,
            cpf: document.querySelector('#cpf').value,
            password: document.querySelector('#password').value
        })

        localStorage.setItem('users', JSON.stringify(users))

        console.log('Novo usuário cadastrado:', users);
        document.querySelector('.registerForm').submit();
        alert('Cadastro realizado com sucesso.');

        window.location.href = '../views/login.html';
    }

}