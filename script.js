let skills = ['REACT', 'JAVASCRIPT', 'HTML', 'CSS', 'NODE', 'EXPRESS', 'PSQL', 'GRAPHQL', 'GIT'];
const section = ['top', 'lesstop', 'mid', 'lessbot', 'bot'];
const size = ['size-one', 'size-two'];
const direction = ['marquee-left', 'marquee-right'];
const color = ['#7E57C2', '#FF5874', '#89DDFF', '#C3E88D', '#FFD800'];

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

window.onload = () => {
  for (let i = 0; i < 5; i++) {
    let randomWordIndex = rand(0, skills.length - 1);
    let randomSizeIndex = rand(0, size.length - 1);
    let randomColorIndex = rand(0, color.length - 1);
    let randomWord = skills[randomWordIndex];

    const holder = document.createElement('div');
    const word1 = document.createElement('span');
    const word2 = document.createElement('span');

    word1.innerHTML = randomWord;
    word2.innerHTML = randomWord;

    holder.classList.add(
      section[i],
      size[randomSizeIndex],
      direction[rand(0, 1)],
      'mono',
      'justify-content-between',
      'd-flex'
    );
    holder.style.opacity = 0;
    holder.style.color = color[randomColorIndex];
    holder.style.animationDelay = `${rand(0, 5)}s`;
    holder.style.animationDuration = `${window.innerWidth / 50}s, 5s`;
    holder.appendChild(word1);
    holder.appendChild(word2);
    document.querySelector('#marquee').appendChild(holder);

    skills.splice(randomWordIndex, 1);
    // size.splice(randomSizeIndex, 1);
    color.splice(randomColorIndex, 1);
  }

  // setTimeout(() => {
  //   for (let i = 0; i < 5; i++) {
  //     target = document.getElementsByClassName(i)[0];
  //     target.classList.remove('d-none');
  //     target.classList.add('d-flex', 'fadeIn');
  //   }
  // }, 5000);
};
