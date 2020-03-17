export async function getData(endpoint, textSearch, setData, setIsBeenUpdated) {
  setIsBeenUpdated(true);
  await fetch(
    `http://newsapi.org/v2/${endpoint}?q=${textSearch}&apiKey=${localStorage.feedKey}`,
  )
    .then((response) => response.json())
    .then((data) => setData(data));
  setIsBeenUpdated(false);
}
