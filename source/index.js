import '../style.css';

const projectBoards = document.querySelectorAll('.project-img');
projectBoards.forEach((project) => {
  project.addEventListener('click', (evt) => {
    const a = document.createElement('a');
    const repo = evt.target.getAttribute('repo');
    a.href = repo;
    a.target = '_blank';
    a.click();
  });
});

const contactBtn = document.querySelector('#contact_btn');
contactBtn.addEventListener('click', () => {
  const messages = [];
  const contactFields = document.querySelectorAll('.contact_field');
  contactFields.forEach(field => {
    const value = field.value.trim().split(' ').join('%20');
    messages.push(value);
  });
  const [name, , text] = messages;

  window.location = `mailto:smithnkereuwem2@gmail.com?subject=From%20${name}&body=${text}`;
});

const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-times');
const mobileNav = document.querySelector('.mobile_nav');
const menuItems = document.querySelectorAll('.menu-items');
menuBtn.addEventListener('click', (evt) => {
  evt.target.style.display = 'none';
  closeBtn.classList.add('show-times');
  mobileNav.classList.add('show_mobile_nav');
});

closeBtn.addEventListener('click', (evt) => {
  evt.target.classList.remove('show-times');
  mobileNav.classList.remove('show_mobile_nav');
  menuBtn.style.display = 'block';
});

menuItems.forEach(item => item.addEventListener('click', () => {
  mobileNav.classList.remove('show_mobile_nav');
  menuBtn.style.display = 'block';
}));