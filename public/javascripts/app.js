const showDropdown = function () {
  const dropdown = document.querySelector('.nav-dropdown');
  const dropdownUl = document.querySelector('.nav-dropdown ul');
  if (!dropdown.classList.contains('nav-visible')) {
    dropdown.style.display = 'block';
    dropdownUl.classList.remove('slide-out');
    dropdown.classList.remove('nav-hidden');
    dropdown.classList.add('nav-visible');
    dropdownUl.classList.add('slide-in');
  }
};

const hideDropdown = function () {
  const dropdown = document.querySelector('.nav-dropdown');
  const dropdownUl = document.querySelector('.nav-dropdown ul');
  if (dropdown.classList.contains('nav-visible')) {
    dropdownUl.classList.add('slide-out');
    dropdown.classList.add('nav-hidden');

    setTimeout(() => {
      console.log('executing');
      dropdown.classList.remove('nav-visible');
      dropdownUl.classList.remove('slide-in');
      dropdown.style.display = 'none';
    }, 700);
  }
};

window.onload = function () {
  const nav = document.querySelector('.nav');
  let scrolled = false;
  if (window.pageYOffset > 10) {
    nav.classList.add('hidden');
    scrolled = true;
  }
  document.addEventListener('scroll', function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 10 && !scrolled) {
      nav.classList.add('hidden');
      scrolled = true;
    } else if (window.pageYOffset < 10 && scrolled) {
      nav.classList.remove('hidden');
      scrolled = false;
    }
  });
};
