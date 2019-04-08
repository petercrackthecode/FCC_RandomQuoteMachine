export const getRandomColor= () => {
  let letters= '0123456789ABCDEF';
  let color= '#';

  while (color === '#' || color === '#FFFFFF') {
    for (let index= 0; index < 6; index++)  {
      color+= letters[Math.floor(Math.random() * 16)];
    }
  }

  return color;
};
