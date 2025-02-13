// // https://api.unsplash.com/photos/random?query=dogs&client_id=l_l8WvWr1fQvt_EljVnWpSJM-Uu7SFzld2lplxFSP6E hundar

// // https://api.unsplash.com/photos/random?query=person&client_id=l_l8WvWr1fQvt_EljVnWpSJM-Uu7SFzld2lplxFSP6E människor

// document.addEventListener("DOMContentLoaded", () => {
//   const mainBtn = document.querySelector("#mainBtn");
//   const dogBtn = document.querySelector("#dogBtn");
//   const ownerBtn = document.querySelector("#ownerBtn");
//   let isMatch = false;

//   function randomBg() {
//     let colors = [`#F8BBD0`, `#B3E5FC`, `#C8E6C9`, `#FFECB3`, `#D1C4E9`];
//     return colors[Math.floor(Math.random() * colors.length)];
//   }

//   const quotes = [
//     "En ensam musiker söker en trogen vän.",
//     "En hemmakär person vill ha en hund att mysa med.",
//     "En sportig äventyrare letar efter en följeslagare.",
//     "En konstnär söker en hund att inspireras av.",
//     "En programmerare behöver en kodkompis.",
//   ];

//   const dogPersonalities = [
//     "Hund med musikalisk talang, kan spela harpa",
//     "Kär liten vän som gärna kryper ner i soffan och söker sällskap",
//     "Orädd hund som älskar bungyjump",
//     "Ståtlig hund som kan ligga still i timmar",
//     "Denna vovve söker efter vad du än vill mot godis-byte",
//   ];

//   let selectedOwnerIndex = null;
//   let selectedDogIndex = null;
//   let ownerColor = ``;
//   let dogColor = ``;
//   let currentOwner = {};
//   let currentDog = {};

//   const ownerContainerRef = document.querySelector(`#ownerContainer`);
//   const dogContainerRef = document.querySelector(`#dogContainer`);

//   const personNames = [
//     "Alex",
//     "Kim",
//     "Max",
//     "Billie",
//     "Charlie",
//     "Robin",
//     "Elliot",
//     "Lo",
//     "Sam",
//     "Freddie",
//   ];

//   const dogNames = [
//     "Bosse",
//     "Luna",
//     "Milou",
//     "Ludde",
//     "Rocky",
//     "Bella",
//     "Jack",
//     "Molly",
//     "Loppan",
//     "Jesper",
//   ];

//   async function fetchUnsplashImage(query) {
//     const response = await fetch(
//       `https://api.unsplash.com/photos/random?query=${query}&client_id=l_l8WvWr1fQvt_EljVnWpSJM-Uu7SFzld2lplxFSP6E`
//     );
//     const data = await response.json();
//     return data.urls.regular;
//   }
//   if (mainBtn) {
//     mainBtn.addEventListener(`click`, (event) => {
//         if(isMatch === false){
//       ownerContainerRef.classList.remove(`d-none`);
//       dogContainerRef.classList.remove(`d-none`);
//       mainBtn.classList.add(`d-none`);
//     } else {
//         ownerBtn.classList.remove(`d-none`);
//         dogBtn.classList.remove(`d-none`);

//         document.querySelector(`#ownerImg`).classList.add(`d-none`);
//         document.querySelector(`#dogImg`).classList.add(`d-none`);

//         document.querySelector(`#ownerTitle`).classList.add(`d-none`);
//         document.querySelector(`#dogName`).classList.add(`d-none`);

//         document.querySelector(`#ownerText`).classList.add(`d-none`);
//         document.querySelector(`#dogText`).classList.add(`d-none`);
//     };
//   });

//   //Lyssnar efter klick på sök hund
//   if (dogBtn)
//     dogBtn.addEventListener(`click`, async () => {
//       const dogImageUrl = await fetchUnsplashImage(`dogs`);
//       document.querySelector(`#dogImg`).src = dogImageUrl;
//       document.querySelector(`#dogImg`).classList.remove(`d-none`);
//       document.querySelector(`#dogName`).classList.remove(`d-none`);
//       document.querySelector(`#dogText`).classList.remove(`d-none`);

