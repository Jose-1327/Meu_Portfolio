document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Encontra o item de sanfona pai
            const accordionItem = button.closest('.accordion-item');
            // Encontra o conteúdo do item de sanfona
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // Alterna a classe 'active' no botão e no conteúdo
            button.classList.toggle('active');
            accordionContent.classList.toggle('active');

            // Ajusta a altura máxima para a transição
            if (accordionContent.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
});