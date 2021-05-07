function modals() {
    let modalTimerId;
    function bindModals(triggerClass, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerClass),
              selector = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();
    
    trigger.forEach((item => {
        item.addEventListener('click', (e) => {

            if (e.target) {
                e.preventDefault();
            }
            
            windows.forEach(window => {
                window.style.display = 'none';
            });

            openModal(modalSelector);
            document.body.style.marginRight = `${scroll}px`;
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
        if (e.target === selector && closeClickOverlay) {
            windows.forEach(window => {
                window.style.display = 'none';
            });
            closeModal();
            document.body.style.marginRight = '0px';
        }
    });

    close.addEventListener('click', () => {
        windows.forEach(window => {
            window.style.display = 'none';
        });
        closeModal();
        document.body.style.marginRight = '0px';
    });

    }
    
    function showModalBytime(selector, time) {
        modalTimerId = setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.overflow = 'hidden';
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModals('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close');
    // showModalBytime('.popup', 5000);
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modals;