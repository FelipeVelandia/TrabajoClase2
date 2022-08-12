const lista = document.getElementById('lista');
let btn = document.getElementById('btn');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    let input = document.getElementById('input');
    let texto = document.getElementById('input').value;
    texto = texto.toLowerCase();
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(texto));
    lista.appendChild(item);
    input.value = '';
})

function del () {
    lista.innerHTML = "";
}

document.getElementById('btn2').onclick = del;