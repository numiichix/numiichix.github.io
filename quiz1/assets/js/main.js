// Navbar & footer dibuat lewat JS supaya tidak ditulis ulang di tiap halaman
const root = document.body.dataset.root || './';      // './' untuk home, '../' untuk subfolder
const pages = [['Home', ''], ['Profile', 'profile/'], ['Hometown', 'hometown/'], ['Food', 'food/'], ['Tourist', 'tourist/']];
const current = document.body.dataset.page;

const links = pages.map(([name, path]) => {
  const key = path.replace('/', '') || 'home';
  return `<li><a href="${root}${path}" class="${key === current ? 'active' : ''}">${name}</a></li>`;
}).join('');

document.getElementById('site-header').innerHTML = `
  <nav>
    <a class="logo" href="${root}">Mumtaz</a>
    <button id="menu-btn" aria-label="Buka menu">☰</button>
    <ul id="menu">${links}</ul>
  </nav>`;
document.getElementById('site-footer').innerHTML =
  `© ${new Date().getFullYear()} Mumtaz Hanumi Fayazida · Dibuat dengan HTML, CSS, dan JavaScript`;

// menu di layar kecil
document.getElementById('menu-btn').addEventListener('click', () =>
  document.getElementById('menu').classList.toggle('open'));

// efek muncul saat di-scroll
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));