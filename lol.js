document.getElementById('getJoke').addEventListener('click', getJoke);

function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = data.setup + ' ' + data.punchline;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}