// const image = [
//     { name: 'yoda', image: 'images/babybaby.png' }
//   ];
  
  const keyspanss = document.querySelectorAll('span');
  
  keyspanss.forEach((keyspans) => {
    keyspans.addEventListener('dblclick', () => {
      console.log('dblclick', keyspans);
      keyspans.style.backgroundColor = "blue";
    });
  });