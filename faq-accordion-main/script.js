const accordionItems = document.querySelectorAll('.accordion-item');
const accordionQuestions = document.querySelectorAll('.accordion-question');

accordionItems[0].classList.add('active');  // Show the first answer by default

accordionQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const currentItem = question.parentElement;
        const currentAnswer = currentItem.querySelector('.accordion-answer');

        // Hide previously shown answer (if any)
        accordionItems.forEach(item => item.classList.remove('active'));

        // Toggle current answer visibility
        currentItem.classList.toggle('active');
    });
});