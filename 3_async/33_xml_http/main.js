// Write an example of fetching data with XMLHttpRequest.
const url = "https://api.github.com/users/mariolazzari/repos";
const xhr = new XMLHttpRequest();

// Initialize a GET request
xhr.open("GET", url);
// Send the request
xhr.send();
// Handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Successful response
    const data = JSON.parse(xhr.responseText);
    console.log("Repositories:", data);
  } else {
    // Handle errors
    console.error("Error fetching data:", xhr.status, xhr.statusText);
  }
};
// handle network errors
xhr.onerror = function () {
  console.error("Network Error");
};
