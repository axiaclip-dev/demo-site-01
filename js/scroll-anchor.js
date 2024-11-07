// アンカーリンク遷移の調整
document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  window.scrollTo({
    top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
    behavior: 'smooth'
  });
});