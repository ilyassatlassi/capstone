const active = document.querySelector(".active");
const deleted = document.querySelector(".delete");
const nav = document.querySelector(".second-nav")

function openMobileMenu() {
    active.style.display = 'flex';
    deleted.style.display = 'block';
    nav.style.display = 'flex';
  }
  
  function closeMobileMenu() {
    active.style.display = 'none';
    deleted.style.display = 'none';
    nav.style.display = 'none';
  }
  
  openMobileMenu();
  closeMobileMenu();