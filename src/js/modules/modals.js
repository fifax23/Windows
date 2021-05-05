function modals() {
    let modalTimerId;
    function bindModals(triggerClass, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerClass),
              selector = document.querySelector(modalSelector);
              close = document.querySelector(closeSelector);
    
    trigger.forEach((item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            openModal(modalSelector);
            clearTimeout(modalTimerId);
       });
    }));

    function openModal() {
        selector.style.display = 'block';
        document.body.style.overflow = 'hidden';
     }

    function closeModal() {
        selector.style.display = 'none';
        document.body.style.overflow = '';
    }

    selector.addEventListener('click', (e) => {
        if (e.target === selector) {
            closeModal();
        }
    });

    close.addEventListener('click', () => {
        closeModal();
    });

    }
    
    function showModalBytime(selector, time) {
        modalTimerId = setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.overflow = 'hidden';
        }, time);
    }

    bindModals('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');
    showModalBytime('.popup', 5000);
}

export default modals;