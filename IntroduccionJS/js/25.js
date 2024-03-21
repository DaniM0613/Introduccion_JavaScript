// Fetch API con Promises
// Fetch API es un recurso para obtener datos atravez de la red

const url = 'https://jsonplaceholder.typicode.com/albums'

fetch(url)
  .then((response) => {
    if(response.ok) {
      return response.json()
    }
    throw new Error('Hubo un error...')
  })
  .then(data => console.log(data))
  .catch(error => console.log(error.message))