//       selectedDogIndex = Math.floor(Math.random() * dogPersonalities.length);

//       currentDog = {
//         name: dogNames[Math.floor(Math.random() * dogNames.length)],
//         text: dogPersonalities[selectedDogIndex],
//         Image: dogImageUrl,
//       };
//       document.querySelector(`#dogName`).textContent = currentDog.name;
//       document.querySelector(`#dogText`).textContent = currentDog.text;
//       dogBtn.textContent = `Hitta en annan hund`;

//       dogColor = randomBg();
//       dogContainerRef.style.backgroundColor = dogColor;

//       setTimeout(() => {
//         perfectMatch();
//       }, 100);
//     });

//   if (ownerBtn)
//     //Lyssna efter klick för ägaren
//     ownerBtn.addEventListener(`click`, async () => {
//       const ownerImageUrl = await fetchUnsplashImage(`person`);
//       document.querySelector(`#ownerImg`).src = ownerImageUrl;
//       document.querySelector(`#ownerImg`).classList.remove(`d-none`);

//       selectedOwnerIndex = Math.floor(Math.random() * quotes.length);

//       currentOwner = {
//         name: personNames[Math.floor(Math.random() * personNames.length)],
//         text: quotes[selectedOwnerIndex],
//         Image: ownerImageUrl,
//       };
//       document.querySelector(`#ownerTitle`).classList.remove(`d-none`);
//       document.querySelector(`#ownerTitle`).textContent = currentOwner.name;
//       document.querySelector(`#ownerText`).classList.remove(`d-none`);
//       document.querySelector(`#ownerText`).textContent = currentOwner.text;
//       ownerBtn.textContent = `Hitta en annan person`;

//       ownerColor = randomBg();
//       ownerContainerRef.style.backgroundColor = ownerColor;

//       setTimeout(() => {
//         perfectMatch();
//       }, 100);
//     });

//   function perfectMatch() {
//     isMatch = true;
//     console.log("Dog Color:", dogColor, "Owner Color:", ownerColor);
//     console.log(
//       "Dog Index:",
//       selectedDogIndex,
//       "Owner Index:",
//       selectedOwnerIndex
//     );
//     if (dogColor === ownerColor || selectedDogIndex === selectedOwnerIndex) {
//       document.querySelector(`#perfectMatch`).classList.remove(`d-none`);
//       console.log(`Perfect match!`);
//       setTimeout(() => {
//         document.querySelector(`#perfectMatch`).classList.add(`d-none`);
//         mainBtn.classList.remove(`d-none`);
//         mainBtn.textContent = `Starta en ny matchning?`;
//         ownerBtn.classList.add(`d-none`);
//         dogBtn.classList.add(`d-none`);
//       }, 6000);

//       saveMatch();
//     }
//   }

//   function saveMatch() {
//     let match = {
//       owner: currentOwner,
//       dog: currentDog,
//     };

//     let prevMatches = JSON.parse(localStorage.getItem("matches")) || [];
//     prevMatches.push(match);
//     localStorage.setItem(`matches`, JSON.stringify(prevMatches));
//   }
// };})

// document.addEventListener(`DOMContentLoaded`, () => {
//   let matchContainerRef = document.querySelector(`#matchContainer`);

//   if (matchContainerRef) {
//     let prevMatches = JSON.parse(localStorage.getItem(`matches`)) || [];

//     if (prevMatches.length === 0) {
//       let noMatch = `<p>Inga tidigare matchningar.</p>`;
//       matchContainerRef.innerHTML = noMatch;
//     } else {
//       prevMatches.forEach((match) => {
//         let matchSection = document.createElement(`section`);
//         matchSection.setAttribute(`class`, `section__match`);
//         let foundMatch = `
//             <img class="section__img" src="${match.owner.Image}" alt="Ägare">
//             <img class="section__img" src="${match.dog.Image}" alt="Hund">
//             <h3 class="section__title">${match.owner.name} & ${match.dog.name}</h3>
//             <p class="section__text">${match.owner.text} - ${match.dog.text}</p>`;

//         matchSection.innerHTML = foundMatch;
//         matchContainerRef.appendChild(matchSection);
//       });
// }};
