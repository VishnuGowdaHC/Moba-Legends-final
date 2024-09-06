
const selectedRole = localStorage.getItem('selectedRole') || 'Tank';


const filteredHeroes = heros.filter((hero) => hero.role === selectedRole);

let herosHTML = '';

filteredHeroes.forEach((hero) => {
  herosHTML += `
    <button class="${hero.name} hero-name" onclick="selectHero('${hero.name}'); window.location.href='../page-3/heros.html';">
        <span class="text">${hero.name}</span>
        <div class="box"></div>
        <img src="${hero.imgLink}" alt="${hero.name}">
    </button>
  `;
});


document.querySelector('.js-button').innerHTML = herosHTML;
function selectHero(heroName) {
  localStorage.setItem('selectedHero', heroName);
}

