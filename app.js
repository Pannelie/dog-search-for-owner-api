let oGameData = {};
let isMatch = false;

const mainBtn = document.querySelector("#mainBtn");
const dogBtn = document.querySelector("#dogBtn");
const ownerBtn = document.querySelector("#ownerBtn");

const ownerContainerRef = document.querySelector(`#ownerContainer`);
const dogContainerRef = document.querySelector(`#dogContainer`);

function resetGame() {
  oGameData = {
    selectedOwnerIndex: null,
    selectedDogIndex: null,
    ownerColor: ``,
    dogColor: ``,
    currentOwner: {},
    currentDog: {},
  };
  isMatch = false;

  if (mainBtn) mainBtn.classList.add(`d-none`);
  if (ownerBtn) ownerBtn.classList.remove(`d-none`);
  if (dogBtn) dogBtn.classList.remove(`d-none`);

  ownerContainerRef.classList.remove(`d-none`);
  dogContainerRef.classList.remove(`d-none`);

  document.querySelector(`#ownerImg`).classList.add(`d-none`);
  document.querySelector(`#dogImg`).classList.add(`d-none`);

  document.querySelector(`#ownerTitle`).classList.add(`d-none`);
  document.querySelector(`#dogName`).classList.add(`d-none`);

  document.querySelector(`#ownerText`).classList.add(`d-none`);
  document.querySelector(`#dogText`).classList.add(`d-none`);

  ownerContainerRef.style.backgroundColor = "";
  dogContainerRef.style.backgroundColor = "";

  document.querySelector(`#perfectMatch`).classList.remove(`show`);
}

