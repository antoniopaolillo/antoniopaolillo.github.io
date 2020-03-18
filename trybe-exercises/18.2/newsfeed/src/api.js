export function getData(endpoint, textSearch) {
  return fetch(
    `http://newsapi.org/v2/${endpoint}?q=${textSearch}&apiKey=${localStorage.feedKey}`,
  )
  .then((response) => (
    response
    .json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
    .catch(error => console.log(error));
}
