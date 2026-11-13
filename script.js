const button = document.getElementById('fun-button');
const result = document.getElementById('fun-result');
let hideTimer;
button?.addEventListener('click', () => {
  clearTimeout(hideTimer);
  result.hidden = false;
  hideTimer = setTimeout(() => { result.hidden = true; }, 5000);
});
document.querySelectorAll('[data-resume]').forEach(link => {
  link.addEventListener('click', event => {
    // Replace resume.pdf with your actual resume before publishing.
    // A missing file should not silently lead visitors to a broken page.
    if (!document.body.dataset.resumeReady) {
      event.preventDefault();
      alert('Resume coming soon! In the meantime, feel free to email me.');
    }
  });
});
