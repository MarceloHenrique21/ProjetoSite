document.querySelector('.formulario-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os dados de login inseridos
    const usuarioLogin = document.querySelector('.usuario-login').value;
    const senhaLogin = document.querySelector('.senha-login').value;

    // Obter os dados salvos no localStorage
    const dadosSalvos = JSON.parse(localStorage.getItem('dadosFormulario'));

    // Verificar se os dados de login correspondem aos dados salvos
    if (dadosSalvos && usuarioLogin === dadosSalvos.usuario && senhaLogin === dadosSalvos.senha) {
      alert('Login bem-sucedido!'); // Ou redirecione para a página desejada
    } else {
      alert('Usuário ou senha inválidos!');
    }

    // Limpar os campos do formulário de login
    document.querySelector('.formulario-login').reset();
  });