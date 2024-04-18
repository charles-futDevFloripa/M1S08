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