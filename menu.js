document.addEventListener('DOMContentLoaded', () => {

    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {

        button.addEventListener('click', () => {

            const accordionItem = button.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');

            const isCurrentlyOpen = accordionContent.classList.contains('active');

            // Fecha todos os acordeões
            document.querySelectorAll('.accordion-button').forEach(btn => {
                btn.classList.remove('active');
            });

            document.querySelectorAll('.accordion-content').forEach(content => {
                content.classList.remove('active');
                content.style.maxHeight = null;
            });

            // Abre o selecionado
            if (!isCurrentlyOpen) {

                button.classList.add('active');

                accordionContent.classList.add('active');

                accordionContent.style.maxHeight =
                    accordionContent.scrollHeight + "px";
            }

        });

    });

});