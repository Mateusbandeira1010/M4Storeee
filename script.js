
function fetchData(url, filter) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar JSON:', response.status);
            }
            return response.json();
        })
        .then(data => {
            const productSections = document.getElementById('product-sections');
            productSections.innerHTML = '';

            data.forEach(product => {
                if (!filter || product.name.toLowerCase().includes(filter.toLowerCase())) {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');

                    const imageElement = document.createElement('img');
                    imageElement.src = product.image;
                    imageElement.alt = product.name;
                    productDiv.appendChild(imageElement);

                    const nameElement = document.createElement('h2');
                    nameElement.textContent = product.name;
                    productDiv.appendChild(nameElement);

                    const descriptionElement = document.createElement('p');
                    descriptionElement.textContent = product.description;
                    productDiv.appendChild(descriptionElement);

                    productSections.appendChild(productDiv);
                }
            });
        })
        .catch(error => console.error('Erro ao carregar JSON:', error));
}

//------------hamburguer mobile
document.querySelector('.hamburger-icon').addEventListener('click', function() {
    document.querySelector('.mobile-nav').classList.toggle('active');
});

// ------------filtros de produtos.json
document.addEventListener('DOMContentLoaded', function(){
    const filterOptions = document.getElementById('filter-options');
    filterOptions.addEventListener('click', function(event){
        if (event.target.tagName === 'A') {
            event.preventDefault(); 
            const filterRow = event.target.dataset.filter;
            fetchData('products.json', filterRow); 
        }
    });
});

document.addEventListener('DOMContentLoaded', function(){
        fetchData('products.json');
});

// ------------filtros de pesquisa
document.getElementById('toggle-filter').addEventListener('click', function(){
   var filterOptions = document.getElementById('filter-options');
   if(filterOptions.style.display === 'none') {
        filterOptions.style.display = 'block';
   } else {
        filterOptions.style.display = 'none';
   } 
});


