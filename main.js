const q = selector => document.querySelector(selector);

const modalOpen = q('.open-modal');
const closeModal = q('.close-modal');
const overlay = q('.overlay');
const modal = q('.modal');

modalOpen.addEventListener('click', function() {
  overlay.classList.add('active');
  modal.classList.add('active');
})

closeModal.addEventListener('click', function() {
  overlay.classList.remove('active');
  modal.classList.remove('active');
})

// close modal on click outside modal
window.onclick = function(event) {
  if (event.target == overlay) {
      overlay.classList.remove('active');
  }
}