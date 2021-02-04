const open = document.getElementById('hamburger');
const close = document.getElementById('close');
const menu = document.getElementById('menu');
const mockups = document.querySelector('.intro-pic');
// const mockups = window.getComputedStyle(``x)
console.log(close, open, menu);

open.addEventListener('click', () => {
  menu.style.display = 'flex';
  open.style.display = 'none';
  close.style.display = 'block';
  mockups.classList.add('hide');
  return true;
});

close.addEventListener('click', () => {
  menu.style.display = 'none';
  open.style.display = 'block';
  close.style.display = 'none';
  mockups.classList.remove('hide');
  return true;
});
