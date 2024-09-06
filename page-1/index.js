
function selectedRole(role) {
  localStorage.setItem('selectedRole', role)
  console.log(role)
};
console.log(localStorage.getItem('selectedHero'))




function cap(input) {
  let trimmedInput = input.trim();
  let cap = trimmedInput.replace(/ /g, "_");
  if (cap.length > 0) {
      cap = cap.charAt(0).toUpperCase() + cap.slice(1);
  }

  return cap;
}

function saveSearch() {
  const search = document.querySelector('.js-search-bar');
  let searchedValue = search.value;

  let searchedHero = cap(searchedValue);

  localStorage.setItem('searchedHero', searchedHero);
  console.log(searchedHero);
}


