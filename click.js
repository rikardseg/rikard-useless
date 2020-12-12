const pianotext = [
  'This piano is useless',
  'Yes it really is not useful',
  'Truly useless',
  'Without function',
  'Not playable',
  'Cannot possibly play this',
  'No music for you'
];

const keyspans = document.querySelectorAll('span');

keyspans.forEach((keyspan) => {
  keyspan.addEventListener('click', () => {
    const ptag = document.querySelector('p');
    ptag.textContent = pianotext[Math.floor(Math.random() * pianotext.length)];
    // if ( keyspan.dataset.key == '65'){
    //   ptag.innerHTML = pianotext[0];
    //   }
    // else if ( keyspan.dataset.key = '66'){
    //   ptag.innerHTML = pianotext[1];
    // }
    console.log('click', keyspan);
  });
});

/* const keyspanss = document.querySelectorAll('span');
  
keyspanss.forEach((keyspans) => {
  keyspans.addEventListener('dblclick', (e) => {
    console.log('dblclick', keyspans);
  });
}); */