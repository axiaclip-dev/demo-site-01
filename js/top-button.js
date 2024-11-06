// トップに戻るボタンの表示・非表示
window.addEventListener('scroll', function() {
  const topButton = document.querySelector('.top__button');
  if (window.scrollY > 300) { // スクロールが300pxを超えたら表示
    topButton.classList.add('show');
  } else {
    topButton.classList.remove('show');
  }
});

// トップに戻るボタンクリック時のスムーズスクロール
document.querySelector('.top__button').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
