// Write an example of fetching data using fetch API.
const url = "https://api.github.com/users/mariolazzari/repos";

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(ex => console.error(ex));
