// input container
function toggleDropdown() {
  const dropdown = document.getElementById("dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
  if (!event.target.matches('.custom-input')) {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    }
  }
}

function adjustTableContainerHeight() {
  dropdown.style.maxHeight = '100px';
  dropdown.style.overflowY = 'auto';
}

adjustTableContainerHeight();
window.addEventListener('resize', adjustTableContainerHeight);


// Adcionar Div nas Expectativas

// Seleciona todas as divs de expectativas
const expectativas = document.querySelectorAll('#Expectativas');

// Função para adicionar o "Lorem Ipsum" abaixo da div clicada
expectativas.forEach((expectativa) => {
  expectativa.addEventListener('click', function () {
    // Verifica se já existe um conteúdo adicional
    let existingContent = this.nextElementSibling;

    if (existingContent && existingContent.classList.contains('hiddenContent')) {
      // Se já existe e está visível, esconde o conteúdo
      existingContent.style.display = existingContent.style.display === 'none' ? 'block' : 'none';
    } else {
      // Cria a nova div com o "Lorem Ipsum"
      const newDiv = document.createElement('div');
      newDiv.classList.add('hiddenContent');
      newDiv.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>';

      // Adiciona a nova div logo após a div clicada
      this.parentNode.insertBefore(newDiv, this.nextSibling);
    }
  });
});



//Lógica do menu Mobile

document.getElementById('iconeMobile').addEventListener('click', function() {
  const menuMobile = document.getElementById('boxIconMobile');
  const header = document.getElementById('cabecalhoMobile');
  const dataMobile = document.getElementById('dataMobile');
  const iconeMobile = document.getElementById('iconeMobile');
  
  // Alterna a visibilidade do menu
  if (menuMobile.style.display === 'none' || menuMobile.style.display === '') {
      menuMobile.style.display = 'block';
      header.style.backgroundColor = '#DA1E05';
      dataMobile.textContent = 'data';
      dataMobile.style.color = 'white';
      iconeMobile.style.color = 'white';
  } else {
      menuMobile.style.display = 'none';
      header.style.backgroundColor = 'white';
      dataMobile.textContent = 'data';
      dataMobile.style.color = 'black';
      iconeMobile.style.color = '#DA1E05';
  } 
});
