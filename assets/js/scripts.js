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

// exercício 03
document.addEventListener('DOMContentLoaded', function() {
    const addChildButton = document.querySelector('#add-child button');
    addChildButton.addEventListener('click', function() {
        const parentDiv = document.getElementById('add-child-text'); // Seleciona a div 
                const newElement = document.createElement('p'); // Cria um parágrafo <p>
        newElement.textContent = 'Oi eu sou o filho'; // texto do novo elemento
        newElement.style.backgroundColor = '#508aa8ff'; 
        newElement.style.padding = 20 + 'px'; 
        parentDiv.appendChild(newElement); // Adiciona o novo elemento como filho 
    });
});

// exercício 04
document.addEventListener('DOMContentLoaded', function() {
    const addChildButton = document.querySelector('#add-child-button');
    const removeChildButton = document.querySelector('#remove-child-button');
    const parentDiv = document.getElementById('add-child-text-to-remove'); // Div para add ou remove
    addChildButton.addEventListener('click', function() {
        const newElement = document.createElement('p');
        newElement.textContent = 'Sou filho';
        newElement.style.backgroundColor = '#508aa8ff'; 
        newElement.style.padding = 20 + 'px'; 
        newElement.classList.add('child-element'); // A idéia aqui é adicionar um classe para ajudar a remover depois
        parentDiv.appendChild(newElement);
    });
    removeChildButton.addEventListener('click', function() {
        const lastChild = parentDiv.querySelector('.child-element:last-child'); // usa a classe de auxilio para ir removendo
        if (lastChild) {
            parentDiv.removeChild(lastChild); // Remove o último filho
        } else {
            alert('Não há mais elementos para remover!'); 
        }
    });
});


