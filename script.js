let skills = ['REACT', 'JAVASCRIPT', 'HTML', 'CSS', 'NODE', 'EXPRESS', 'PSQL', 'GRAPHQL', 'GIT'];
const section = ['top', 'lesstop', 'mid', 'lessbot', 'bot'];

const size = ['display-1', 'display-2', 'display-3', 'display-4', 'display-5', 'display-6'];

const direction = ['left', 'right'];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

window.onload = () => {
  for (let i = 0; i < 5; i++) {
    let randomWordIndex = rand(0, skills.length - 1);
    let randomSizeIndex = rand(0, 5);
    let scrollDelay = rand(0, 5);
    console.log(randomWordIndex);

    const word = document.createElement('marquee');

    word.innerHTML = skills[randomWordIndex];
    word.classList.add(section[i], size[randomSizeIndex], 'mono');
    word.setAttribute('scrolldelay', scrollDelay);
    word.setAttribute('direction', direction[rand(0, 1)]);

    document.querySelector('.boss').appendChild(word);

    skills.splice(randomWordIndex, 1);
    console.log(skills);
  }
};
