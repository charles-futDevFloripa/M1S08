//exercício 01
document.addEventListener('DOMContentLoaded', function () {
  const changeBackgroundButton = document.querySelector(
    '#change-background button'
  );
  let isRustyRed = true;
  changeBackgroundButton.addEventListener('click', function () {
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
document.addEventListener('DOMContentLoaded', function () {
  const changeTextButton = document.querySelector('#change-class button');
  let originalText = true; // o texto original para fazer o toogle ao clicar no botão
  changeTextButton.addEventListener('click', function () {
    const textElements = document.querySelectorAll('.chage-text-in-class'); // Seleciona a classe
    textElements.forEach((element) => {
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
document.addEventListener('DOMContentLoaded', function () {
  const addChildButton = document.querySelector('#add-child button');
  addChildButton.addEventListener('click', function () {
    const parentDiv = document.getElementById('add-child-text'); // Seleciona a div
    const newElement = document.createElement('p'); // Cria um parágrafo <p>
    newElement.textContent = 'Oi eu sou o filho'; // texto do novo elemento
    newElement.style.backgroundColor = '#508aa8ff';
    newElement.style.padding = 20 + 'px';
    parentDiv.appendChild(newElement); // Adiciona o novo elemento como filho
  });
});

// exercício 04
document.addEventListener('DOMContentLoaded', function () {
  const addChildButton = document.querySelector('#add-child-button');
  const removeChildButton = document.querySelector('#remove-child-button');
  const parentDiv = document.getElementById('add-child-text-to-remove'); // Div para add ou remove
  addChildButton.addEventListener('click', function () {
    const newElement = document.createElement('p');
    newElement.textContent = 'Sou filho';
    newElement.style.backgroundColor = '#508aa8ff';
    newElement.style.padding = 20 + 'px';
    newElement.classList.add('child-element'); // A idéia aqui é adicionar um classe para ajudar a remover depois
    parentDiv.appendChild(newElement);
  });
  removeChildButton.addEventListener('click', function () {
    const lastChild = parentDiv.querySelector('.child-element:last-child'); // usa a classe de auxilio para ir removendo
    if (lastChild) {
      parentDiv.removeChild(lastChild); // Remove o último filho
    } else {
      alert('Não há mais elementos para remover!');
    }
  });
});

// exercício 05

document.addEventListener('DOMContentLoaded', function () {
  const changeStyleButton = document.querySelector(
    '#change-style-class button'
  );
  changeStyleButton.addEventListener('click', function () {
    const elements = document.querySelectorAll('.chage-style-in-class');
    elements.forEach((element) => {
      element.style.backgroundColor = '#d4f4ddff'; // Muda a cor de fundo nyansa
      element.style.color = '#4b1d3fff'; // Muda a cor do texto para  violet
      element.style.fontSize = '20px'; // Aumenta o texto
      element.style.padding = '5px'; // Adiciona o padding
    });
  });
});

//exercício 06
document.addEventListener('DOMContentLoaded', function () {
  const addClassButton = document.querySelector('#add-class button');
  addClassButton.addEventListener('click', function () {
    const targetElement = document.getElementById('add-class-here');
    targetElement.classList.add('chage-text-in-class'); // Adiciona a classe ao elemento com id add-class-here o targetElement
  });
});

//exercicio 07
document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('btn-add-class');
  const removeButton = document.getElementById('btn-remove-class');
  const targetElement = document.getElementById('add-class-to-remove-here');

  addButton.addEventListener('click', function () {
    targetElement.classList.add('chage-text-in-class'); // Basicamente o que foi feito no exercicio 06
  });

  removeButton.addEventListener('click', function () {
    targetElement.classList.remove('chage-text-in-class'); // Remove a classe do elemento
  });
});

//exercício 08
document.addEventListener('DOMContentLoaded', function () {
  const addAttributeButton = document.querySelector('#add-attribute button');
  addAttributeButton.addEventListener('click', function () {
    const targetElement = document.querySelector('.attribute-added-here');
    targetElement.setAttribute(
      'title',
      'Atributo title adicionado.Agora você vê uma tooltip ao passar o mouse!'
    );
    targetElement.textContent = 'ATRIBUTO TITLE ADICIONADO';
  });
});

//exercício 09
document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('btn-add-attribute');
  const removeButton = document.getElementById('btn-remove-attribute');
  const targetElement = document.querySelector(
    '.attribute-added-to-remove-here'
  );
  addButton.addEventListener('click', function () {
    targetElement.setAttribute(
      'title',
      'Agora você vê uma tooltip ao passar o mouse!'
    );
    targetElement.textContent = 'ATRIBUTO TITLE ADICIONADO'; // Muda o texto ao adicionar o atributo
  });
  removeButton.addEventListener('click', function () {
    targetElement.removeAttribute('title');
    targetElement.textContent = 'ATRIBUTO TITLE REMOVIDO'; // Muda o texto ao remover o atributo
  });
});

//exercício 10
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('new-task-form');
  const input = document.getElementById('new-task');
  const taskList = document.getElementById('task-list');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // trata se existe tarefa e previne o envio do form
    const taskText = input.value.trim();
    if (taskText === '') {
      alert('Por favor, digite a tarefa.');
      return;
    }
    // Cria a nova tarefa como um item de lista
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Adiciona botão de concluído    const doneButton = document.createElement('button');
    const doneButton = document.createElement('button');
    doneButton.innerHTML = '<i class="fa-solid fa-check-double"></i>';
    doneButton.onclick = function () {
      taskItem.classList.toggle('done'); // Marca a tarefa como concluída e vice-versa
    };
    // Adiciona botão de remover
    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    removeButton.onclick = function () {
      taskList.removeChild(taskItem); // Remove a tarefa
    };
    // Adiciona os botões ao item da lista
    taskItem.appendChild(doneButton);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem); // Adiciona a tarefa
    input.value = ''; // limpa o input do form
  });
});
