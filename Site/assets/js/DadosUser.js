
  // Exibir os dados salvos na página
  const dadosSalvos = JSON.parse(localStorage.getItem('dadosFormulario'));
  document.querySelector('.nome-salvo').textContent = dadosSalvos.nome;
  document.querySelector('.sobrenome-salvo').textContent = dadosSalvos.sobrenome;
  document.querySelector('.cpf-salvo').textContent = dadosSalvos.cpf;
  document.querySelector('.usuario-salvo').textContent = dadosSalvos.usuario;
  document.querySelector('.senha-salva').textContent = dadosSalvos.senha;

