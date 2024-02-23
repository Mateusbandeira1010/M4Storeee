document.addEventListener('DOMContentLoaded', function(){
    fetch('clients.json')
        .then(response => response.json())
        .then(data => {
            const respondClients = document.getElementById('info-clients');
            data.forEach(client => {
                const myClients = document.createElement('div');
                myClients.classList.add('client'); 

                const imageElement = document.createElement('img');
                imageElement.src = client.image; 
                imageElement.alt = client.description; 

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = client.description; 

                const feedbackElement = document.createElement('span');
                feedbackElement.textContent = client.feedback;

                myClients.appendChild(imageElement);
                myClients.appendChild(descriptionElement);
                myClients.appendChild(feedbackElement);
                respondClients.appendChild(myClients);
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
});


