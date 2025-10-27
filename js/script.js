function toggleDetails(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('open');

  // Toggle button text if button is inline with onclick
  const btn = document.querySelector(`[onclick="toggleDetails('${id}')"]`);
  if (btn) {
    btn.textContent = el.classList.contains('open') ? 'Hide Details' : 'Show Details';
  }
}

function setFooterDate() {
  const el = document.getElementById('copyright');
  if (!el) return;
  const now = new Date();
  const dateString = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  el.textContent = `All rights reserved by Kushal @ ${dateString}`;
}

document.addEventListener('DOMContentLoaded', function () {
  setFooterDate();

  // Ensure project details are hidden on load (in case markup shows them)
  document.querySelectorAll('.project-details').forEach(d => d.classList.remove('open'));
});