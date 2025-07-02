document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {

            const accordionItem = button.closest('.accordion-item');

            const accordionContent = accordionItem.querySelector('.accordion-content');

            button.classList.toggle('active');
            accordionContent.classList.toggle('active');

            if (accordionContent.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
});