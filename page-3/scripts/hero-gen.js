
const searchedHero = localStorage.getItem('searchedHero');
const selectedHero = searchedHero || localStorage.getItem('selectedHero');

const savedHero = herosData.find(hero => hero.name === selectedHero);

if (savedHero) {
  const heroInfoHTML = `
      <div id="${savedHero.name}-top" class="hero-top">
          <div id="${savedHero.name}-img" class="hero-img">
            <img src="${savedHero.heroImg}" alt="${savedHero.name}">
          </div>
          <div id="${savedHero.name}-info" class="hero-info">
            <span id="${savedHero.name}-title" class="hero-title">
              ${savedHero.name} 
              <span class="Tank">
                [${savedHero.role}]
              </span>
            </span>
            <hr class="top-line">
            <p class="para">
            ${savedHero.desc}
            </p>
          </div>
        </div>
        
        <div id="${savedHero.name}-bottom" class="hero-bottom">
          <p class="ability">Abilities</p>
          
          <div class="blocks">
            <div class="skill-block">
              <span class="text-passive">Passive</span>
              <div class="passive-info-block">
                  <div class="passive-img"><img src="${savedHero.passive.passiveImg}">
                  </div>
                   <div class="passive-info-container">
                    <p class="passive-name">
                      ${savedHero.passive.passiveName} 
                      <span class="buff">${savedHero.passive.buff}</span>
                      <span class="AOE">${savedHero.passive.aoe}</span>
                      <span class="CC">${savedHero.passive.cc}</span>
                      <span class="Mobility">${savedHero.passive.mobility}</span>
                    </p>
                    <p class="text-passive-info">${savedHero.passive.passiveInfo}</div> 
              </div>
              
          <div class="skill-block">
            <span class="text-passive">Skill 1</span>
            <div class="passive-info-block">
                <div class="passive-img"><img src="${savedHero.skillOne.skiilImg}">
                </div>
                 <div class="passive-info-container">
                  <p class="passive-name">
                    ${savedHero.skillOne.skillName} 
                    <span class="buff">${savedHero.skillOne.buff}</span>
                    <span class="AOE">${savedHero.skillOne.aoe}</span>
                    <span class="CC">${savedHero.skillOne.cc}</span>
                    <span class="Mobility">${savedHero.skillOne.mobility}</span>
                  </p>
                  <p class="text-passive-info">${savedHero.skillOne.skillInfo}</div> 
            </div>
            <div class="skill-block">
              <span class="text-passive">Skill 2</span>
              <div class="passive-info-block">
                  <div class="passive-img"><img src="${savedHero.skillTwo.skiilImg}">
                  </div>
                   <div class="passive-info-container">
                    <p class="passive-name">
                    ${savedHero.skillTwo.skillName}
                      <span class="buff">${savedHero.skillTwo.buff}</span>
                      <span class="AOE">${savedHero.skillTwo.aoe}</span>
                      <span class="CC">${savedHero.skillTwo.cc}</span>
                      <span class="Mobility">${savedHero.skillTwo.mobility}</span>
                    </p>
                    <p class="text-passive-info">${savedHero.skillTwo.skillInfo}</div> 
              </div>
              <div class="skill-block">
                <span class="text-passive">Ultimate</span>
                <div class="passive-info-block">
                    <div class="passive-img"><img src="${savedHero.ultimate.ultimateImg}">
                    </div>
                     <div class="passive-info-container">
                      <p class="passive-name">
                        ${savedHero.ultimate.ultimateName} 
                        <span class="buff">${savedHero.ultimate.buff}</span>
                        <span class="AOE">${savedHero.ultimate.aoe}</span>
                        <span class="CC">${savedHero.ultimate.cc}</span>
                        <span class="Mobility">${savedHero.ultimate.mobility}</span>
                      </p>
                      <p class="text-passive-info">${savedHero.ultimate.ultimateInfo}</div> 
                </div>
                <p class="counters-text">Counters</p>
                <hr class="bot-line">
                <p class="weak-against-text">${savedHero.name} is Weak Against</p>
                <p class="wdesc">These heroes are strong against ${savedHero.name} at most phases of the game.</p>
                <div class="counter-container">
                  <div class="weak-counters js-wcounter">
                    
                  </div>
                <p class="strong-against-text">${savedHero.name} is Strong Against</p>
                <p class="sdesc">These heroes are weak against ${savedHero.name} at most phases of the game.</p>
                <div class="counter-container">
                  <div class="strong-counters js-scounter">
                    
                  </div>
                  <hr class="last-line">
                </div>
            </div>
  `
  document.querySelector('.js-info-container').innerHTML = heroInfoHTML;
  localStorage.clear();
}


let wcountersHTML = '';
savedHero.wcounters.forEach((counterHero) => {
  wcountersHTML += `
    <div class="wimg">
      <span class="wtext">${counterHero.counterName}</span>
      <div class="shade"></div>
      <img src="${counterHero.imgLink}">          
    </div>
  `
  document.querySelector('.js-wcounter').innerHTML = wcountersHTML;
});



let scountersHTML = '';
savedHero.scounters.forEach((counterHero) => {
  scountersHTML += `
    <div class="wimg">
      <span class="wtext">${counterHero.counterName}</span>
      <div class="shade"></div>
      <img src="${counterHero.imgLink}">          
    </div>
  `
  document.querySelector('.js-scounter').innerHTML = scountersHTML;
});


