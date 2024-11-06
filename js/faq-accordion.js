// Q&Aアコーディオン機能
document.querySelectorAll('.faq__item--question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
    question.querySelector('i').classList.toggle('fa-plus');
    question.querySelector('i').classList.toggle('fa-minus');
  });
});
