function getRandomColor() {
  let color= '#';
  const colorChain= '0123456789ABCDEF';

  while (color === '#' || color === '#FFFFFF')  {
    color= '#';
    for (let index= 0; index < 6; index++)  {
      color+= colorChain[Math.round(Math.random() * 15)];
    }
  }

  return color;
}
