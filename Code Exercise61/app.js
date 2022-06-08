const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const product = document.querySelector('#product');
    const qty = document.querySelector('#qty');
    const ul = document.querySelector('#list');
    const newLi = document.createElement('li');
    newLi.innerText = `${qty.value} ${product.value}`;
    ul.appendChild(newLi);
    product.value = '';
    qty.value = '';
})