document.addEventListener("DOMContentLoaded", () => {
  //   const mainBtn = document.querySelector("#mainBtn");
  //   const dogBtn = document.querySelector("#dogBtn");
  //   const ownerBtn = document.querySelector("#ownerBtn");

  function randomBg() {
    let colors = [
      `#D32F2F`, // Mörk röd för bra kontrast
      `#1976D2`, // Mörk blå för bra kontrast
      `#388E3C`, // Mörk grön för bra kontrast
      `#FBC02D`, // Mörkare gul för bra kontrast
      `#7B1FA2`, // Mörk lila för bra kontrast
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const quotes = [
    "En ensam musiker söker en trogen vän.",
    "En hemmakär person vill ha en hund att mysa med.",
    "En sportig äventyrare letar efter en följeslagare.",
    "En konstnär söker en hund att inspireras av.",
    "En programmerare behöver en kodkompis.",
  ];

  const dogPersonalities = [
    "Hund med musikalisk talang, kan spela harpa",
    "Kär liten vän som gärna kryper ner i soffan och söker sällskap",
    "Orädd hund som älskar bungyjump",
    "Ståtlig hund som kan ligga still i timmar",
    "Denna vovve söker efter vad du än vill mot godis-byte",
  ];

  const ownerContainerRef = document.querySelector(`#ownerContainer`);
  const dogContainerRef = document.querySelector(`#dogContainer`);

  const personNames = [
    "Alex",
    "Kim",
    "Max",
    "Billie",
    "Charlie",
    "Robin",
    "Elliot",
    "Lo",
    "Sam",
    "Freddie",
  ];

  const dogNames = [
    "Bosse",
    "Luna",
    "Milou",
    "Ludde",
    "Rocky",
    "Bella",
    "Jack",
    "Molly",
    "Loppan",
    "Jesper",
  ];

  async function fetchUnsplashImage(query) {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&client_id=l_l8WvWr1fQvt_EljVnWpSJM-Uu7SFzld2lplxFSP6E`
    );
    const data = await response.json();
    return data.urls.regular;
  }

  if (mainBtn) {
    mainBtn.addEventListener(`click`, () => {
      console.log(`main clicked`);

      resetGame();
    });
  }

  if (dogBtn) {
    dogBtn.addEventListener(`click`, async () => {
      const dogImageUrl = await fetchUnsplashImage(`dogs`);
      document.querySelector(`#dogImg`).src = dogImageUrl;
      document.querySelector(`#dogImg`).classList.remove(`d-none`);
      document.querySelector(`#dogName`).classList.remove(`d-none`);
      document.querySelector(`#dogText`).classList.remove(`d-none`);

      oGameData.selectedDogIndex = Math.floor(
        Math.random() * dogPersonalities.length
      );

      oGameData.currentDog = {
        name: dogNames[Math.floor(Math.random() * dogNames.length)],
        text: dogPersonalities[oGameData.selectedDogIndex],
        Image: dogImageUrl,
      };
      document.querySelector(`#dogName`).textContent =
        oGameData.currentDog.name;
      document.querySelector(`#dogText`).textContent =
        oGameData.currentDog.text;
      dogBtn.textContent = `Hitta en annan hund`;

      oGameData.dogColor = randomBg();
      dogContainerRef.style.backgroundColor = oGameData.dogColor;

      setTimeout(() => {
        perfectMatch();
      }, 100);
    });
  }

  if (ownerBtn) {
    ownerBtn.addEventListener(`click`, async () => {
      const ownerImageUrl = await fetchUnsplashImage(`person`);
      document.querySelector(`#ownerImg`).src = ownerImageUrl;
      document.querySelector(`#ownerImg`).classList.remove(`d-none`);

      oGameData.selectedOwnerIndex = Math.floor(Math.random() * quotes.length);

      oGameData.currentOwner = {
        name: personNames[Math.floor(Math.random() * personNames.length)],
        text: quotes[oGameData.selectedOwnerIndex],
        Image: ownerImageUrl,
      };
      document.querySelector(`#ownerTitle`).classList.remove(`d-none`);
      document.querySelector(`#ownerTitle`).textContent =
        oGameData.currentOwner.name;
      document.querySelector(`#ownerText`).classList.remove(`d-none`);
      document.querySelector(`#ownerText`).textContent =
        oGameData.currentOwner.text;
      ownerBtn.textContent = `Hitta en annan person`;

      oGameData.ownerColor = randomBg();
      ownerContainerRef.style.backgroundColor = oGameData.ownerColor;

      setTimeout(() => {
        perfectMatch();
      }, 100);
    });
  }

  function perfectMatch() {
    isMatch = true;
    console.log(
      "Dog Color:",
      oGameData.dogColor,
      "Owner Color:",
      oGameData.ownerColor
    );
    console.log(
      "Dog Index:",
      oGameData.selectedDogIndex,
      "Owner Index:",
      oGameData.selectedOwnerIndex
    );
    if (
      oGameData.dogColor === oGameData.ownerColor ||
      oGameData.selectedDogIndex === oGameData.selectedOwnerIndex
    ) {
      document.querySelector(`#perfectMatch`).classList.add(`show`);

      ownerBtn.classList.add(`d-none`);
      dogBtn.classList.add(`d-none`);
      console.log(`Perfect match!`);
      setTimeout(() => {
        document.querySelector(`#perfectMatch`).classList.add(`d-none`);
        mainBtn.classList.remove(`d-none`);
        mainBtn.textContent = `Starta en ny matchning?`;
      }, 5000);

      saveMatch();
    }
  }

  function saveMatch() {
    let match = {
      owner: oGameData.currentOwner,
      dog: oGameData.currentDog,
    };

    let prevMatches = JSON.parse(localStorage.getItem("matches")) || [];
    prevMatches.push(match);
    localStorage.setItem(`matches`, JSON.stringify(prevMatches));
  }
});

// Andra eventlyssnaren för matchhistorik
document.addEventListener(`DOMContentLoaded`, () => {
  let matchContainerRef = document.querySelector(`#matchContainer`);

  if (matchContainerRef) {
    let prevMatches = JSON.parse(localStorage.getItem(`matches`)) || [];

    if (prevMatches.length === 0) {
      let noMatch = `<p>Inga tidigare matchningar.</p>`;
      matchContainerRef.innerHTML = noMatch;
    } else {
      prevMatches.forEach((match) => {
        let matchSection = document.createElement(`section`);
        matchSection.setAttribute(`class`, `section__match`);
        let foundMatch = `
              <img class="section__img section__img-margin-top " src="${match.owner.Image}" alt="Ägare">
              <img class="section__img section__img-margin-top " src="${match.dog.Image}" alt="Hund">
              <h3 class="section__title">${match.owner.name} &#x2764;&#xFE0F; ${match.dog.name}</h3>
              <p class="section__text">${match.owner.text}</p>
              <p class="section__text">&</p>
              <p class="section__text section__text--bottom"> ${match.dog.text}</p>`;

        matchSection.innerHTML = foundMatch;
        matchContainerRef.appendChild(matchSection);
      });
    }
  }
});
