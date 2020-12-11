const image = [
    { name: 'yoda', image: 'images/babybaby.png' }
  ];
  
  const keyspanss = document.querySelectorAll('span');
  
  keyspanss.forEach((keyspans) => {
    keyspans.addEventListener('dblclick', () => {
      const yes = document.querySelector('.blackkey')
      yes.classList.add('.blue');
      console.log('dblclick', keyspans);
    });
  });