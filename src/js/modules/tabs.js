function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {
    const header = document.querySelector(headerSelector),
          tabs = document.querySelectorAll(tabSelector),
          tabContent = document.querySelectorAll(contentSelector);

    function hideTabs() {
        tabContent.forEach((item) => {
            item.style.display = 'none';
        });
        
        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabs(i = 0) {
        tabContent[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabs();
    showTabs();

    header.addEventListener('click', (e) => {
        if ((e.target && e.target.classList.contains(tabSelector.slice(1))) ||
        e.target.parentNode.classList.contains(tabSelector.slice(1))) {
            tabs.forEach((tab, index) => {
                if (e.target == tab || e.target.parentNode == tab) {
                    hideTabs();
                    showTabs(index);
                }
            });
        }
    });
} 

export default tabs;
