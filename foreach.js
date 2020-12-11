const pianotext = [
  'This piano is useless',
  'HAHAHAHAH',
  'WHAT',
];

const keyspans = document.querySelectorAll('span');

keyspans.forEach((keyspan) => {
  keyspan.addEventListener('click', () => {
    const ptag = document.querySelector('p');
    ptag.innerHTML = pianotext;
    console.log('click', keyspan);
  });
});

/* const keyspanss = document.querySelectorAll('span');
  
keyspanss.forEach((keyspans) => {
  keyspans.addEventListener('dblclick', (e) => {
    console.log('dblclick', keyspans);
  });
}); */