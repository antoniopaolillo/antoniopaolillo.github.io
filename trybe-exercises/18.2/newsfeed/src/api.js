export function getData(endpoint, textSearch) {
  return fetch(
    `http://newsapi.org/v2/${endpoint}?q=${textSearch}&apiKey=4524bb8ad3e74c75a5aa1d9b43ad07a4`,
  )
  .then((response) => (
    response
    .json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
    .catch(error => console.log(error))
}
