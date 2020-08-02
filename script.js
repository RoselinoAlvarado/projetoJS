let contenido = document.querySelector("#contenido");
fetch("https://api.github.com/users/roselinoalvarado/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.length);
    var cont = 0;
    for (cont = 0; cont < data.length; cont++) {
      contenido.innerHTML += `
			 <div class="card">
				<a href="${data[cont].html_url}" target="blank_"> ${data[cont].name} </a>
			 </div>
			 `;
    }
  });


  
  
/*   
  var contenido = document.querySelector('#contenido')
  function trazer() {
      fetch('https://api.github.com/users/roselinoalvarado/repos')
      .then(res => res.json())
      .then(data => {
          console.log(data.length);
          var cont = 0;
          for (cont = 0; cont < data.length; cont++) {
          contenido.innerHTML = `
          <div class="card">
          <a href="${data[cont].html_url}" target="blank_"> ${data[cont].name} </a>
         </div>
         `;
      }
  }  */

/* document.querySelector('button').addEventListener('onclick', buscaDados)

function buscaDados(e) {
    e.preventDefault()
    
    let contenido = document.querySelector('#contenido')
    let url = `https://api.github.com/users/roselinoalvarado/repos`
    
    fetch(url)
    .then(resp => {
        if ( ! resp.ok ) {
            throw new Error(`status: ${resp.status}`)
        }
        return resp.json()
    })
    .then(data => {
        document.querySelector('#login').textContent = 0.login
        document.querySelector('#user').textContent = 0.id
    })
    .catch(e => console.log(e)) */

/* fetch('https://api.github.com/users/roselinoalvarado/repos').then(resp => resp.json()).then(data => console.log(data)) */