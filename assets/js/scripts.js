//exercício 01
document.addEventListener('DOMContentLoaded', function() {
  const changeBackgroundButton = document.querySelector('#change-background button');
  let isRustyRed = true; 
  changeBackgroundButton.addEventListener('click', function() {
      const task = document.getElementById('change-background');
      if (isRustyRed) {
          task.style.backgroundColor = 'rgba(80, 138, 168, 0.6)';
      } else {
          task.style.backgroundColor = 'rgba(214, 34, 70, 0.6)';
              }
      isRustyRed = !isRustyRed; // Alterna o estado
  });
});


//exercício 02
document.addEventListener('DOMContentLoaded', function() {
    const changeTextButton = document.querySelector('#change-class button');
        let originalText = true; // o texto original para fazer o toogle ao clicar no botão
    changeTextButton.addEventListener('click', function() {
        const textElements = document.querySelectorAll('.chage-text-in-class'); // Seleciona a classe
        textElements.forEach(element => {
            if (originalText) {
                element.textContent = 'Texto Alterado'; // Muda para o novo texto
            } else {
                element.textContent = 'TEXTO'; //volta o texto original
            }
        });
        originalText = !originalText;
    });
});
