var campos = [
  document.querySelector('#data'),
  document.querySelector('#valor'),
  document.querySelector('#quantidade')
];
console.log(campos);

// precisamos do tbody, pois ele receberá a tr que vamos construir
var tbody = document.querySelector('table tbody');

//adiciona uma função ao evento submit do botão enviar
document.querySelector('.form').addEventListener('submit', function(event) {
  // cancela comportamento padrão
  event.preventDefault();

  // criação de um tr no formulário
  var tr = document.createElement('tr');

  campos.forEach(function(campo) {
    // cria uma td sem informações
    var td = document.createElement('td');

    // atribui o valor do campo à td
    td.textContent = campo.value;

    // adiciona a td na tr
    tr.appendChild(td);
  });

  // nova td que armazenará o volume da negociação
  var tdVolume = document.createElement('td');

  // as posições 1 e 2 do array armazenam os campos de quantidade e valor
  tdVolume.textContent = campos[1].value * campos[2].value;
  tr.appendChild(tdVolume);
  tbody.appendChild(tr);
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus;
});