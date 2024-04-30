function handleSearchSubmit(event) {
  event.preventDefault();
  let searchinput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector;
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
